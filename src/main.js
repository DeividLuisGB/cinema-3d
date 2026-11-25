import './style.css'

import * as THREE from 'three'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

scene.background = new THREE.Color(0x3344aa)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const floorGeometry = new THREE.PlaneGeometry(10, 10)
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 })
const floor = new THREE.Mesh(floorGeometry, floorMaterial)
floor.rotation.x = -Math.PI / 2
floor.position.y = -1
scene.add(floor)

const light = new THREE.DirectionalLight(0xffffff, 2)
light.position.set(3, 5, 4)
scene.add(light)

scene.add(new THREE.AmbientLight(0xffffff, 0.5))

const screenGeometry = new THREE.BoxGeometry(8, 4, 0.2)
const screenMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
const screen = new THREE.Mesh(screenGeometry, screenMaterial)
screen.position.set(0, 1, -5)
scene.add(screen)

const backWallGeometry = new THREE.PlaneGeometry(10, 6)
const backWallMaterial = new THREE.MeshStandardMaterial({ color: 0x222233 })
const backWall = new THREE.Mesh(backWallGeometry, backWallMaterial)
backWall.position.set(0, 2, -5.2)
scene.add(backWall)

function createSeat(x, z) {
  const geometry = new THREE.BoxGeometry(0.8, 0.6, 0.8)
  const material = new THREE.MeshStandardMaterial({ color: 0x8b1a1a })
  const seat = new THREE.Mesh(geometry, material)
  seat.position.set(x, -0.7, z)
  scene.add(seat)
  return seat
}

createSeat(0, 2)
createSeat(-1, 2)
createSeat(1, 2)

camera.position.set(0, 3, 6)
camera.lookAt(0, 0, 0)

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

animate()