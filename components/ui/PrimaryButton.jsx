import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

const PrimaryButton = ({ children, onPress, style }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed, style]
            : [styles.buttonInnerContainer, style]
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        onChild
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    // backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    // elevation: 2,
  },

  buttonText: {
    color: 'seashell',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.75,
  },
});
