  // Get the modal
  var modalCadastro = document.getElementById('id02');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event2) {
      if (event2.target == modalCadastro) {
          modal.style.display = "none";
      }
  }