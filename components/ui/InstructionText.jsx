import { Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'Edges',
    color: Colors.accent500,
    fontSize: 23,
  },
});
