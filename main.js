noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#E4F9DC');

    document.getElementById("fontsizeh4").innerHTML = "Font Size Is: " + difference + "px";

    textSize(difference);
    fill('pink');
    stroke('pink');
    text('Tilak', noseX, noseY, 50, 400);
}

function modelLoaded() {
    console.log('PoseNet Model Loaded')
}

function gotPoses(results, errors) {
    if(errors) {
        console.error(error);
    }
    else if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + " Nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " Differece = " + difference);
    }
}