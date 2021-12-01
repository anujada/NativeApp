import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../utils/index'
import ToggleButton from 'react-toggle-button'

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
    const userPreviews = NearUserList.map((listitem)=> <NearUserPreview key={listitem.name} user={listitem}/>);

    return (
        <View style={styles.content}>
            <View class="toggle-wrapper">
                   <ToggleButton
                     value="check"
                   >

                   </ToggleButton>
             </View>
             <View class="results">
                <Text>
                People near you
                </Text>
                <FilterBar />
               {userPreviews}
              </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
          paddingTop: '12px',
          paddingBottom: '12px',
          paddingRight: '12px',
          paddingLeft: '12px',
          borderRadius: '4px',
          minHeight: '300px'
    }

})