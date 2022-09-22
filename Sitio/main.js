 //Mientras se baja, se ejecuta la funcion
    window.onscroll = () => {ocultar_boton()}
 //Teniendo encuenta el Y mostrar o no el boton, cambiando el display
    const ocultar_boton = () =>{
        
        if (window.scrollY > 200){
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

gsap.registerPlugin(ScrollTrigger);

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.div-animacion-astronauta',
        pin: '.astronauta',
        scrub: true,
        start: 'top top',
        end: '100% 100%',
    }
})

tl2.to('.astronauta', {y: '100%', rotate: '360deg'})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#semi_circulo',
        scrub: true,
        end: '#semi_circulo'
    }
});

tl.from('.div-que-son', {x: 400})

tl.from('.fondo', {x: -400}, 0.4)

tl.from('.imagen-underheader', {scale: 0.5}, 0.4)