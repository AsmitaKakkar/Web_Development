const { getMaxListeners } = require("process");

function validateEmail(email){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(email) )
    {
        console.log("valid Email!!");
      return;
    }
    else{
      console.log("Invalid Email!!");
    }
}

validateEmail("asmitakakkar11");