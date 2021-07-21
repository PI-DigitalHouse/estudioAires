const models = require('./models');

async function buscaMembro (){
  const usuarioMembro = await models.Membro.findAll({
    where : {
      idMembro : 1,
    },
    include : [
      'reserva',
      'orcamento'
    ]
  })
  // const jobs = usuarioMembro.forEach(
  // console.log(jobs);
}
buscaMembro();

