document.getElementById("btnSweetAlert").addEventListener("click", abreAlertDelete)
function abreAlertDelete(){

Swal.fire({
    title: 'Tem certeza que deseja cancelar esse serviço?',
    text: "Ao cancelar nao sera possivel reativar essa solicitacao",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Cancelado',
        'Sua solicitacao foi cancelada',
        'success'
      )
    }
  })
}
