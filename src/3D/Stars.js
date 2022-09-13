import * as THREE from 'three';
import blueStar from '../images/blue-star.png';

const Stars = () => {
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    const renderer = new THREE.WebGLRenderer();
    camera.position.z = 200;
    camera.rotation.x = Math.PI/2;

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    let starGeo = new THREE.BufferGeometry();
    let position = [];
    let velocity = [];
    let acceleration = [];
    for(let i=0;i<5000;i++){
        position.push(Math.random() * 600 - 300);
        position.push(Math.random() * 600 - 300);
        position.push(Math.random() * 600 - 300);

        velocity.push(0);
        acceleration.push(0.1);
    }

    starGeo.setAttribute('position', new THREE.Float32BufferAttribute( position, 3));
    starGeo.setAttribute('acceleration', new THREE.Float32BufferAttribute( acceleration, 1));
    starGeo.setAttribute('velocity', new THREE.Float32BufferAttribute( velocity, 1));
    


    let sprite = new THREE.TextureLoader().load(blueStar);
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 1,
        map: sprite
    });

    let stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    console.log(starGeo);

    const animate = () => {

        stars.position.y += -1;
        if(stars.position.y < -200){
            stars.position.y = 200;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    
    animate();
    return (
        <div></div>
    )
}

export default Stars;