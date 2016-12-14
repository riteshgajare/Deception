window.game.map = function() {
  var _map = {

    getMap1: function () {
      // Part 1
      _map.create_block(-85,0,-5, 100,5,40,_texture.gray);
       _map.create_block(-400,0,-5, 100,5,40,_texture.gray);
      _map.create_block(-700,0,-5, 200,5,20,_texture.gray);

      // Part 2
      _map.create_block(-800,60,-5, 50,5,20,_texture.grey);
      _map.create_block(-1200,-60,-5, 100,5,20,_texture.gray);

      // Part 3
      _map.create_block(-1800,0,-5, 200,5,20,_texture.gray);
      _map.create_block(-1600,0,-5, 50,5,80,_texture.gray);
      _map.create_block(-1600,-50,25, 50,10,30,_texture.grey);
      _map.create_block(-2000,40,-5, 50,5,20,_texture.gray);
      _map.create_block(-2000,-40,-5, 50,5,20,_texture.gray);
      _map.create_block(-2100,0,-5, 50,5,60,_texture.gray);
      _map.create_block(-2300,0,-5, 200,5,20,_texture.gray);

      // Part 4
      _map.create_block(-2600,0,-5, 25,5,100,_texture.gray);
      _map.create_block(-2650,0,-5, 25,5,80,_texture.gray);
      _map.create_block(-2700,0,-5, 25,5,60,_texture.gray);
      _map.create_block(-2700,0, 15, 25,5,60,_texture.grey);
      _map.create_block(-2750,0,-5, 25,5,40,_texture.gray);
      _map.create_block(-2800,0,-5, 25,5,20,_texture.gray);

      // Part 5
      _map.create_block(-3000,40,-5, 25,5,20,_texture.gray);
      _map.create_block(-3050,40,-5, 25,5,40,_texture.gray);
      _map.create_block(-3100,40,-5, 25,5,60,_texture.gray);
      _map.create_block(-3150,40,-5, 25,5,80,_texture.gray);
      _map.create_block(-3200,40,-5, 25,5,100,_texture.gray);
      _map.create_block(-3600,-60,-5, 300,5,20,_texture.gray);
      _map.create_block(-3600,-60, 25, 25,10,20,_texture.grey);


      // Part 6
      _map.create_block(-4200,-30,-5,50,15,20,_texture.grey);
      _map.create_block(-4500, 30,-5,50,15,20,_texture.grey);
      _map.create_block(-4750, -30,-5,50,15,20,_texture.grey);
      _map.create_block(-5100, 0,-15,100,5,20,_texture.grey);

      // FINISH
      _game.level.finish =_map.create_block(-5250,0,-15,50,5,20,_texture.gray);

      _game.level.createGem( -400, 0, 5 );
      //_game.level.createGem( -1000, 70, 5 );
      _game.level.createGem( -4000, -50, -50 );
      _game.level.skyboxMesh = _texture.getSkybox( 'https://raw.githubusercontent.com/riteshgajare/RoadCrosser-3D/master/textures/skybox/' );
    },



  getMap2: function(){
      //part 1
      _map.create_block(-185,0,-5, 200,5,20,_texture.gray);
      _map.create_block(-400,-20,-5,200,5,80,_texture.gray);
      _map.create_block(-400,-40,25,200,10,20,_texture.red,true);

      //part 2
      _map.create_block(-1000,60,-5,200,5,40,_texture.gray);
      _map.create_block(-1000,80,25,200,10,20,_texture.red,true);

      // part3
      _map.create_block(-1400,60,-5,200,5,40,_texture.gray);

      // part 4
      _map.create_block(-1800,40,-5,200,5,100,_texture.gray);
      _map.create_block(-1800,120,25,200,10,20,_texture.red,true);
      _map.create_block(-1800,40,25,200,10,20,_texture.red,true);
      _map.create_block(-2200,80,-5,200,5,20,_texture.gray);

      //part 5
      _map.create_block(-2600,80,-5,75,5,20,_texture.gray);

      // part 6
      _map.create_block(-2950,140,-5,100,5,30,_texture.gray);
      _map.create_block(-2950,80,-5,100,5,30,_texture.red,true);
      _map.create_block(-2950,20,-5,100,5,30,_texture.gray);

      _map.create_block(-3150,140,-5,100,5,30,_texture.red,true);
      _map.create_block(-3150,80,-5,100,5,30,_texture.gray);
      _map.create_block(-3150,20,-5,100,5,30,_texture.red,true);

      _map.create_block(-3350,140,-5,100,5,30,_texture.gray);
      _map.create_block(-3350,80,-5,100,5,30,_texture.red,true);
      _map.create_block(-3350,20,-5,100,5,30,_texture.gray);

      _map.create_block(-3550,140,-5,100,5,30,_texture.red,true);
      _map.create_block(-3550,80,-5,100,5,30,_texture.gray);
      _map.create_block(-3550,20,-5,100,5,30,_texture.red,true);

      _map.create_block(-3750,140,-5,100,5,30,_texture.gray);
      _map.create_block(-3750,80,-5,100,5,30,_texture.red,true);
      _map.create_block(-3750,20,-5,100,5,30,_texture.gray);

      // part 7
      _map.create_block(-4150,80,-5,100,5,30,_texture.gray);
      _map.create_block(-5150,80,-5,1000,5,150,_texture.gray);
      _map.create_block(-4160,170,15,10,5,60,_texture.red,true);
      _map.create_block(-4160,-10,15,10,5,60,_texture.red,true);
      _map.create_block(-5140,220,15,990,5,10,_texture.red,true);
      _map.create_block(-5140,-60,15,990,5,10,_texture.red,true);
      _map.create_block(-6140,170,15,10,5,60,_texture.red,true);
      _map.create_block(-6140,-10,15,10,5,60,_texture.red,true);

      // part 8 : red blocks
      _map.create_block(-4350,80,35,50,15,30,_texture.red,true);

      _map.create_block(-4750,10,35,50,15,30,_texture.red,true);
      _map.create_block(-4750,150,35,50,15,30,_texture.red,true);

      _map.create_block(-5150,80,35,50,15,30,_texture.red,true);

      _map.create_block(-5550,10,35,50,15,30,_texture.red,true);
      _map.create_block(-5550,150,35,50,15,30,_texture.red,true);

      _map.create_block(-5950,80,55,20,15,150,_texture.red,true);

      // finish
      _map.create_block(-6250,80,-5,200,5,30,_texture.gray);
      _game.level.finish = _map.create_block(-6300,80,-5,100,5,30,_texture.gray);

      _game.level.skyboxMesh = _texture.getSkyboxNebula( 'https://raw.githubusercontent.com/riteshgajare/RoadCrosser-3D/master/textures/skybox/' );
    },


    getMap3: function(){
      _map.create_block(-85,15,-5, 100,5,30,_texture.greenPure);
      _map.create_block(-500,15,-5, 100,5,30,_texture.green);
      _map.create_block(-900,45,-5, 100,5,30,_texture.greenPure);
      _map.create_block(-900,-45,-5,100,5,30,_texture.greenPure);
      _map.create_block(-1300,-15,-5,100,5,30,_texture.green);
      _map.create_block(-1700,65,-5,100,5,30,_texture.greenPure);
      _map.create_block(-2100,-15,5,100,10,30,_texture.green);
      _map.create_block(-2500,-15,5,100,10,30,_texture.greenPure);
      _map.create_block(-2900,-45,5,100,10,30,_texture.green);
      _map.create_block(-3300,-15,5,100,10,30,_texture.greenPure);
      _map.create_block(-3700,-40,5,100,5,15,_texture.red,true);
      _map.create_block(-3700,10,0,100,5,15,_texture.green);
      _map.create_block(-4100,-40,-5,100,5,15,_texture.greenPure);
      _map.create_block(-4100,10,0,100,5,15,_texture.red,true);

      // start at -4500 and 400 add
      _map.create_block(-4500,15,-5, 100,5,30,_texture.green);
      _map.create_block(-4900,-70,-5,100,5,15,_texture.greenPure);
      _map.create_block(-5300,-70,-5,100,5,15,_texture.green);
      _map.create_block(-5700,-70,-5,100,5,15,_texture.greenPure);
      _map.create_block(-6100,-10,0,100,10,30,_texture.green);
      // close
      _map.create_block(-6400,-10,0,100,10,30,_texture.greenPure);
      _map.create_block(-6700,-10,5,100,10,30,_texture.green);
      _map.create_block(-7000,-10,15,100,10,30,_texture.greenPure);
      _map.create_block(-7300,-10,25,100,10,30,_texture.green);
      _map.create_block(-7800,-10,0,100,10,30,_texture.greenPure);


      _map.create_block(-8200,45,-5,30,2.5,30,_texture.green);
      _map.create_block(-8260,45,-5,30,2.5,60,_texture.greenPure);
      _map.create_block(-8320,45,-5,30,2.5,90,_texture.green);
      _map.create_block(-8410,45,-5,60,2.5,120,_texture.greenPure);

      // added 200
      _map.create_block(-8730,-45,-5,60,2.5,60,_texture.green);
      _map.create_block(-8850,-15,-5,60,2.5,60,_texture.greenPure);

      _map.create_block(-8970,15,-5,60,2.5,30,_texture.green);
      _map.create_block(-9090,45,-5,60,2.5,30,_texture.greenPure);
      _map.create_block(-9210,75,-5,60,2.5,30,_texture.green);
      _map.create_block(-9330,105,-5,60,2.5,30,_texture.greenPure);
      _map.create_block(-9450,135,-5,60,2.5,30,_texture.green);
      _map.create_block(-9570,175,-5,60,2.5,30,_texture.greenPure);
      _map.create_block(-9810,175,-5,120,2.5,30,_texture.green);
      _game.level.finish = _map.create_block(-9860,175,-5,100,2.5,30,_texture.green);

      _game.level.skyboxMesh = _texture.getSkyboxEarth( 'https://raw.githubusercontent.com/riteshgajare/RoadCrosser-3D/master/textures/skybox/' );
    },

    getMap4: function(){
      _map.create_block(-50,0,-5, 100,5,150,_texture.red);
      _game.level.finish = _map.create_block(-9860,175,-5,100,2.5,30,_texture.green);
      _game.level.skyboxMesh = _texture.getSkyboxCredits( 'https://raw.githubusercontent.com/riteshgajare/RoadCrosser-3D/master/textures/skybox/' );

    },



    create_block: function(start_x,start_y, start_z,floorSize,floorHeight,floorWidth,blockTexture,collide ){

      if (typeof(collide)==='undefined') collide = false;

      var block = _cannon.createRigidBody({
        shape: new CANNON.Box(new CANNON.Vec3(floorSize, floorWidth, floorHeight)),
        mass: 0,
        position: new CANNON.Vec3(start_x,start_y,start_z/2),
        meshMaterial: new THREE.MeshLambertMaterial({ color: blockTexture }), //_texture.getTextureMaterial({ width: floorWidth, height: floorSize, repeatX: 20 , repeatY: 2}, blockTexture),
        physicsMaterial: _cannon.solidMaterial
      });

       if (collide)
         _game.level.collidable.push(block)

      return block;
    },
    init: function(cannon, texture, game) {
      _cannon = cannon;
      _texture = texture;
      _game = game;
    }
  }
  return _map;

  var _cannon;
  var _texture;
  var _game;
}
