import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/index'
import { View, Text, StyleSheet, Image } from 'react-native'

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

export default function NearUserPreview({ user }) {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'

    return (
    <View style={styles.container}>
    <View style={styles.innerContainer}>
     <View style={styles.imgContainer}>
        <View style={styles.circularPortrait}>
            <img style={styles.image} src={user.image} />
        </View>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
            <Text> {user.distance} </Text>
            <Text> {user.name} </Text>
            <Text> {user.profiletext} </Text>
         </View>
          <View style={styles.btnContainer}>

          </View>
      </View>
      </View>
      </View>
    )
}

const styles = {
    circularPortrait: {
       position: 'relative',
          width: '100%',
          height: '0',
          paddingBottom: '100%',
      overflow: 'hidden',
      borderRadius: '50%',
    },

    image: {
      width: '100%',
      height: 'auto',
      marginTop: '-30px'
      },

    container: {
      border: '1px solid',
      borderColor: LIGHTGREY,
      borderRadius: '4px',
      display: 'inline-block',
      width: '100%'
    },
    innerContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    imgContainer: {
      width: '250px'
    },
    textContainer: {
         display:'flex',
         flexDirection: 'column',
         justifyContent: 'space-between'

    },
    titleContainer: {
      alignSelf: 'flex-start'
    },
    btnContainer: {
      alignSelf: 'flex-end'
    }


}