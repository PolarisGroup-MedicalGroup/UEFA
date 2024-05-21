import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';

function CadastroScreen() {
  const [username, setUsername] = useState('');
const CadastroScreen = () => {
  const [dados, setDados] = useState({});
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Aqui você pode enviar os dados para o servidor ou fazer a lógica de armazenamento local
    console.log('Dados do usuário:', { username, email, password });
    // Adicione aqui a lógica para enviar os dados para o servidor ou armazenar localmente
  useEffect(() => {
    // Função para carregar os dados ao iniciar o aplicativo
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const response = await axios.get('http://192.168.1.144:3000/dados');
      setDados(response.data);
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    }
  };

  const atualizarDados = async () => {
    try {
      await axios.post('http://192.168.1.144:3000/atualizar', {
        nome,
        email,
        senha
      });
      // Recarregar os dados após a atualização
      carregarDados();
      Alert.alert('Dados atualizados com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
      Alert.alert('Erro ao atualizar os dados');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
      <Text>Nome: {dados.nome}</Text>
      <Text>Email: {dados.email}</Text>
      <Text>Senha: {dados.senha}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={text => setSenha(text)}
        />
        <Button
          title="Atualizar Dados"
          onPress={atualizarDados}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  inputContainer: {
    marginTop: 20,
  },
  input: {
    width: '100%',
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CadastroScreen;
