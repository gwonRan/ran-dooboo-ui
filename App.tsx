import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chip from './src/component/Chip';

interface ChipData {
  id: number;
  label: string;
  profile?: object;
  uri?: string;
}

export default function App() {
  const [chipData, setChipData] = React.useState<ChipData[]>([
    { id: 0, label: 'Gwon', profile: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
    { id: 1, label: 'Hong', profile: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
    { id: 2, label: 'Park', profile: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
    { id: 3, label: 'Kim' },
    { id: 4, label: 'Sung', profile: { uri: 'https://reactnative.dev/img/tiny_logo.png' } },
    // interface로 지정 type[] 객체 안에 key, value 다 정의해줘야한다.
  ]);

  return (
    <View style={styles.container}>
      <Text>Chip Container</Text>
      <Chip
        chipData={chipData}
        setChipData={setChipData}
        borderRadius={30}
        outline={'e0e0e0'}
      // deleteIcon={IC_CRICLE}
      />
      <Chip
        chipData={chipData}
        setChipData={setChipData}
        borderRadius={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
