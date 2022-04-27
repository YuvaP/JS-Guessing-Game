
  let randomNumber = Math.floor(Math.random() * 10)+1
  //console.log(randomNumber);
  const maxTries = 3;
  //let y = 1;
  //let counter = maxTries -y;
  // counter variable initialized with 0
  let x = 1;

    function myFunction() {
      let userGuess=document.getElementById("userGuess").value;
      const userValue = Number(userGuess);
      console.log(userValue);
     
      if (!userValue || userValue < 1 || userValue > 10) {
          alert("Invalid number");
          return;
      }
      
      else if (userValue === randomNumber) {
          document.getElementById('myImage2').src="";

          document.getElementById("message").innerHTML = `Congratulations!!! You  guessed the Correct Number ${userValue}.`
          document.getElementById("userGuess").disabled = true;
          document.getElementById('myImage1').src= 'genie_happy.png'; 

          //document.getElementById('myImage1').src='genie_happy.png';
          
      } else if (x < 3) {
          
          document.getElementById("message").innerHTML = `Sorry Wrong Guess. You have ${maxTries-x} attempt/attempts left.`;
          document.getElementById("userGuess").value="";
          document.getElementById("userGuess").focus();
          document.getElementById('myImage2').src='genie_mad-1.png';
          x++;

      } 
      //else if (x>3) {
        //document.getElementById("message1") = "No more attempts left. You lose!";
        //document.getElementById("message3") = "Winning number is 5"
        //document.getElementById("userGuess").disabled=true;
        //} 
      else {
          // Printing information
          document.getElementById("userGuess").disabled=true;
          document.getElementById("message").innerHTML = `Sorry No Luck Today but there is always Next Time. The Lucky Number was ${randomNumber}.`;

                }
  }
