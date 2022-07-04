import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";
import styles from "./styles";

export default function Button({ onPress, type, title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={

        styles.button

          /* 
          
            Usar se tiver mais de 1 tipo de botão, no caso teria que adicionar nas interfaces

          type == "nome do button"
          ? styles.nomeDoEstilo
          
          */

      }
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}