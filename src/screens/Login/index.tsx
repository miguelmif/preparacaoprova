import React from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

export default function Login() {
  return (
    <View>
      <KeyboardAvoidingView>
        <Text>Login</Text>
        <View>
          <MaterialIcons name="email" size={24} color="black" />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View>
          <Entypo name="key" size={24} color="black" />
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
