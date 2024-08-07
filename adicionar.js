let usuario = require('./usuario')

function adicionar(usu) {
    usu.id = usuario.length + 1

    let jaExiste = usuario.find(usu => usu.email === usu.email)
    if (jaExiste) {
        throw new Error('Esse email já existe. ')
    } else {
        usuario.push(usu)
    }
}
module.exports = adicionar 