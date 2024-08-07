const prompt = require('prompt-sync')();

const usuario = require('./usuario');
const adicionar = require('./adicionar');
const listar = require('./listar');
const atualizar = require('./atualizar');
const remover = require('./remover');

function exibirMenu() {
    console.log(`
    1. Adicionar
    2. Listar
    3. Atualizar
    4. Remover
    5. Sair
    `)
    let opcao = prompt('Escolha uma opção: ')
    let index
    switch (opcao) {
        case '1':
            let nome = prompt('Digite o nome: ')
            let email = prompt('Digite o email: ')
            let num = prompt('Digite o número: ')
            adicionar({ nome, email, num })
            console.log('Usuário adicionado com sucesso. ')
            exibirMenu();
            break;

        case '2':
            listar();
            exibirMenu();
            break;

        case '3':
            listar()
            index = parseInt(prompt('Escolha o id que você quer atualizar: '))
            let novoNome = prompt('Digite o novo nome: ')
            let novoEmail = prompt('Digite o novo email: ')
            let novoNum = prompt('Digite o novo num: ')
            atualizar(index, { nome: novoNome, email: novoEmail, num: novoNum })
            console.log('Atualizado com sucesso. ')
            exibirMenu()
            break;
        case '4':
            listar()
            let id = parseInt(prompt('Digite qual você quer remover: '))
            remover(id)
            console.log('Removido com sucesso. ')
            exibirMenu()
            break;

        case '5':
            break;

        default:
            console.log('Opção inválida. ')
            break;
    }
}
exibirMenu()