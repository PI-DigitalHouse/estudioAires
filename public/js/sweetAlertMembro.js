
document.getElementById("btnSweetAlert").addEventListener("click", abreAlertDelete)
function abreAlertFinalizar(id){
  console.log(id)
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Tem certeza que deseja finalizar esse serviço?',
        text: "Ao finalizar, não será possível reativá-lo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Finalizar solicitação',
        showLoaderOnConfirm: true,
        cancelButtonText: 'Não',
        reverseButtons: true,

        }).then(async(result) => {
          console.log(result)

        if (result.isConfirmed) {
        
        await fetch(`http://localhost:3000/orcamento/finalizaJob?idOrcamento=${id}`)
        swalWithBootstrapButtons.fire(
          'Solicitação Finalizada!',
          'Seu serviço foi finalizado com sucesso',
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





