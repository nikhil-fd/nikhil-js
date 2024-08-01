# Project7 -- Todo List App🎁🧠
```text
In Todo List App we can create, edit and remove note also we used local storage.
```
```text
HTML File👇
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="28_todo_style.css">
    <title>To Do App</title>
</head>
<body>
     <header>
        <h1><i class="fa-solid fa-note-sticky"></i> Nikhil Notes</h1>
     </header>
     <main>
        <button id="addBtn"><i id="addicon" class="fa-solid fa-arrow-right"></i> Add Note</button>
     </main>
    
    <script src="28_todo_script.js"></script>
</body>
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
    background-color: #212121;
}
header{
    background-color: orange;
    padding: 20px;
}
header h1{
    color: white;
}
header h1 i{
    color: black;
}
main{
    display: flex;
    justify-content: flex-end;
}
button#addBtn{
    width: 100px;
    height: 50px;
    border-radius: 50%;
    margin:20px 20px 0px 0px;
    background-color: yellowgreen;
    font-weight: bold;
    cursor: pointer;
}
button i#addicon{
    color: red;
    font-size: 15px;
}

/* {<div class="mainparent">
//         <div class="btn-edit-remove">
//                 <button id="editbtn"><i id="editicon" class="fa-solid fa-pen-to-square"></i></button>
//                 <button id="removebtn"><i id="removeicon" class="fa-solid fa-trash"></i></button>
//         </div>
//          <div class="note-save-div"></div>
//         <textarea name="txtfield" id="txtfield"></textarea>
    </div> */

div.mainparent{
    display: inline-flex;
    margin: 10px;
}    
div.textbox{
    width: 300px;
    height: 200px;
    background-color: white;
    /* background-color: red; */
    position: relative;
}
div.btn-edit-remove{
    display: flex;
    justify-content: flex-end;
}
button#editbtn{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* padding: 10px; */
    outline: none;
    border: none;
    cursor: pointer;
    margin: 5px;
}
i#editicon{
    color: green;
    text-align: center;
    font-size: 20px;

}
button#removebtn{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* padding: 10px; */
    outline: none;
    border: none;
    cursor: pointer;
    margin: 5px;
}
i#removeicon{
    color: red;
    text-align: center;
    font-size: 20px;

}
div.note-save-div{
    width: 300px;
    height: 150px;
    border: 2px solid white;
    color: black;
    background-color: white;
    position: absolute;
    z-index: 1;   
    overflow-y: scroll;             
    /* using z-index we can set 1 div above another div, so this div comes below that's why 1 */
}
textarea{
    width: 300px;
    height: 150px;
    position: absolute;
    border: 2px solid white;
    color: black;
    font-size: 1rem;
    outline: none;
    margin-bottom: 50px;
    left: 0px;
    z-index: 2;
    overflow-y: scroll;
    /* using z-index we can set 1 div above another div, so this testarea comes above div that's why 2 */
}
.hidden{
    display: none;
}
```
```text
JavaScript File👇
```
```javascript
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


//Local storage--local storage store data in our local system web browser in key and value pair i.e. JSON format.
//               local storage data has no expiration date.And here the data will not be deleted
//               when broser is closed it will be save there by week by month by year.

// we can get value from <textarea> and <input> element by using .value and rmaining other
//element such as <div> <span> <h1> <p> etc.. can get value by using .innerHTML/.innerText.

//when we store array or object in local storage then we use JSON.stringify() it converts
//data to json format like key will be in string and value will be in string.

//JSON.parse() will convert data from new format to original format.
```
