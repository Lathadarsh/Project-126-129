song1="";
song2="";
lwX = 0;
lwY = 0;
rwX = 0;
rwY = 0;
function preload() {
    song1 = loadSound("Harry potter theme song.mp3");
    song2 = loadSound("Peter Pan song.mp3");
}

function setup() {
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function draw() {
image(video,0,0,600,500);
}
function play() {
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        lwX = results[0].pose.leftWrist.x;
        lwY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + lwX + " Left Wrist Y = " + lwY);

        rwX = results[0].pose.rightWrist.x;
        rwY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rwX + " Right Wrist Y = " + rwY);
    }
}