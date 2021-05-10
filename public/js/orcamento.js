var currentTab = 0; // O dash atual é definido para ser o primeiro dash (0)
showTab(currentTab); // Exibir a dash atual

function showTab(n) {
  // Esta função irá exibir dash especificado do formulário ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... e corrija os botões Voltar / Confirmar:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Acesse sua área restrita";
  } else {
    document.getElementById("nextBtn").innerHTML = "CONFIRMAR";
  }
  // ... e executa uma função que exibe o indicador do step correto:
  fixStepIndicator(n)
}

function nextPrev(n) {
  //Esta função descobrirá qual dash deve exibir
  var x = document.getElementsByClassName("tab");
  // Saia da função se algum campo do dash atual for inválido:
  if (n == 1 && !validateForm()) return false;
  // Oculte o dash atual:
  x[currentTab].style.display = "none";
  // Aumente ou diminua o dash atual em 1 :
  currentTab = currentTab + n;
  // se você chegou ao final do formulário ... :
  if (currentTab >= x.length) {
    //...o formulário é enviado:
    document.getElementById("acao-central").submit();
    
    return false;
  }
  // Caso contrário, exiba o dash correto:
  showTab(currentTab);
}

function validateForm() {
  // Esta função trata da validação dos campos do formulário
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // Um loop que verifica todos os campos de entrada no dash atual:
  for (i = 0; i < y.length; i++) {
    //Se um campo estiver vazio ...
    if (y[i].value == "") {
     // adicione uma classe "inválida" ao campo:
      y[i].className += " invalid";
      // e defina o status válido atual como falso:
      valid = false;
    }
  }
  //Se o status válido for verdadeiro, marque a etapa como concluída e válida:
  if (valid) {
    document.getElementsByClassName("bolaOk")[currentTab].className += " finish";
    
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish2";
    
  }
  return valid; // retornar o status válido
}

function fixStepIndicator(n) {
  // Esta função remove a classe "ativa" de todos os steps ...
  var i, x = document.getElementsByClassName("bolaOk");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... e adiciona a classe "ativa" ao step atual:
  x[n].className += " active";
}
/*icone*/
function fixStepIndicator2(n) {
  // Esta função remove a classe "ativa" de todos os steps ...
  var i, x = document.getElementsByClassName("step-selection");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //...  e adiciona a classe "ativa" ao step atual:
  x[n].className += " active";
}
/*border*/
function fixStepIndicator2(n) {
  // Esta função remove a classe "ativa" de todas as etapas ...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //...  e adiciona a classe "ativa" ao step atual:
  x[n].className += " active";
}