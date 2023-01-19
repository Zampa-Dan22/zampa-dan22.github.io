

function ocultarproy(){
    document.getElementById('Proyectos').style.display = 'none';
    }

function ocultarpers(){
    document.getElementById('Persona').style.display = 'none';
    }

function mostrarproy(){
    document.getElementById('Proyectos').style.display = '';
    }
    
function mostrarpers(){
    document.getElementById('Persona').style.display = '';
    }

ocultarproy();

document.getElementById('personaMenu').addEventListener('click', function(){
    ocultarproy();
    mostrarpers();
})

document.getElementById('proyectosMenu').addEventListener('click', function(){
    ocultarpers();
    mostrarproy();
})

