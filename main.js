function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.sounsClassifier('https://teachablemachine.withgoogle.com/models/cSSNegJqY/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}