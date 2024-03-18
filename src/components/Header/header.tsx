import React from "react";

import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const MenuHeader = () => {
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Image
            source={require("../../img/insta.png")}
            style={{
              width: 150,
              height: 45,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginRight: 10 }}>
            <Icon name="hearto" size={28} />
          </View>
          <View>
            <MaterialCommunityIcons name="facebook-messenger" size={28} />
          </View>
        </View>
      </View>
    </>
  );
};
