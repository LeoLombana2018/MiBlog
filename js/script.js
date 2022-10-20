alert('ventana de alerta prueba')

function cambiarTexto(){
    document.getElementById('parrafo-post').innerHTML='Esto reemplazara el texto visualizado';
}

function textoOriginal(){
    document.getElementById('parrafo-post').innerText='Este es un nuevo párrafo en el cual estaremos viendo los cambios que se veran desde git';
}