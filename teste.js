const models = require('./models');

async function buscaMembro (){
  const usuario = await models.Membro.findOne({
    where : {
      idUsuario : 1,
    },
    include : [
      'reserva'
    ]
  })
  console.log(usuario.toJSON());
}
buscaMembro();