var app = function(){
    // initiallize scene, camera, objects and renderer

    var scene, camera, renderer;
    var meteors = [];
    var mixers = [];

    var sphere;
    var spheres = [];
    
    var box2;
    var box2s = [];

    var box3;
    var box3s = [];

    var box4;
    var box4s = [];

    var box5;
    var box5s = [];

    var box6;
    var box6s = [];

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
        var geometry = new THREE.BoxGeometry(25, 50, 20);
        var crate_texture = new THREE.TextureLoader().load("./data/image/meteorite.jpg");
        // var bump_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_bump.png");
        // var normal_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_normal.png");
        var material = new THREE.MeshPhongMaterial({map:crate_texture, color: 0x2B4E79});
        sphere = new THREE.Mesh(geometry,material);
        // crate.position.set(0,10,0);
        sphere.position.x = 0;
        sphere.position.y = 30;
        sphere.position.z = 2000;
        // sphere.rotation.z = MY_LIBS.degToRad(90);
        // sphere.scale.y = randomInRange(1, 5);
        // crate.scale.z = randomInRange(1, 5);
        scene.add(sphere);

        sphere.name ="sphere";
        spheres.push(sphere);
    };  

    var create_box4 = function(){
        var geometry = new THREE.BoxGeometry(20, 15 , 20);
        var crate_texture = new THREE.TextureLoader().load("./data/image/meteorite.jpg");
        // var bump_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_bump.png");
        // var normal_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_normal.png");
        var material = new THREE.MeshPhongMaterial({map:crate_texture, color: 0x2B4E79});
        box4 = new THREE.Mesh(geometry,material);
        // crate.position.set(0,10,0);
        box4.position.x = 0;
        box4.position.y = 15;
        box4.position.z = 2000;
        scene.add(box4);

        box4.name ="box4";
        box4s.push(box4);
    };  

    var create_box2 = function(){
        var geometry = new THREE.BoxGeometry(20, 15 , 20);
        var crate_texture = new THREE.TextureLoader().load("./data/image/meteorite.jpg");
        // var bump_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_bump.png");
        // var normal_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_normal.png");
        var material = new THREE.MeshPhongMaterial({map:crate_texture, color: 0x2B4E79});
        box2 = new THREE.Mesh(geometry,material);
        // crate.position.set(0,10,0);
        box2.position.x = 25;
        box2.position.y = 15;
        box2.position.z = 1500;
        // box2.scale.x = -2;
        // sphere.rotation.z = MY_LIBS.degToRad(90);
        // sphere.scale.y = randomInRange(1, 5);
        // crate.scale.z = randomInRange(1, 5);
        scene.add(box2);

        box2.name ="box2";
        box2s.push(box2);
    };  

    var create_box5 = function(){
        var geometry = new THREE.BoxGeometry(25, 50, 20);
        var crate_texture = new THREE.TextureLoader().load("./data/image/meteorite.jpg");
        // var bump_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_bump.png");
        // var normal_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_normal.png");
        var material = new THREE.MeshPhongMaterial({map:crate_texture, color: 0x2B4E79});
        box5 = new THREE.Mesh(geometry,material);
        // crate.position.set(0,10,0);
        box5.position.x = 25;
        box5.position.y = 30;
        box5.position.z = 1500;
        // box2.scale.x = -2;
        // sphere.rotation.z = MY_LIBS.degToRad(90);
        // sphere.scale.y = randomInRange(1, 5);
        // crate.scale.z = randomInRange(1, 5);
        scene.add(box5);

        box5.name ="box5";
        box5s.push(box5);
    };  

    var create_box3 = function(){
        var geometry = new THREE.BoxGeometry(20, 15 , 20);
        var crate_texture = new THREE.TextureLoader().load("./data/image/meteorite.jpg");
        // var bump_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_bump.png");
        // var normal_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_normal.png");
        var material = new THREE.MeshPhongMaterial({map:crate_texture, color: 0x2B4E79});
        box3 = new THREE.Mesh(geometry,material);
        // crate.position.set(0,10,0);
        box3.position.x = -29;
        box3.position.y = 15;
        box3.position.z = 2500;
        scene.add(box3);

        box3.name ="box3";
        box3s.push(box3);
    };  

    var create_box6 = function(){
        var geometry = new THREE.BoxGeometry(25, 50, 20);
        var crate_texture = new THREE.TextureLoader().load("./data/image/meteorite.jpg");
        // var bump_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_bump.png");
        // var normal_map_texture = new THREE.TextureLoader().load("./data/textures/crate0_normal.png");
        var material = new THREE.MeshPhongMaterial({map:crate_texture, color: 0x2B4E79});
        box6 = new THREE.Mesh(geometry,material);
        // crate.position.set(0,10,0);
        box6.position.x = -29;
        box6.position.y = 30;
        box6.position.z = 2500;
        scene.add(box6);

        box6.name ="box6";
        box6s.push(box6);
    };  

    var random_sphere = function(){

        spheres.forEach((sphere, index) => {
            sphere.position.z += -5;  
            // sphere.rotation.x -= MY_LIBS.degToRad(3);
            console.log(sphere.position.z - robot.position.z);
                if(sphere.position.z - robot.position.z < 5){
                        if(sphere.position.y > robot.position.y ){
                            if(sphere.position.x + 15 > robot.position.x && sphere.position.x - 15 < robot.position.x){   
                                scene.remove(sphere);
                                document.getElementById("modal-lose").style.display = "block";
                                document.getElementById("score-main").style.display = "none";
                                cancelAnimationFrame(animation);
                            }
                        }   
                }

                if(sphere.position.x < robot.position.x || sphere.position.x > robot.position.x){
                        if(sphere.position.z < robot.position.z -20 ){
                            scene.remove(sphere);
                            spheres.splice(index,1);
                            console.log(spheres);
                            count++;
                            console.log("count", count);
                            var elem = document.getElementById("score");
                            elem.innerHTML = count;
                            var elem2 = document.getElementById("score-2");
                            elem2.innerHTML = count;
                    }
                }


                if(count >= 100){
                    document.getElementById("modal-winner").style.display = "block";
                    document.getElementById("score-main").style.display = "none";
                    cancelAnimationFrame(animation);
                }
                if(count >5){
                    sphere.position.z += -1;
                }
        });
        if(spheres[spheres.length-1].position.z <1000){
            create_sphere();
        }
    }

    var random_box2 = function(){

        box2s.forEach((box2, index) => {
            box2.position.z += -5;  
            // sphere.rotation.x -= MY_LIBS.degToRad(3);
            console.log(box2.position.z - robot.position.z);
                if(box2.position.z - robot.position.z < 5){
                    if(box2.position.y > robot.position.y ){
                        if(box2.position.x - 15 < robot.position.x){   
                            scene.remove(box2);
                            document.getElementById("modal-lose").style.display = "block";
                            document.getElementById("score-main").style.display = "none";
                            cancelAnimationFrame(animation);
                        }
                    }
                }

                if(box2.position.x < robot.position.x || box2.position.x > robot.position.x){
                        if(box2.position.z < robot.position.z -20 ){
                            scene.remove(box2);
                            box2s.splice(index,1);
                            console.log(box2s);
                            count++;
                            console.log("count", count);
                            var elem = document.getElementById("score");
                            elem.innerHTML = count;
                            var elem2 = document.getElementById("score-2");
                            elem2.innerHTML = count;
                    }
                }


                if(count >= 100){
                    document.getElementById("modal-winner").style.display = "block";
                    document.getElementById("score-main").style.display = "none";
                    cancelAnimationFrame(animation);
                }

                if(count >5){
                    box2.position.z += -1;
                }
        });
        if(box2s[box2s.length-1].position.z <1000){
            create_box2();
        }
    }

    var random_box5 = function(){

        box5s.forEach((box5, index) => {
            box5.position.z += -5;  
            // sphere.rotation.x -= MY_LIBS.degToRad(3);
            console.log(box5.position.z - robot.position.z);
                if(box5.position.z - robot.position.z < 5){
                    if(box5.position.y > robot.position.y ){
                        if(box5.position.x - 15 < robot.position.x){   
                            scene.remove(box5);
                            document.getElementById("modal-lose").style.display = "block";
                            document.getElementById("score-main").style.display = "none";
                            cancelAnimationFrame(animation);
                        }
                    }
                }

                if(box5.position.x < robot.position.x || box5.position.x > robot.position.x){
                        if(box5.position.z < robot.position.z -20 ){
                            scene.remove(box5);
                            box5s.splice(index,1);
                            count++;
                            console.log("count", count);
                            var elem = document.getElementById("score");
                            elem.innerHTML = count;
                            var elem2 = document.getElementById("score-2");
                            elem2.innerHTML = count;
                    }
                }


                if(count >= 100){
                    document.getElementById("modal-winner").style.display = "block";
                    document.getElementById("score-main").style.display = "none";
                    cancelAnimationFrame(animation);
                }

                if(count >5){
                    box5.position.z += -1;
                }
        });
        if(box5s[box5s.length-1].position.z <500){
            create_box5();
        }
    }

    var random_box3 = function(){

        box3s.forEach((box3, index) => {
            box3.position.z += -5;  
                if(box3.position.z - robot.position.z < 5){
                    if(box3.position.y > robot.position.y ){
                        if(box3.position.x + 15 > robot.position.x){   
                            scene.remove(box3);
                            document.getElementById("modal-lose").style.display = "block";
                            document.getElementById("score-main").style.display = "none";
                            cancelAnimationFrame(animation);
                        }
                    }
                }

                if(box3.position.x < robot.position.x || box3.position.x > robot.position.x){
                        if(box3.position.z < robot.position.z -20 ){
                            scene.remove(box3);
                            box3s.splice(index,1);
                            count++;
                            console.log("count", count);
                            var elem = document.getElementById("score");
                            elem.innerHTML = count;
                            var elem2 = document.getElementById("score-2");
                            elem2.innerHTML = count;
                    }
                }


                if(count >= 100){
                    document.getElementById("modal-winner").style.display = "block";
                    document.getElementById("score-main").style.display = "none";
                    cancelAnimationFrame(animation);
                }

                if(count >5){
                    box3.position.z += -1;
                }
        });
        if(box3s[box3s.length-1].position.z <2000){
            create_box3();
        }
    }

    var random_box6 = function(){

        box6s.forEach((box6, index) => {
            box6.position.z += -5;  
                if(box6.position.z - robot.position.z < 5){
                    if(box6.position.y > robot.position.y ){
                        if(box6.position.x + 15 > robot.position.x){   
                            scene.remove(box6);
                            document.getElementById("modal-lose").style.display = "block";
                            document.getElementById("score-main").style.display = "none";
                            cancelAnimationFrame(animation);
                        }
                    }
                }

                if(box6.position.x < robot.position.x || box6.position.x > robot.position.x){
                        if(box6.position.z < robot.position.z -20 ){
                            scene.remove(box6);
                            box6s.splice(index,1);
                            count++;
                            console.log("count", count);
                            var elem = document.getElementById("score");
                            elem.innerHTML = count;
                            var elem2 = document.getElementById("score-2");
                            elem2.innerHTML = count;
                    }
                }


                if(count >= 100){
                    document.getElementById("modal-winner").style.display = "block";
                    document.getElementById("score-main").style.display = "none";
                    cancelAnimationFrame(animation);
                }

                if(count >5){
                    box6.position.z += -1;
                }
        });
        if(box6s[box6s.length-1].position.z <1500){
            create_box6();
        }
    }

    var random_box4 = function(){

        box4s.forEach((box4, index) => {
            box4.position.z += -5;  
            // sphere.rotation.x -= MY_LIBS.degToRad(3);
            console.log(box4.position.z - robot.position.z);
                if(box4.position.z - robot.position.z < 5){
                        if(box4.position.y > robot.position.y ){
                            if(box4.position.x + 15 > robot.position.x && box4.position.x - 15 < robot.position.x){   
                                scene.remove(box4);
                                document.getElementById("modal-lose").style.display = "block";
                                document.getElementById("score-main").style.display = "none";
                                cancelAnimationFrame(animation);
                            }
                        }   
                }

                if(box4.position.x < robot.position.x || box4.position.x > robot.position.x){
                        if(box4.position.z < robot.position.z -20 ){
                            scene.remove(box4);
                            box4s.splice(index,1);
                            count++;
                            console.log("count", count);
                            var elem = document.getElementById("score");
                            elem.innerHTML = count;
                            var elem2 = document.getElementById("score-2");
                            elem2.innerHTML = count;
                    }
                }


                if(count >= 100){
                    document.getElementById("modal-winner").style.display = "block";
                    document.getElementById("score-main").style.display = "none";
                    cancelAnimationFrame(animation);
                }
                if(count >5){
                    box4.position.z += -1;
                }
        });

        if(box4s[box4s.length-1].position.z < 500){
            create_box4();
        }
    }


    





    var limit_ground = function(){
        if(robot.position.x >= 29){
            robot.position.x = 29;
        }
        if(robot.position.x <= -29){
            robot.position.x = -29;
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
            robot.position.x += 0.5;
            callanimation[1].play();
            callanimation[0].stop();
            callanimation[2].stop();
        }   
        if(robot.rotation.y <= -1){
            robot.position.x -= 0.5;
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

        box2s.forEach(box2 => {
            scene.remove(box2);
        });
        box2s = [];
        create_box2();

        box3s.forEach(box3 => {
            scene.remove(box3);
        });
        box3s = [];
        create_box3();

        box4s.forEach(box4 => {
            scene.remove(box4);
        });
        box4s = [];
        create_box4();

        box5s.forEach(box5 => {
            scene.remove(box5);
        });
        box5s = [];
        create_box5();

        box6s.forEach(box6 => {
            scene.remove(box6);
        });
        box6s = [];
        create_box6();

        robot.position.x = 0;
        robot.rotation.y = 0;


        ground.position.z = 5000;
        count = 0;
        var elem = document.getElementById("score");
        elem.innerHTML = count;

        var elem2 = document.getElementById("score-2");
        elem2.innerHTML = count;


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

        create_box2();
        create_box3();
        create_box4();
        create_box5();
        create_box6();

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

        
        // sphere.rotation.x -= MY_LIBS.degToRad(3);

        animation = requestAnimationFrame(mainLoop);
        ground.position.z += -0.5;
        runModel();
        random_sphere();
        random_box2();
        random_box3();
        random_box4();
        random_box5();
        random_box6();
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