var button = document.getElementById('subBtn');
    var dismissBtn = document.getElementById('dismiss');
    var signUpform = document.getElementById('container1');
    var succesAlert = document.querySelector('.container2');
    var emailInput = document.getElementById('email');
    var subscription_email = document.querySelector('.subscriptionEmail');
    var validateEmail = true;

    // email submission event
    document.querySelector('.subscriptionForm').addEventListener('submit', (e) => {
      e.preventDefault();
      validEmail();

    });
  
    // dismiss alert message after sucessful email submission event
    dismissBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dismissAlert();
    });
   
    // Removes Invali email message event
    emailInput.addEventListener('input', (e) => {
      e.preventDefault();
      if (emailInput.value) {
        document.querySelector('.verfication').style.display = 'none';
      }
    });


    // validates email address
    function validate(inputText) {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (inputText.value.match(mailformat)) {
        validateEmail = true;
      }
      else {
      
        document.querySelector('.verfication').style.display = 'block';
        document.querySelector('.verfication').style.color = 'red';
        document.querySelector('.verfication').style.fontFamily = 'RobotoNormal';
        validateEmail = false;

      }
    }

    // dismiss alert message after sucessful email submission function used in click event ,entioned above
    function dismissAlert(){
      emailInput.value="";
      succesAlert.classList.add('display-none');
      signUpform.classList.remove('display-none');
      signUpform.style.animation ='animatebottom 1s';
    }

    // email submission functions used in submit event mentioned above
    function validEmail()
    {
      validate(emailInput);
      if (validateEmail == true) {
        subscription_email.innerHTML = emailInput.value;
        succesAlert.classList.remove('display-none');
        signUpform.classList.add('display-none');
      }
    }