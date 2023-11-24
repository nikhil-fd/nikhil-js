const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    //Note: preventDefault() it won't take if input box has any defalut value so it avoid input default value.
    e.preventDefault();

    //Note: if we take reference of weight & height oustside eventlistener it returns emptu value,
    //      because we need that reference after performing submit operation before submit we don't need refernce.
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