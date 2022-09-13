import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const light = new THREE.HemisphereLight(0xffffff, 0x000000, 1);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshLambertMaterial({color: 0xff00ff});
  const cube = new THREE.Mesh( geometry, material);

  scene.add( light );
  scene.add( cube );

  camera.position.z = 5;

  const controls = new OrbitControls(camera, renderer.domElement);
  // const axesHelper = new THREE.AxesHelper(5);
  // scene.add(axesHelper);
  controls.update();

  const animate = () => {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update();
    renderer.render(scene, camera);
  }

  animate();

  return (
    <div></div>
  )
}

export default App;

