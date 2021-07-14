const models = require('./models');

async function buscaUsuario (){
  const usuario = await models.Usuario.findOne({
    where : {
      idUsuario : 5,
    },
  })
  console.log(usuario.toJSON());
}
buscaUsuario();