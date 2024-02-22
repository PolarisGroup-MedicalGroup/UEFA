import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brasileiros com gol na final</Text>
      <Text style={styles.story}>
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
