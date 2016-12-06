/**
 * @author timothypratley / https://github.com/timothypratley
 */

THREE.GemGeometry = function ( radius, detail ) {

  var vertices = [-0.777261,0.485581,0.103065,
                  -0.675344,-0.565479,-0.273294,
                  -0.379795,-0.315718,0.778861,
                  -0.221894,0.282623,-0.849372,
                  -0.034619,1.231562,-0.282624,
                  0.034619,-1.231562,0.282624,
                  0.196076,0.635838,0.638599,
                  0.405612,-0.602744,-0.568088,
                  0.701162,-0.352983,0.484067,
                  0.751443,0.43288,-0.313837];

  var indices = [6,8,9,9,8,7,9,7,3,3,7,1,3,1,0,0,1,2,0,2,6,6,2,8,6,9,4,9,3,4,3,0,4,0,6,4,7,8,5,1,7,5,2,1,5,8,2,5];

  THREE.PolyhedronGeometry.call( this, vertices, indices, radius, detail );

  this.type = 'GemGeometry';

  this.parameters = {
    radius: radius,
    detail: detail
  };

};

THREE.GemGeometry.prototype = Object.create( THREE.PolyhedronGeometry.prototype );
THREE.GemGeometry.prototype.constructor = THREE.GemGeometry;


// /**
//  * @author TatumCreative (Greg Tatum) / http://gregtatum.com/
//  * http://threejs.org/docs/scenes/js/geometry.js
//  */

// var twoPi = Math.PI * 2;

// var constants = {

//  combine: {

//    "THREE.MultiplyOperation" : THREE.MultiplyOperation,
//    "THREE.MixOperation" : THREE.MixOperation,
//    "THREE.AddOperation" : THREE.AddOperation

//  },

//  side : {

//    "THREE.FrontSide" : THREE.FrontSide,
//    "THREE.BackSide" : THREE.BackSide,
//    "THREE.DoubleSide" : THREE.DoubleSide

//  },

//  shading : {

//    "THREE.FlatShading" : THREE.FlatShading,
//    "THREE.SmoothShading" : THREE.SmoothShading

//  },

//  colors : {

//    "THREE.NoColors" : THREE.NoColors,
//    "THREE.FaceColors" : THREE.FaceColors,
//    "THREE.VertexColors" : THREE.VertexColors

//  },

//  blendingMode : {

//    "THREE.NoBlending" : THREE.NoBlending,
//    "THREE.NormalBlending" : THREE.NormalBlending,
//    "THREE.AdditiveBlending" : THREE.AdditiveBlending,
//    "THREE.SubtractiveBlending" : THREE.SubtractiveBlending,
//    "THREE.MultiplyBlending" : THREE.MultiplyBlending,
//    "THREE.CustomBlending" : THREE.CustomBlending

//  },

//  equations : {

//    "THREE.AddEquation" : THREE.AddEquation,
//    "THREE.SubtractEquation" : THREE.SubtractEquation,
//    "THREE.ReverseSubtractEquation" : THREE.ReverseSubtractEquation

//  },

//  destinationFactors : {

//    "THREE.ZeroFactor" : THREE.ZeroFactor,
//    "THREE.OneFactor" : THREE.OneFactor,
//    "THREE.SrcColorFactor" : THREE.SrcColorFactor,
//    "THREE.OneMinusSrcColorFactor" : THREE.OneMinusSrcColorFactor,
//    "THREE.SrcAlphaFactor" : THREE.SrcAlphaFactor,
//    "THREE.OneMinusSrcAlphaFactor" : THREE.OneMinusSrcAlphaFactor,
//    "THREE.DstAlphaFactor" : THREE.DstAlphaFactor,
//    "THREE.OneMinusDstAlphaFactor" : THREE.OneMinusDstAlphaFactor

//  },

//  sourceFactors : {

//    "THREE.DstColorFactor" : THREE.DstColorFactor,
//    "THREE.OneMinusDstColorFactor" : THREE.OneMinusDstColorFactor,
//    "THREE.SrcAlphaSaturateFactor" : THREE.SrcAlphaSaturateFactor

//  }

// };

// function updateGroupGeometry( mesh, geometry ) {

//  mesh.children[ 0 ].geometry.dispose();
//  mesh.children[ 1 ].geometry.dispose();

//  mesh.children[ 0 ].geometry = new THREE.WireframeGeometry( geometry );
//  mesh.children[ 1 ].geometry = geometry;

//  // these do not update nicely together if shared

// }

// var guis = {

//  BoxGeometry : function( mesh ) {

//    var data = {
//      width : 15,
//      height : 15,
//      depth : 15,
//      widthSegments : 1,
//      heightSegments : 1,
//      depthSegments : 1
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.BoxGeometry(
//                             data.width, data.height, data.depth, data.widthSegments, data.heightSegments, data.depthSegments
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.BoxGeometry' );

//    folder.add( data, 'width', 1, 30 ).onChange( generateGeometry );
//    folder.add( data, 'height', 1, 30 ).onChange( generateGeometry );
//    folder.add( data, 'depth', 1, 30 ).onChange( generateGeometry );
//    folder.add( data, 'widthSegments', 1, 10 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'heightSegments', 1, 10 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'depthSegments', 1, 10 ).step( 1 ).onChange( generateGeometry );

//    generateGeometry();

//  },

//  CylinderGeometry : function( mesh ) {

//    var data = {
//      radiusTop : 5,
//      radiusBottom : 5,
//      height : 10,
//      radiusSegments : 8,
//      heightSegments : 1,
//      openEnded : false,
//      thetaStart : 0,
//      thetaLength : twoPi,
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.CylinderGeometry(
//                             data.radiusTop,
//                             data.radiusBottom,
//                             data.height,
//                             data.radiusSegments,
//                             data.heightSegments,
//                             data.openEnded,
//                             data.thetaStart,
//                             data.thetaLength
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.CylinderGeometry' );

//    folder.add( data, 'radiusTop', 1, 30 ).onChange( generateGeometry );
//    folder.add( data, 'radiusBottom', 1, 30 ).onChange( generateGeometry );
//    folder.add( data, 'height', 1, 50 ).onChange( generateGeometry );
//    folder.add( data, 'radiusSegments', 3, 64 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'heightSegments', 1, 64 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'openEnded' ).onChange( generateGeometry );
//    folder.add( data, 'thetaStart', 0, twoPi ).onChange( generateGeometry );
//    folder.add( data, 'thetaLength', 0, twoPi ).onChange( generateGeometry );


//    generateGeometry();

//  },

//  CircleGeometry : function( mesh ) {

//    var data = {
//      radius : 10,
//      segments : 32,
//      thetaStart : 0,
//      thetaLength : twoPi,
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.CircleGeometry(
//                             data.radius, data.segments, data.thetaStart, data.thetaLength
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.CircleGeometry' );

//    folder.add( data, 'radius', 1, 20 ).onChange( generateGeometry );
//    folder.add( data, 'segments', 0, 128 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'thetaStart', 0, twoPi ).onChange( generateGeometry );
//    folder.add( data, 'thetaLength', 0, twoPi ).onChange( generateGeometry );

//    generateGeometry();

//  },

//  DodecahedronGeometry : function() {

//    var data = {
//      radius : 10,
//      detail : 0,
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.DodecahedronGeometry(
//                             data.radius, data.detail
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.DodecahedronGeometry' );

//    folder.add( data, 'radius', 1, 20 ).onChange( generateGeometry );
//    folder.add( data, 'detail', 0, 5 ).step( 1 ).onChange( generateGeometry );

//    generateGeometry();

//  },

//  IcosahedronGeometry : function() {

//    var data = {
//      radius : 10,
//      detail : 0,
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.IcosahedronGeometry(
//                             data.radius, data.detail
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.IcosahedronGeometry' );

//    folder.add( data, 'radius', 1, 20 ).onChange( generateGeometry );
//    folder.add( data, 'detail', 0, 5 ).step( 1 ).onChange( generateGeometry );

//    generateGeometry();

//  },

//  GemGeometry : function() {

//    var data = {
//      radius : 10,
//      detail : 0,
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.GemGeometry(
//                             data.radius, data.detail
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.GemGeometry' );

//    folder.add( data, 'radius', 1, 30 ).onChange( generateGeometry );
//    folder.add( data, 'detail', 0, 5 ).step( 1 ).onChange( generateGeometry );


//    //Hide the wireframe
//    mesh.children[ 0 ].visible = false;

//    generateGeometry();

//  },

//  OctahedronGeometry : function() {

//    var data = {
//      radius : 10,
//      detail : 0,
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.OctahedronGeometry(
//                             data.radius, data.detail
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.OctahedronGeometry' );

//    folder.add( data, 'radius', 1, 20 ).onChange( generateGeometry );
//    folder.add( data, 'detail', 0, 5 ).step( 1 ).onChange( generateGeometry );

//    generateGeometry();

//  },

//  PlaneGeometry : function( mesh ) {

//    var data = {
//      width : 10,
//      height : 10,
//      widthSegments : 1,
//      heightSegments : 1
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.PlaneGeometry(
//                             data.width, data.height, data.widthSegments, data.heightSegments
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.PlaneGeometry' );

//    folder.add( data, 'width', 1, 30 ).onChange( generateGeometry );
//    folder.add( data, 'height', 1, 30 ).onChange( generateGeometry );
//    folder.add( data, 'widthSegments', 1, 30 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'heightSegments', 1, 30 ).step( 1 ).onChange( generateGeometry );

//    generateGeometry();

//  },

//  RingGeometry : function( mesh ) {

//    var data = {
//      innerRadius : 5,
//      outerRadius : 10,
//      thetaSegments : 8,
//      phiSegments : 8,
//      thetaStart : 0,
//      thetaLength : twoPi,
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.RingGeometry(
//                             data.innerRadius, data.outerRadius, data.thetaSegments, data.phiSegments, data.thetaStart, data.thetaLength
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.RingGeometry' );

//    folder.add( data, 'innerRadius', 0, 30 ).onChange( generateGeometry );
//    folder.add( data, 'outerRadius', 1, 30 ).onChange( generateGeometry );
//    folder.add( data, 'thetaSegments', 1, 30 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'phiSegments', 1, 30 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'thetaStart', 0, twoPi ).onChange( generateGeometry );
//    folder.add( data, 'thetaLength', 0, twoPi ).onChange( generateGeometry );

//    generateGeometry();

//  },

//  SphereGeometry : function( mesh ) {

//    var data = {
//      radius : 15,
//      widthSegments : 8,
//      heightSegments : 6,
//      phiStart : 0,
//      phiLength : twoPi,
//      thetaStart : 0,
//      thetaLength : Math.PI,
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.SphereGeometry(
//                             data.radius, data.widthSegments, data.heightSegments, data.phiStart, data.phiLength, data.thetaStart, data.thetaLength
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.SphereGeometry' );

//    folder.add( data, 'radius', 1, 30 ).onChange( generateGeometry );
//    folder.add( data, 'widthSegments', 3, 32 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'heightSegments', 2, 32 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'phiStart', 0, twoPi ).onChange( generateGeometry );
//    folder.add( data, 'phiLength', 0, twoPi ).onChange( generateGeometry );
//    folder.add( data, 'thetaStart', 0, twoPi ).onChange( generateGeometry );
//    folder.add( data, 'thetaLength', 0, twoPi ).onChange( generateGeometry );

//    generateGeometry();

//  },

//  TetrahedronGeometry : function() {

//    var data = {
//      radius : 10,
//      detail : 0,
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.TetrahedronGeometry(
//                             data.radius, data.detail
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.TetrahedronGeometry' );

//    folder.add( data, 'radius', 1, 20 ).onChange( generateGeometry );
//    folder.add( data, 'detail', 0, 5 ).step( 1 ).onChange( generateGeometry );

//    generateGeometry();

//  },

//  TextGeometry : function( mesh ) {

//    var data = {
//      text : "TextGeometry",
//      size : 5,
//      height : 2,
//      curveSegments : 12,
//      font : "helvetiker",
//      weight : "regular",
//      bevelEnabled : false,
//      bevelThickness : 1,
//      bevelSize : 0.5
//    };

//    var fonts = [
//      "helvetiker",
//      "optimer",
//      "gentilis",
//      "droid/droid_serif"
//    ];

//    var weights = [
//      "regular", "bold"
//    ];

//    function generateGeometry() {

//      var loader = new THREE.FontLoader();
//      loader.load( '../../examples/fonts/' + data.font + '_' + data.weight + '.typeface.js', function ( font ) {

//        var geometry = new THREE.TextGeometry( data.text, {
//          font: font,
//          size: data.size,
//          height: data.height,
//          curveSegments: data.curveSegments,
//          bevelEnabled: data.bevelEnabled,
//          bevelThickness: data.bevelThickness,
//          bevelSize: data.bevelSize
//        } );
//        geometry.center();

//        updateGroupGeometry( mesh, geometry );

//      } );

//    }

//    //Hide the wireframe
//    mesh.children[ 0 ].visible = false;

//    var folder = gui.addFolder( 'THREE.TextGeometry' );

//    folder.add( data, 'text' ).onChange( generateGeometry );
//    folder.add( data, 'size', 1, 30 ).onChange( generateGeometry );
//    folder.add( data, 'height', 1, 20 ).onChange( generateGeometry );
//    folder.add( data, 'curveSegments', 1, 20 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'font', fonts ).onChange( generateGeometry );
//    folder.add( data, 'weight', weights ).onChange( generateGeometry );
//    folder.add( data, 'bevelEnabled' ).onChange( generateGeometry );
//    folder.add( data, 'bevelThickness', 0.1, 3 ).onChange( generateGeometry );
//    folder.add( data, 'bevelSize', 0.1, 3 ).onChange( generateGeometry );

//    generateGeometry();

//  },

//  TorusGeometry : function( mesh ) {

//    var data = {
//      radius : 10,
//      tube : 3,
//      radialSegments : 16,
//      tubularSegments : 100,
//      arc : twoPi
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.TorusGeometry(
//                             data.radius, data.tube, data.radialSegments, data.tubularSegments, data.arc
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.TorusGeometry' );

//    folder.add( data, 'radius', 1, 20 ).onChange( generateGeometry );
//    folder.add( data, 'tube', 0.1, 10 ).onChange( generateGeometry );
//    folder.add( data, 'radialSegments', 2, 30 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'tubularSegments', 3, 200 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'arc', 0.1, twoPi ).onChange( generateGeometry );

//    generateGeometry();

//  },

//  TorusKnotGeometry : function( mesh ) {

//    var data = {
//      radius : 10,
//      tube : 3,
//      radialSegments : 64,
//      tubularSegments : 8,
//      p : 2,
//      q : 3,
//      heightScale : 1
//    };

//    function generateGeometry() {

//      updateGroupGeometry( mesh,
//                           new THREE.TorusKnotGeometry(
//                             data.radius, data.tube, data.radialSegments, data.tubularSegments,
//                             data.p, data.q, data.heightScale
//                           )
//                         );

//    }

//    var folder = gui.addFolder( 'THREE.TorusGeometry' );

//    folder.add( data, 'radius', 1, 20 ).onChange( generateGeometry );
//    folder.add( data, 'tube', 0.1, 10 ).onChange( generateGeometry );
//    folder.add( data, 'radialSegments', 3, 300 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'tubularSegments', 3, 20 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'p', 1, 20 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'q', 1, 20 ).step( 1 ).onChange( generateGeometry );
//    folder.add( data, 'heightScale', 1, 20 ).onChange( generateGeometry );

//    generateGeometry();

//  }

// };

// function chooseFromHash ( mesh ) {

//  var selectedGeometry = window.location.hash.substring( 1 ) || "GemGeometry";

//  if ( guis[ selectedGeometry ] !== undefined ) {

//    guis[ selectedGeometry ]( mesh );

//  }

//  if ( selectedGeometry === 'TextGeometry' ) {

//    return { fixed : true };

//  }

//  //No configuration options
//  return {};

// }


// document.getElementById('newWindow').href += window.location.hash;

// var gui = new dat.GUI();
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 50 );
// camera.position.z = 30;

// var renderer = new THREE.WebGLRenderer( { antialias: true } );
// renderer.setPixelRatio( window.devicePixelRatio );
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// var orbit = new THREE.OrbitControls( camera, renderer.domElement );
// orbit.enableZoom = false;

// var ambientLight = new THREE.AmbientLight( 0x000000 );
// scene.add( ambientLight );

// var lights = [];
// lights[0] = new THREE.PointLight( 0xffffff, 1, 0 );
// lights[1] = new THREE.PointLight( 0xffffff, 1, 0 );
// lights[2] = new THREE.PointLight( 0xffffff, 1, 0 );

// lights[0].position.set( 0, 200, 0 );
// lights[1].position.set( 100, 200, 100 );
// lights[2].position.set( -100, -200, -100 );

// scene.add( lights[0] );
// scene.add( lights[1] );
// scene.add( lights[2] );

// var mesh = new THREE.Object3D()

// mesh.add( new THREE.LineSegments(

//  new THREE.Geometry(),

//  new THREE.LineBasicMaterial({
//    color: 0xffffff,
//    transparent: true,
//    opacity: 0.5
//  })

// ));

// mesh.add( new THREE.Mesh(

//  new THREE.Geometry(),

//  new THREE.MeshPhongMaterial({
//    color: 0x4babcc,
//    emissive: 0x000000,
//    side: THREE.DoubleSide,
//    shading: THREE.FlatShading
//  })

// ));

// var options = chooseFromHash( mesh );

// scene.add( mesh );

// var prevFog = false;

// var render = function () {

//  requestAnimationFrame( render );

//  var time = Date.now() * 0.001;

//  if( !options.fixed ) {
//    mesh.rotation.x += 0.005;
//    mesh.rotation.y += 0.005;
//  }

//  renderer.render( scene, camera );

// };

// window.addEventListener( 'resize', function () {

//  camera.aspect = window.innerWidth / window.innerHeight;
//  camera.updateProjectionMatrix();

//  renderer.setSize( window.innerWidth, window.innerHeight );

// }, false );

// render();
