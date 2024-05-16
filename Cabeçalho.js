import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation

const Cabecalho = () => {
  const navigation = useNavigation(); // Use o hook useNavigation para obter o objeto de navegação

  return (
    <View style={stylestop.container}>
      <View>
        <Text style={stylestop.title}>Cabeçalho</Text>
      </View>
      <View style={stylestop.navigation}>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Text>Projetos</Text>
        <Text>Sobre</Text>
        <Text>Blog</Text>
        <Text>Contato</Text>
      </View>
    </View>
  );
};

const stylestop = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
