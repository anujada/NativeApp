import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Overview1 from './Overview1'

import RootStack from './navigators/RootStack';

export default function App() {
   return (

    <RootStack/>
    
    /*
      <View style={styles.container}>
           <StatusBar />

      </View>*/
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 55,
      paddingBottom:70
    },
  });
