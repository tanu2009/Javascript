var nameElem= document.getElementById('name');
var emailElem= document.getElementById('email');
var submitButtonElem = document.getElementById('submit-btn');
submitButtonElem.addEventListener('click',function(){
    alert("Are you sure!...")
})

var nameValue = document.getElementById('name-text');
var emailValue =document.getElementById('email-text');

const myForm = document.getElementById('my-form');
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("submitted");
    nameValue.textContent = nameElem.value;
    emailValue.textContent= emailElem.value;
})