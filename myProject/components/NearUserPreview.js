import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/index'
import { View, Text, StyleSheet, Image, Button } from 'react-native'


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
            <Image source={{ uri: user.image }} style={{ width: 100, height: 100, borderRadius: 200 / 2 }} />

        </View>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
            <Text> {user.distance} </Text>
            <Text> {user.name} </Text>
            <Text> {user.profiletext} </Text>
         </View>
          <View style={styles.btnContainer}>
            <Button color={PRIMARY_COLOR} title="Connect" onPress={() => Alert.alert('Simple Button pressed')} />
          </View>
      </View>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHTGREY,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  btnContainer:{
     alignSelf: 'flex-end',
     width:100,
  }
});