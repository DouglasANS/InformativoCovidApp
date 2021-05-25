import React from 'react';
import { 
  StyleSheet, 
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';


interface ButtonProps extends TouchableOpacityProps{
  title: string;
}


export function Button( {title, ...rest} : ButtonProps) {
  return (  
      <TouchableOpacity 
      style={styles.container}
      {...rest}
      >
           <Text style={styles.text}>
                    { title }
            </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(55, 105, 164)',
    width: 320,
    height: 40,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
      fontSize:16,
  }
});