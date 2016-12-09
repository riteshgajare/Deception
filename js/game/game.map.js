window.game.map = function() {
  var _map = {
    getMap1: function () {
      _map.create_block(-450,0, -5, 500,5,60,_texture.gray);
      _map.create_block(-750,90, -5, 500,5,30,_texture.gray);
      _map.create_block(-1250,-30, -5,100,5,30,_texture.red,true);
      _map.create_block(-1950,-30, -5, 250,5,30,_texture.gray);
      _map.create_block(-2500,0, -10, 50,10,90,_texture.normalBlue);
      _map.create_block(-2950,0,-20,200,20,30,_texture.greenPure);
      _map.create_block(-3600,0,-120,200,5,90,_texture.pink);
      // Collision Block
      _map.create_block(-3750,0,-100,150,20,30,_texture.red, true);
      _map.create_block(-3750,-107,-100,150,20,30,_texture.red, true);
      _map.create_block(-3600,0,-120,200,5,90,_texture.pink);
      _map.create_block(-3700,-45,-120,500,5,30,_texture.pink);
      _map.create_block(-5300,-45,-300,500,15,30,_texture.green);
      // FINISH
      _game.level.finish = _map.create_block(-5800,-45,-300,50,15,30,_texture.finish);

      _game.level.createGem( -400, 0, 5 );
      //_game.level.createGem( -1000, 70, 5 );
      _game.level.createGem( -4000, -50, -50 );
      _game.level.skyboxMesh = _texture.getSkybox( 'textures/skybox/' );
    },
    getMap2: function(){
      _map.create_block(-85,15, -5, 100,5,30,_texture.blueEarth);
      _map.create_block(-500,15, -5, 100,5,30,_texture.blueEarth);
      _map.create_block(-900,75, -5, 100,5,30,_texture.blueEarth);
      _map.create_block(-900,-45, -5, 100,5,30,_texture.blueEarth);
      _game.level.finish  = _map.create_block(-1300,-85, -5, 100,5,30,_texture.blueEarth);
      _game.level.skyboxMesh = _texture.getSkyboxEarth( 'textures/skybox/' );
    },
    create_block: function(start_x,start_y, start_z,floorSize,floorHeight,floorWidth,blockTexture,collide ){

      if (typeof(collide)==='undefined') collide = false;

      var block = _cannon.createRigidBody({
        shape: new CANNON.Box(new CANNON.Vec3(floorSize, floorWidth, floorHeight)),
        mass: 0,
        position: new CANNON.Vec3(start_x,start_y,start_z/2),
        meshMaterial: _texture.getTextureMaterial({ width: floorWidth, height: floorSize, repeatX: 20 , repeatY: 2}, blockTexture),
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
