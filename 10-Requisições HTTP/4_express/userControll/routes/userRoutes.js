// Importamos os controladores da rota de usuario
const { userControllers } = require('../controllers');

const routes = require('express').Router();

// Selecionar os usuarios cadastrados
routes.get('/users', userControllers.listar);

// Cadastrar Usuarios
    // Exibe o formulário de cadastro de usuario
routes.get('/user/add', userControllers.exibirFormularioCadastro);
    // Executa a lógica de cadastro
routes.post('/user/add', userControllers.cadastrar);

// Atualisar dados de usuarios
    // Exibe o formulario de edição de cadastro
routes.get('/user/update/:id', userControllers.exibirFormularioAtualizacao);
    // Chama a lógica de atualização de tarefas
routes.post('/user/update/:id', userControllers.atualisarCadastro);

// Deletar cadastro de usuario
routes.get('/user/delete/:id', userControllers.deletar);

module.exports = { routes };