var app = function(){
    // initiallize scene, camera, objects and renderer

    var scene, camera, renderer;
    var meteors = [];
    var mixers = [];
    var bullets = [];
    var count = 0;
    // var ground;
    // var mixerPlane;
    const clock = new THREE.Clock();

    var randomInRange = function(min, max){
        return Math.random()*(max-min)+min;
    }

    var create_sphere = function(){
        var geometry = new THREE.SphereGeometry(7,50,50);
        var crate_texture = new THREE.TextureLoader().load("./data/image/dolar.jpg");
        // var bump_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_bump.png");
        // var normal_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_normal.png");
        var material = new THREE.MeshPhongMaterial({map:crate_texture});
        sphere = new THREE.Mesh(geometry,material);
        // crate.position.set(0,10,0);
        sphere.position.x = randomInRange(-30, 30);
        sphere.position.y = 10;
        sphere.position.z = 500;
        // crate.scale.x = randomInRange(1, 5);
        // crate.scale.z = randomInRange(1, 5);
        scene.add(sphere);

        // sphere.name ="sphere";
        // spheres.push(sphere);
    };

    var create_bullet = function(){
        var geometry = new THREE.SphereGeometry(3,50,50);
        // var crate_texture = new THREE.TextureLoader().load("./data/image/dolar.jpg");
        // var bump_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_bump.png");
        // var normal_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_normal.png");
        var material = new THREE.MeshBasicMaterial({color: 0xfca903});
        bullet = new THREE.Mesh(geometry,material);
        // crate.position.set(0,10,0);
        // bullet.position.x = randomInRange(-30, 30);
        bullet.position.y = randomInRange(5,15);
        bullet.position.z = 0;
        // crate.scale.x = randomInRange(1, 5);
        // crate.scale.z = randomInRange(1, 5);
        // scene.add(bullet);

        bullet.name ="bullet";
        bullets.push(bullet);
    }

    // var add_bullet = function(){
    //     scene.add(bullet);

    //     bullet.name ="bullet";
    //     bullets.push(bullet);
    // }

    

    var position_bullet = function(){
        bullet.position.z += 2;
        // if(bullet.position.x != robot.position.x){
        //     scene.remove(bullet);
        // }
        // if(bullets.length != 0){
        //     bullet.position.z += 2;
        // }
    }

    var update_bullet = function(){
        bullet.position.x = randomInRange(robot.position.x + 7 ,robot.position.x - 7);
        bullet.position.z = 0;
        scene.add(bullet);
        
        // let rand = Math.random();
        // if(rand < 100){
        //     create_bullet();
        //     scene.add(bullet);
        // }

        // bullets.forEach(abc);
    }

    var random_sphere = function(){
        // var interval_obj = setInterval(function(){
        //     crate.position.z += -2;
        //     clearInterval(interval_obj);
        // }, 5000);
        
        sphere.position.z += -2;    
        
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
        if(sphere.position.z <= -10){
            document.getElementById("modal-lose").style.display = "block";
        }
        if(sphere.position.z - bullet.position.z <=1){
            if((sphere.position.x + 10) >= bullet.position.x && (sphere.position.x - 10) <= bullet.position.x){
                scene.remove(sphere)
                count++;
                var elem = document.getElementById("score");
                elem.innerHTML = count;
                create_sphere();
                scene.remove(bullet);
            }
        }
    }


    var limit_ground = function(){
        if(robot.position.x >= 30){
            robot.position.x = 30;
        }
        if(robot.position.x <= -30){
            robot.position.x = -30;
        }
    }


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

    // var create_skybox = function(){
    //     var geometry = new THREE.SphereGeometry(10000,10000,10000);
    //     textureEquirec = new THREE.TextureLoader().load('./data/image/sky2.jpg');
    //     textureEquirec.mapping = THREE.EquirectangularReflectionMapping;
    //     textureEquirec.encoding = THREE.sRGBEncoding;

    //     scene.background = textureEquirec;
        
    // }

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
                // ground.position.z = 5000;
                ground.position.z = 5000;
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
                scene.add(ground);

            },
            function(xhr){
                console.log("the car model is" + (xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function(error){
                console.log('An error happened ' + error);
            },  
        )
        
    }

    var create_robot = function(){
        modelLoader = new THREE.GLTFLoader();
        modelLoader.load('./data/model/RobotExpressive/RobotExpressive.glb', function(gltf){
            robot = gltf.scene;
            // plane.rotation.y = MY_LIBS.degToRad(90);
            robot.scale.set(5,5,5);
            // plane.position.x = 6050;
            robot.position.z = 0;
            robot.position.x = 0;
            scene.add(robot);
            mixerRobot = new THREE.AnimationMixer(robot);
            // for(let i = 0; i <= gltf.animations.length; i++ ){
            mixerRobot.clipAction( gltf.animations[6] ).play();
            // }
            mixers.push(mixerRobot);
        });
    }


    // var a=function(meteor){
    //     meteor.position.z += 50;
    // }

    var onDocumentKeyDown = function(e){
        console.log("the current key:"+e.keyCode);
        switch(e.keyCode){
            case 68:
                robot.position.x += -1;
                robot.rotation.y += -1;

                if(robot.rotation.y <= -1){
                    robot.rotation.y = -1;
                }
                break;
                
            case 65:
                robot.position.x += 1;
                robot.rotation.y += 1;

                if(robot.rotation.y >= 1){
                    robot.rotation.y = 1;
                }
                break;

            case 87: 
                robot.rotation.y = 0;
                break;

            case 32:
                update_bullet();
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
        create_bullet();
        // create_plane();
        create_ground();

        create_skybox();
        create_robot();

        // meteor();
        


        document.addEventListener("keydown", onDocumentKeyDown,true);
        


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

    // var update_crates = function(crate){
    //     crate.position.z -= 1;
    // }

    var animate = function(){
        const delta = clock.getDelta();
        for(let i =0; i< mixers.length; i++)
        mixers[i].update(delta);
    }

    // main animation loop - calls every 50-60ms.
    var mainLoop = function(){
        
        animate();
        

        let rand = Math.random();
        if(rand < 100){
            meteor();
        }

        meteors.forEach(update_meteor);


        // plane.rotation.x += -2;

        
        sphere.rotation.y += MY_LIBS.degToRad(3);

        requestAnimationFrame(mainLoop);
        ground.position.z += -0.5;
        random_sphere();
        limit_ground();
        position_bullet();
        // update_bullet();
        // random_plane();
        renderer.render(scene,camera);
    };


    init_app();
    mainLoop();
    // animate();
}