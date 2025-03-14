let img=document.getElementById("img_cursol");
let imgs=["images/img-cursol2.webp","images/img-cursol3.jpg","images/img-cursol.webp"]
let index=0;
function changeImage() {
    index = (index + 1) % imgs.length; 
   img.src = imgs[index]; 
}
setInterval(changeImage, 4000);


let mail=document.getElementById('email');
mail.onfocus =function(){
    mail.placeholder = '';
}
mail.onblur =function(){
    mail.placeholder = 'Entre your Email';
}
let name=document.getElementById('name');
name.onfocus =function(){
    name.placeholder = '';
}
name.onblur =function(){
    name.placeholder = 'your Name';
}
let phone=document.getElementById('phone');
phone.onfocus =function(){
    phone.placeholder = '';
}
phone.onblur =function(){
    phone.placeholder = 'your Phone';
}
let message=document.getElementById('message');
message.onfocus =function(){
    message.placeholder = '';
}
message.onblur =function(){
    message.placeholder = 'Tell Us About Your Needs';
}

