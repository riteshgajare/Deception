
// Textures from http://opengameart.org/

// http://opengameart.org/content/dark-grass
// http://opengameart.org/content/backgrounds-topdown-games

// Slightly modified to have more GPU friendly sizes.

// Licensed under a Creative Commons Attribution 3.0 Unported License:
// http://creativecommons.org/licenses/by/3.0/

window.game = window.game || {};

window.game.texture = function() {
  var _texture = {

    grass: 'textures/grass.jpg',
    green: 'textures/green2.png',
    blue: 'textures/Blue.jpg',
    greenPure: 'textures/green3.png',
    grey: 'textures/grey.png',
     pink: 'textures/pink.jpg',
     normalBlue: 'textures/normalBlue.png',
     gray: 'textures/Gray.jpg',
     red: 'textures/Red.jpg',
     finish: 'textures/finish.png',
     greenEarth: 'textures/green_earth.jpg',
     blueEarth: 'textures/blue_earth.jpg',


    road: 'textures/minecraft_stone.jpg',
    gemSize: 5,
    getTextureMaterial: function(opts, type) {
      opts		= opts	|| {}
      var width	= opts.width !== undefined ? opts.width : 1
      var height	= opts.height !== undefined ? opts.height : 1
      var segmentsW	= opts.segmentsW !== undefined ? opts.segmentsW : 1
      var segmentsH	= opts.segmentsH !== undefined ? opts.segmentsH : 1
      var repeatX	= opts.repeatX !== undefined ? opts.repeatX : 1
      var repeatY	= opts.repeatY !== undefined ? opts.repeatY : 1
      var anisotropy	= opts.anisotropy !== undefined ? opts.anisotropy : 16

      //var textureCube = THREE.ImageUtils.loadTextureCube( urls );

      var textureDiffuse    = new THREE.TextureLoader().load(type);
      textureDiffuse.wrapS	= THREE.RepeatWrapping;
      textureDiffuse.wrapT	= THREE.RepeatWrapping;
      textureDiffuse.repeat.x= repeatX
      textureDiffuse.repeat.y= repeatY
      textureDiffuse.anisotropy = anisotropy;

      var material	= new THREE.MeshPhongMaterial({
        map		: textureDiffuse,
        normalScale	: new THREE.Vector2(1,1).multiplyScalar(0.5),
      })
      return material;
    },
    getGem: function(opts) {
      opts		= opts	|| {}
      var color	= opts.color !== undefined ? opts.color : 0x00ff00;
      var radius = opts.radius !== undefined ? opts.radius : _texture.gemSize;
      var positionX	= opts.positionX !== undefined ? opts.positionX : 0;
      var positionY	= opts.positionY !== undefined ? opts.positionY : 0;
      var positionZ	= opts.positionZ !== undefined ? opts.positionZ : 0;

      const vertices = [-0.777261,0.485581,0.103065,
                      -0.675344,-0.565479,-0.273294,
                      -0.379795,-0.315718,0.778861,
                      -0.221894,0.282623,-0.849372,
                      -0.034619,1.231562,-0.282624,
                      0.034619,-1.231562,0.282624,
                      0.196076,0.635838,0.638599,
                      0.405612,-0.602744,-0.568088,
                      0.701162,-0.352983,0.484067,
                      0.751443,0.43288,-0.313837];

      const indices = [6,8,9,9,8,7,9,7,3,3,7,1,3,1,0,0,1,2,0,2,6,6,2,8,6,9,4,9,3,4,3,0,4,0,6,4,7,8,5,1,7,5,2,1,5,8,2,5];
      var geometry = new THREE.PolyhedronGeometry( vertices, indices, radius, 0 );
      var material = new THREE.MeshPhongMaterial({
        color: color,
        emissive: 0x000000,
        specular: 0xa1a1a1,
        side: THREE.DoubleSide,
        shading: THREE.FlatShading,
        shininess: 100,
      });
      var object3D = new THREE.Mesh(geometry, material);
      object3D.translateX(positionX);
      object3D.translateY(positionY);
      object3D.translateZ(positionZ);
      return object3D;
    },
    getSkybox: function(urlPrefix) {
      var urls = [ urlPrefix + "sum.jpg",
                   urlPrefix + "black.jpg",
                   urlPrefix + "black.jpg",
                   urlPrefix + "black.jpg",
                   urlPrefix + "black.jpg",
                   urlPrefix + "black.jpg" ];
      var textureCube = THREE.ImageUtils.loadTextureCube( urls );
      textureCube.format = THREE.RGBFormat;
      textureCube.mapping = THREE.CubeRefractionMapping;

      var shader = THREE.ShaderLib["cube"];
      var uniforms = THREE.UniformsUtils.clone( shader.uniforms );
      uniforms['tCube'].value= textureCube;   // textureCube has been init before
      var material = new THREE.ShaderMaterial({
        fragmentShader    : shader.fragmentShader,
        vertexShader  : shader.vertexShader,
        uniforms  : uniforms,
        depthWrite: false,
        side: THREE.BackSide
      });
      var skyboxMesh = new THREE.Mesh( new THREE.CubeGeometry( 10000, 10000, 10000, 1, 1, 1, null, true ), material );
      skyboxMesh.translateZ(100);
      skyboxMesh.rotateX(window.game.helpers.degToRad(90));
      // skyboxMesh.frustumCulled = false;
      return skyboxMesh;
    },
    getSkyboxNebula: function(urlPrefix) {
      var urls = [ urlPrefix + "galnew1.jpg",
                   urlPrefix + "galnew1.jpg",
                   urlPrefix + "galnew1.jpg",
                   urlPrefix + "galnew1.jpg",
                   urlPrefix + "galnew1.jpg",
                   urlPrefix + "galnew1.jpg" ];
      var textureCube = THREE.ImageUtils.loadTextureCube( urls );
      textureCube.format = THREE.RGBFormat;
      textureCube.mapping = THREE.CubeRefractionMapping;

      var shader = THREE.ShaderLib["cube"];
      var uniforms = THREE.UniformsUtils.clone( shader.uniforms );
      uniforms['tCube'].value= textureCube;   // textureCube has been init before
      var material = new THREE.ShaderMaterial({
        fragmentShader    : shader.fragmentShader,
        vertexShader  : shader.vertexShader,
        uniforms  : uniforms,
        depthWrite: false,
        side: THREE.BackSide
      });
      var skyboxMesh = new THREE.Mesh( new THREE.CubeGeometry( 10000, 10000, 10000, 1, 1, 1, null, true ), material );
      skyboxMesh.translateZ(100);
      skyboxMesh.rotateX(window.game.helpers.degToRad(90));
      // skyboxMesh.frustumCulled = false;
      return skyboxMesh;
    },
    getSkyboxEarth: function(urlPrefix) {
      var urls = [ urlPrefix + "earth1.jpg",
                   urlPrefix + "black.jpg",
                   urlPrefix + "black.jpg",
                   urlPrefix + "black.jpg",
                   urlPrefix + "black.jpg",
                   urlPrefix + "black.jpg" ];
      var textureCube = THREE.ImageUtils.loadTextureCube( urls );
      textureCube.format = THREE.RGBFormat;
      textureCube.mapping = THREE.CubeRefractionMapping;

      var shader = THREE.ShaderLib["cube"];
      var uniforms = THREE.UniformsUtils.clone( shader.uniforms );
      uniforms['tCube'].value= textureCube;   // textureCube has been init before
      var material = new THREE.ShaderMaterial({
        fragmentShader    : shader.fragmentShader,
        vertexShader  : shader.vertexShader,
        uniforms  : uniforms,
        depthWrite: false,
        side: THREE.BackSide
      });
      var skyboxMesh = new THREE.Mesh( new THREE.CubeGeometry( 10000, 10000, 10000, 1, 1, 1, null, true ), material );
      skyboxMesh.translateZ(100);
      skyboxMesh.rotateX(window.game.helpers.degToRad(90));
      // skyboxMesh.frustumCulled = false;
      return skyboxMesh;
    }
  };

  return _texture;
}
