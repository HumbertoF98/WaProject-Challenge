import styled from "styled-components/native";
import Button from "../../components/Button";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const SubHeader = styled.View`
  margin: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextGit = styled.Text`
  text-align: left;
  font-size: 20px;
  line-height: 32px;
  color: #212121;
  font-family: Montserrat_600SemiBold;
`;

export const ViewGitHubers = styled.FlatList`
  margin-bottom: 20px;
  padding-right: 20px;
`;

export const User = styled.View`
  width: 95%;
  margin-left: 20px;
  margin-top: 30px;
`;

export const ImageGitUser = styled.Image`
  width: 95%;
  height: 200px;
  border-radius: 5px;
`;

export const TouchImage = styled.TouchableOpacity``;

export const TextNameGit = styled.Text`
  font-size: 16px;
  line-height: 20px;
  margin-top: 10px;
  text-align: center;
  font-family: Montserrat_600SemiBold;
`;

export const TextGitInfo = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  line-height: 16px;
  text-align: left;
  font-family: Montserrat_400Regular;
`;

export const ViewTrashAndGit = styled.View`
  flex-direction: row;
  margin-top: 15px;
  margin-left: -20px;
`;

export const ImageTrash = styled.Image`
  margin-left: 20px;
  width: 14px;
  height: 18px;
`;

export const ImageGit = styled.Image`
  margin-left: 10px;
  width: 30px;
  height: 30px;
  margin-top: -6px;
`;

export const ShowDeletedUsers = styled(Button)`
  width: 155px;
`;

export const InputSearch = styled.TextInput`
  background: #fff;
  border-radius: 5px;
  border-color: #212121;
  margin: 5px;
  height: 40px;
  border-width: 1px;
  padding-left: 20px;
`;
