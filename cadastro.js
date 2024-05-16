import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';

const CadastroScreen = () => {
  const [dados, setDados] = useState({});
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CadastroScreen;
