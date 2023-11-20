function mostrarComentarios() {
    containerGeralComentarios.style.display = "block";
}



function mostrarFoto() {
    var  reader = new FileReader();
    reader.onload = () => fotoEscolhidaPublic.src = reader.result;
    reader.readAsDataURL(image.files[0]);
    
    fotoPubli.style.display = "block";

}