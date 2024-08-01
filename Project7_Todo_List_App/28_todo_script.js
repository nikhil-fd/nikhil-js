{/* <div class="mainparent">
//         <div class="btn-edit-remove">
//                 <button id="editbtn"><i id="editicon" class="fa-solid fa-pen-to-square"></i></button>
//                 <button id="removebtn"><i id="removeicon" class="fa-solid fa-trash"></i></button>
//         </div>
//          <div class="note-save-div"></div>
//         <textarea name="txtfield" id="txtfield"></textarea>
    </div> */}

const addBtn = document.getElementById("addBtn");

const updateDataInLocalStorage = () => {
    const refOfTextarea = document.querySelectorAll("textarea");
    const textAreaData = [];
    refOfTextarea.forEach((elem) => {
        return textAreaData.push(elem.value)
    });
    console.log(textAreaData);
    localStorage.setItem("nikhil-notes", JSON.stringify(textAreaData));
    //👆localstorage store data in JSON format so here we covert our data to json format by using
    // JSON.stringify . JSON.stringify convert array or object data into json(string) format. here our data was in array format.
}



const showTextField = (text = '') => {
    const parentDiv = document.createElement("div")
    parentDiv.classList.add("mainparent")

    const mainDiv = document.createElement("div")
    mainDiv.classList.add("textbox")

    const editRemoveBtnDiv = document.querySelector(".btn-edit-remove")

    const htmlData = `<div class="btn-edit-remove">
                <button id="editbtn"><i id="editicon" class="fa-solid fa-pen-to-square"></i></button>
                <button id="removebtn"><i id="removeicon" class="fa-solid fa-trash"></i></button>
                </div>
                <div class="note-save-div ${text ? '' : 'hidden'}"></div>
                <textarea class="${text ? 'hidden' : ''}"  id="txtfield"></textarea>`
    //👆NOTE1️⃣: Here above we used ternary operator in div & textarea the condition is -
    //      if there is text in textarea then textarea will be hidden(or it apply class hidden) and div will be display.
    //      if there is no text in textarea then as it is textarea we can get and can write text (or it won't apply class hidden) and div will be hidden.           

    //     if there is text in div then div as it is will be there.
    //     if there is no text in div then div will be hidden (or it apply class hidden) and textarea will be display/active to write the text.

    //👆Note2️⃣:Already we are using template literal `` in htmlData that's why we could use ${} inside class.


    // mainDiv.innerHTML = htmlData;
    //parentDiv.appendChild(mainDiv);
    // document.body.appendChild(parentDiv)
    //OR👇Both are same.
    mainDiv.insertAdjacentHTML("afterbegin", htmlData)


    //Here above we wrote coding

    //getting references of edit & remove btn & note-save-div & textarea
    const editbtn = mainDiv.querySelector("#editbtn");
    const removebtn = mainDiv.querySelector("#removebtn");
    const noteSaveDiv = mainDiv.querySelector(".note-save-div");
    const txtField = mainDiv.querySelector("#txtfield");
    //👆NOTE3️⃣: In above instead of "document" we took "parentDiv".querySelector() because these
    //       editbtn, removebtn etc..elements are defined inside a variable(htmlData) not in page document. 


    //Delete note
    removebtn.addEventListener("click", () => {
        mainDiv.remove();
        updateDataInLocalStorage();
    });

    //*toggle using edit button
    txtField.value = text;
    noteSaveDiv.innerHTML = text;

    //Edit note 
    editbtn.addEventListener("click", () => {
        noteSaveDiv.classList.toggle("hidden");
        txtField.classList.toggle("hidden");
    })
    //👆NOTE4️⃣:Over here toggle() is working like switch if switch is ON then it turned into OFF.
    // If switch is OFF then it turned into ON. So in this scenario if txtField and noteSaveDiv class is hidden ,
    // then it turned into unhide (means "").
    // div hide hauchi jetebele div ro text nahi.
    // textarea hide hauchi jetebele textarea ro text rahuchi.

    //getting textarea data
    txtField.addEventListener("change", (event) => {
        const value = event.target.value;
        noteSaveDiv.innerHTML = value;

        updateDataInLocalStorage();
    });

    parentDiv.appendChild(mainDiv);
    document.body.appendChild(parentDiv);
};


const getLSData = JSON.parse(localStorage.getItem("nikhil-notes"))
if(getLSData){
    getLSData.forEach((elem) => showTextField(elem))
}


addBtn.addEventListener("click", () => showTextField())


//Local storage--local storage store data in our local system web browser in key ava value pair i.e. JSON format.
//               local storage data has no expiration date.And here the data will no be deleted
//               when broser is closed it will be save there by week by month by year.

// we can get value from <textarea> and <input> element by using .value and rmaining other
//element such as <div> <span> <h1> <p> etc.. can get value by using .innerHTML/.innerText.

//when we store array or object in local storage then we use JSON.stringify() it converts
//data to json format like key will be in string and value will be in string.

//JSON.parse() will convert data from new format to original format.