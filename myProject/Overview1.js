import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useEffect, useState } from "react";
import * as Location from 'expo-location';

import Overview from './screens/Overview';
import ReloadIcon from './components/ReloadIcon';

import { colors } from './utils/index';
import {textstyles} from './utils/textstyling'


const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default function Overview1() {
const [errorMessage, setErrorMessage] = useState(null)
const [NearUserList, setNearUserList] = useState([
                                                                              {
                                                                              "name":"Adam",
                                                                              "profiletext":"Just approach me!",
                                                                                "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                                                                                "distance": "10 meter"
                                                                            },
                                                                            {
                                                                            "name":"Luise",
                                                                            "profiletext":"Happy to have a conversation",
                                                                              "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                                                                              "distance": "10 meter"

                                                                            },
                                                                            {
                                                                            "name":"William",
                                                                            "profiletext":"Just approach me!",
                                                                              "image": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                                                                              "distance": "10 meter"

                                                                            },
                                                                              {
                                                                                "name":"Catherine",
                                                                                "profiletext":"Just approach me!",
                                                                                "image": "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                                                                                "distance": "10 meter"

                                                                              },
                                                                              {
                                                                                "name":"Eva",
                                                                                "profiletext":"Let´s talk about art:)",
                                                                                "image": "https://images.pexels.com/photos/2568412/pexels-photo-2568412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                                                                                "distance": "10 meter"
                                                                              }
                                                                            ])

    useEffect(() => {
        load()
    })

    async function load() {
        //setNearUserList(null)
        setErrorMessage(null)
        try {
            let { status } = await Location.requestPermissionsAsync()

            if (status !== 'granted') {
                setErrorMessage('Access to location is needed to run the app')
                return
            }
            const location = await Location.getCurrentPositionAsync()

            const { latitude, longitude } = location.coords

//            const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`
//
//            const response = await fetch(weatherUrl)
//
//            const result = await response.json()



//            if (response.ok) {
//                setNearUserList(result)
//            } else {
//                setErrorMessage(result.message)
//            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }
    if (NearUserList) {
        return (
            <Overview NearUserList={NearUserList}/>
        )
    } else if (errorMessage) {
        return (
            <View style={styles.container}>
                <ReloadIcon load={load} />
                <Text style={textstyles.h3} style={{ textAlign: 'center' }}>{errorMessage}</Text>
                <StatusBar style="auto" />
            </View>
        )
    } else {
        return (
                   <View style={styles.container}>
                       <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
                       <StatusBar style="auto" />
                   </View>
               )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
