function submitForm(){
   
    // validatename();
    // validateemail();
    // validatesubject();
    // validatemessage(); 
    
    var pattern = new RegExp("@");
    var result = pattern.test(myform.aemail.value);

    if (myform.aname.value==="") {
        alert("The name field cannot be empty");
        myform.aname.focus();
        myform.aname.style.background="#ffdce0";
    }
    else if (myform.aemail.value==="") {
        alert("The email field cannot be empty");
        myform.aemail.focus();
        myform.aemail.style.background="#ffdce0";
    }
    else if (result===false) {
        alert("The email field has an invalid email");
        myform.aemail.focus();
        myform.aemail.style.background="#ffdce0";
    }
    else if(myform.subject.value==="") {
        alert("The subject field cannot be empty");
        myform.subject.focus();
        myform.subject.style.background="#ffdce0";
    }
    else if(myform.message.value==="") {
        alert("The message field cannot be empty");
        myform.subject.focus();
        myform.subject.style.background="#ffdce0";
    }  
    else {
        alert ("Message Sent Successfully");
        window.location.replace("homepage.html");
        
    }
 }

/*
 function validatename(){
     
    if(myform.aname.value===""){
     
     alert("The name field cannot be empty");
     myform.aname.focus();
     myform.aname.style.background = "#ffdce0";
     }  
 }

 function validateemail(){
     
     var pattern = new RegExp("@");
     
     var result = pattern.test(myform.aemail.value);
     
     if(result===false || myform.aemail.value===""){
         
         alert("The email field cannot be empty or has an invalid email");
         myform.aemail.focus();
         myform.aemail.style.background="#ffdce0";
     }
 }
 
 function validatesubject(){
     
    if(myform.subject.value===""){
     
     alert("The subject field cannot be empty");
     myform.subject.focus();
     myform.subject.style.background="#ffdce0";
     }  
 }
 */
