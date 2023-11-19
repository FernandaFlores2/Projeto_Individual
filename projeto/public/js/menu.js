var idUsuario = sessionStorage.getItem("idUsuario");

function verificarLogin() {
    
    if(idUsuario == null){
        window.location.href = "../login.html";
    }

}

function sair() {
    sessionStorage.removeItem("idUsuario"); /*sessrionStorage bd local, guarda os dados temporariamente no navegador */
    window.location.href = "../login.html";


}

window.addEventListener("load", verificarLogin);