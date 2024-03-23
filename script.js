//your JS code here. If required.
const modal=document.querySelector(".modal");
const buttonOpen=document.querySelector("#openModal");
const buttonClose=document.querySelector(".close-modal");

buttonOpen.addEventListener("click", ()=>{
     modal.classList.remove("hide");
	
})
buttonClose.addEventListener("click", ()=>{
     modal.classList.add("hide");
	
})
