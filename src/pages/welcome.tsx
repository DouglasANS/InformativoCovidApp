import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  Image
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/button';

const welcome = require('../assets/welcome.png')

export function Welcome() {
  const navigation = useNavigation()

    function informativoCV(){
      navigation.navigate('InformativoCovid')
    }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Bem vindo ao informativo covid 
      </Text> 
      
      <Image source={welcome} style={{ width: 600, height: 300, marginTop: 30, }} 
        resizeMode="contain"/>


      
      <Text style={styles.text1}>
        Fique seguro e tenha todas as informações  {'\n'}
        em seu celular
      </Text> 

        <Button title='Vamos nessa!' onPress={informativoCV}  />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255,255,255)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
  },
});
