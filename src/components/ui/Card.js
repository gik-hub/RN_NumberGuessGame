import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const Card = ({ children }) => {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 100,
        backgroundColor: colors.primaryDark,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 8, // Box shadow android
        // Add a box shadow IOS
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        // Add a box shadow IOS end
      },
})