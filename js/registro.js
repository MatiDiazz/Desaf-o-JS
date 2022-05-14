
const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector("");

    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    function ingresar(){
    
        let usuario = prompt ("ingresar usuario")
        alert("Bienvenido: " + usuario)
    }
    
    for ( let i =0; i<2; i+=1){
        ingresar()
    }

    /* const usuario1 = "Victor";
const usuario2 = "Matias";
const usuario3 = "Rocio";
const usuario4 = "Gregory"; */

const usuarios = ["Victor", "Matias", "Rocio", "Gregory"];

console.log(usuarios);

console.log(usuarios[0]);
console.log(usuarios[1]);
console.log(usuarios[2]);
console.log(usuarios[3]);
/* Cantidad de usuarios: */
console.log(usuarios.length);

const usuario1 = {
    nombre: "Victor Ortega",
    Contraseña: InicialOrtega
}

const usuario2 = {
    nombre: "Diaz Matias",
    Contraseña: InicialMatias
}

console.log(usuario1 ||"El usuario no existe" )

console.log(usuario2 ||"El usuario no existe" )



