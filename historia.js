import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const história = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>História das Competições</Text>
      <Text style={styles.story}>
      A UEFA Champions League, originalmente conhecida como Taça dos Clubes Campeões Europeus, teve sua primeira edição na temporada 1955-1956. A ideia por trás do torneio era proporcionar uma competição de clubes de elite que refletisse a crescente integração e competição entre os melhores times da Europa. Desde então, a competição tem sido o principal palco para o futebol de clubes europeu, com equipes lendárias e momentos históricos. Foi concebida em Paris em 1955 como a Taça dos Clubes Campeões Europeus, e que em 1992, foi renomeada para Liga dos Campeões da UEFA. Em 2019, a UEFA passou a adotar o sistema de árbitro de vídeo (VAR) a partir da fase preliminar da competição do ano.

A UEFA Europa League, anteriormente conhecida como Taça UEFA, é uma competição de futebol de clubes organizada pela União das Associações Europeias de Futebol (UEFA). Foi inaugurada na temporada 1971-1972 como uma competição para clubes que não se qualificaram para a UEFA Champions League (anteriormente conhecida como Taça dos Clubes Campeões Europeus). Desde então, a Europa League tem sido uma plataforma para clubes de toda a Europa competirem por um título continental. Desde 2000, a equipe vencedora da competição adquiriu o direito de participar da Supertaça da UEFA contra o campeão da Liga dos Campeões; além disso, desde 2015, o clube vencedor da Liga Europa está qualificado para a próxima Liga dos Campeões, a partir da fase de grupos.

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

export default história;
