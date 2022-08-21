 //Mientras se baja, se ejecuta la funcion
    window.onscroll = () => {ocultar_boton()}
 //Teniendo encuenta el Y mostrar o no el boton, cambiando el display
    const ocultar_boton = () =>{
        
        if (window.scrollY > 4000){
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
