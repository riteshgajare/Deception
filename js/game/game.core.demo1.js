/*
 * Game Core - Demo 1 (Simple demo)
 *
 * A simple example with basic controls (see _game.core.js for an uncommented version of this file)
 */

window.game = window.game || {};

window.game.core = function () {
  const killRate = 10;
  var difficulty = 1;
  var lifes = 3;
  var score = 0;
  var audio = document.createElement('audio');
  var source = document.createElement('source');
  source.src = 'sounds/background1.mp3';
  audio.appendChild(source);
  audio.loop = true;
  audio.play();
  var _game = {
    // Attributes
    hud: {
      create: function() {
        var opts = {
          lines: 12, // The number of lines to draw
          angle: 0.15, // The length of each line
          lineWidth: 0.44, // The line thickness
          pointer: {
            length: 0.9, // The radius of the inner circle
            strokeWidth: 0.044, // The rotation offset
            color: '#000000' // Fill color
          },
          limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
          colorStart: '#A6A0B8',   // Colors
          colorStop: '#A6A0B8',    // just experiment with them
          strokeColor: '#01ffffff',   // to see which ones work best for you
          generateGradient: true
        };
        var target = document.getElementById('foo'); // your canvas element
        _game.hud.gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
        _game.hud.gauge.maxValue = _game.player.speedMax + 50; // set max gauge value
        _game.hud.gauge.animationSpeed = 13; // set animation speed (32 is default value)
        _game.hud.gauge.set(0); // set actual value
      },
      updateGauge: function() {
        // Update the acceleration gauge here
        window.health.set(_game.player.health/100.0);
        if (_game.player[_game.player.playerAccelerationValues.position.acceleration] > 0 )
          _game.hud.gauge.set(0);
        else
          _game.hud.gauge.set(-_game.player[_game.player.playerAccelerationValues.position.acceleration]);
      }
    },
    player: {
      // Attributes

      // Player entity including mesh and rigid body
      model: null,
      mesh: null,
      shape: null,
      rigidBody: null,
      // Player mass which affects other rigid bodies in the world
      mass: 100000,
      health: 100,
      gasoline: 100,
      strength: 1,
      // HingeConstraint to limit player's air-twisting
      orientationConstraint: null,

      // Jump flags
      isGrounded: false,
      jumpHeight: 40,

      // Configuration for player speed (acceleration and maximum speed)
      speed: 1.5,
      speedMax: 50,
      // Configuration for player rotation (rotation acceleration and maximum rotation speed)
      rotationSpeed: 0.007,
      rotationSpeedMax: 0.02,
      // Rotation values
      rotationRadians: new THREE.Vector3(0, 0, 0),
      rotationAngleX: null,
      rotationAngleY: null,
      // Damping which means deceleration	(values between 0.8 and 0.98 are recommended)
      damping: 0.98,
      // Damping or easing for player rotation
      rotationDamping: 0.7,
      // Acceleration values
      acceleration: 0,
      rotationAcceleration: 0,
      // Enum for an easier method access to acceleration/rotation
      playerAccelerationValues: {
        position: {
          acceleration: "acceleration",
          speed: "speed",
          speedMax: "speedMax"
        },
        rotation: {
          acceleration: "rotationAcceleration",
          speed: "rotationSpeed",
          speedMax: "rotationSpeedMax"
        }
      },

      // Third-person camera configuration
      playerCoords: null,
      cameraCoords: null,
      // Camera offsets behind the player (horizontally and vertically)
      cameraOffsetH: 240,
      cameraOffsetV: 80,

      // Keyboard configuration for game.events.js (controlKeys must be associated to game.events.keyboard.keyCodes)
      controlKeys: {
        forward: "w",
        backward: "s",
        left: "a",
        right: "d",
        jump: "space"
      },

      // Methods
      create: function() {
        // Create a global physics material for the player which will be used as ContactMaterial for all other objects in the level
        _cannon.playerPhysicsMaterial = new CANNON.Material("playerMaterial");

        // Create a player character based on an imported 3D model that was already loaded as JSON into game.models.player
        _game.player.model = _three.createModel(window.game.models.player, 12, [
          new THREE.MeshLambertMaterial({ color: window.game.static.colors.orange, shading: THREE.FlatShading }),
          new THREE.MeshLambertMaterial({ color: window.game.static.colors.darkslategray, shading: THREE.FlatShading })
        ]);

        // Create the shape, mesh and rigid body for the player character and assign the physics material to it
        _game.player.shape = new CANNON.Box(_game.player.model.halfExtents);
        _game.player.rigidBody = new CANNON.RigidBody(_game.player.mass, _game.player.shape, _cannon.createPhysicsMaterial(_cannon.playerPhysicsMaterial));
        _game.player.rigidBody.position.set(0, 0, 50);
        _game.player.mesh = _cannon.addVisual(_game.player.rigidBody, null, _game.player.model.mesh);

        // Create a HingeConstraint to limit player's air-twisting - this needs improvement
        _game.player.orientationConstraint = new CANNON.HingeConstraint(_game.player.rigidBody,
                                                                        new CANNON.Vec3(0, 0, 0),
                                                                        new CANNON.Vec3(0, 0, 1),
                                                                        _game.player.rigidBody,
                                                                        new CANNON.Vec3(0, 0, 1),
                                                                        new CANNON.Vec3(0, 0, 1));
        _cannon.world.addConstraint(_game.player.orientationConstraint);

        _game.player.rigidBody.postStep = function() {
          // Reset player's angularVelocity to limit possible exceeding rotation and
          _game.player.rigidBody.angularVelocity.z = 0;

          // update player's orientation afterwards
          _game.player.updateOrientation();
        };

        // Collision event listener for the jump mechanism
        _game.player.rigidBody.addEventListener("collide", function(event) {
          // Checks if player's is on ground
          if (!_game.player.isGrounded) {
            // Ray intersection test to check if player is colliding with an object beneath him
            _game.player.isGrounded = (new CANNON.Ray(_game.player.mesh.position, new CANNON.Vec3(0, 0, -1)).intersectBody(event.contact.bi).length > 0);
          }
        });
      },
      update: function() {
        // Basic game logic to update player and camera
        _game.player.processUserInput();
        _game.player.accelerate();
        _game.player.rotate();
        _game.player.updateCamera();
        _game.hud.updateGauge();
        // Level-specific logic
        _game.player.checkCollision();
        _game.player.checkGameOver();

      },
      updateCamera: function() {
        // Calculate camera coordinates by using Euler radians from player's last rotation
        _game.player.cameraCoords = window.game.helpers.polarToCartesian(_game.player.cameraOffsetH, _game.player.rotationRadians.z)

        _three.camera.position.x = _game.player.mesh.position.x + _game.player.cameraCoords.x;
        _three.camera.position.y = _game.player.mesh.position.y + _game.player.cameraCoords.y;
        _three.camera.position.z = _game.player.mesh.position.z + _game.player.cameraOffsetV;        // Apply camera coordinates to camera position
        _three.camera.lookAt( _game.player.mesh.position );
      },
      updateAcceleration: function(values, direction) {
        // Distinguish between acceleration/rotation and forward/right (1) and backward/left (-1)
        _game.player.gasoline -= _game.player[values.acceleration] / (100 * 60);

        // direction (2) is for brakes.

        if (direction == 2) {
          _game.player[values.acceleration] = _game.player[values.acceleration] / 1.1;
        } else if (direction === 1) {
          // Forward/right
          if (_game.player[values.acceleration] > -_game.player[values.speedMax]) {
            if (_game.player[values.acceleration] >= _game.player[values.speedMax] / 2) {
              _game.player[values.acceleration] = -(_game.player[values.speedMax] / 4);
            } else {
              _game.player[values.acceleration] -= _game.player[values.speed];
            }
          } else {
            _game.player[values.acceleration] = -_game.player[values.speedMax];
          }
        } else {
          // Backward/left
          if (_game.player[values.acceleration] < _game.player[values.speedMax]) {
            if (_game.player[values.acceleration] <= -(_game.player[values.speedMax] / 2)) {
              _game.player[values.acceleration] = _game.player[values.speedMax] / 4;
            } else {
              _game.player[values.acceleration] += _game.player[values.speed];
            }
          } else {
            _game.player[values.acceleration] = _game.player[values.speedMax];
          }
        }
      },
      processUserInput: function() {
        // Jump
        if (_events.keyboard.pressed[_game.player.controlKeys.jump]) {
          _game.player.jump();
        }

        // Movement: forward, backward, left, right
        if (_events.keyboard.pressed[_game.player.controlKeys.forward]) {
          _game.player.updateAcceleration(_game.player.playerAccelerationValues.position, 1);

          // Reset orientation in air
          if (!_cannon.getCollisions(_game.player.rigidBody.index)) {
            _game.player.rigidBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 1), _game.player.rotationRadians.z);
          }
        }

        if (_events.keyboard.pressed[_game.player.controlKeys.backward]) {
          _game.player.updateAcceleration(_game.player.playerAccelerationValues.position, 2);
        }

        if (_events.keyboard.pressed[_game.player.controlKeys.right]) {
          _game.player.updateAcceleration(_game.player.playerAccelerationValues.rotation, 1);
        }

        if (_events.keyboard.pressed[_game.player.controlKeys.left]) {
          _game.player.updateAcceleration(_game.player.playerAccelerationValues.rotation, -1);
        }
      },
      accelerate: function() {
        // Calculate player coordinates by using current acceleration Euler radians from player's last rotatio
        _game.player.playerCoords =  window.game.helpers.polarToCartesian(_game.player.acceleration, _game.player.rotationRadians.z);

        // Set actual XYZ velocity by using calculated Cartesian coordinates
        _game.player.rigidBody.velocity.set(_game.player.playerCoords.x, _game.player.playerCoords.y, _game.player.rigidBody.velocity.z);

        // Damping
        if (!_events.keyboard.pressed[_game.player.controlKeys.forward] && !_events.keyboard.pressed[_game.player.controlKeys.backward]) {
          _game.player.acceleration *= _game.player.damping;
        }
      },
      rotate: function() {
        // Rotate player around Z axis
        _cannon.rotateOnAxis(_game.player.rigidBody, new CANNON.Vec3(0, 0, 1), _game.player.rotationAcceleration);

        // Damping
        if (!_events.keyboard.pressed[_game.player.controlKeys.left] && !_events.keyboard.pressed[_game.player.controlKeys.right]) {
          _game.player.rotationAcceleration *= _game.player.rotationDamping;
        }
      },
      jump: function() {
        // Perform a jump if player has collisions and the collision contact is beneath him (ground)
        if (_cannon.getCollisions(_game.player.rigidBody.index) && _game.player.isGrounded) {
          _game.player.isGrounded = false;
          _game.player.rigidBody.velocity.z = _game.player.jumpHeight;
        }
      },
      updateOrientation: function() {
        // Convert player's Quaternion to Euler radians and save them to _game.player.rotationRadians
        _game.player.rotationRadians = new THREE.Euler().setFromQuaternion(_game.player.rigidBody.quaternion);

        // Round angles
        _game.player.rotationAngleX = Math.round(window.game.helpers.radToDeg(_game.player.rotationRadians.x));
        _game.player.rotationAngleY = Math.round(window.game.helpers.radToDeg(_game.player.rotationRadians.y));

        // Prevent player from being upside-down on a slope - this needs improvement
        if ((_cannon.getCollisions(_game.player.rigidBody.index) &&
             ((_game.player.rotationAngleX >= 90) ||
              (_game.player.rotationAngleX <= -90) ||
              (_game.player.rotationAngleY >= 90) ||
              (_game.player.rotationAngleY <= -90)))
           )
        {
          // Reset orientation
          _game.player.rigidBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 1), _game.player.rotationRadians.z);
        }
      },
      checkGameOver: function () {
        // Example game over mechanism which resets the game if the player is falling beneath -800

        var crashSound = new Audio('sounds/crash.mp3');
        if (_game.player.mesh.position.z <= -800) {
          crashSound.play();
          _game.destroy();
        }
        if (_game.player.health <= 0) {
          crashSound.play();
          _game.destroy();
        }
        if (lifes == 0) {
          crashSound.play();
          _game.gameOver();

          audio.pause();
        }
      },
      checkCollision: function () {
        if (_cannon.getCollisions(_game.player.rigidBody.index) > 1) {
          //_game.player.health = _game.player.health - killRate / _game.player.strength;
        }

        var collectSound = new Audio('sounds/gem.mp3');
        for(var i = 0; i < _game.level.gems.length; i++) {
          if (_cannon.getCollisions(_game.level.gems[i].index)) {
            collectSound.play();
            _game.player.speedMax += 50;
            _cannon.removeVisual(_game.level.gems[i]);
            _game.level.gems.shift();
            break;
          }
        }
      }
    },
    level: {
      // Methods
      gems: [],
      createGem: function (positionX, positionY, positionZ) {
        var gem = _cannon.createRigidBody({
          shape: new CANNON.Box(new CANNON.Vec3(_texture.gemSize, _texture.gemSize, _texture.gemSize)),
          mass: 0,
          position: new CANNON.Vec3(positionX, positionY, positionZ),
          customMesh: _texture.getGem({ positionX: positionX, positionY: positionY, positionZ: positionZ }),
          physicsMaterial: _cannon.gemMaterial
        });
        _game.level.gems.push(gem);
      },
      create: function() {
        // Create a solid material for all objects in the world
              _cannon.solidMaterial = _cannon.createPhysicsMaterial(new CANNON.Material("solidMaterial"), 0, 0.1);
        _cannon.gemMaterial = _cannon.createPhysicsMaterial(new CANNON.Material("gemMaterial"), 0, 0);

        getMap1(_cannon,_texture,_game.level);
        //getMap2(_cannon,_texture,_game.level);
        _three.scene.add( _game.level.skyboxMesh );
      }
    },
    init: function(options) {
      // Setup necessary game components (_events, _three, _cannon, _ui)
      _game.initComponents(options);
      // Create player and level
      _game.player.create();
      _game.level.create();
      _game.hud.create();
      // Initiate the game loop
      _game.clock.start();
      _game.loop();

    },
    gameOver: function() {
      window.cancelAnimationFrame(_animationFrameLoop);
      _cannon.destroy();
      _three.destroy();
    },
    destroy: function() {
      // Pause animation frame loop
      window.cancelAnimationFrame(_animationFrameLoop);
      // Destroy THREE.js scene and Cannon.js world and recreate them
      _cannon.destroy();
      _game.clock.stop();

      _cannon.setup();
      _three.destroy();
      _three.setup();

      // Recreate player and level objects by using initial values which were copied at the first start
      _game.player = window.game.helpers.cloneObject(_gameDefaults.player);
      _game.level = window.game.helpers.cloneObject(_gameDefaults.level);

      // Create player and level again
      _game.player.create();
      _game.level.create();
      _game.clock.start();

      lifes -= 1;
      // Continue with the game loop
      _game.loop();
    },
    loop: function() {
      // Assign an id to the animation frame loop
      _animationFrameLoop = window.requestAnimationFrame(_game.loop);
      // Update Cannon.js world and player state
      _game.player.update();
      _cannon.updatePhysics();
      // Render visual scene
      _three.render();
    },
    initComponents: function (options) {
      // Reference game components one time
      _events = window.game.events();
      _three = window.game.three();
      _cannon = window.game.cannon();
      _ui = window.game.ui();
      _texture = window.game.texture();
      _game.clock = new THREE.Clock();
      // Setup lights for THREE.js
      _three.setupLights = function () {
        var hemiLight = new THREE.HemisphereLight(window.game.static.colors.white, window.game.static.colors.white, 0.6);
        hemiLight.position.set(0, 0, -1);
        _three.scene.add(hemiLight);
        var ambient = new THREE.AmbientLight( 0x111111 );
        _three.scene.add ( ambient );
        var spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set( 0, 0, 1000 );

        spotLight.castShadow = true;

        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;

        spotLight.shadow.camera.near = 500;
        spotLight.shadow.camera.far = 4000;
        spotLight.shadow.camera.fov = 30;

        //_three.scene.add( spotLight );

        _three.spotLightHelper = new THREE.SpotLightHelper( spotLight );
        //_three.scene.add( _three.spotLightHelper );

        var pointLight = new THREE.PointLight(window.game.static.colors.white, 0.5);
        pointLight.position.set(0, 0, 500);

        _three.scene.add(pointLight);
      };

      // Initialize components with options
      _three.init(options);
      //_cannon.gravity = -25;
      _cannon.init(_three);
      _ui.init();
      _events.init();

      // Add specific events for key down
      _events.onKeyDown = function () {
        if (!_ui.hasClass("infoboxIntro", "fade-out")) {
          _ui.fadeOut("infoboxIntro");
        }
      };
    }
  };

  // Internal variables
  var _events;
  var _three;
  var _texture;
  var _cannon;
  var _ui;
  var _animationFrameLoop;
  // Game defaults which will be set one time after first start
  var _gameDefaults = {
    player: window.game.helpers.cloneObject(_game.player),
    level: window.game.helpers.cloneObject(_game.level)
  };

  return _game;
};
