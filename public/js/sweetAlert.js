
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
        text: "Ao cancelar, não será possível reativá-lo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Cancelar solicitacão',
        cancelButtonText: 'Não',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Solicitação cancelada!',
            'Seu serviço foi cancelado com sucesso',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Ufa, foi por pouco...',
            'Sua solicitação segue ativa :)',
            'error'
          )
        }
      })
    }




