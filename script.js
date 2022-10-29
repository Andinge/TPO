//Funcion para el menu responsive
const menuResponsive=()=>{
    const navResponsivo = document.getElementById("navResponsivo");
    const menuBrgr = document.getElementById("menu-brgr");
    menuBrgr.addEventListener("click",()=>{
        navResponsivo.ClassList.toggle("toggle-menu")
    })
}
menuResponsive();

// agregando api para calcular el sueldo de un programador
const textoApi = document.getElementById("textoapi");
let sueldoProgramador=187000;
const sueldoADolar = async ()=>{
    const urlDolar = "https://api-dolar-argentina.herokuapp.com/api/dolarblue";
    let response = await fetch(urlDolar);
    let data = await response.json();
    let sueldoDolarizado=sueldoProgramador/data.venta
    textoApi.innerHTML=`El sueldo medio de Desarrollador de software / Programador en Argentina es de $187.000/US$${Math.round(sueldoDolarizado)} mensual.`
}
sueldoADolar()

//Funcion validar formulario
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert("El campo nombre no puede estar vacio");
        return false;
    }
    if (correo == null || correo.length == 0 || /^\s+$/.test(correo)) {
        alert("El campo correo no puede estar vacio");
        return false;
    }
    if (mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)) {
        alert("El campo mensaje no puede estar vacio");
        return false;
    }
    return true;
}      
