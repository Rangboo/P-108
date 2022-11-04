function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rIaL8Z1ot/model.json', modelReaady);

}

function modelReaady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if(error){
        console.log(error);
    }else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img=document.getElementById('cow.png');
        img1=document.getElementById('dog.png');
        img2=document.getElementById('cat.png');
        img3=document.getElementById('lion.png');

        if(results[0].label =="Moo") {
            img.src='cow.gif';
            img1.src='dog.png';
            img2.src='cat.png';
            img3.src='lion.png';
        }else if(results[0].label=="Bark") {
            img.src='cow.png';
            img1.src='dog.gif';
            img2.src='cat.png';
            img3.src='lion.png';
        }else if(results[0].label=="Meow") {
            img.src='cow.png';
            img1.src='dog.png';
            img2.src='cat.gif';
            img3.src='lion.png';
        }else if(results[0].label=="Roar") {
            img.src='cow.png';
            img1.src='dog.png';
            img2.src='cat.png';
            img3.src='lion.gif';
        }
    }
}