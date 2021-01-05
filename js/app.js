var app = function(){
    // initiallize scene, camera, objects and renderer

    var scene, camera, renderer;
    var meteors = [];
    var mixers = [];
    var sphere;
    var spheres = [];
    var count = 0;
    var animation;
    var callanimation = [];
    // var ground;
    // var mixerPlane;
    const clock = new THREE.Clock();

    var randomInRange = function(min, max){
        return Math.random()*(max-min)+min;
    }

    var create_sphere = function(){
        var geometry = new THREE.CylinderGeometry(5, 5, 60, 50);
        var crate_texture = new THREE.TextureLoader().load("./data/image/dolar.jpg");
        // var bump_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_bump.png");
        // var normal_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_normal.png");
        var material = new THREE.MeshPhongMaterial({map:crate_texture});
        sphere = new THREE.Mesh(geometry,material);
        // crate.position.set(0,10,0);
        sphere.position.x = 0;
        sphere.position.y = 15;
        sphere.position.z = 500;
        sphere.rotation.z = MY_LIBS.degToRad(90);
        // sphere.scale.y = randomInRange(1, 5);
        // crate.scale.z = randomInRange(1, 5);
        scene.add(sphere);

        sphere.name ="sphere";
        spheres.push(sphere);
    };

    var random_sphere = function(sphere){
        
         
        
        // if(sphere.position.z - robot.position.z <= 1){
        //     if((sphere.position.x + 10) >= robot.position.x && (sphere.position.x - 10) <= robot.position.x){
        //         if(scene.remove(sphere)){
        //             count++;
        //             var elem = document.getElementById("score");
        //             elem.innerHTML = count;
        //         }
        //         create_sphere();
        //     }
        // }
        // if(sphere.position.z <= -10){
        //     document.getElementById("modal-lose").style.display = "block";
        //     cancelAnimationFrame(animation);
        // }

        spheres.forEach((sphere, index) => {
            sphere.position.z += -5;  
            // console.log(sphere.position.z - robot.position.z);
                if(sphere.position.z - robot.position.z < 5){
                        if(sphere.position.y > robot.position.y ){
                            scene.remove(sphere);
                            document.getElementById("modal-lose").style.display = "block";
                            cancelAnimationFrame(animation);
                        }   
                }

                // if(sphere.position.z < robot.position.z-20 ){
                //     scene.remove(sphere);
                //     spheres.splice(index,1);
                //     console.log(spheres);
                //     count++;
                //     console.log("count", count);
                //     var elem = document.getElementById("score");
                //     elem.innerHTML = count;
                // }

                if(robot.position.y - sphere.position.y >= 5){
                    if(sphere.position.z < robot.position.z-20 ){
                        scene.remove(sphere);
                        spheres.splice(index,1);
                        console.log(spheres);
                        count++;
                        console.log("count", count);
                        var elem = document.getElementById("score");
                        elem.innerHTML = count;
                    }
                }
        });

        if(spheres[spheres.length-1].position.z <100){
            create_sphere();
            
        }
       

        // if(sphere.position.z <= 100){
        //     scene.add(sphere);

        // }
    }


    var limit_ground = function(){
        if(robot.position.x >= 30){
            robot.position.x = 30;
        }
        if(robot.position.x <= -30){
            robot.position.x = -30;
        }
    }

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
    
    var create_meteor = function () {

        var material = new THREE.MeshBasicMaterial({
            color:Math.random()*0xfff4bd
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
        var gltfLoader = new THREE.GLTFLoader();
        
        gltfLoader.load(
            "./data/model/ground/scene.gltf",
            function(result){
                // object.position.y -= 10;
                ground = result.scene.children[0];
                ground.scale.setScalar(3);
                
                ground.position.y=30;
                ground.position.x = 0;
                ground.position.z = 5000;
                ground.position.y = -3;
                ground.rotation.z = 3.2;
                ground.rotation.z = 2*Math.PI/2;
                ground.scale.y += window.innerWidth;
                ground.scale.set(0.15,1,0.05);
                scene.add(ground);

            },
            function(xhr){
                // console.log("the car model is" + (xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function(error){
                // console.log('An error happened ' + error);
            },  
        )
        
    }

    var create_robot = function(){
        modelLoader = new THREE.GLTFLoader();
        modelLoader.load('./data/model/RobotExpressive/RobotExpressive.glb', function(gltf){
            robot = gltf.scene;

            robot.scale.set(5,5,5);
            robot.position.z = 0;
            robot.position.x = 0;
            scene.add(robot);

            mixerRobot = new THREE.AnimationMixer(robot);
            // for(let i = 0; i <= gltf.animations.length; i++ ){
            callanimation1 = mixerRobot.clipAction( gltf.animations[10] );
            callanimation2 = mixerRobot.clipAction( gltf.animations[6] );
            callanimation3 = mixerRobot.clipAction( gltf.animations[3] );
            callanimation = [callanimation1,callanimation2,callanimation3];
            // }
            mixers.push(mixerRobot);
        });
    }

    var onDocumentKeyDown = function(e){
        // console.log("the current key:"+e.keyCode);
        switch(e.keyCode){
            case 68:
                runModel();

                robot.position.x += -1;
                robot.rotation.y += -1;

                if(robot.rotation.y <= -1){
                    robot.rotation.y = -1;
                }
                break;
                
            case 65:
                runModel();
                
                robot.position.x += 1;
                robot.rotation.y += 1;

                if(robot.rotation.y >= 1){
                    robot.rotation.y = 1;
                }
                break;

            case 87: 
                runModel();

                setup();
                break;
            
            default:
                // console.log("the current key:"+e.keyCode);
        }
    }

    var setup = function(){
        robot.position.y = 20;
        if(robot.position.z <= 20){
            var interval_obj = setInterval(function(){
                robot.position.y = 0;
                clearInterval(interval_obj);
            }, 500);
        }
    }

    var runModel = function(){
        
        if(robot.rotation.y >= 1){
            robot.position.x += 0.3;
            callanimation[1].play();
            callanimation[0].stop();
            callanimation[2].stop();
        }   
        if(robot.rotation.y <= -1){
            robot.position.x -= 0.3;
            callanimation[1].play();
            callanimation[0].stop();
            callanimation[2].stop();
        }
        if(robot.rotation.y == 0){
            callanimation[1].stop();
            callanimation[0].play();
        }

        if(robot.position.y >= 17){
            robot.rotation.y = 0;
            robot.position.x += 0;
            callanimation[2].play();
            callanimation[0].stop();
        }
        if(robot.position.y <= 0){
            callanimation[2].stop();
        }
    }


    var reload = function(){
        
        spheres.forEach(sphere => {
            scene.remove(sphere);
        });
        spheres = [];
        create_sphere();

        
        ground.position.z = 5000;
        count = 0;
        var elem = document.getElementById("score");
        elem.innerHTML = count;
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
        var feilfOfViewY = 60, aspectRatio = canvasWidth/ canvasHeight, near=1.0, far=100000.0;
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
        pointLight.position.set(0, 10, 10); 
        scene.add(pointLight);

        const keyLight = new THREE.DirectionalLight(0xffffff, 1);
        keyLight.position.set(0,10,-10);
        // keyLight.rotation.y = 100;
        scene.add(keyLight);
        const fillLight = new THREE.DirectionalLight(0xffffff, 1);
        fillLight.position.set(10, 10, -5);
        scene.add(fillLight);
        // const backLight = new THREE.DirectionalLight(0xffffff, 1);
        // backLight.position.set(-10, 10,5);
        // backLight.rotation.x=20
        // scene.add(backLight);

       
        
        create_sphere();
        // create_bullet();
        // create_plane();
        create_ground();

        create_skybox();
        create_robot();

        // meteor();
        


        // document.addEventListener("keydown", onDocumentKeyDown,false);
        // document.addEventListener("keypress", onDocumentKeyDown,false);
        document.addEventListener("keyup", onDocumentKeyDown,false);

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

    var animate = function(){
        const delta = clock.getDelta();
        for(let i =0; i< mixers.length; i++)
        mixers[i].update(delta);
    }

    // main animation loop - calls every 50-60ms.
    var mainLoop = function(){


        // console.log("vi tri z" + sphere.position.z);
        // console.log("vi tri z ground" + ground.position.z);
        // console.log("so vat can" + spheres.length);
        animate();
        callanimation[0].play();

        let rand = Math.random();
        if(rand < 100){
            create_meteor();
        }

        meteors.forEach(update_meteor);

        
        sphere.rotation.x -= MY_LIBS.degToRad(3);

        animation = requestAnimationFrame(mainLoop);
        ground.position.z += -0.5;
        runModel();
        random_sphere();
        limit_ground();
        // position_bullet();
        // update_bullet();
        // random_plane();
        renderer.render(scene,camera);
    };


    init_app();
    document.getElementById("starbutton").addEventListener("click", function() {
        // sphere.position.z  = 500;  
        reload();
        mainLoop();
    });
   
    // animate();
}