
var app = function(){
    // initiallize scene, camera, objects and renderer

    var scene, camera, renderer;
    var meteors = [];
    // var mixerCar;
    // const clock = new THREE.Clock();
    

    const ARROWLEFT = 68, ARROWRIGHT = 65, ARROWUP = 83, ARROWDOWN = 87;

    var randomInRange = function(min, max){
        return Math.random()*(max-min)+min;
    }

    // var create_crate = function(){
    //     var geometry = new THREE.BoxGeometry(1,1,1);
    //     var crate_texture = new THREE.TextureLoader().load("./data/textures/crate0_diffuse.png");
    //     var bump_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_bump.png");
    //     var normal_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_normal.png");
    //     var material = new THREE.MeshPhongMaterial({map:crate_texture,bumpMap:bump_map_texture,normalMap:normal_map_texture});
    //     var crate = new THREE.Mesh(geometry,material);
    //     scene.add(crate);
    // };

    // var create_crate = function() {
    //     var geometry = new THREE.BoxGeometry(1,1,1);
    //     var crate_texture = new THREE.TextureLoader().load("./data/textures/crate0_diffuse.png");
    //     var bump_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_bump.png");
    //     var nomal_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_normal.png");
    //     var material = new THREE.MeshPhongMaterial({map: crate_texture, bumpMap: bump_map_texture, normalMap: nomal_map_texture});
    //     crate = new THREE.Mesh(geometry,material);
    //     crate.position.set(-20,0,-10)
    //     scene.add(crate);
    // }

    // var create_sphere = function() {
    //     var geometry = new THREE.SphereGeometry(3,100,100);
        
    //     var front_texture = "./data/textures/skybox/arid2_ft.jpg";
    //     var back_texture = "./data/textures/skybox/arid2_bk.jpg";
    //     var up_texture = "./data/textures/skybox/arid2_up.jpg";
    //     var down_texture = "./data/textures/skybox/arid2_dn.jpg";
    //     var right_texture = "./data/textures/skybox/arid2_rt.jpg";
    //     var left_texture = "./data/textures/skybox/arid2_lf.jpg";

    //     var loader = new THREE.CubeTextureLoader();

    //     var textureCube = loader.load( [
    //         front_texture, back_texture,
    //         up_texture, down_texture,
    //         right_texture, left_texture
    //     ]);

    //     var material = new THREE.MeshBasicMaterial({envMap:textureCube});
    //     sphere = new THREE.Mesh(geometry,material);
    //     sphere.position.set(0,0,0);
    //     sphere.encoding = THREE.sRGBEncoding;
    //     scene.add(sphere);
    // }

    var create_skybox = function(){
        var geometry = new THREE.BoxGeometry(10000,10000,10000);
        var front_texture = new THREE.TextureLoader().load("./data/textures/galaxy/galaxy-X.png");
        var back_texture = new THREE.TextureLoader().load("./data/textures/galaxy/galaxy-Y.png");
        var up_texture = new THREE.TextureLoader().load("./data/textures/galaxy/galaxy-Z.png");
        var down_texture = new THREE.TextureLoader().load("./data/textures/galaxy/galaxy+X.png");
        var right_texture = new THREE.TextureLoader().load("./data/textures/galaxy/galaxy+Y.png");
        var left_texture = new THREE.TextureLoader().load("./data/textures/galaxy/galaxy+Z.png");
        
        var materials = [];
        materials.push(new THREE.MeshBasicMaterial({map:front_texture}));
        materials.push(new THREE.MeshBasicMaterial({map:back_texture}));
        materials.push(new THREE.MeshBasicMaterial({map:up_texture}));
        materials.push(new THREE.MeshBasicMaterial({map:down_texture}));
        materials.push(new THREE.MeshBasicMaterial({map:right_texture}));
        materials.push(new THREE.MeshBasicMaterial({map:left_texture}));

        for(var i=0;i<6;i++){
            materials[i].side = THREE.BackSide;
        }

        skybox = new THREE.Mesh(geometry,materials);
        skybox.encoding = THREE.sRGBEncoding;
        scene.add(skybox);
    }

    // var meteor = function () {
    //     // let material = new THREE.LineBasicMaterial({color: 0xffffff ,linewidth:1});

    //     // let material = new THREE.LineDashedMaterial({color: 0xffffff ,linewidth:1,dashSize:1,gapSize:1});

    //     // var material = new THREE.BoxGeometry(5,50,50);

    //     // var geometry = new THREE.MeshBasicMaterial({color:0xffffff});

    //     // // geometry.computeLineDistances();
    //     // meteor = new THREE.Points(geometry,material);
    //     // meteor.positioưn.set(0,0,0);

    //     // scene.add(meteor);

    //     var geometry = new THREE.Geometry();
    //     var material = new THREE.PointsMaterial({
    //         color: 0xffffff,
    //     });
    //     for(let i = 1; i<= 1000; i++){
    //         let x = randomInRange(-25,25);
    //         let y = randomInRange(-20,20);
    //         let z = randomInRange(-20,20);
    //         geometry.vertices.push(new THREE.Vector3(x,y,z));
    //     }
    //     meteor = new THREE.Mesh(geometry,material);
    //     meteor.position.set(0,0,0);

    //     scene.add(meteor);

    // };
    var meteor = function () {
        // let material = new THREE.LineBasicMaterial({color: 0xffffff ,linewidth:1});

        // let material = new THREE.LineDashedMaterial({color: 0xffffff ,linewidth:1,dashSize:1,gapSize:1});

        // let material = new THREE.MeshNormalMaterial({transparent: true,});

        // let geometry = new THREE.BoxGeometry(5,5,5000,5);

        // for(let i = 1; i<= 1000; i++){
        //     let x = randomInRange(2000,20);
        //     let y = randomInRange(20,20);
        //     let z = randomInRange(-20,20);
        //     geometry.vertices.push(new THREE.Vector3(x,y,z));
        // }

        // // geometry.computeLineDistances();
        // particles = new THREE.Mesh(geometry,material);

        // scene.add(particles);

        var material = new THREE.MeshBasicMaterial({
            color:0xfff4bd
          });
          
        
          // Cube  
        var geometry = new THREE.BoxGeometry(5, 5, 500,5);

        var meteor = new THREE.Mesh(geometry,material);
        meteor.position.x = randomInRange(-10000, 10000);
        meteor.position.y = randomInRange(-10, 1000);
        meteor.position.z = randomInRange(-2000, 10000);
        meteor.name ="meteor";

        scene.add(meteor);  
        meteors.push(meteor);
    };

    var create_ground = function(){
        // var geometry = new THREE.PlaneGeometry(50,50,50);
        // var grass_texture  = new THREE.TextureLoader().load("./data/textures/street.jpg");
        // // var normal_texture = new THREE.TextureLoader().load("./data/textures/grass/Green-Grass-Ground-Texture-NORMAL.jpg");
        // // var disp_texture = new THREE.TextureLoader().load("./data/textures/grass/Green-Grass-Ground-Texture-DISP.jpg");
        // // var specular_texture = new THREE.TextureLoader().load("./data/textures/grass/Green-Grass-Ground-Texture-SPECULAR.jpg");
        // grass_texture.wrapS = THREE.RepeatWrapping;
        // grass_texture.wrapT = THREE.RepeatWrapping;
        // grass_texture.repeat.set( 3, 900 );
        // var material = new THREE.MeshBasicMaterial({map:grass_texture})
        // ground = new THREE.Mesh(geometry,material);
        // ground.position.z = -25;
        // ground.position.y = -4;
        // ground.rotation.x -= Math.PI/2;
        // ground.scale.y += window.innerWidth;    
        // ground.scale.x += 0.5;
        // // ground.wrapS = THREE.RepeatWrapping;
        // // ground.wrapT = THREE.RepeatWrapping;
        // // ground.repeat.set( 4, 4 , 4);
        // scene.add(ground);
        var gltfLoader = new THREE.GLTFLoader();
        
        gltfLoader.load(
            "./data/model/ground/scene.gltf",
            function(result){
                // object.position.y -= 10;
                ground = result.scene.children[0];
                ground.scale.setScalar(3);
                scene.add(ground);
                ground.position.y=30;
                ground.position.x = 0;
                ground.position.z = -30
                ground.position.z = 50;
                ground.position.y = -3;
                ground.rotation.z = 3.2;
                ground.rotation.z = 2*Math.PI/2;
                ground.scale.y += window.innerWidth;
                // ground.scale.y += window.innerWidth;    
                // ground.scale.x += -500000;
                // ground.position.x-= (size.x * 100000);
                ground.scale.set(0.09,1,0.05);
                // ground.wrapS = THREE.RepeatWrapping;
                // ground.wrapT = THREE.RepeatWrapping;
                // ground.repeat.set( 3, 900 );

            },
            function(xhr){
                console.log("the car model is" + (xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function(error){
                console.log('An error happened ' + error);
            },  
        )
        
    }

    var load_car_model = function(){
        var gltfLoader = new THREE.GLTFLoader();
        gltfLoader.load(
            "./data/model/robot/Xbot.glb",
            function(result){
                // object.position.y -= 10;
                car = result.scene.children[0];
                car.scale.setScalar(3);
                scene.add(car);
                car.position.y=-2.8;
                // car.position.x = 28;
                // car.position.z = -30;
                car.scale.set(0.08,0.08,0.08);
                // const animations = gltf.animations;
                // mixerCar = new THREE.AnimationMixer(car);
                // gltfLoader.animation.forEach((clip) => {
                //     mixerCar.clipAction(clip).play();
                // });

				// 	numAnimations = animations.length;

				// 	for ( let i = 0; i !== numAnimations; ++ i ) {

				// 		let clip = animations[ i ];
				// 		const name = clip.name;

				// 		if ( baseActions[ name ] ) {

				// 			const action = mixer.clipAction( clip );
				// 			activateAction( action );
				// 			baseActions[ name ].action = action;
				// 			allActions.push( action );

				// 		} else if ( additiveActions[ name ] ) {

				// 			// Make the clip additive and remove the reference frame

				// 			THREE.AnimationUtils.makeClipAdditive( clip );

				// 			if ( clip.name.endsWith( '_pose' ) ) {

				// 				clip = THREE.AnimationUtils.subclip( clip, clip.name, 2, 3, 30 );

				// 			}

				// 			const action = mixer.clipAction( clip );
				// 			activateAction( action );
				// 			additiveActions[ name ].action = action;
				// 			allActions.push( action );

				// 		}

                //     }
                //     createPanel();

				// 	animate();

            },
            function(xhr){
                console.log("the car model is" + (xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function(error){
                console.log('An error happened ' + error);
            },
        )
    }

    // var load_car_model = function(){
    //     var gltfLoader = new THREE.GLTFLoader();
    //     gltfLoader.load(
    //         "./data/model/car/scene.gltf",
    //         function(result){
    //             // object.position.y -= 10;
    //             car = result.scene.children[0];
    //             car.scale.setScalar(3);
    //             scene.add(car);
    //             car.position.set(0,0,0);


    //         },
    //         function(xhr){
    //             console.log("the car model is" + (xhr.loaded / xhr.total * 100) + '% loaded');
    //         },
    //         function(error){
    //             console.log('An error happened ' + error);
    //         },
    //     )
    // }

    var a=function(meteor){
        meteor.position.z += 50;
    }

    var onKeyDown = function(e){
        console.log("the current key:"+e.keyCode);
        switch(e.keyCode){
            case ARROWLEFT:
                car.position.x += -0.8;
                break;
            case ARROWRIGHT:
                car.position.x += 0.8;
                break;
            case ARROWUP:
                ground.position.z += 10;
                

                break;
            case ARROWDOWN:
                ground.position.z += -10;
                meteors.forEach(a);
                break;
            default:
                console.log("the current key:"+e.keyCode);
        }
    }

    var init_app = function() {
        // 1. create the scene
        scene = new THREE.Scene();
        
        // scene.fog = new THREE.Fog(0xFFFFFF, 100, 100);
        // create background
        // scene.background = new THREE.Color(0xffffff);
        // scene.background = new THREE.TextureLoader().load("data/textures/people.jpg");

        // 2. create an locate the camera
        var canvasWidth = window.innerWidth, canvasHeight = window.innerHeight;
        var feilfOfViewY = 60, aspectRatio = canvasWidth/ canvasHeight, near=1.0, far=10000.0;
        camera = new THREE.PerspectiveCamera(feilfOfViewY, aspectRatio, near, far);
        // camera.position.x = 20;
        // camera.position.y = -10;

        camera.position.set( 0, 30, -40);
        camera.rotation.y += 3.1;
        camera.rotation.x = 0.3;

        
        // 3.create and locate the objects on the scene

        var ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        var pointLight = new THREE.PointLight(0xffffff,0.8,100);
        pointLight.position.set(0, 0, 0); 
        scene.add(pointLight);

        const keyLight = new THREE.DirectionalLight(0xffffff, 1);
        keyLight.position.set(0,0,-20);
        // keyLight.rotation.y = 100;
        scene.add(keyLight);
        // const fillLight = new THREE.DirectionalLight(0xffffff, 5);
        // fillLight.position.set(0, 5, 0);
        // scene.add(fillLight);
        // const backLight = new THREE.DirectionalLight(0xffffff, 1);
        // backLight.position.set(0, 20,0);
        // backLight.rotation.x=20
        // scene.add(backLight);

       
        
        
        create_skybox();
        create_ground();
        load_car_model();
        // meteor();
        


        document.addEventListener("keydown", onKeyDown,false);
        


        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        // renderer.outputEncoding = THREE.sRGBEncoding;
        document.body.appendChild( renderer.domElement );

        // controls = new THREE.OrbitControls(camera,renderer.domElement );

        

        // controls.enableDamping = true;
        // controls.campingFactor = 0.25;
        // console.log(camera.position.set());
        // controls.update();
        // renderer.render( scene, camera );
    };

    var update_meteor = function(meteor){
            meteor.position.z += 15;
    }

    // main animation loop - calls every 50-60ms.
    var mainLoop = function(){

        // controls.update();

        
        let rand = Math.random();
        if(rand < 100){
            meteor();
        }
        meteors.forEach(update_meteor);

        renderer.render(scene,camera);
        requestAnimationFrame(mainLoop);
    };

    


    // function animate() {
    //     const delta = clock.getDelta();
    //     mixerCar.update(delta);
    //     requestAnimationFrame( animate );
    
    //     // required if controls.enableDamping or controls.autoRotate are set to true
    //     // controls.update();
    
    //     // renderer.render( scene, camera );
    
    // }
    init_app();
    mainLoop();
    // animate();
}