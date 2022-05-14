

document.addEventListener("DOMContentLoaded", () =>{
    /*  localStorage.setItem("c", localStorage.getItem(c) */
     localStorage.c = localStorage.c || 0
     let t
     let cl = document.querySelector("#crono")
     /* CL.innerHTML = (localStorage.c).toFixed(1) */

     let incrementar = () =>{
         localStorage.c = +localStorage.c + 0.1

     }
     
     let arrancar = ()=>{
         t = setInterval(()=>{
             incrementar()
         }, 100)

     }
     let parar = ()=>{
         ClearInterval(t)
         t = undefined

     }
     let cambiar =  () => {
         if(!t){
             arrancar();
             mostrar()
         }else{
             parar()
         }
     }
let mostrar = () => cl.innerHTML = (+localStorage.c).toFixed(1)
     document.querySelector("#cambiar").addEventListener("click", cambiar)
     document.querySelector("#inicializar").addEventListener("click", ()=>{
         localStorage.c = "0"
         mostrar()
     })

 })