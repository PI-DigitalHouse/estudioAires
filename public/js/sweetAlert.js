
document.getElementById("btnSweetAlert").addEventListener("click", abreAlertDelete)
function abreAlertDelete(id){
  console.log(id)
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Tem certeza que deseja cancelar esse serviço?',
        text: "Ao cancelar, não será possível reativá-lo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Cancelar solicitacão',
        showLoaderOnConfirm: true,
        cancelButtonText: 'Não',
        reverseButtons: true,

        }).then(async(result) => {
          console.log(result)

        if (result.isConfirmed) {
      //  swalWithBootstrapButtons.fire(
      //       'Solicitação cancelada!',
      //       'Seu serviço foi cancelado com sucesso',
      //       'success'
      //     )
        await fetch(`http://localhost:3000/orcamento/deletar?idOrcamento=${id}`)

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





