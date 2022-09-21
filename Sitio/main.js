//Animacion
gsap.to("#bg", {
    scrollTrigger: {
        scrub: 1
    },
    scale: 2,
})

gsap.to("#man", {
    scrollTrigger: {
        scrub: 1
    },
    scale: 0.9,
    
}) 

gsap.to("#mountain_left", {
    scrollTrigger: {
        scrub: 1
    },
    x: -4000,
}) 

gsap.to("#mountain_right", {
    scrollTrigger: {
        scrub: 1
    },
    x: 4000,
}) 

gsap.to("#text", {
    scrollTrigger: {
        scrub: 1
    },
    y: 1500,
})

gsap.to(".ejemplo", {
    scrollTrigger: {
        scrub: 1
    },
    scale: 1.5,
    x: 450,
    
}) 

gsap.to(".title", {
    scrollTrigger: {
        scrub: 1
    },
    
    x: -450,
    
}) 
//Mientras se baja, se ejecuta la funcion
window.onscroll = () => {ocultar_boton()}
//Teniendo encuenta el Y mostrar o no el boton, cambiando el display
   const ocultar_boton = () =>{
       
       if (window.scrollY > 3000){
           document.getElementById("btn_subir").style.display = "block"
       }else{
           document.getElementById("btn_subir").style.display = "none"
       }
   }
//Subir arriba de la pagina
const subir = () => {
   window.scrollTo(0,0)
  
}




document.getElementById("btn_subir").addEventListener("click",subir)

const cambio_idiomas = () => {
    let language = document.getElementById('option').value

    if (language=="eng") {
        location.href='indexeng.html'
    }else{
        
            location.href='index.html'
        
    }

}
const idiomas = document.getElementById('option')
idiomas.addEventListener('change',cambio_idiomas)

