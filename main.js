function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(300, 150)

    canvas = createCanvas(550, 550);
    canvas.position(975, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#E4F9DC');
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
    }
}