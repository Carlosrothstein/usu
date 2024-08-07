let usuario = require('./usuario')

function listar() {
    usuario.forEach((usu) => {
        console.log(`id: ${usu.id}, nome: ${usu.nome}, email: ${usu.email}, num: ${usu.num}`)
    })
}
module.exports = listar 