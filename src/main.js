import './style.css'

import * as THREE from 'three'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

scene.background = new THREE.Color(0x3344aa)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

renderer.render(scene, camera)