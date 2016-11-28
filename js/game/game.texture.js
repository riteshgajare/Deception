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

    road: 'textures/minecraft_stone.jpg',

    loadTexture: function(opts, type) {
      opts		= opts	|| {}
      var width	= opts.width !== undefined ? opts.width : 1
      var height	= opts.height !== undefined ? opts.height : 1
      var segmentsW	= opts.segmentsW !== undefined ? opts.segmentsW : 1
      var segmentsH	= opts.segmentsH !== undefined ? opts.segmentsH : 1
      var repeatX	= opts.repeatX !== undefined ? opts.repeatX : 1
      var repeatY	= opts.repeatY !== undefined ? opts.repeatY : 1
      var anisotropy	= opts.anisotropy !== undefined ? opts.anisotropy : 16

      var textureDiffuse    = new THREE.TextureLoader().load(type);
      textureDiffuse.wrapS	= THREE.RepeatWrapping;
      textureDiffuse.wrapT	= THREE.RepeatWrapping;
      textureDiffuse.repeat.x= repeatX
      textureDiffuse.repeat.y= repeatY
      textureDiffuse.anisotropy = anisotropy;

      var geometry	= new THREE.PlaneGeometry(width, height, segmentsW, segmentsH)
      var material	= new THREE.MeshPhongMaterial({
        map		: textureDiffuse,
        normalScale	: new THREE.Vector2(1,1).multiplyScalar(0.5),
      })
      var object3D	= new THREE.Mesh(geometry, material)
      object3D.translateZ(0.1);
      return object3D;
    },
    getGrass: function(opts) {
      return _texture.loadTexture(opts, _texture.grass);
    },
    getRoad: function(opts) {
      return _texture.loadTexture(opts, _texture.road);
    }
  };

  return _texture;
}
