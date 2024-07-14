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
// #5--When "submit" event gets fire?
//     (i) When user clicks on "submit" button i.e. <button type="submit"></button>.
//     (ii) Wehen user presses the "Enter" key while editing the "input" field <input type="text"> 
//          in a form.
//     (iii) When a script calls the "form.requestSubmit()" method.

// #6--Html "button" default type is submit. so if we are not mentioning <button type="submit"></button>
//     only we mentioned <button></button> even then it will react as "submit" button.

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