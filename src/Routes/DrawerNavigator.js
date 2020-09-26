import React from "react";
import Home from "../pages/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContainer } from "../components/DrawerContent";

// function that will export drawer navigator
export function Drawer({ navigation }) {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerStyle={{
        width: 274,
      }}
      drawerContentOptions={{
        activeTintColor: "#212121",
        inactiveBackgroundColor: "#212121",
        activeBackgroundColor: "#FFF",
        labelStyle: {
          fontSize: 22,
          lineHeight: 32,
          fontFamily: "Montserrat_600SemiBold",
        },
      }}
      drawerContent={(props) => <DrawerContainer {...props} />}
    >
      <Drawer.Screen name="GitHub Users" component={Home} />
    </Drawer.Navigator>
  );
}
