// Practice 1

const inputBox1 = document.querySelector(".input-box-1");

let todoArray1 = [];

document.querySelector(".add-btn-1").addEventListener("click", () => {
    todoArray1.push(inputBox1.value);
    inputBox1.value = "";
    console.log(todoArray1);
});

// Practice 2
const inputBox2 = document.querySelector(".input-box-2");
const addButton2 = document.querySelector(".add-btn-2");

let todoArray2 = [];

function makeList() {
    todoArray2.push(inputBox2.value);
    inputBox2.value = "";

    let todoListHTML = '';
    for (let i=0; i<todoArray2.length; i++) {
        todoListHTML += `<p>${todoArray2[i]}</p>`;
    }
    document.querySelector('.todo-list').innerHTML = todoListHTML;
}

addButton2.addEventListener("click", () => { makeList(); });
inputBox2.addEventListener("keydown", (event) => { if (event.key === "Enter") makeList(); }); 


