let usuario = require('./usuario')

function atualizar(id, novoUsuario) {
    const index = usuario.findIndex(usuario => usuario.id === id);
    if (index !== -1) {
        usuario[index] = { id, ...novoUsuario }
    }
}
module.exports = atualizar