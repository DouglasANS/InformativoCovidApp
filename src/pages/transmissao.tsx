import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  Image,
  View} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/button';
import { Topo } from '../components/Topo';
import { Headerr } from '../components/headerr';

const transmissaoImg = require('../assets/transmissao.jpeg')

export function Transmissao() {
  const navigation = useNavigation()

    function informativoCV(){
      navigation.navigate('InformativoCovid')
    }
  
  return (
    <SafeAreaView style={styles.container}>
      <Topo />
      <Headerr title='Transmissão'/>
      
        <Image source={transmissaoImg} style={{ width: 600, height: 300, marginTop: 100, }} 
        resizeMode="contain"/>


      <View style={styles.button}>
        <Button title='Voltar' onPress={informativoCV}  />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255,255,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop: 120,
  }
});
