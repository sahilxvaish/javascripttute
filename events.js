//events in js
//mdn refrence events in js 
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

//inline event handling 
//button.addEventListener('click', function(){
//    console.log('button clicked');
//});

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log('button clicked');
    let a = 25;
    a++;
    console.log(a); //26
};

let box = document.querySelector("div");
div.onmouseover = () => {
    console.log('mouse over');
};

//event object 
//https://developer.mozilla.org/en-US/docs/Web/API/Event
//event object is a object that contains information about the event that triggered the function call
//event object is passed as an argument to the event handler function
//event object has several properties and methods that can be used to get information about the event

{
let btn1 = document.querySelector("#btn1");

btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);   
};
}

//event listners
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

//add event listners
node.removeEventListner(event, callback);

btn1.addEventListner("click", ()=> {
    console.log("button 1 was clicked");
    console.log(e);
});

//remove event listners
node.removeEventListner(event, callback);

btn1.removeEventListener("click", () => {

})

//note- the callback reference should be same to remove.