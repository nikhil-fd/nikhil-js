//✍About Project: This project is all about page body color is being changed while click on any color button. 

let buttons = document.querySelectorAll(".button");
//above here we got node list of all button
let body = document.querySelector("body");
//above here we took reference of body
//below we are getting reference from button nodelist
buttons.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;

        }
    })
})