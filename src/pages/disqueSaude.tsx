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

const disqueSaudeImg = require('../assets/disquesaude.jpeg')

export function DisqueSaude() {
  const navigation = useNavigation()

    function informativoCV(){
      navigation.navigate('InformativoCovid')
    }
  
  return (
    <SafeAreaView style={styles.container}>

        <Topo />
        <Headerr title='Disque Saúde!'/>

        
        
      <View style={styles.divi}>
        <Image source={disqueSaudeImg} style={{ width: 600, height: 430, marginTop: 30, }} 
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
    backgroundColor: 'rgb(29,65,99)',
  },
  divi:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop: 50,
  }
});
