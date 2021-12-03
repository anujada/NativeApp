import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/Button'


export default function Home(navigation) {
  return (
    <View style={styles.container}>
      <Image
            style={styles.image}
            source={require('../assets/stockimage1.png')}
        
      />
        <Text style={styles.heading}>Lorem Ipsum</Text>
        <Text style={styles.smallHeading}>Meet People next to you.</Text>
        
      <Button title='Sign Up' backgroundColor='#8E97FD'/>
      {/*<Button title='Already have an account? Log In' backgroundColor='#8E97FD'/>*/}
      <Text style={styles.logIn}>Already have an account? Log In</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfbfd',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 'auto',
  }, 


  /*
  homePage: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },*/

  heading: {
      fontSize: 30,
      color: '#3F414E',
      /*borderWidth: 1,
      borderColor: "thistle",*/
  },

  smallHeading: {
    fontSize: 20,
    color: '#7B7F9E',
    /*borderWidth: 1,
      borderColor: "thistle",*/
  
  },

  logIn: {
    fontSize: 15,
    letterSpacing: 0.05,
    color: '#A1A4B2',
  },

  image: {
    borderTopLeftRadius: 80,
    borderTopRightRadius: 110,
    borderBottomLeftRadius: 199,
    borderBottomRightRadius: 108,
    height: 260,
    width: 200,
    paddingBottom: 190,
  }
});


