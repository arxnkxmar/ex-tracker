// TASK MANAGER
function addTask() {
    let task = document.getElementById("taskInput").value;
    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => li.remove(); // Click to delete
    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = ""; 
}

// EXPENSE TRACKER
let total = 0;

function addExpense() {
    let name = document.getElementById("expName").value;
    let amount = parseInt(document.getElementById("expAmount").value);

    if (name === "" || isNaN(amount)) return;

    let li = document.createElement("li");
    li.textContent = `${name} - ₹${amount}`;
    document.getElementById("expList").appendChild(li);

    total += amount;
    document.getElementById("totalAmount").textContent = total;

    document.getElementById("expName").value = "";
    document.getElementById("expAmount").value = "";
}
