import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index'
import ToggleSwitch from 'toggle-switch-react-native'
import { useEffect, useState } from "react";

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


export default function Overview({ NearUserList }) {
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
                 <View class="results">
                    <Text h1>
                    People near you
                    </Text>
                    <FilterBar />
                   {userPreviews}
                  </View>
            </View>
        )
    }
    else{
        return (
        <View style={styles.content}>
        <View class="toggle-wrapper">
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
                        <Text >Turn on and connect to people around you!</Text>
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
        }

})