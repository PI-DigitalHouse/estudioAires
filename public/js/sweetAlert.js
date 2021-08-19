
document.getElementById("btnSweetAlert").addEventListener("click", abreAlertDelete)
function abreAlertDelete(){
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
        
        },
        async function update(status){
          return await fetch(`http://locahost:3000/reserva?${status}`)

        }).then((result) => {

        if (result.isConfirmed) {
       swalWithBootstrapButtons.fire(
            'Solicitação cancelada!',
            'Seu serviço foi cancelado com sucesso',
            'success'
          )
          document.getElementById("containerServico").style.display = "none";
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





