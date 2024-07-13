# Project2 --- BMI Calculator --- Solution Code
# Project Summary: BMI(Body Mass Index), It calculate Your body mass index as per your height and weight.
#1 mentioned HTML code.
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="style.css">
    <title>BMI Calculator</title>
</head>

<body>
    <div class="main">
        <form>
            <h2>BMI Calculator</h2>
            <div class="h-container">
                <span>
                    <label for="height">Height in CM:</label>
                    <input type="text" id="height">
                </span>
            </div>
            <div class="w-container">
                <span>
                    <label for="weight">Weight in KG:</label>
                    <input type="text" id="weight">
                </span>
            </div>
            <div class="btn-container">
                <button id="calBtn">Calculate</button>
            </div>
            <div class="result-box">
                <h3 id="result"></h3>
                <p id="msg"></p>
            </div>
            <h3 class="guide-box">BMI Weight Guide</h3>
            <p>Under Weight = Less than 18.6</p>
            <p>Normal Range = 18.6 & 24.9</p>
            <p>Overweight = Greater than 24.9</p>
        </form>
    </div>

    <script src="index.js"></script>
</body>

</html>
``` 
#2 mentioned JavaScript code.
```JavaScript
//🔔NOTE:👇
// #1--input element bhitoru user deithiba input value bahar karaiba painee hele 1st "event" use kariba painee huye,
//     tapore "dom" use karajayeh.

// #2--input element bhitoru jebe value pauchey se value "string" type re thayeh
//      if you want convert that string value into number then use "parseInt()".

// #3--Always we can get value from input field/input element after event got executed.
//     If we get value from input field/input elemnet before event executed then the value can be empty because
//     when page gets reload at that time input field is empty so that we get input element value is empty.

// #4--Always remember when deal with form element then use "event.preventDefault()" it will not allow form's any existing value or
//     default value.
//     preventDefault() it won't take if input box has any defalut value so it avoid input default value.

const form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.getElementById("result");
    const msg = document.getElementById("msg");

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Please write a valid height in number ${height}`;
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please write a valid weight in number ${weight}`;
    }else{
        const bmi = (weight/((height*height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.5){
            msg.innerHTML = "😥Under Weight😥";
        }else if(bmi >= 18.5 && bmi <= 24){
            msg.innerHTML = "😎Normal Weight😎"
        }else if(bmi >= 25){
            msg.innerHTML = "🥵Over Weight🥵"
        }else{
            msg.innerHTML = "😍Good Health🩺"
        }
    } 
});
```
#3 mentioned CSS code.
```CSS
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #212121;
    color: white;
}
.main{
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
}
h2{
    text-align: center;
    color: yellow;
}
.h-container, .w-container{
    margin-top: 10px;
}
.btn-container{
    text-align: center;
    margin-top: 20px;
}
button{
    width: 150px;
    padding: 7px;
    background-color: red;
    color: white;
    cursor: pointer;
}
.guide-box{
    text-align: center;
    margin-top: 20px;
    color: orange;
}
p{
    text-align: center;
    margin-top: 5px;
}
input{
    height: 30px;
}
.result-box{
    margin-top: 15px;
    text-align: center;
    color: yellow;
}

```
# Project Done✅