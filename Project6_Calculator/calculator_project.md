# Project6--Calculator🎁🧠
```text
Designed a Arithmatic Calculator, we can add, substract, multiply and divide the number.
```
```text
HTML file👇
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="31_calculator.css">
    <title>Calculator</title>
</head>
<body>
    <main>
        <div id="calc-main">
            <div class="result">
                <textarea type="number" autofocus></textarea>
            </div>
            <div class="btnlist">
                <div class="calc-row1">
                    <span><button value="7" class="seven">7</button></span>
                    <span><button value="8" class="eight">8</button></span>
                    <span><button value="9" class="nine">9</button></span>
                    <span><button value="/" class="divide">/</button></span>
                </div>
                <div class="calc-row2">
                    <span><button value="4" class="four">4</button></span>
                    <span><button value="5" class="five">5</button></span>
                    <span><button value="6" class="six">6</button></span>
                    <span><button value="*" class="multiply">*</button></span>
                </div>
                <div class="calc-row3">
                    <span><button value="1" class="one">1</button></span>
                    <span><button value="2" class="two">2</button></span>
                    <span><button value="3" class="three">3</button></span>
                    <span><button value="-" class="substract">-</button></span>
                </div>
                <div class="calc-row4">
                    <span><button value="0" class="zero">0</button></span>
                    <span><button value="." class="dot">.</button></span>
                    <span><button value="+" class="addition">+</button></span>
                    <span><button type="submit" class="equal">=</button></span>
                </div>
                <div class="calc-row5">
                    <h6>Made By-Nikhil</h6>
                </div>
            </div>
        </div>    
</body>
<script src="31_calculator.js"></script>
</html>
```
```text
CSS File👇
```
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: darkseagreen;
}
main{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
div#calc-main{
    width: 350px;
    height: 400px;
    border: 2px solid #575757;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #575757;
    box-shadow: 0px 8px 2px 3px #424242;
    position: relative;
}
div.result{
    position: absolute;
    margin-bottom: 280px;
    width: 300px;
}
div.btnlist{
    position: absolute;
    margin-top: 120px;
    width: 330px;
    height: 300px;
    /* border: 2px solid red; */
}
textarea{
    width: 300px;
    height: 60px;
    border-radius: 10px;
    background-color: #bcd0c0;
    outline: none;
    border: none;
    box-shadow: 0px 4px 2px 2px #bcd0c0;
    font-size: 2rem;
    text-align: left;
    padding: 10px;
}

div.calc-row1, button.seven, 
button.eight, button.nine, button.divide,
div.calc-row2, button.four, 
button.five, button.six, button.multiply,
div.calc-row3, button.one, 
button.two, button.three, button.substract,
div.calc-row4, button.zero, 
button.dot, button.addition, button.equal{
    width: 60px;
    height: 60px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bold;
    /* box-shadow: 0px 3px 2px 2px white; */
}
div.calc-row1, div.calc-row2, div.calc-row3, div.calc-row4{
    width: 330px;
    height: 70px;
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
button.equal{
    background-color: orange;
    color: white;
}
h6{
    text-align: right;
    color: silver;
}
```
```text
JavaScript👇
```
```javascript
const allBtn = document.querySelectorAll("button");
const textFieldData = document.querySelector("textarea");

allBtn.forEach((elem) => {
  console.log(elem);
  elem.addEventListener(
    "click",
    (event) => {
      let data = event.target.value;
      console.log(data);
      console.log(typeof data);         //💥String
      let sign = event.target.value;
      console.log(sign);
      console.log(typeof sign);         //💥String

      switch (data) {
        case "1":
          textFieldData.value += data;   //👈"+=" used to concatenate string or adding number to existing variable.
          break;
        case "2":
          textFieldData.value += data;
          break;
        case "3":
          textFieldData.value += data;
          break;
        case "4":
          textFieldData.value += data;
          break;
        case "5":
          textFieldData.value += data;
          break;
        case "6":
          textFieldData.value += data;
          break;
        case "7":
          textFieldData.value += data;
          break;
        case "8":
          textFieldData.value += data;
          break;
        case "9":
          textFieldData.value += data;
          break;
        case "0":
          textFieldData.value += data;
          break;
        case "+":
          textFieldData.value += data;
          break;
        case "-":
          textFieldData.value += data;
          break;
        case "*":
          textFieldData.value += data;
          break;
        case "/":
          textFieldData.value += data;
          break;
        case ".":
          textFieldData.value += data;
          break;
      }
    },
    false
  );

  //ADDITION
  function add(){
    const valOfTxtFld = textFieldData.value;
    const indexNoOfPlusSign = valOfTxtFld.indexOf("+", 0)
    const extractIntValueBeforeSign = parseInt(valOfTxtFld.slice(0, indexNoOfPlusSign))
    const extractIntValueAfterSign = parseInt(valOfTxtFld.slice(indexNoOfPlusSign + 1))

    const extractFractionNumBeforeSign = parseFloat(valOfTxtFld.slice(0, indexNoOfPlusSign));
    const extractFractionNumAfterSign = parseFloat(valOfTxtFld.slice(indexNoOfPlusSign + 1)); 

    const checkDecimalSign = valOfTxtFld.includes(".", 0);
    if(checkDecimalSign === true){
      let totalAddValue = extractFractionNumBeforeSign + extractFractionNumAfterSign
      textFieldData.value = totalAddValue.toFixed(4);
    }else{
      textFieldData.value = extractIntValueBeforeSign + extractIntValueAfterSign;
    }
  }

  //SUBSTRACTION
  function sub(){
    const valOfTxtFld = textFieldData.value;
    const indexNoOfMinusSign = valOfTxtFld.indexOf("-", 0);
    const extractIntValueBeforeSign = parseInt(valOfTxtFld.slice(0, indexNoOfMinusSign));
    const extractIntValueAfterSign = parseInt(valOfTxtFld.slice(indexNoOfMinusSign + 1));

    const extractFractionNumBeforeSign = parseFloat(valOfTxtFld.slice(0, indexNoOfMinusSign));
    const extractFractionNumAfterSign = parseFloat(valOfTxtFld.slice(indexNoOfMinusSign + 1)); 

    const checkDecimalSign = valOfTxtFld.includes(".", 0);
    if(checkDecimalSign === true && extractFractionNumAfterSign > extractFractionNumBeforeSign){
      let totalSubValue = extractFractionNumAfterSign - extractFractionNumBeforeSign;
      textFieldData.value = totalSubValue.toFixed(4);
    }else if(extractIntValueAfterSign > extractIntValueBeforeSign){
      textFieldData.value = extractIntValueAfterSign - extractIntValueBeforeSign;
    }else if(checkDecimalSign === true){
      let totalSubResult = extractFractionNumBeforeSign - extractFractionNumAfterSign;
      textFieldData.value =  totalSubResult.toFixed(4);
    }else{
      textFieldData.value =  extractIntValueBeforeSign - extractIntValueAfterSign;
    }
  }

  //MULTIPLICATION
  function multi(){
    const valOfTxtFld = textFieldData.value;
    const indexNoOfMultiSign = valOfTxtFld.indexOf("*", 0)
    const extractIntValueBeforeSign = parseInt(valOfTxtFld.slice(0, indexNoOfMultiSign))
    const extractIntValueAfterSign = parseInt(valOfTxtFld.slice(indexNoOfMultiSign + 1))

    const extractFractionNumBeforeSign = parseFloat(valOfTxtFld.slice(0, indexNoOfMultiSign));
    const extractFractionNumAfterSign = parseFloat(valOfTxtFld.slice(indexNoOfMultiSign + 1)); 

    const checkDecimalSign = valOfTxtFld.includes(".", 0);
    if(checkDecimalSign === true){
      let totalMultiResult = extractFractionNumBeforeSign * extractFractionNumAfterSign
      textFieldData.value = totalMultiResult.toFixed(4);
    }else{
      textFieldData.value = extractIntValueBeforeSign * extractIntValueAfterSign;
    }
  }

  //DIVISION
  function division(){
    const valOfTxtFld = textFieldData.value;
    const indexNoOfDivisionSign = valOfTxtFld.indexOf("/", 0)
    const extractIntValueBeforeSign = parseInt(valOfTxtFld.slice(0, indexNoOfDivisionSign))
    const extractIntValueAfterSign = parseInt(valOfTxtFld.slice(indexNoOfDivisionSign + 1))

    const extractFractionNumBeforeSign = parseFloat(valOfTxtFld.slice(0, indexNoOfDivisionSign));
    const extractFractionNumAfterSign = parseFloat(valOfTxtFld.slice(indexNoOfDivisionSign + 1)); 

    const checkDecimalSign = valOfTxtFld.includes(".", 0);
    if(checkDecimalSign === true){
      let totalDiviData = extractFractionNumBeforeSign / extractFractionNumAfterSign
      textFieldData.value = totalDiviData.toFixed(4);
    }else{
      let totalDiviResult = extractIntValueBeforeSign / extractIntValueAfterSign;
      textFieldData.value = totalDiviResult.toFixed(4);   
    }
  }

  const equal = document.querySelector(".equal");
  equal.addEventListener("click", () => {
    const valueOfTxt = textFieldData.value;
    const searchPlusSign = valueOfTxt.includes("+", 0);
    const searchMinusSign = valueOfTxt.includes("-", 0);
    const searchMuliplySign = valueOfTxt.includes("*", 0);
    const searchDivisionSign = valueOfTxt.includes("/", 0);
    if(searchPlusSign === true){
      add();
    };
    if(searchMinusSign === true){
      sub();
    };
    if(searchMuliplySign === true){
      multi();
    };
    if(searchDivisionSign === true){
      division();
    }
  }, false)
});
```