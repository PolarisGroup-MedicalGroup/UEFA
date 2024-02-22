import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Cabecalho = () => {
  return (
    <View style={stylestop.container}>
      <View>
        <Text style={stylestop.title}>Cabeçalho</Text>
      </View>
      <View style={stylestop.navigation}>
      <Button
          title="Home"
          onPress={() => navigation.navigate('Home')} />
        <Text>Projetos</Text>
        <Text>Sobre</Text>
        <Text>Blog</Text>
        <Text>Contato</Text>
      </View>
    </View>
  );
};
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')} />
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
const stylestop = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 20,
    flexDirection: 'column', // Alterado de 'row' para 'column'
    justifyContent: 'flex-start', // Alterado de 'space-between' para 'flex-start'
    alignItems: 'flex-start', // Alterado de 'space-between' para 'flex-start'
    position: 'absolute',
    alignItems: 'center',
    top: 10,
    left: 0,
    right: 0,
  },
  
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  
  navigation: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 30,
  },
});

export default Cabecalho;
