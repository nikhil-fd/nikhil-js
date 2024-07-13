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

//👇This below code written by myself in my own technique.👇Both above and below doing same work.
const refColorChngBtn = document.querySelectorAll(".colorChngBtn")
for(const chngbtn of refColorChngBtn){
    console.log(chngbtn);
    chngbtn.addEventListener("click", () => {
        switch (chngbtn.getAttribute("id")){
            case "grey":
                document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`;
                break;
                case "white":
                    document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`;
                    break;
                    case "blue":
                        document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`;
                        break;
                        case "yellow":
                            document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`;
                            break;
                            default:
                                document.body.style.backgroundColor = "red";
                                break;
        }
    })
}

//👇OR Code written by myself in my own mind.👇
// const refColorChngBtn = document.querySelectorAll(".colorChngBtn")
// for(const chngbtn of refColorChngBtn){
//     console.log(chngbtn);
//     chngbtn.addEventListener("click", () => {
//         if(chngbtn.getAttribute("id") === "grey"){
//             document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`
//         }else if(chngbtn.getAttribute("id") === "white"){
//             document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`
//         }else if(chngbtn.getAttribute("id") === "blue"){
//             document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`
//         }else if(chngbtn.getAttribute("id") === "yellow"){
//             document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`
//         }
//     })
// }