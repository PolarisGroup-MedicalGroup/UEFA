// Importações necessárias
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente Rodapé
const Rodapé = () => {
  return (
    <View style={styles.container}>
      {/* Seção de Contatos */}
      <View style={styles.contacts}>
        <Text style={styles.title}>Rodapé</Text>
        <Text>Atendimento.</Text>
      </View>
      
      {/* Seção de Redes Sociais */}
      <View style={styles.socialMedia}>
        <Text style={styles.socialMediaTitle}>Redes sociais:</Text>
        <View style={styles.socialIcons}>
          {/* Adicione os ícones de redes sociais aqui */}
        </View>
      </View>
      
      {/* Seção de Navegação */}
      <View style={styles.navigation}>
        <Text style={styles.navigationTitle}>Navegação</Text>
        <Text>Home</Text>
        <Text>Projetos</Text>
        <Text>Sobre</Text>
        <Text>Blog</Text>
        <Text>Contato</Text>
      </View>
      
      {/* Seção de Ajuda */}
      <View style={styles.help}>
        <Text style={styles.helpTitle}>Ajuda</Text>
        <Text>Contato</Text>
        <Text>Configurações</Text>
        <Text>Sobre Nós</Text>
        <Text>Política de Privacidade</Text>
      </View>
    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  // Estilo do container principal
  container: {
    backgroundColor: 'black',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  // Estilo da seção de contatos
  contacts: {
    flex: 1,
    marginRight: 10,
  },
  // Estilo do título
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  // Estilo da seção de redes sociais
  socialMedia: {
    flex: 1,
    marginRight: 10,
  },
  // Estilo do título das redes sociais
  socialMediaTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  // Estilo dos ícones de redes sociais
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Estilo da seção de navegação
  navigation: {
    flex: 1,
    marginRight: 10,
  },
  // Estilo do título da navegação
  navigationTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  // Estilo da seção de ajuda
  help: {
    flex: 1,
  },
  // Estilo do título da ajuda
  helpTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
});

// Exportação do componente
export default Rodapé;
