const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  // Importando o JWT
const User = require('../model/Produto.js')
const router = express.Router();


// Rota para registrar um novo Produto
router.post('/register', async (req, res) => {
    try {
      const { email, senha } = req.body;
  
      // Verificar se o email já está em uso
      const existingProduct = await Produto.findOne({ where: { nome } });
      if (existingProduct) {
        return res.status(400).json({ error: 'Produto já cadastrado' });
      }
  
      // Criptografar a senha
      const hashedPassword = await bcrypt.hash(senha, 10);
  
      // Criar o novo Produto
      const produto = await Produto.create({
        nome,
        descricao,
        preco,
        disponibilidade
      });
  
      res.status(201).json({ message: 'Produto cadastrado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao cadastrar produto' });
    }
  });


  router.get('/produto', async (req, res) =>{
    try{
      const produto = await Produto.findAll();
      res.json(produto);
    
      } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar Produto' });
    }
  
  })