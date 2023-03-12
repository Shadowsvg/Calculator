// anonymous function decleration 
/*
The first step is to define the function expression, as shown below:

(function() {  
    console.log('Hello');  
}) 

After defining the function, we can see the trailing parenthesis () followed by the terminator (;) that are used for invoking the defined function as shown below:

(function() {  
    console.log('Hello');  
})();  
*/


(function() {

    // creating the variables of required elements of html
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");   // This will return array of all buttons
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");

    // Showing our input using buttons on the screen
    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            let value = e.target.dataset.num;             // 'e.target' refers to the clicked button element
            screen.value += value;
        })
    })

    // Functionality of equal button
    equal.addEventListener("click", function(e){
        if(screen.value === ''){
            screen.value = "";
        }
        else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    }) 

    // Functionality of clear button
    clear.addEventListener("click", function(e){
        screen.value = "";
    })

})();