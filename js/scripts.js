$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var blanks = ["item1", "item2", "item3", "item4", "item5"]
    var userInputs = [];

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val().toUpperCase();
      userInputs.push(userInput);
    });

    userInputs = userInputs.sort();

    userInputs.forEach(function(input){
      $("#response").append("<li>" + input + "</li>")
    });

    $("form").hide();

  });
});
