import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import init from './init';

import './style.css';

const { sizes, camera, scene, canvas, controls, renderer } = init();

//загрузка модели
const loader = new GLTFLoader();
const gltf = await loader.loadAsync('/models/IT_ROOM.gltf');
scene.add(gltf.scene);
console.log(gltf);

//задание 5
	const object5 = new THREE.Object3D();
	object5.add(gltf.scene.children[23]);
	object5.add(gltf.scene.children[29]);
	scene.add(object5);

//рендер
const animate = () => {
	controls.update();
	requestAnimationFrame(animate);
	object5.rotateY(0.005);
	renderer.render(scene, camera);	
};
animate();


/** Базовые обработчики событий для поддержки ресайза */
window.addEventListener('resize', () => {
	// Обновляем размеры
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Обновляем соотношение сторон камеры
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Обновляем renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.render(scene, camera);
});

window.addEventListener('dblclick', () => {
	if (!document.fullscreenElement) {
		canvas.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
});
