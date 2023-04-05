const btn = document.querySelector(".btn");
const newTable = document.querySelector(".newTable");
const title = document.querySelector("#title");
const editDiv = document.querySelector(".edit");
const editInput = document.querySelector("#editInput");
const hidden = document.querySelector(".hidden");
const btnEdit = document.querySelector(".btnEdit");
const NewText = document.querySelector(".editText");
const inputs = document.querySelector(".inputs");

btn.addEventListener("click", () => {
  if (title.value == "") {
    alert("you must write here...");
  } else {
    // start fullBtn ==============================
    const fullBtn = document.createElement("div");
    fullBtn.classList.add("full");

    const newTitle = document.createElement("p");
    newTitle.classList.add('col')
    newTitle.textContent = title.value;
    fullBtn.appendChild(newTitle);

    const forBtn = document.createElement("div");
    // forBtn.classList.add("d-flex")
    const remove = document.createElement("button");
    remove.innerHTML = `⛔`;
    const edit = document.createElement("button");
    edit.innerHTML = `✍🏼`;
    const check = document.createElement("button");
  
    check.innerHTML = `✅`;
    forBtn.opacit;
    forBtn.append(check, remove, edit);

    fullBtn.appendChild(forBtn);
  

    newTable.appendChild(fullBtn);

    // finish fullBtn ===============================
    remove.addEventListener("click", () => {
      fullBtn.remove();
    });
    check.addEventListener("click", ()=>{
    
    newTitle.classList.add("text1")
    
    
    });
    edit.addEventListener("click", () => {
      editDiv.classList.toggle("edit");
      btnEdit.addEventListener("click", () => {
        newTitle.textContent = NewText.value;
      });
    });
    edit.addEventListener("click", () => {
      btnEdit.addEventListener("click", () => {
        editDiv.style.visibility = "hidden";
      });
      edit.addEventListener("click", () => {
        editDiv.style.visibility = "visible";
      });
    });
    title.value=''
  }
});
