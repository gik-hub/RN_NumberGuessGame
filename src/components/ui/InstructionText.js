import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return (
    <View>
      <Text style={[styles.inputLabel, style]}>{children}</Text>
    </View>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  inputLabel: {
    color: colors.secondaryDark,
    fontSize: 24,
  },
});
