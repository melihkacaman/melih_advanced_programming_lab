let add_task = (e) => {
    e.preventDefault();  // this stops it from refreshing.
    
    const input = document.querySelector("#new-task-input"); 
    const list_el = document.querySelector("#tasks"); 
    const task = input.value; 

    if(!task){
        alert("Plese, fill out the task!"); 
        return; 
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task"); 

    const task_content_el = document.createElement("div"); 
    task_content_el.classList.add("content"); 
    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input"); 
    task_input_el.classList.add("text"); 
    task_input_el.type = "text"; 
    task_input_el.value = task; 
    task_input_el.setAttribute("readonly", "readonly"); 
    
    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div"); 
    task_actions_el.classList.add("actions"); 

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit"); 
    task_edit_el.innerHTML = "Edit"; 

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete"); 
    task_delete_el.innerHTML = "Delete"; 

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
    
    task_el.appendChild(task_actions_el); 
    list_el.appendChild(task_el);

    input.value = ""; 

    task_edit_el.addEventListener("click", () => {
        if(task_edit_el.innerText.toLowerCase() == "edit"){
            task_input_el.removeAttribute("readonly"); 
            task_input_el.focus(); 
            task_edit_el.innerText = "Save"; 
        }else {
            task_input_el.setAttribute("readonly", "readonly"); 
            task_edit_el.innerText = "Edit"; 
        }
    });
    
    task_delete_el.onclick = () => {
        list_el.removeChild(task_el); 
    }

}

let main = () => {
    const form_tasks = document.getElementById("new-task-form"); 
    form_tasks.addEventListener("submit", add_task);

    const start = document.getElementById("start");
    const reset = document.getElementById("reset");
    const stop = document.getElementById("stop");
    
    const wm = document.getElementById("w_minutes");
    const ws = document.querySelector("#w_seconds");

    const bm = document.getElementById("b_minutes");
    const bs = document.querySelector("#b_seconds");

    let startTimer; 
    start.addEventListener("click", () => {
        if(startTimer === undefined){
            startTimer = setInterval(timer, 1000); 
        }else {
            alert("Timer is already running"); 
        }
    });
    reset.addEventListener("click", () => {
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText = 0;
        stopTimer();
        startTimer = undefined; 
    });
    stop.addEventListener("click", () => {
        stopTimer(); 
        startTimer = undefined; 
    });

    let timer = () => {
        if(ws.innerText != 0) {
            ws.innerText--; 
        }else if(wm.innerText != 0 && ws.innerText == 0){
            ws.innerText = 59; 
            wm.innerText--;
        }

        if (wm.innerText == 0 && ws.innerText == 0) {
            if (bs.innerText != 0) {
                bs.innerText--; 
            }else if (bm.innerText != 0 && bs.innerText == 0) {
                bs.innerText = 59; 
                bm.innerText--;
            }
        }

        if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
            wm.innerText = 25;
            ws.innerText = "00";
    
            bm.innerText = 5;
            bs.innerText = "00";
    
            document.getElementById('counter').innerText++;
            stopTimer(); 
            startTimer = undefined;
        }
    }

    let stopTimer = () => {
        clearInterval(startTimer);
    }
}
window.addEventListener("load", main); 