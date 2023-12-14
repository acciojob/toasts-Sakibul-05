//your JS code here. If required.
const addButton = document.querySelector("#add-button");
const clearbutton = document.querySelector("#clear-button");
const toasts = document.querySelector("#toasts");

function addToasts(message){
	const div = document.createElement("div");
	div.classList.add("toast", "success-toast");
	const p = document.createElement("p");
	p.classList.add("message");
	p.innerText = message;
	const button = document.createElement("button");
	button.innerText = "X";
	div.append(p, button);
	return div;
}
addButton.addEventListener("click", (event)=>{
	toasts.append(addToasts("Hello..."));
})
clearbutton.addEventListener("click", (event)=>{
	toasts.innerHTML = "";
})

















































