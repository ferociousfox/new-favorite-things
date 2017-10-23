$(document).ready(function(){
  $("#secrets").submit(function(event) {
    event.preventDefault();
    var inputs = ["nameInput", "foodInput", "hobbyInput", "animalInput", "sportsballInput"]
    $(".hide").show();
    inputs.forEach(function(input) {
      var userInput = $("input#" + input).val();
      $("." + input).text(userInput);
      // var nameInput = $('input#nameInput').val();
      // var foodInput = $('input#foodInput').val();
      // var hobbyInput = $('input#hobbyInput').val();
      // var animalInput = $('input#animalInput').val();
      // var sportsballInput = $('input#sportsballInput').val();
      // var favArray = [nameInput, foodInput, hobbyInput, animalInput, sportsballInput];
      // console.log(favArray.toString());
    });


  });
});
