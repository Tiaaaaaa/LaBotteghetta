import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function loader(scene , model, scale){

  let loader = new GLTFLoader();

  var path = "./models/" + model + ".gltf"

  loader.load(
    // resource URL
    path,
    // called when the resource is loaded
    function ( gltf ) {

      if (model.indexOf("pointer") != -1) { gltf.scene.lookAt(100,0,0); }

      gltf.scene.scale.set(scale,scale,scale);
      gltf.scene.position.set(0,0,0);
    //  gltf.scene.rotation.y = 1.5;

      scene.add( gltf.scene );
      console.log("modello caricato: " + model);

    },
    function () {},
    // called when loading has errors
    function ( error ) {

      console.log( 'ERRORE NEL CARICAMENTO' + error);

    }
  );

}
