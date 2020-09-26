import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  height: 46px;
  width: 90%;
  background: #212121;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  font-family: Montserrat_600SemiBold;
`;

export const Image = styled.Image`
  margin-right: 15px;
  margin-top: 2px;
`;

export const ContainerIcon = styled.View`
  flex-direction: row;
`;
