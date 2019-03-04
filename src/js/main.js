var button = document.querySelector("#button");
var modal = document.querySelector("#modal");
var close = document.querySelector("#close");

// button.addEventListener("click", function start(){
//     modal.classList.add("modal_active")
// })

// close.addEventListener("click", function end(){
//     modal.classList.remove("modal_active")
// })

button.addEventListener("click", function start(){
    modal.classList.add("modal_active")
    setTimeout(function end(){
        modal.classList.remove("modal_active")}, 5000
    )
    close.addEventListener("click", function end(){
        modal.classList.remove("modal_active")
    })
})


