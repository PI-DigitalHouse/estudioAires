const models = require('./models');
// const usuario = require('./models/usuario');

async function buscaUsuario (){
  const usuario = await models.Usuario.findOne({
    where : {
      idUsuario : 5,
    },
    include : [
      'reserva'
    ]
  })
  console.log(usuario.toJSON());
}
buscaUsuario();