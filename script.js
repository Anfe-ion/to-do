//Variable for id's
let counter = 0;

addTask.addEventListener("click", () => {

    //Calling necesary elements
    const input =
    document.getElementById("input");
    const addTask =
    document.getElementById("addTask");

    //Declaring the value of the input
    let inputValue = input.value;

    //if the input is void
    if (inputValue == ""){
        alert("Write your task :)")
    }

    else{
        //Increment
        counter++;

        //Creating necesary HTML tags
        let newLabel = 
        document.createElement("label");
        let newSpan = 
        document.createElement("span");
        let newInput = 
        document.createElement("input");
        let newButton =  
        document.createElement("button");

        //Assing Types
        newInput.type = "checkbox";
        newButton.type = "button";

        //Adds the id's  
        
        newLabel.setAttribute("id", "task");
        newSpan.setAttribute("id", "text" + counter);
        newInput.setAttribute("id", "checkbox" + counter);
        newButton.setAttribute("id", "erase" + counter);

        //Add Classes
        newLabel.classList.add("task");
        newSpan.classList.add("text");

        //This add's the text button
        newButton.innerHTML = "Erase";

        //This gives to JS the HTML structure
        /*<span>
            <input>
                TEXT
        </span>*/
        newSpan.appendChild(newInput);
        newSpan.insertAdjacentHTML("beforeend", " " + inputValue.charAt(0).toUpperCase() + inputValue.substr(1).toLowerCase()); 
        /*<label>
            <span>
                <input>
                    Text
            </span>
        </label>*/
        newLabel.appendChild(newSpan);
        //<label><span><input><input></span><button><button></label>
        newLabel.appendChild(newButton);
        //<div><label><span><input><input></span></label></div>
        rows.appendChild(newLabel);

        clearInput()

        //Erase
        newButton.addEventListener('click', ()=>{
            newLabel.remove();
        });

        //Check
        const text = document.getElementById("text" + counter);
        newInput.addEventListener('change', () =>{
            if(newInput.checked){
                text.style.setProperty("text-decoration", "line-through");
                text.style.setProperty("color", "rgb(156, 156, 156)");
            }
            else{
                text.style.setProperty("text-decoration", "none");
                text.style.setProperty("color", "black");
            }
        })
    }
});

function clearInput(){
    input.value = "";
}