import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const init = () => {
	const sizes = {
		width: window.innerWidth,
		height: window.innerHeight,
	};

	const scene = new THREE.Scene();
	const canvas = document.querySelector('.canvas');
	const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
	scene.add(camera);

	//свет
	const light = new THREE.PointLight(0xfefeff, 90, 200)
    light.position.set(-4, 5, -4)
    scene.add(light)

	//управление камерой
	const controls = new OrbitControls(camera, canvas);
	camera.position.set(-12, 6, -12);
	controls.enableDamping = true;

	const renderer = new THREE.WebGLRenderer({ canvas });
	renderer.setSize(sizes.width, sizes.height);
	renderer.render(scene, camera);

	//оси
	const axesHelper = new THREE.AxesHelper(5)
	axesHelper.position.set(-6, 1, -6)
	scene.add(axesHelper)

	return { sizes, scene, canvas, camera, renderer, controls };
};

export default init;
