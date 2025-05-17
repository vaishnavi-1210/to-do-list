// Splash Screen Transition
document.getElementById("enterBtn").addEventListener("click", function () {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main-app").style.display = "block";
});

// Add Task on Button Click
document.querySelector("#button1").addEventListener("click", handleClick);

// Add Task on Enter Key
document.getElementById("myInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button1").click();
    }
});

function handleClick() {
    const data = document.getElementById("myInput").value.trim();
    if (data === "") {
        alert("Please enter the task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = data;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "x";
    removeBtn.className = "remove-btn";
    li.appendChild(removeBtn);

    const removeBtn2 = document.createElement("button");
    removeBtn2.textContent = "x";
    removeBtn2.className = "remove-btnn";
    li.appendChild(removeBtn2);
    li.addEventListener("click", function (e) {
        if (e.target !== removeBtn) {
            li.classList.toggle("taskhandle");
         removeBtn2.textContent = removeBtn2.textContent === "✔️" ? "X" : "✔️";
    
        }
    });

    removeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        li.remove();
    });

    document.querySelector("#tasks").appendChild(li);
    document.getElementById("myInput").value = "";
    alert("Task is added");
}
