//যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।
const elements = document.getElementsByTagName('h2');
for(const element of elements){
    element.style.color = "lightblue";
}

//ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
const backpackSection = document.getElementById('backpack');
backpackSection.style.backgroundColor = 'tomato';

//card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px';
}

//কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো
const buyNowBtn = document.getElementById('buy-now-btn');
buyNowBtn.addEventListener('click', function(){
    console.log('Button Click Hoiche');
});

//এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
const buyNowButtons = document.getElementsByClassName('buynow-btn');
for(const buyNowButton of buyNowButtons){
    buyNowButton.addEventListener('click', function(){
        buyNowButton.setAttribute ('style', 'display: none !important;');
    })
}

//একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
const sendButton = document.getElementById('send-btn');
const emailField = document.getElementById('input-email');
emailField.addEventListener('keyup', function(event){
    if(event.target.value == 'email'){
        sendButton.removeAttribute('disabled');
    } else{
        sendButton.setAttribute('disabled', true);
    }
    //Trigger a button on ENTER key
    if(keyCode === 13){
        sendButton.click();
    }
});

//কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 
function setNewImg(){
    document.getElementById('shoe-img1').src = "images/shoes/shoe-3.png";
}
function setOldImg(){
    document.getElementById('shoe-img1').src = "images/shoes/shoe-1.png";
}

//নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
const getNewsLetter = document.getElementById('newsletter-background');
getNewsLetter.addEventListener('dblclick', function(){
    getNewsLetter.style.backgroundColor = 'tomato';
});