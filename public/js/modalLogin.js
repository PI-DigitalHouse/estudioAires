function abreFormLogin() {
    document.body.classList.add("showLoginForm")
}

function fechaFormLogin() {
    document.body.classList.remove("showLoginForm")
}



function fechaModalConteudo() {
    let modalHome=document.getElementById('modalCont')
    console.log(modalHome)
    modalHome.classList.add("fecharModalConteudo")
    let bckGroundModal= document.getElementById('baackGround')
    bckGroundModal.classList.add("fecharModalConteudo")
}