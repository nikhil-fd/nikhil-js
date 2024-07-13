# Project1-- Color Changer -- Solution Code
# Project Summary: When you click on any color button then page background color will be changed.
#1st mentioned HTML code👇
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Bg Color Change</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="main">
        <div class="child">
            <div class="heading">
                <h2>Color Scheme Switcher</h2>
            </div>
            <div class="colorbox">
                <span class="button" id="grey"></span>
                <span class="button" id="white"></span>
                <span class="button" id="blue"></span>
                <span class="button" id="yellow"></span>
            </div>
            <div class="msg">
                <h3>Try Clicking on one of the colors above to change <br> the background color of this page!</h3>
            </div>
        </div>
    </div>

    <script src="index.js"></script>
</body>

</html>
```
#2nd mentioned JavaScript code👇
```JavaScript
//✍About Project: This project is all about page body color is being changed while click on any color button. 

let buttons = document.querySelectorAll(".button");
//above here we got node list of all button
let body = document.querySelector("body");
//👆above here we took reference of body Or without take reference of "body" element we can write 
// command i.e. document.body.style.backgroundColor

//below we are getting reference from button nodelist
buttons.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);                            //It returns reference of html element
        switch (e.target.id) {                           //after getting reference we can access properties
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
```
#👇This below code written by myself in my own technique.👇Both above and below doing same work.
```JavaScript
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
```
#Another approach for same work👇OR Code written by myself in my own mind.👇
```JavaScript
const refColorChngBtn = document.querySelectorAll(".colorChngBtn")
for(const chngbtn of refColorChngBtn){
    console.log(chngbtn);
    chngbtn.addEventListener("click", () => {
        if(chngbtn.getAttribute("id") === "grey"){
            document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`
        }else if(chngbtn.getAttribute("id") === "white"){
            document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`
        }else if(chngbtn.getAttribute("id") === "blue"){
            document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`
        }else if(chngbtn.getAttribute("id") === "yellow"){
            document.body.style.backgroundColor = `${chngbtn.getAttribute("id")}`
        }
    })
}
```
#3rd mentioned CSS code👇
```CSS
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
span, .button{
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 2px solid black;
    cursor: pointer;
}
#grey{
    background-color: darkgray;
}
#blue{
    background-color:blue;
}
#yellow{
    background-color: yellow;
}
.main{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
h2, h3{
    text-align: center;
}
.colorbox{
    /* padding-top: 20px; */
    margin: 30px 0px 30px 0px;
}

```
# Project Done✅