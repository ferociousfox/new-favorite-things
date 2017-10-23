$(document).ready(function(){
  $("#secrets").submit(function(event) {
    event.preventDefault();
    var nameInput = $('input#nameInput').val();
    var foodInput = $('input#foodInput').val();
    var hobbyInput = $('input#hobbyInput').val();
    var animalInput = $('input#animalInput').val();
    var sportsballInput = $('input#teamInput').val();
    var favArray = [nameInput, foodInput, hobbyInput, animalInput, sportsballInput];
    console.log(favArray.toString());
    var newArray = []
    newArray.push(favArray[1]);
    newArray.push(favArray[0]);
    newArray.push(favArray[2]);
    console.log(newArray.toString());
    $('#liOne').text(newArray[0]);
    $('#liTwo').text(newArray[1]);
    $('#liThree').text(newArray[2]);

  });
});
