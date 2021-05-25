import React from 'react';
import { 
  StyleSheet, 
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';


interface ButtonProps extends TouchableOpacityProps{
  title: string;
  button: string;
}


export function ButtonMenu( {title, button, ...rest} : ButtonProps) {
  return (  

    <View style={styles.container}>
        <View  style={styles.left}>
          <Text style={styles.text1}>
            { title }
          </Text>
        </View>
        
        <TouchableOpacity style={styles.button}{...rest}>
            <Text style={styles.text2}>
                    { button }
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgb(0, 180, 216)',
    width: '98%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 16,
    marginBottom: 4,
},
left:{
  width: '55%',
  alignItems: 'center',
},
button: {
    backgroundColor: 'rgb(55, 105, 164)',
    width: '30%',
    height: 40,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  text1:{
    marginRight: 30,
    color: 'black',
    fontSize:16,
  },
text2: {
    color: 'white',
    fontSize:16,
    
  },
  
});