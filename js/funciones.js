//Eventos
document.getElementById('experiencia').addEventListener('click', function(){ 
    document.getElementById('experiencia_contenido').scrollIntoView()
});

document.getElementById('formacion').addEventListener('click', function(){ 
    document.getElementById('formacion_contenido').scrollIntoView()
});

document.getElementById('cursos').addEventListener('click', function(){ 
    document.getElementById('cursos_contenido').scrollIntoView()
});
document.getElementById('acerca').addEventListener('click', function(){ 
    document.getElementById('acerca_contenido').scrollIntoView()
});

document.getElementById('contacto').addEventListener('click', function(){ 
    document.getElementById('contacto_contenido').scrollIntoView()
});

/**Aparicion de div al hacer Scroll*/
const experiencia1 =document.getElementById('experiencia_contenido');
const formacion1 =document.getElementById('formacion_contenido');
const cursos1 =document.getElementById('cursos_contenido');
const acerca1 =document.getElementById('acerca_contenido');
const contacto1 =document.getElementById('contacto_contenido');

const cargarDiv =(entradas,observador)=>{
    //console.log('Ejecuta')
    //console.log(entradas);
    //console.log(observador);
    //alert('Ejecuta!!!')
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            //console.log('Esta en viewport')
            entrada.target.classList.add('visible');
        }else{
            entrada.target.classList.remove('visible');
        }
    });
}
const cargarExperiencia = new IntersectionObserver(cargarDiv,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.1
});

cargarExperiencia.observe(experiencia1);
cargarExperiencia.observe(formacion1);
cargarExperiencia.observe(cursos1);
cargarExperiencia.observe(acerca1);
cargarExperiencia.observe(contacto1);
/**MouseOver */

document.getElementById('fm').addEventListener('mouseover', function(){ 
    document.getElementById('fm').style.opacity="1";
});
document.getElementById('fm').addEventListener('mouseout', function(){ 
    document.getElementById('fm').style.opacity="0";
});

document.getElementById('ternium').addEventListener('mouseover', function(){ 
    document.getElementById('ternium').style.opacity="1";
});
document.getElementById('ternium').addEventListener('mouseout', function(){ 
    document.getElementById('ternium').style.opacity="0";
});

document.getElementById('marini').addEventListener('mouseover', function(){ 
    document.getElementById('marini').style.opacity="1";
});
document.getElementById('marini').addEventListener('mouseout', function(){ 
    document.getElementById('marini').style.opacity="0";
});

document.getElementById('paktar').addEventListener('mouseover', function(){ 
    document.getElementById('paktar').style.opacity="1";
});
document.getElementById('paktar').addEventListener('mouseout', function(){ 
    document.getElementById('paktar').style.opacity="0";
});

document.getElementById('calipso').addEventListener('mouseover', function(){ 
    document.getElementById('calipso').style.opacity="1";
});
document.getElementById('calipso').addEventListener('mouseout', function(){ 
    document.getElementById('calipso').style.opacity="0";
});

document.getElementById('almundo').addEventListener('mouseover', function(){ 
    document.getElementById('almundo').style.opacity="1";
});
document.getElementById('almundo').addEventListener('mouseout', function(){ 
    document.getElementById('almundo').style.opacity="0";
});
/*Menu
document.getElementById('menu').addEventListener('mouseover', function(){ 
    document.getElementById('navegacion').style.visibility="hidden";    
});
document.getElementById('menu').addEventListener('mouseover', function(){ 
    document.getElementById('navegacion').style.visibility="initial";
});*/
