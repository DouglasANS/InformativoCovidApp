import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  Image,
  View} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/button';
import { Headerr } from '../components/headerr';
import { Topo } from '../components/Topo';

const aoChegarEmCasaImg = require('../assets/aochegaremcasa.jpg')

export function AoChegarEmCasa() {
  const navigation = useNavigation()

    function informativoCV(){
      navigation.navigate('InformativoCovid')
    }
  
  return (
    <SafeAreaView style={styles.container}>

        <Topo />
        <Headerr title='Ao chegar em casa'/>

        
        
      <View style={styles.divi}>
        <Image source={aoChegarEmCasaImg} style={{ width: 580, height: 280, marginTop: 30, }} 
        resizeMode="contain"/>

        <View style={styles.button}>
          <Button title='Voltar' onPress={informativoCV}  />
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgb(167, 225, 229)',
  },
  divi:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop: 200,
  }
});
