import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable, TouchableOpacity } from 'react-native';
import { AppLoading} from "expo"
import { 
    useFonts,
    Athiti_200ExtraLight,
    Athiti_300Light,
    Athiti_400Regular,
    Athiti_500Medium,
    Athiti_600SemiBold,
    Athiti_700Bold 
  } from '@expo-google-fonts/athiti';



export default function button({title, backgroundColor}) {
    let [fontsLoaded, error] = useFonts({
        Athiti_400Regular
    })

    return (
        <Pressable  style={styles.button} backgroundColor={backgroundColor} onPress = {() => Alert.alert("Button pressed")}>
        <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 38,
    width: 355,
    height: 63,
  },

  text: {
      fontFamily: "Athiti_400Regular",
      fontStyle: 'normal',
      fontSize: 14,
      letterSpacing: 0.05,
      color: '#F6F1FB',
  }
 
});