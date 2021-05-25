import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  Image,
  View} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/button';
import { ButtonMenu } from '../components/buttonMenu';
import { Headerr } from '../components/headerr';
import { Topo } from '../components/Topo';

const doctor = require('../assets/doctor.png')

export function InformativoCovid() {
  const navigation = useNavigation()

    function Voltar(){
      navigation.navigate('Welcome')
    }

    function buttonAoChegarEmCasa(){
      navigation.navigate('AoChegarEmCasa')
    }

    function buttonTransmissao(){
        navigation.navigate('Transmissao')
      }

    function buttonSintomas(){
        navigation.navigate('Sintomas')
      }

    function buttonPrecaucao(){
        navigation.navigate('Precaucao')
      }

    function buttonDisqueSaude(){
        navigation.navigate('DisqueSaude')
      }
  
  return (
    <SafeAreaView style={styles.container}>
        <Topo />

        
        <Headerr title='Informativo Covid' />
      
        <Image source={doctor} style={{ width: 500, height: 250}} 
        resizeMode="contain"/>

        <ButtonMenu title='Ao chegar em casa' button='Acessar' onPress={buttonAoChegarEmCasa} />
        <ButtonMenu title='Transmissão' button='Acessar'onPress={buttonTransmissao} />
        <ButtonMenu title='Sintomas' button='Acessar' onPress={buttonSintomas} />
        <ButtonMenu title='Precaução' button='Acessar' onPress={buttonPrecaucao} />
        <ButtonMenu title='Disque Saúde!' button='Acessar' onPress={buttonDisqueSaude} />
      
        <View style={styles.button}>
            <Button title='Voltar' onPress={Voltar}/>
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
  text:{
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
      marginTop: 20,
  }
});
