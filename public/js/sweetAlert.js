
document.getElementById("btnSweetAlert").addEventListener("click", abreAlertDelete)
function abreAlertDelete(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Tem certeza que deseja cancelar esse serviço?',
        text: "Ao cancelar nao sera possivel reativar essa solicitacao",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Cancelar solicitacao!',
        cancelButtonText: 'Nao',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Solicitacao cancelada!',
            'Seu servico foi cancelado com sucesso',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Ufa, foi por pouco...',
            'Sua solicitacao segue ativa:)',
            'error'
          )
        }
      })
    }




