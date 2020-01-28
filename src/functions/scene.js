import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { loader } from './modelLoader';

export function loadScene (model, scale, background, ligth) {

  let container = document.getElementById(model);

  let scene, camera, renderer, controls;

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( container.offsetWidth, container.offsetHeight );

  if (isNaN(background)) {

    const sfondo = new THREE.TextureLoader();
    sfondo.load("../images/" + background + ".jpg" , function(texture)
    {
      scene.background = texture;
    });

  } else {

    scene.background = new THREE.Color( background );

  }

  camera = new THREE.PerspectiveCamera( 60, container.offsetWidth / container.offsetHeight, 0.1, 1000 );

  //LIGTHS
  let light = new THREE.AmbientLight( 0xFFFFFF ,ligth );
  scene.add( light );

  camera.position.y = 0;

  loader(scene, model, scale);

  container.appendChild( renderer.domElement );

  let a = 1;

  function animate() {

    requestAnimationFrame( animate );
    render();

  }


  function render() {

    renderer.render( scene, camera );

    if (model === "place") {

      camera.position.z = -6  ;
      camera.position.x = 1;
      camera.position.y = 0;
      camera.lookAt(0,0,0);

    }else{

      camera.position.x = 6 * Math.cos(a);
      camera.position.z = 6 * Math.sin(a);
      camera.lookAt(0,0,0);
      a += 0.005;

    }

  }

  animate();

}
