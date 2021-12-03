import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Overview1 from './Overview1'

export default function App() {
   return (

      <View style={styles.container}>
           <StatusBar />

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 70,
      paddingBottom:70
    },
  });
