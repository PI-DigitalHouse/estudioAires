var currentTab = 0; // O dash atual é definido para ser o primeiro dash (0)
showTab(currentTab); // Exibir a dash atual
const orcamentosCadastrados = [];

function showTab(n) {
  // Esta função irá exibir dash especificado do formulário ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... e corrija os botões Voltar / Confirmar:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("check-disponibilidade").style.display = "none";
    document.getElementById("nextBtn2").style.display = "none";
    document.getElementById("horario").style.display = "none";
  } else if (n == 3) {
    document.getElementById("check-disponibilidade").style.display = "inline";
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("nextBtn2").style.display = "none";
    document.getElementById("horario").style.display = "none";
  } else if (n == 4) {
    document.getElementById("nextBtn2").style.display = "inline";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("horario").style.display = "none";
  } else {
    document.getElementById("check-disponibilidade").style.display = "none";
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("horario").style.display = "none";
  }

  //codigo original por se der merda
  // if (n == 0) {
  //   document.getElementById("prevBtn").style.display = "none";
  // } else {
  //   document.getElementById("prevBtn").style.display = "inline";
  // } 
  // if (n == (x.length - 1)) {
  //   document.getElementById("nextBtn").innerHTML = "Acesse sua área restrita";
  // } else {
  //   document.getElementById("nextBtn").innerHTML = "CONFIRMAR";
  // }

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
    //document.getElementById("acao-central").salvarUsuario(orcamentosCadastrados)

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

function salvarUsuario(usuario) {
  const str = JSON.stringify(usuario) //transforma usuario em string
  fs.writeFileSync('orcamentosCadastrados.json', str)// criando o json com os usuarios cadastrados na string
}

//codigo para verificar a disponibilidade

let botaoDisponibilidade = document.getElementById("check-disponibilidade")

botaoDisponibilidade.onclick = () => {

  let dataInicioForm = document.getElementById("picker1").value
  dataInicioForm += 'T00:00:00.000Z'

  //cria array de dias ocupados
  const diasOcupados = []

  for (let i = 0; i < horariosBloqueados.length; i++) {
    diasOcupados.push(horariosBloqueados[i].dataInicio)
  }

  //verifica se o dia selecionado já tem alguma reserva
  if (diasOcupados.indexOf(dataInicioForm) == -1) {
    console.log("o dia selecionado está livre")

    document.getElementById("horario").style.display = "inline";
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("check-disponibilidade").style.display = "none";
    document.getElementById("erro-disponibilidade").innerHTML = ' '
  

    $('#picker2').datetimepicker({
      timepicker: true,
      datepicker: false,
      format: 'H:i',
      yearStart: 2021,
      yearEnd: 2022,
      step: 30,
      mask: true,
      lang: 'pt-BR',
      il8n: {
        month: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        dayOfWeek: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
      },
      minDate: today,
      allowTimes: function getArr() {
        var allowTimes = [
          '08:00:00', '10:00:00', '14:00:00', '16:00:00'
        ];
        return allowTimes;
      }(),
    })
  } else {
    console.log("o dia selecionado está ocupado")
  
    verificaDisponibilidade(dataInicioForm)

  }
}

async function verificaDisponibilidade(data) {

  let allowTimes = ['08:00:00', '10:00:00', '14:00:00', '16:00:00']

  const fetchResult = await fetch(`http://localhost:3000/orcamento/horariosPorDia?data=${data}`)
  const horariosOcupados = await fetchResult.json()

  for (horarioOcupado of horariosOcupados) {
    let index = allowTimes.indexOf(horarioOcupado.horarioInicio)
    allowTimes.splice(index, 1)
  }

  if (allowTimes.length === 0) {
    console.log('todos os horários do dia estão ocupados')

    document.getElementById("check-disponibilidade").style.display = "inline";
    document.getElementById("horario").style.display = "none";
    document.getElementById("erro-disponibilidade").innerHTML = 'Não existem horários disponíveis na data selecionada. Por favor selecione outra data'

  } else {

    console.log(`os horarios livres no dia selecionado são: ${allowTimes}`)
    document.getElementById("nextBtn").style.display = "inline";
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("horario").style.display = "inline";
    document.getElementById("check-disponibilidade").style.display = "none";
    document.getElementById("erro-disponibilidade").innerHTML = ' '

    $('#picker2').datetimepicker({
      timepicker: true,
      datepicker: false,
      format: 'H:i',
      step: 30,
      mask: true,
      lang: 'pt-BR',
      minDate: today,
      allowTimes: function getArr() {
        allowTimes
        return allowTimes;
      }(),
    })
  }
}
