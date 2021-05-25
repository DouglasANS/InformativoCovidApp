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

const sintomasImg = require('../assets/sintomas.jpeg')

export function Sintomas() {
  const navigation = useNavigation()

    function informativoCV(){
      navigation.navigate('InformativoCovid')
    }
  
  return (
    <SafeAreaView style={styles.container}>
        <Topo />
        <Headerr title='Sintomas'/>
      
        <Image source={sintomasImg} style={{ width: 600, height: 450, marginTop: 30, }} 
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
    marginTop: 50,
  }
});
