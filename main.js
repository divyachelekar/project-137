status = "";
objects = [];

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){

}






function setup(){
    canvas = createCanvas(480 , 380);
    canvas.position(500 , 300);

    video = createCapture(VIDEO);
    video.hide();


}


function draw(){
    image(video , 0 , 0 , 480 , 380);

    if(status != ""){
        objectDetector.detect(video , gotResult);

        for(i=0 ; i < objects.length; i++){

            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length;

            fill('#03fca5');
            persent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + persent + "%" , objects[i].x + 15 , objects[i].y + 15);
            noFill();
            stroke('#03fca5');
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }


}

function gotResult(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    if(objects[i].label == input_value){
        video.stop();
        document.getElementById("objects").innerHTML = input_value + "Found";
        var synth = window.speechSynthesis;
    speak_data =  input_value + "Found";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)
    }
    else{
        document.getElementById("objects").innerHTML = "not Found";
    }


}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    

}