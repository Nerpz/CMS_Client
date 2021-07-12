

// Scene
const scene = new THREE.Scene();

// Render
  const renderer = new THREE.WebGLRenderer({alpha: true})
  renderer.setClearColor( 0x21409a, 1 );
renderer.setSize(300 , 300)
document.getElementById('three-art-two').appendChild(renderer.domElement);

// Camera
  const camera = new THREE.PerspectiveCamera(45, 1, 1, 100)
camera.position.set(0, 0, -5)
camera.lookAt(0,0,0)

  const shapes = [];
   

   
  const material1 = new THREE.LineBasicMaterial({color:0xB102FF})
  const material2 = new THREE.LineBasicMaterial({color:0x028DE8})
  const material3 = new THREE.LineBasicMaterial({color:0xFF4814})

  const createShape = (xPos, yPos, zPos) => {
     
        let pointsX = [];
        let pointsY = [];
        let pointsZ = [];
      pointsX.push( 
         new THREE.Vector3(
            10 + xPos, 0+yPos, 0+zPos
            ))
      pointsX.push( 
         new THREE.Vector3(
           -10 + xPos, 0+yPos, +zPos
           ))
      pointsY.push(
          new THREE.Vector3(
             0+xPos, 10 + yPos, 0+zPos
             ))
      pointsY.push(
          new THREE.Vector3(
             0+xPos, -10 + yPos,0+zPos
             ))
      pointsZ.push(
          new THREE.Vector3(
             0+xPos,0+yPos, 10+zPos
              ))
      pointsZ.push(
          new THREE.Vector3(
             0+xPos,0+yPos,-10+zPos
             ))

        let geometryX = new THREE.BufferGeometry().setFromPoints( pointsX );
        let geometryY = new THREE.BufferGeometry().setFromPoints( pointsY );
        let geometryZ = new THREE.BufferGeometry().setFromPoints( pointsZ );
      
        let lineX = new THREE.Line( geometryX, material1)
        let lineY = new THREE.Line( geometryY, material2)
        let lineZ = new THREE.Line( geometryZ, material3)

      
      scene.add(lineX)
      scene.add(lineY)
      scene.add(lineZ)

    
}

 createShape(0, 0, 0);
 function createAwesomeShape(randomVariable){
 createShape(randomVariable, 0, 0);
 createShape(-randomVariable, 0, 0);
 createShape(0, randomVariable, 0);
 createShape(0, -randomVariable, 0);
 createShape(0, 0, randomVariable);
 createShape(0, 0, -randomVariable);
 createShape(randomVariable,randomVariable,0)
 createShape(0, randomVariable, randomVariable)
 createShape(randomVariable, randomVariable,randomVariable)
 createShape(-randomVariable,-randomVariable,0)
 createShape(0, -randomVariable, -randomVariable)
 createShape(-randomVariable, -randomVariable,-randomVariable)
 createShape(-randomVariable,randomVariable,0)
 createShape(0, -randomVariable, randomVariable)
 createShape(randomVariable,-randomVariable,0)
 createShape(0, randomVariable, -randomVariable)
 createShape(-randomVariable, randomVariable,randomVariable)
 createShape(randomVariable, -randomVariable,randomVariable)
 createShape(randomVariable, randomVariable,-randomVariable)
 createShape(randomVariable, -randomVariable,-randomVariable)
 createShape(-randomVariable, -randomVariable,randomVariable)
 createShape(-randomVariable, randomVariable,-randomVariable)
 }
 createAwesomeShape(1)
 createAwesomeShape(1.1)
 createAwesomeShape(1.2)
 createAwesomeShape(1.3)
 createAwesomeShape(1.4)
 createAwesomeShape(1.5)
 createAwesomeShape(2)
 createAwesomeShape(2.1)
 createAwesomeShape(2.2)
 createAwesomeShape(2.3)
 createAwesomeShape(2.4)
 createAwesomeShape(2.5)



 


 
 function animate(){
    requestAnimationFrame(animate)
   scene.children.forEach((sceneChild, i)=> {
      // console.log('animating')
      if(i)
      // sceneChild.rotation.z += .01;
      sceneChild.rotation.y += .01;
      sceneChild.rotation.x += .01;
      
      
   })
   renderer.render(scene,camera)
 }
 console.log(scene)
 animate()