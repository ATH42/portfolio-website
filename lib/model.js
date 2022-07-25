import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(glbPath, gltf => {
      const object = gltf.scene
      object.name = 'dog'
      object.position.y = 0
      object.position.x = 0
      object.receiveShadow = receiveShadow
      object.castShadow = castShadow
      scene.add(object)

      object.traverse(child => {
        if (child.isMesh) {
          child.castShadow = castShadow
          child.receiveShadow = receiveShadow
        }
      })
      resolve(object)
    }),
      undefined,
      error => {
        reject(error)
      }
  })
}
