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

