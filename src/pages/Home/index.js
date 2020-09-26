import React, { useState, useEffect } from "react";
import { Linking } from "react-native";
import {
  Container,
  SubHeader,
  TextGit,
  ViewGitHubers,
  User,
  InputSearch,
  ImageGitUser,
  TouchImage,
  TextNameGit,
  TextGitInfo,
  ViewTrashAndGit,
  ImageTrash,
  ShowDeletedUsers,
  ImageGit,
} from "./styles";
// header
import Header from "../../components/Header";
import { useIsFocused } from "@react-navigation/native";
//api
import api from "../../services/api";
import Trash from "../../../assets/Trash.png";
import Pencil from "../../../assets/githubtransparent.png";

export default function Home({ navigation }) {
  const [value, setValue] = useState("");
  const [githubers, setGitHubers] = useState([]);
  const isFocused = useIsFocused();
  const [deleted, setDeleted] = useState(false);
  const [removedUsers, setRemovedUsers] = useState([]);
  // function responsible to load the github users
  async function loadNavers() {
    try {
      const response = await api.get("users");
      if (response.status === 200) {
        setGitHubers(response.data);
      }
    } catch (err) {
      setGitHubers([]);
    }
  }

  // runs whenever the page is focused
  useEffect(() => {
    if (isFocused) {
      loadNavers();
    }
  }, [isFocused]);

  // function to delete a user
  function deleteUser(index) {
    const deletedUser = githubers.splice(index, 1);
    setRemovedUsers([...removedUsers, deletedUser[0]]);
    setGitHubers(githubers.filter((git) => git.index !== index));
  }

  // function to see deleted Users
  function seeDeletedUsers() {
    setDeleted(!deleted);
  }

  // function to filter the data on search
  const searchFilterFunction = (text) => {
    setValue(text);
    const newData = githubers.filter((item) => {
      const itemData = `${item.login.toUpperCase()}}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setGitHubers(newData);
    if (text === "") {
      loadNavers();
    }
  };

  return (
    <Container>
      <Header />
      {!deleted ? (
        <InputSearch
          onChangeText={(text) => searchFilterFunction(text)}
          underlineColorAndroid="transparent"
          value={value}
          placeholder="Buscar por nome (login)"
        />
      ) : null}
      <SubHeader>
        <TextGit>GitHub Users</TextGit>
        <ShowDeletedUsers onPress={() => seeDeletedUsers()}>
          {!deleted ? "Usuários deletados" : "Usuários ativos"}
        </ShowDeletedUsers>
      </SubHeader>
      <ViewGitHubers
        data={deleted ? removedUsers : githubers.slice(0, 10)}
        keyExtractor={(git) => String(git.id)}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        renderItem={({ index, item: git }) => (
          <User>
            <TouchImage>
              <ImageGitUser
                resizeMode="cover"
                source={{ uri: git.avatar_url }}
              />
            </TouchImage>
            <TextNameGit>{git.login}</TextNameGit>
            <TextGitInfo>nodeId: {git.node_id}</TextGitInfo>
            <TextGitInfo>userId: {git.id}</TextGitInfo>
            <TextGitInfo>Seguidores: {git.followers_url.length}</TextGitInfo>
            <TextGitInfo>Seguindo: {git.following_url.length}</TextGitInfo>
            <ViewTrashAndGit>
              {!deleted ? (
                <TouchImage onPress={() => deleteUser(index)}>
                  <ImageTrash source={Trash} />
                </TouchImage>
              ) : null}
              <TouchImage onPress={() => Linking.openURL(git.html_url)}>
                <ImageGit source={Pencil} />
              </TouchImage>
            </ViewTrashAndGit>
          </User>
        )}
      />
    </Container>
  );
}
