import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maiores Artilheiros</Text>
      <Text style={styles.story}>
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
