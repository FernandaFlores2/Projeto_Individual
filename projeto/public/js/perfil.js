function editarNome() {
    nomeEdicao.removeAttribute("disabled");
    nomeEdicao.focus();
}

function editarImagem() {
    var  reader = new FileReader();
    reader.onload = () => fotoEdicao.src = reader.result;
    reader.readAsDataURL(image.files[0]);
}