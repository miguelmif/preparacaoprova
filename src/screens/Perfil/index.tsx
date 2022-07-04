import React from "react";
import { Text, TextInput, SafeAreaView } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";

/* Se tiver algum erro de import verifique os nomes dos seus aquivos e dos seus exports ou se você esqueceu de importar algum componente */

export default function Perfil() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Nome do usuário</Text>
      <CardSocial>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <TextInput placeholder="https://facebook.com" style={styles.input} />
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <TextInput placeholder="https://instagram.com" style={styles.input} />
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="linkedin" style={styles.icon} />
          <TextInput placeholder="https://linkedin.com" style={styles.input} />
        </>
      </CardSocial>
      <Button
        title="Salvar"
        type="button"
        onPress={() => console.log("Salvar")}
      />
      <Button
        title="Alterar Senha"
        type="button"
        onPress={() => console.log("Alterar Senha")}
      />
      <Button title="Sair" type="button" onPress={() => console.log("Sair")} />
    </SafeAreaView>
  );
}