const motivationalQuotes = [
    "تو توانایی‌های بی‌نظیری داری! 💪",
    "رویاهای بزرگ داشته باش و برایش بجنگ! ✨",
    "هر روز یک قدم به موفقیت نزدیک‌تر شو! 🚀",
    "تو فوق‌العاده‌ای، فقط باور کن! 🌟"
];

function showTaskMenu() {
    document.getElementById("taskMenu").classList.toggle("hidden");
}

function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let taskStart = document.getElementById("taskStart").value;
    let taskEnd = document.getElementById("taskEnd").value;
    let taskCategory = document.getElementById("taskCategory").value;

    if(taskText === "") return;

    let taskItem = document.createElement("li");
    taskItem.innerHTML = `<input type="checkbox" onclick="completeTask(this)"> 
                          ${taskCategory} - ${taskText} (${taskStart} تا ${taskEnd})`;

    let pastelColors = ["#ffd3b6", "#ffaaa5", "#a8e6cf", "#dcedc1", "#c5e1a5"];
    taskItem.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];

    document.getElementById("taskList").appendChild(taskItem);
    document.getElementById("taskMenu").classList.add("hidden");
}

function completeTask(checkbox) {
    let taskItem = checkbox.parentElement;
    taskItem.classList.toggle("completed");

    if (document.querySelectorAll(".completed").length === document.querySelectorAll("li").length) {
        document.getElementById("motivationalMessage").classList.remove("hidden");
        document.getElementById("motivationalMessage").innerText =
            motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    }
}
function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let taskStart = document.getElementById("taskStart").value || "بدون زمان";
    let taskEnd = document.getElementById("taskEnd").value || "بدون زمان";
    let taskCategory = document.getElementById("taskCategory").value;

    if (taskText === "") return;

    let taskItem = document.createElement("li");
    taskItem.innerHTML = `<input type="checkbox" onclick="completeTask(this)"> 
                          ${taskCategory} - ${taskText} (${taskStart} تا ${taskEnd})`;

    let pastelColors = ["#ffd3b6", "#ffaaa5", "#a8e6cf", "#dcedc1", "#c5e1a5"];
    taskItem.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];

    document.getElementById("taskList").appendChild(taskItem);
    document.getElementById("taskMenu").classList.add("hidden");
}
