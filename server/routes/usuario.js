const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  // Importando o JWT
const User = require('../model/Usuario.js')
const router = express.Router();


// Rota para registrar um novo usuário
router.post('/register', async (req, res) => {
    try {
      const { email, senha } = req.body;
  
      // Verificar se o email já está em uso
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'E-mail já cadastrado' });
      }
  
      // Criptografar a senha
      const hashedPassword = await bcrypt.hash(senha, 10);
  
      // Criar o novo usuário
      const user = await User.create({
        email,
        senha: hashedPassword
      });
  
      res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
  });


  router.get('/users', async (req, res) =>{
    try{
      const users = await User.findAll();
      res.json(users);
    
      } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuario' });
    }
  
  })


// Rota para login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verificar se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.senha);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    // Gerar um token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },  // Payload
      'secreta',  // Chave secreta
      { expiresIn: '1h' }  // Expiração do token (1 hora)
    );

    // Retornar o token e o papel do usuário
    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});


module.exports = router;