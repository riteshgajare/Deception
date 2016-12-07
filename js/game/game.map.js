window.game.map = function() {
  var _map = {


    getMap1: function () {
      _map.create_block(-450,0, -5, 500,5,60,_map.texture.gray);
      _map.create_block(-950,90, -5, 500,5,30,_map.texture.gray);
      _map.create_block(-1250,-30, -5,100,5,30,_map.texture.red,true);
      _map.create_block(-1950,-30, -5, 250,5,30,_map.texture.gray);
      _map.create_block(-2500,0, -10, 100,10,90,_map.texture.normalBlue);
      _map.create_block(-2950,0,-20,200,20,30,_map.texture.greenPure);
      _map.create_block(-3600,0,-120,200,5,90,_map.texture.pink);
      // Collision Block
      _map.create_block(-3750,0,-100,150,20,30,_map.texture.red, true);
      _map.create_block(-3600,0,-120,200,5,90,_map.texture.pink);
      _map.create_block(-3700,-45,-120,500,5,30,_map.texture.pink);
      _map.create_block(-4500,-45,-300,500,15,30,_map.texture.green);
      _map.create_block(-5050,-45,-300,50,15,30,_map.texture.finish);

      //_map.game.level.createGem( -400, 0, 5 );
      _map.game.level.createGem( -1000, 70, 5 );
      _map.game.level.createGem( -4000, -50, -50 );
      _map.game.level.skyboxMesh = _map.texture.getSkybox( 'textures/skybox/' );
    },

    getMap2: function(){
      _map.create_block(-85,15, -5, 100,5,30,_map.texture.blueEarth);
      _map.create_block(-500,15, -5, 100,5,30,_map.texture.blueEarth);
      _map.create_block(-900,75, -5, 100,5,30,_map.texture.blueEarth);
      _map.create_block(-900,-45, -5, 100,5,30,_map.texture.blueEarth);
      _map.create_block(-1300,-85, -5, 100,5,30,_map.texture.blueEarth);
      _map.game.level.skyboxMesh = _map.texture.getSkyboxEarth( 'textures/skybox/' );
    },
    create_block: function(start_x,start_y, start_z,floorSize,floorHeight,floorWidth,blockTexture,collide ){

      if (typeof(collide)==='undefined') collide = false;

      var block = _map.cannon.createRigidBody({
        shape: new CANNON.Box(new CANNON.Vec3(floorSize, floorWidth, floorHeight)),
        mass: 0,
        position: new CANNON.Vec3(start_x,start_y,start_z/2),
        meshMaterial: _map.texture.getTextureMaterial({ width: floorWidth, height: floorSize, repeatX: 20 , repeatY: 2}, blockTexture),
        physicsMaterial: _map.cannon.solidMaterial
      });

      if (collide)
        _map.game.level.collidable.push(block)
    },
    init: function(_cannon, _texture, _game) {
      _map.cannon = _cannon;
      _map.texture = _texture;
      _map.game = _game;
    }
  }
  return _map;
}
