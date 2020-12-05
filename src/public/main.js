document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-main').classList.toggle('show');
});

window.addEventListener('load', ()=>{
    const contenedor_loader = document.querySelector('.contenedor_loader');
    contenedor_loader.style.opacity = 0;
    contenedor_loader.style.visibility = 'hidden';
 
})

// document.querySelector('#carga').addEventListener('click',()=>{
    
//     //document.getElementById("carga").classList.toggle('d-none');
//     document.querySelector('.loading').classList.toggle('d-block');
    
// });




ScrollReveal().reveal('.main-contenedor',{delay:500});
ScrollReveal().reveal('.about-us', {delay: 500});
ScrollReveal().reveal('.results', {delay: 500});
ScrollReveal().reveal('.services', {delay: 500});

// let ubicacionPrincipal = window.pageYOffset;

// window.addEventListener("scroll", function(){

//     let desplazamientoActual = window.pageYOffset;
//     if(ubicacionPrincipal >= desplazamientoActual){
//         document.getElementsByTagName("navbar")[0].style.top = "0px"
//     }else{
//         document.getElementsByTagName("navbar")[0].style.top="-100px"
//     }
//     ubicacionPrincipal = desplazamientoActual;
// })

const file = document.querySelector("#file");
const imgPreview = document.querySelector("#imgPreview");

file.addEventListener("change", (e)=>{     
    const selectedFile = e.target.files[0];
    const reader = new FileReader()
    reader.onloadend = () => {
        imgPreview.src = reader.result;    
    }
    reader.readAsDataURL(selectedFile)
    
});

const notename = document.querySelector("#notename")
const notedescription = document.querySelector("#notedescription")
const noteform = document.querySelector("#noteform")
const noteparrafo = document.querySelector("#notewarnings")

 noteform.addEventListener("submit", e=>{
  
    let warnings =""
    let entrar = false
    noteparrafo.innerHTML = ""
    if(notename.value.length < 4){
        warnings += 'Nombre no es valido <br>'
        entrar=true
    }
    if(notedescription.value.length < 4){
        warnings += 'Ingresa una descripción <br>'
        entrar=true
    }
    if(entrar){
        noteparrafo.innerHTML = warnings
    }
});


