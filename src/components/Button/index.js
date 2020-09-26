import React from "react";
import { ActivityIndicator } from "react-native";
import { Container, Text, ContainerIcon, Image } from "./styles";

export default function Button({ children, loading, image, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <ContainerIcon>
          {image && <Image source={image} />}
          {children && <Text>{children}</Text>}
        </ContainerIcon>
      )}
    </Container>
  );
}
