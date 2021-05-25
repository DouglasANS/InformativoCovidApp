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

const precaucaoImg = require('../assets/precaucao.jpeg')

export function Precaucao() {
  const navigation = useNavigation()

    function informativoCV(){
      navigation.navigate('InformativoCovid')
    }
  
  return (
    <SafeAreaView style={styles.container}>
        <Topo />
        <Headerr title='Precaução'/>
      
      
        <Image source={precaucaoImg} style={{ width: 600, height: 500, marginTop: 30, }} 
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
    marginTop: 20,
  }
});
