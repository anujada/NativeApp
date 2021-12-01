import React from 'react'
import { Text, View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/index'

export default function FilterBar() {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'
    return (
        <View>
            <Text> FilterBar </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})