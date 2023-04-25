let vectorPersonas = [];

let posicion 

vectorPersonas = JSON.parse(localStorage.getItem("datosVector"))

document.getElementById("btnGuardar").addEventListener('click', guardarDatos)
document.getElementById("btnActualizar").addEventListener('click', grabarCambios)


Mostrar()

function guardarDatos() {
    let objetoPersona = {
        nombre: document.getElementById("nombreID").value, 
        apellido: document.getElementById("apellidoID").value, 
        telefono: document.getElementById("telefonoID").value 
    }
        vectorPersonas.push(objetoPersona)
        localStorage.setItem("datosVector", JSON.stringify(vectorPersonas)); [{nombre: "be", apellido: "be", telefono: "12"}]

        document.getElementById("nombreID").value = "" 
        document.getElementById("apellidoID").value = ""
        document.getElementById("telefonoID").value = ""
    Mostrar()
}

function Mostrar() {
    document.getElementById('mostrar').innerHTML = ""
    vectorPersonas.forEach((element, i) => {
        document.getElementById('mostrar').innerHTML += "NOMBRE : " +element.nombre + " APELLIDO: " + element.apellido +
        " TELEFONO : " + element.telefono +
        
        
        
        '<button class="btn btn-danger mt-5" onclick="eliminarDatos('+ i +')">Eliminar</button>' +
        '<button class="btn btn-primary mt-5" onclick="ActualizarDatos('+ i +')">Actualizar</button>'
        + '<br>'    
     });
}

function eliminarDatos(pos) {
    vectorPersonas.splice(pos, 1)
    localStorage.setItem("datosVector", JSON.stringify(vectorPersonas));

    Mostrar()
}

function ActualizarDatos(pos) {

 posicion = pos

 document.getElementById("nombreID").value = vectorPersonas[pos].nombre
 document.getElementById("apellidoID").value = vectorPersonas[pos].apellido
 document.getElementById("telefonoID").value = vectorPersonas[pos].telefono
}

function grabarCambios(){
    let objetoPersona = {
        nombre: document.getElementById("nombreID").value,
        apellido: document.getElementById("apellidoID").value,
        telefono: document.getElementById("telefonoID").value
    }

    vectorPersonas[posicion] = objetoPersona

    document.getElementById("nombreID").value = ""
    document.getElementById("apellidoID").value = ""
    document.getElementById("telefonoID").value = ""
Mostrar()
}