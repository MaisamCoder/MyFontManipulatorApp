noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup()
{
    canvas = createCanvas(800, 800);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 550);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw()
{
    background('#352A2A');
    fill('#12329E');
    stroke('#AE0303');
    textSize(difference);
    text('Maisam', noseX, noseY);
}

function modelLoaded()
{
    console.log("Posenet is Initalizied!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
    }
}


