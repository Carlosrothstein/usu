let usuario = require('./usuario')

function remover(id) {
    const index = usuario.findIndex(usu => usu.id === id);
    if (index !== -1) {
        usuario.splice(index, 1)
    }
}
module.exports = remover