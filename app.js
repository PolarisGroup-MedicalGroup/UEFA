import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe os componentes de Cabeçalho, Corpo e Rodapé
import Corpo from './Corpo';
import Rodapé from './Rodapé';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={stylestop.container}>
      <View>
        <Text style={stylestop.title}>Champions League UEFA</Text>
      </View>
      <View style={stylestop.navigation}>
        <Button
          title="Cadastro"
          onPress={() => navigation.navigate('Cadastro')} />
       
        <Button
          title="História"
          onPress={() => navigation.navigate('História')} />
        <Button
          title="Bests"
          onPress={() => navigation.navigate('Artilheiros')} />
        <Button
          title="Brasil"
          onPress={() => navigation.navigate('Brasil')} />
        <Button
          title="Champs"
          onPress={() => navigation.navigate('Campeões')} />
      </View>
    </View>
      <Corpo />
      {/* Rodapé */}
      <Rodapé />
    </View>
  );
}

function HistóriaScreen({ navigation }) {
  return (
    <View style={stylesH.container}>
      <Text style={stylesH.title}>História das Competições</Text>
      <Text style={stylesH.story}>
      A UEFA Champions League, originalmente conhecida como Taça dos Clubes Campeões Europeus, teve sua primeira edição na temporada 1955-1956. A ideia por trás do torneio era proporcionar uma competição de clubes de elite que refletisse a crescente integração e competição entre os melhores times da Europa. Desde então, a competição tem sido o principal palco para o futebol de clubes europeu, com equipes lendárias e momentos históricos. Foi concebida em Paris em 1955 como a Taça dos Clubes Campeões Europeus, e que em 1992, foi renomeada para Liga dos Campeões da UEFA. Em 2019, a UEFA passou a adotar o sistema de árbitro de vídeo (VAR) a partir da fase preliminar da competição do ano.

A UEFA Europa League, anteriormente conhecida como Taça UEFA, é uma competição de futebol de clubes organizada pela União das Associações Europeias de Futebol (UEFA). Foi inaugurada na temporada 1971-1972 como uma competição para clubes que não se qualificaram para a UEFA Champions League (anteriormente conhecida como Taça dos Clubes Campeões Europeus). Desde então, a Europa League tem sido uma plataforma para clubes de toda a Europa competirem por um título continental. Desde 2000, a equipe vencedora da competição adquiriu o direito de participar da Supertaça da UEFA contra o campeão da Liga dos Campeões; além disso, desde 2015, o clube vencedor da Liga Europa está qualificado para a próxima Liga dos Campeões, a partir da fase de grupos.

      </Text>
    </View>
  );
}

function BrasilScreen({ navigation }) {
    return (
        <View style={stylesB.container}>
        <Text style={stylesB.title}>Brasileiros com gol na final</Text>
        <Text style={stylesB.story}>
        Brasileiros que já marcaram gols na final da UEFA Champions League
  
  Vini Jr. (Real Madrid): Liverpool 0 x 1 Real Madrid, em 2022
  
  Casemiro (Real Madrid): Juventus 1 x 4 Real Madrid, em 2017
  
  Neymar (Barcelona): Barcelona 3 x 1 Juventus, em 2015
  
  Marcelo (Real Madrid): Real Madrid 4 x 1 Atlético de Madrid, em 2014
  
  Belletti (Barcelona): Barcelona 2 x 1 Arsenal, em 2006
  
  
  Brasileiros que já marcaram gols na final da UEFA Europa League
  
  Ronaldo Fenômeno (Inter de Milão): Inter de Milão 3 x 0 Lazio, em 1998
  
  Amoroso (Borussia Dortmund): Borussia Dortmund 3 x 2 Feyenoord, em 2002
  
  Vagner love (CSKA): CSKA 3 x 1 Sporting, em 2005
  
  Luis Fabiano (Sevilla): Sevilla 4 x 0 Middlesbrough, em 2006
  
  Luiz Adriano e Jadson (Shakhtar): Shakhtar 2 x 1 Werder Bremen, em 2009
  
        </Text>
      </View>
    );
  }

  function ArtilheirosScreen({ navigation }) {
    return (
        <View style={stylesA.container}>
      <Text style={stylesA.title}>Maiores Artilheiros</Text>
      <Text style={stylesA.story}>
      Alguns dos maiores artilheiros na história da UEFA Champions League incluem:

Cristiano Ronaldo - Recordista com mais de 130 gols
Lionel Messi - Mais de 120 gols
Raúl González - Mais de 70 gols
Robert Lewandowski - Mais de 70 gols
Karim Benzema - Mais de 70 gols


Alguns dos maiores artilheiros na história da UEFA Europa League incluem:

Henrik Larsson - 31 gols
Klaas-Jan Huntelaar - 30 gols
Pierre-Emerick Aubameyang - 30 gols
Dieter Müller - 29 gols
Romelu Lukaku - 26 gols

      </Text>
    </View>
    );
  }

  function CampeõesScreen({ navigation }) {
    return (
        <View style={stylesC.container}>
        <Text style={stylesC.title}>Maiores Campeões</Text>
        <Text style={stylesC.story}>
        Maiores Campeões da Champions League:
  
  Real Madrid:
  
  O Real Madrid é o clube mais bem-sucedido na história da competição, conquistando incríveis 14 títulos. O clube espanhol teve sua era de ouro na década de 1950, quando venceu as cinco primeiras edições da competição, estabelecendo um recorde que permanece até hoje (graças à ditadura e ao juizão).
  
  
  AC Milan:
  
  O AC Milan é um dos gigantes do futebol italiano e europeu, conquistando 7 títulos da Champions League. O clube teve seu auge nas décadas de 1980 e 1990, sob o comando de treinadores como Arrigo Sacchi e Fabio Capello.
  
  Liverpool FC:
  
  O Liverpool é um dos clubes mais emblemáticos da Inglaterra e da Europa, vencendo a competição 6 vezes. O clube teve seus momentos mais gloriosos sob o comando de Bob Paisley e, mais recentemente, de Jürgen Klopp.
  
  
  FC Bayern Munich:
  
  O Bayern de Munique é o clube mais bem-sucedido da Alemanha na história da Champions League, com 6 títulos. O clube teve uma fase dominante recente, especialmente sob o comando de Pep Guardiola e Hansi Flick.
  
  
  FC Barcelona:
  
  O Barcelona é um dos clubes mais reconhecidos mundialmente, conquistando o título da Champions League 5 vezes. O clube teve seu período de ouro com a lendária equipe liderada por Pep Guardiola, que dominou a Europa com seu estilo de jogo conhecido como "tiki-taka".
  
  
  Maiores Campeões da Europa League
  
  Sevilla FC:
  
  O Sevilla é o clube mais bem-sucedido na história da UEFA Europa League, conquistando o título em 6 ocasiões, incluindo uma sequência de três títulos consecutivos entre 2014 e 2016.
  
  
  Juventus FC:
  A Juventus é um dos maiores clubes da Itália e da Europa, com 3 títulos da UEFA Europa League em sua história.
  
  Inter de Milão:
  A Inter de Milão, outro gigante italiano, conquistou o título da Europa League três vezes.
  
  
  
  Liverpool FC:
  O Liverpool, conhecido por seu sucesso na Champions League, também venceu a Europa League em 3 ocasiões.
  
  
  Atlético de Madrid:
  
  O Atlético de Madrid, clube espanhol, tem 3 títulos da UEFA Europa League em seu currículo.
  
        </Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator();
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* Adicione a rota para a tela de cadastro */}
          <Stack.Screen name="Cadastro" component={CadastroScreen} />
          <Stack.Screen name="História" component={HistóriaScreen} />
          <Stack.Screen name="Brasil" component={BrasilScreen} />
          <Stack.Screen name="Artilheiros" component={ArtilheirosScreen} />
          <Stack.Screen name="Campeões" component={CampeõesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

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
      fontSize: 100,
      gap: 10,
    },
  });

  const stylesH = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    story: {
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 24,
    },
  });

  const stylesB = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    story: {
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 24,
    },
  });

  const stylesC = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    story: {
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 24,
    },
  });

  const stylesA = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    story: {
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 24,
    },
  });
  
export default App;
