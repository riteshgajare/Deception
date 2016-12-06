function getMap1(_cannon,_texture,map)
{
  create_block(_cannon,_texture,-450,0, -5, 500,5,60,_texture.gray);
  create_block(_cannon,_texture,-950,90, -5, 500,5,30,_texture.gray);
  create_block(_cannon,_texture,-1250,-30, -5,100,5,30,_texture.red);
  create_block(_cannon,_texture,-1950,-30, -5, 250,5,30,_texture.gray);
  create_block(_cannon,_texture,-2500,0, -10, 100,10,90,_texture.normalBlue);
  create_block(_cannon,_texture,-2950,0,-20,200,20,30,_texture.greenPure);
  create_block(_cannon,_texture,-3600,0,-120,200,5,90,_texture.pink);
  // Collision Block
  create_block(_cannon,_texture,-3750,0,-100,150,20,30,_texture.red);
  create_block(_cannon,_texture,-3600,0,-120,200,5,90,_texture.pink);
  create_block(_cannon,_texture,-3700,-45,-120,500,5,30,_texture.pink);
  create_block(_cannon,_texture,-4500,-45,-300,500,15,30,_texture.green);
  create_block(_cannon,_texture,-5050,-45,-300,50,15,30,_texture.finish);

  map.createGem( -400, 0, 5 );
  map.createGem( -1000, 70, 5 );
  map.createGem( -4000, -50, -50 );
  map.skyboxMesh = _texture.getSkybox( 'textures/skybox/' );
}


function getMap2(_cannon,_texture,map){

  create_block(_cannon,_texture,-85,15, -5, 100,5,30,_texture.blueEarth);
  create_block(_cannon,_texture,-500,15, -5, 100,5,30,_texture.blueEarth);
  create_block(_cannon,_texture,-900,75, -5, 100,5,30,_texture.blueEarth);
  create_block(_cannon,_texture,-900,-45, -5, 100,5,30,_texture.blueEarth);
  create_block(_cannon,_texture,-1300,-85, -5, 100,5,30,_texture.blueEarth);
  map.skyboxMesh = _texture.getSkyboxEarth( 'textures/skybox/' );
}

function create_block(_cannon,_texture,start_x,start_y, start_z,floorSize,floorHeight,floorWidth,blockTexture){

  _cannon.createRigidBody({
    shape: new CANNON.Box(new CANNON.Vec3(floorSize, floorWidth, floorHeight)),
    mass: 0,
    position: new CANNON.Vec3(start_x,start_y,start_z/2),
    meshMaterial: _texture.getTextureMaterial({ width: floorWidth, height: floorSize, repeatX: 20 , repeatY: 2}, blockTexture),
    physicsMaterial: _cannon.solidMaterial
  });
}
