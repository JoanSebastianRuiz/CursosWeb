class Curso {
    static cont = 0;

    constructor (nombre, descripcion, areaTematica, duracion, modulos){
        this.id=Curso.cont+1;
        Curso.cont+=1;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.areaTematica=areaTematica;
        this.duracion=duracion;
        this.modulos=modulos;
    }
}

const validarNumero = RegExp("[0-9]{1,}");
const validarString = RegExp("[A-Za-z ]{4,}");

const cursosHTML = document.querySelector(".cursos");
const botonMostrarCursos = document.querySelector(".mostrarCursos");
const botonCargarDatos = document.querySelector(".cargarDatos")
const botonAgregarCurso = document.querySelector(".agregarCurso");
const botonEliminarCurso =document.querySelector(".eliminarCurso");
const botonModificarCurso = document.querySelector(".modificarCurso");
const botonFiltrarCurso = document.querySelector(".filtrarCurso");

const curso1 = new Curso("Python", "En este curso podras aprender las funciones basicas de progamacion en Python", "Programacion", 5,
["Algoritmos", "Fundamentos de Python", "Condicionales", "Estructuras repetitivas", "Programacion orientada a objetos"]);

const curso2 = new Curso("Java", "En este curso podras aprender las funciones basicas de progamacion en Java", "Programacion", 8,
["Algoritmos", "Fundamentos de Java", "Condicionales", "Estructuras repetitivas", "Programacion orientada a objetos"]);

const curso3 = new Curso("PHP", "En este curso podras aprender las funciones basicas de progamacion en PHP", "Programacion", 4,
["Algoritmos", "Fundamentos de PHP", "Condicionales", "Estructuras repetitivas", "Programacion orientada a objetos"]);

const curso4 = new Curso("JavaScript", "En este curso podras aprender las funciones basicas de JavaScript", "Programacion", 10,
["Algoritmos", "Fundamentos de JavaScript", "Condicionales", "Estructuras repetitivas", "Programacion orientada a objetos", "Asincronismo"]);

const cursos = [curso1, curso2, curso3, curso4];
var cursosMostrar =[];
var cursosCargados=false;


const cargarDatos = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(cursos);
        },3000);
    });
}

const mostrarCursos = (array)=>{
    let cursosInsertar="";

    for (curso of array){
        let modulosInsertar=""
        for (modulo of curso.modulos){
            modulosInsertar+=`<li class="modulo">${modulo}</li>`
        }

        cursosInsertar+=`<div class="curso">
        <h2 class="nombre">${curso.nombre}</h2>
        <p class="id"><b>Id:</b> ${curso.id}</p>
        <p class="descripcion"><b>Descripcion:</b> ${curso.descripcion}</p>
        <p class="areaTematica"><b>Area temática:</b> ${curso.areaTematica}</p>
        <p class="duracion"><b>Duración:</b> ${(curso.duracion).toString()} semanas</p>
        <ul class="modulos">
        <h4>Módulos:</h4>
            ${modulosInsertar}
        </ul>
    </div>`
    }

    cursosHTML.innerHTML=cursosInsertar;
}


const agregarCurso = ()=>{
    while(true){
        var nombre = prompt("Ingrese el nombre del curso:");
        if (validarString.test(nombre)){
            break;
        } else{
            alert("Nombre invalido");
        }
    }

    while(true){
        var descripcion = prompt("Ingrese la descripción del curso:");
        if (validarString.test(descripcion)){
            break;
        } else{
            alert("Descripción invalida");
        }
    }
    
    while(true){
        var areaTematica = prompt("Ingrese el área temática del curso:");
        if (validarString.test(areaTematica)){
            break;
        } else{
            alert("Área temática invalida");
        }
    }

    while(true){
        var duracion = prompt("Ingrese la duración del curso en semanas:");
        if (validarNumero.test(duracion)){
            break;
        } else{
            alert("Duración invalida");
        }
    }

    while(true){
        var numeroModulos = prompt("Ingrese el número de módulos del curso:");
        if (validarNumero.test(numeroModulos)){
            break;
        } else{
            alert("Número de módulos invalida");
        }
    }

    for (let i=0; i<numeroModulos; i++){
        var modulos =[];
        while(true){
            let modulo = prompt(`Ingrese el módulo ${i+1} del curso:`);
            if (validarString.test(modulo)){
                modulos[i]=modulo;
                break;
            } else{
                alert("Nombre de módulo invalido");
            }
        }
    }

    let cursoParaMostrar = new Curso(nombre,descripcion,areaTematica,duracion,modulos);
    cursosMostrar.push(cursoParaMostrar);
}

const eliminarCurso = () =>{
    while(true){
        var idEliminar = prompt("Ingrese el id del curso que desea eliminar:");
        if (validarNumero.test(idEliminar)){
            break;
        } else{
            alert("Id invalido");
        }
    }
    let elementoEliminado=false;

    for (let i=0; i<cursosMostrar.length; i++){
        if(cursosMostrar[i].id==idEliminar){
            cursosMostrar.splice(i,1);
            elementoEliminado=true
            alert("Curso eliminado correctamente");
            break;
        }
    }

    if (!elementoEliminado){
        alert(`No se encontro un curso con el id ${idEliminar}`);
    }
}


const modificarCurso = ()=>{
    while(true){
        var idModificar = prompt("Ingrese el id del curso que desea modificar:");
        if (validarNumero.test(idModificar)){
            break;
        } else{
            alert("Id invalido");
        }
    }
    let elementoEncontrado=false;

    for (let i=0; i<cursosMostrar.length; i++){
        if(cursosMostrar[i].id==idModificar){

            while(true){
                var nombre = prompt("Ingrese el nombre del curso que desea modificar:");
                if (validarString.test(nombre)){
                    break;
                } else{
                    alert("Nombre invalido");
                }
            }
            
            cursosMostrar[i].nombre=nombre;

            while(true){
                var descripcion = prompt("Ingrese la descripción del curso que desea modificar:");
                if (validarString.test(descripcion)){
                    break;
                } else{
                    alert("Descripción invalida");
                }
            }
            
            cursosMostrar[i].descripcion=descripcion;

            while(true){
                var areaTematica = prompt("Ingrese el área temática del curso que desea modificar:");
                if (validarString.test(areaTematica)){
                    break;
                } else{
                    alert("Área temática invalida");
                }
            }
            
            cursosMostrar[i].areaTematica=areaTematica;

            while(true){
                var duracion = prompt("Ingrese la duración del curso que desea modificar en semanas:");
                if (validarNumero.test(duracion)){
                    break;
                } else{
                    alert("Duración invalida");
                }
            }

            cursosMostrar[i].duracion=duracion;
        
            while(true){
                var numeroModulos = prompt("Ingrese el número de módulos del curso que desea modificar:");
                if (validarNumero.test(numeroModulos)){
                    break;
                } else{
                    alert("Número de módulos invalida");
                }
            }
        
            for (let i=0; i<numeroModulos; i++){
                var modulos =[];
                while(true){
                    let modulo = prompt(`Ingrese el módulo ${i+1} del curso que desea modificar:`);
                    if (validarString.test(modulo)){
                        modulos[i]=modulo;
                        break;
                    } else{
                        alert("Nombre de módulo invalido");
                    }
                }
            }

            cursosMostrar[i].modulos=modulos;

            elementoEncontrado=true
            alert("Curso modificado correctamente");
            break;
        }
    }

    if (!elementoEncontrado){
        alert(`No se encontro un curso con el id ${idModificar}`);
    }

}

const filtrarPorNombre = () =>{
    while(true){
        var nombreBuscar = prompt("Ingrese el nombre del curso que desea buscar:");
        if (validarString.test(nombreBuscar)){
            break;
        } else{
            alert("Nombre invalido");
        }
    }
    let elementoEncontrado=false;

    for (let i=0; i<cursosMostrar.length; i++){
        if(cursosMostrar[i].nombre.toUpperCase()==nombreBuscar.toUpperCase()){
            elementoEncontrado=true
            let cursoFiltrado = [];
            cursoFiltrado.push(cursosMostrar[i]);
            alert("Curso encontrado correctamente")
            mostrarCursos(cursoFiltrado);
        }
    }

    if (!elementoEncontrado){
        alert(`No se encontro un curso con el nombre ${nombreBuscar}`);
    }
}

const guardarCursosLocalStorage = () =>{
    localStorage.setItem("Cursos", JSON.stringify(cursosMostrar));
}

botonMostrarCursos.addEventListener("click", async ()=>{
    if (!cursosCargados){
        cursosIniciales = await cargarDatos();
        for (curso of cursosIniciales){
            cursosMostrar.push(curso);
        }
        cursosCargados=true;
        alert("Cursos cargados correctamente");
    }
    mostrarCursos(cursosMostrar);
});

botonCargarDatos.addEventListener("click", async ()=>{
    if (!cursosCargados){
        cursosIniciales = await cargarDatos();
        for (curso of cursosIniciales){
            cursosMostrar.push(curso);
        }
        cursosCargados=true;
        alert("Cursos cargados correctamente");
        guardarCursosLocalStorage();
    } else{
        alert("Los cursos ya se encuentran cargados");
    }
});

botonAgregarCurso.addEventListener("click", async ()=>{
    if (!cursosCargados){
        cursosIniciales = await cargarDatos();
        for (curso of cursosIniciales){
            cursosMostrar.push(curso);
        }
        cursosCargados=true;
        alert("Cursos cargados correctamente");
    }
    agregarCurso();
    alert("Curso agregado correctamente");
    mostrarCursos(cursosMostrar);
    guardarCursosLocalStorage();
});

botonEliminarCurso.addEventListener("click", async ()=>{
    if (!cursosCargados){
        cursosIniciales = await cargarDatos();
        for (curso of cursosIniciales){
            cursosMostrar.push(curso);
        }
        cursosCargados=true;
        alert("Cursos cargados correctamente");
    }
    eliminarCurso();
    mostrarCursos(cursosMostrar);
    guardarCursosLocalStorage();
});

botonModificarCurso.addEventListener("click", async ()=>{
    if (!cursosCargados){
        cursosIniciales = await cargarDatos();
        for (curso of cursosIniciales){
            cursosMostrar.push(curso);
        }
        cursosCargados=true;
        alert("Cursos cargados correctamente");
    }
    modificarCurso();
    mostrarCursos(cursosMostrar);
    guardarCursosLocalStorage();
});

botonFiltrarCurso.addEventListener("click", async ()=>{
    if (!cursosCargados){
        cursosIniciales = await cargarDatos();
        for (curso of cursosIniciales){
            cursosMostrar.push(curso);
        }
        cursosCargados=true;
        alert("Cursos cargados correctamente");
    }
    filtrarPorNombre();
});


