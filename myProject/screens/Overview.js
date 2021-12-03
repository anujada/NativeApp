import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { colors } from '../utils/index'
import ToggleSwitch from 'toggle-switch-react-native'
import { useEffect, useState } from "react";

import {textstyles} from '../utils/textstyling'

import FilterBar from '../components/FilterBar'
import NearUserPreview from '../components/NearUserPreview'

const { PRIMARY_COLOR,
            SECONDARY_COLOR,
            BORDER_COLOR,
            BLUE,
            WHITE,
            HOVERBLUE,
            GREYTEXT,
            LIGHTYELLOW,
             LIGHTGREY,
             MEDIUMGREY,
             GREEN,
             RED} = colors


export default function Overview({ NearUserList, navigation }) {
    var [toggle, setToggle] = useState(true)
    const userPreviews = NearUserList.map((listitem)=> <NearUserPreview key={listitem.name} user={listitem}/>);


    useEffect(() => {

        }, [toggle])

    function toggleFunc(isOn){
        setToggle(isOn => !isOn);
    }

    if(toggle===true){
     return (
            <View style={styles.content}>

                <View class="toggle-wrapper">
                    <ToggleSwitch
                      isOn={true}
                      onColor={PRIMARY_COLOR}
                      offColor={LIGHTGREY}
                      label=""
                      labelStyle={{ color: "black", fontWeight: "900" }}
                      size="large"
                      onToggle={isOn=> toggleFunc(isOn)}
                  />
                 </View>
                 <View style={styles.results}>
                    <Text style={textstyles.h1}>
                    People near you
                    </Text>
                    <FilterBar />
                    <ScrollView  showsVerticalScrollIndicator={false}>
                        {userPreviews}
                   </ ScrollView>
                  </View>
            </View>
        )
    }
    else{
        return (
        <View style={styles.content}>
        <View >
                            <ToggleSwitch
                              isOn={false}
                              onColor={PRIMARY_COLOR}
                              offColor={LIGHTGREY}
                              label=""
                              labelStyle={{ color: "black", fontWeight: "900" }}
                              size="large"
                              onToggle={isOn=> toggleFunc(isOn)}
                          />
                         </View>
                    <View style={styles.container}>
                        <Text >Turn on to connect to people around you!</Text>
                    </View>
              </View>
                )
    }



}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
    },
    container: {
            flex: 1,
            justifyContent: 'center',
            textAlign: 'center'
        },
    results: {
        margin:20
    }

})