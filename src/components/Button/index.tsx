import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";

export default function Button({ onPress, type, title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
