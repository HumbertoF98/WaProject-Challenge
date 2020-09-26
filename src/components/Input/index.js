import React, { forwardRef } from "react";
import { Container, TInput, TextLabel } from "./styles";

function Input({ style, label, ...rest }, ref) {
  return (
    <Container style={style}>
      <TextLabel>{label}</TextLabel>
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
