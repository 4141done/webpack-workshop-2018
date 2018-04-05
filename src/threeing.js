import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  OrbitControls
} from 'three';


export default function initThreeScene() {
  const scene = new Scene();
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const geometry = new BoxGeometry( 1, 1, 1 );
  const material = new MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  const renderer = new WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
};