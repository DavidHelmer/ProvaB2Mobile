import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Arma from './index';

export default function Dashboard() {

  const armas = [
    {
      nome: 'Murasama',
      descricao: 'Katana de Jetstream Sam, possui dano físico e elétrico cortante.',
      imgUrl: require('../../images/Katana_-_Murasama.png')
    },
    {
      nome: 'Varinha das varinhas',
      descricao: 'Uma das três relíquias da morte, a varinha mais poderosa. Possui dano mágico',
      imgUrl: require('../../images/varinha.png')
    },
    {
      nome: 'Manoplas Daédricas',
      descricao: 'Manoplas de Oblivion, faz seu soco doer mais e possui dano concussivo.',
      imgUrl: require('../../images/DaedricGauntlets.png')
    }
  ]

  return (
    <View style={styles.container}>
      {armas.map(f => <Arma arma={f}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a0909',
    alignItems: 'center',
    justifyContent: 'center',
  },
});