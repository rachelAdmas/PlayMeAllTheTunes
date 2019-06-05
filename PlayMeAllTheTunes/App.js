import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  
  somethingDumb(){
    return false
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            Alert.alert('ITS BLUTOOF!');
          }}
          title="Blutoof">
              <Text style={styles.label}> Bluetoof </Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style={styles.button}        
          onPress={() => {
            Alert.alert("IT'S A RECORD NOW, HIPSTER");
          }}    
          title="Record">
             <Text style={styles.label}> Record </Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style={styles.button}        
          onPress={() => {
            Alert.alert('RADIO TIIIME');
          }}      
          title="Radio">
             <Text style={styles.label}> Radio </Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  button: {
    marginTop: 20,
    width:'75%',
    padding:20,
    backgroundColor:'#ffdb58',
    alignItems: 'center',
  },
  
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});