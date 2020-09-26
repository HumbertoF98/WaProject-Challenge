import React from "react";
import { Container, LogoImage, Form } from "./styles";
import Button from "../../components/Button";

export default function SignIn({ navigation }) {
  async function handleLogin() {
    navigation.navigate("Drawer");
  }

  return (
    <Container>
      <LogoImage source={require("../../../assets/githubtransparent.png")} />
      <Form>
        <Button onPress={handleLogin}>Entrar</Button>
      </Form>
    </Container>
  );
}
