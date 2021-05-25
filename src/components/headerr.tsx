import React from 'react';
import { 
  StyleSheet, 
  View,
  Text
} from 'react-native';

interface ButtonProps{
  title: string;
}


export function Headerr({title, ...rest} : ButtonProps) {
    
  return (  
    <View style={styles.container}{...rest}>  
      <Text style={styles.text} >
        {title} 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgb(55, 105, 164)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
      color: 'white',
    }
});
