 //Mientras se baja, se ejecuta la funcion
    window.onscroll = () => {ocultar_boton()}
 //Teniendo encuenta el Y mostrar o no el boton, cambiando el display
    const ocultar_boton = () =>{
        
        if (window.scrollY > 800){
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

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#semi_circulo',
        scrub: true,
        end: '#semi_circulo'
    }
});

tl.from('.div-que-son', {x: 900})

tl.from('.fondo', {x: -400}, 0.4)

tl.from('.imagen-underheader', {scale: 0.5}, 0.4)

ScrollTrigger.matchMedia({
    "(min-width: 992px)": () => {
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#sexting-mas-info',
                end: '#sexting-mas-info 30%',
                scrub: true
            }
        })
        
        tl2.from('#card-1-sexting', {x: 600, scale: 0, duration: 3})
        tl2.from('#card-2-sexting', {x: -600, scale: 0, duration: 3})
        tl2.from('#card-3-sexting', {x: 600, scale: 0, duration: 3})
    },

    "(min-width: 768px)": () => {
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#sexting-mas-info',
                end: '#sexting-mas-info 60%',
                scrub: true
            }
        })
        
        tl3.from('#div-carousel-sexting', {scale: 0, rotate: 360})
    },

    "(max-width: 767px)": () => {
        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '#sexting-mas-info',
                markers: true,
                start: '#sexting-mas-info 40%',
                end: '#sexting-mas-info 20%',
                scrub: true
            }
        })
        
        tl4.from('#div-carousel-sexting', {x: 800, scale: 0, duration: 3})
    }
})
