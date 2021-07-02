const mountRef = useRef(null);

useEffect(() => {

  const scene = new THREE.Scene();

  // Camera and Render
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  mountRef.current.appendChild( renderer.domElement );

  // Loading 
  const textureLoader = new THREE.TextureLoader()
  
  
  // Shape and Texture
  const geometry = new THREE.BoxGeometry( 2, 2, 2 );
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

  // // Mesh
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  // const groundTexture = textureLoader.load( grasslight );
  // console.log(groundTexture);
  // groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
  // groundTexture.repeat.set( 25, 25 );
  // groundTexture.anisotropy = 16;
  // groundTexture.encoding = THREE.sRGBEncoding;

  // const groundMaterial = new THREE.MeshLambertMaterial( { map: groundTexture } );

  const planeGeometry = new THREE.PlaneGeometry( 20000, 20000 )
  const planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} )
  let plane = new THREE.Mesh( planeGeometry, planeMaterial );
  plane.position.y = - 250;
  plane.rotation.x = - Math.PI / 2;
  plane.receiveShadow = true;
  scene.add( plane );

  // Lighting
  // const pointLight = new THREE.PointLight(0x304ffe, 0, 1);
  // pointLight.position.x = 2
  // pointLight.position.y = 3
  // pointLight.position.z = 4
  // scene.add( pointLight )

  // Camera
  camera.position.z = 5;
  const animate = function () {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01; 
    renderer.render( scene, camera );
  };
  
  animate();

  return () => mountRef.current.removeChild( renderer.domElement);
}, []);