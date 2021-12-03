import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  Alert, Pressable, TouchableOpacity } from 'react-native';
import { AppLoading} from "expo"
import { useNavigation } from '@react-navigation/native';

import { 
    useFonts,
    Athiti_200ExtraLight,
    Athiti_300Light,
    Athiti_400Regular,
    Athiti_500Medium,
    Athiti_600SemiBold,
    Athiti_700Bold 
  } from '@expo-google-fonts/athiti';



export default function Button({title, backgroundColor, width, height}) {
    let [fontsLoaded, error] = useFonts({
        Athiti_400Regular
    })
    const navigation = useNavigation()
    return (
        <Pressable  style={[styles.button, { width, height }]} backgroundColor={backgroundColor} onPress = {() => {
          navigation.navigate("Overview1")
        }}>
        <Text style={styles.text}>{title} </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 38,
  },

  text: {
      fontFamily: "Athiti_400Regular",
      fontStyle: 'normal',
      fontSize: 14,
      letterSpacing: 0.05,
      color: '#F6F1FB',
  }
 
});