import { View, Text } from 'react-native'
import React from 'react'

export default function Header({appName}) {
  return (
    <View>
      <Text>Open up {appName}</Text>
    </View>
  )
}