function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//24-2 Add onclick handler directly or via javascript
const blueButton = document.getElementById('blue-button');
//just set the name of the function
blueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


//24-3 Different ways to use addEventListener on a button
const greenButton = document.getElementById('make-green-button');
//Anonymous Function
greenButton.onclick = function(){
    document.body.style.backgroundColor = 'green';
}

//handle by using addEventListener
const goldenButton = document.getElementById('make-golden-btn');
goldenButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenrod';
}
//another way
const hotPinkButton = document.getElementById('make-hotpink-btn');
hotPinkButton.addEventListener('click', function makePink(){
    document.body.style.backgroundColor = 'hotpink';
});
//Direct shortcut way 
document.getElementById('make-lightblue-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue';
});


//24-4 Most common ways to set Event Handlers
function handleJustFunctionClick(){
    const p = document.getElementById('clk-methd');
    p.innerText = 'Set by using Function';
}
//direct addEventListener
document.getElementById('handle-event').addEventListener('click', function(){
    const p = document.getElementById('clk-methd');
    p.innerText = 'Set by direct add event listener';
})
//direct input field
document.getElementById('update-name-btn').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const p = document.getElementById('show-input-value');
    p.innerText = nameField.value;
    nameField.value = '';
});


//24-5 Create a comment box and display comment
// 1. add button event handler
document.getElementById('post-btn').addEventListener('click', function(){
    // 2. get user comment
    const commentField = document.getElementById('comment-area');

    // 3. create comment paragraph
    const newComment = document.createElement('p');
    newComment.innerText = commentField.value

    // 4. append the comment
    const commentList = document.getElementById('comment-list');
    commentList.appendChild(newComment);
    
    // 5. clean the comment box
    commentField.value = '';
});


//24-6 Simple github like delete confirmation button
document.getElementById('delete-btn').addEventListener('click', function(){
    document.getElementById('secret-info').style.display = 'none';
});
//focus
document.getElementById('delete-confirm').addEventListener('focus', function(){
    document.body.style.backgroundColor = 'lightcoral';
});
//blur
document.getElementById('delete-confirm').addEventListener('blur', function(){
    document.body.style.backgroundColor = 'white';
});
//keydown
/* document.getElementById('delete-confirm').addEventListener('keydown', function(){
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
}); */
//keypress
/* document.getElementById('delete-confirm').addEventListener('keypress', function(){
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
}); */
//keyup
document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const deleteBtn = document.getElementById('delete-btn');
    if(event.target.value == 'delete'){
        deleteBtn.removeAttribute('disabled');
    } else{
        deleteBtn.setAttribute('disabled', true);
    }
});
//Trigger a button on ENTER key
document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        document.getElementById('delete-btn').click();
    }
});
//change
document.getElementById('delete-confirm').addEventListener('change', function(){
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
});


//24-7 (semi-advanced) Event bubble and Stop propagating
document.getElementById('second-item').addEventListener('click', function(event){
    console.log('second item clicked');
    //event.stopPropagation();
    event.stopImmediatePropagation();
});
document.getElementById('second-item').addEventListener('click', function(event){
    console.log('second 02 item clicked');
});
document.getElementById('second-item').addEventListener('click', function(event){
    console.log('second 03 item clicked');
});
//ul
document.getElementById('list-container').addEventListener('click', function(){
    console.log('ul clicked');
});
//section
document.getElementById('section-container').addEventListener('click', function(){
    console.log('section clicked');
});


//24-8 (advanced) Event delegate and benefit of Event bubble
const items = document.getElementsByClassName('item2');
for(const item of items){
    item.addEventListener('click', function(event){
        //document.getElementById('item2-container').removeChild(item);
        //event.target.parentNode.removeChild(event.target);
    });
};

document.getElementById('add-item').addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = 'Brand New Item';
    //li.classList.add('item');
    const parent = document.getElementById('item2-container');
    parent.appendChild(li);
   
});
//Event delegate
document.getElementById('item2-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
});
