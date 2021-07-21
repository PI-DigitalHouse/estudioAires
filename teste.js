const models = require('./models');
const { Op } = require('sequelize')

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
  console.log(usuarioMembro);
}

buscaMembro();

/* module.exports.mostrarOrcamento =(async(req,res)=>{
  const { title, url, description } = req.query
  
 
   const resultados = await models.Reserva.findAll({
       where: {
           idMembro: 1, {
               [Op.like]: `${title || ''}%`
           },
           description: {
               [Op.like]: `${description || ''}%`
           },
           url: {
               [Op.like]: `${url || ''}%`
           },
       } 
   }) 
   console.log(resultados.length)
   res.render('links/listaLinks', {resultados})
  
}) */
