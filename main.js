prediction = "";

Webcam.set({
    width: 350,
    heigth: 300,
    image_format:'png',
    png_quality : 90,
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:",ml5.version);
classifier = ml5.imageclassifier('https://drive.google.com/file/d/1wITf2xsm9T5yfrOdfEYk3pJKPuPLqnW6/view?usp=sharing');

function modelloaded(){
    console.log("Model loaded successfully!");
}

function speak(){
    var synth = window.speechsynthesis;
    var speak_data = "The Prediction is"+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}