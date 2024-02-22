import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maiores Campeões</Text>
      <Text style={styles.story}>
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
