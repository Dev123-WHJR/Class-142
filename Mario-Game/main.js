

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	//img = loadImage("mario.jpg")
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model loaded!!1');
}

function gotPoses(results) {
	if (results[0].length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game();
}