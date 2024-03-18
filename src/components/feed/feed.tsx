import { Image, Text, View } from "react-native";
import React from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
type FeedProps = {
  nombre: any;
  imagePerfil?: string;
  imageFeed: string;
};

export const Feed = (props: FeedProps) => {
  const { nombre, imagePerfil, imageFeed } = props;

  return (
    <View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}>
          <Image
            style={{
              borderRadius: 100,
              width: 40,
              height: 40,
            }}
            source={imagePerfil}
          />
          <Text style={{ marginLeft: 10, fontSize: 14 }}>{nombre}</Text>
        </View>
        <EntypoIcon name={"dots-three-vertical"} size={25} />
      </View>
      {/* PUBLICACION O IMAGEN DEL FEED */}
      <View>
        <Image style={{ width: "100%", height: 500 }} source={imageFeed} />
      </View>
      {/* ICONOS DE BAJO DEL FEED */}
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
          }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome
              name={"heart"}
              size={25}
              style={{ marginRight: 10, color: "#d70000" }}
            />
            <Feather
              name={"message-circle"}
              size={25}
              style={{ marginRight: 10 }}
            />
            <EvilIcons name={"sc-telegram"} size={35} />
          </View>
        </View>
        <View>
          <Feather name={"bookmark"} size={25} />
        </View>
      </View>
    </View>
  );
};
