import React from "react";

import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";

export const EstadoPerfil = () => {
  const usuarios = [
    { nombre: "Victor", imagen: require("../../img/perfil_prin.jpeg") },
    { nombre: "Lorena", imagen: require("../../img/perfil.jpg") },
    { nombre: "Carlos", imagen: require("../../img/perfil_2.jpg") },
    { nombre: "Maria", imagen: require("../../img/perfil_3.jpg") },
    { nombre: "Adalberto", imagen: require("../../img/perfil_4.jpg") },
  ];

  const renderUsuario = (usuario, index) => {
    return (
      <View key={index} style={{ alignItems: "center", marginRight: 10 }}>
        <Image
          source={usuario.imagen}
          style={{ width: 82, height: 82, borderRadius: 50 }}
        />

        {index === 0 && (
          <View
            style={{
              position: "absolute",
              bottom: 15,
              right: 0,
            }}>
            <Icon name="add-circle" size={35} color="#0cb1ea" />
          </View>
        )}
        <Text style={{ marginTop: 5 }}>{usuario.nombre}</Text>
      </View>
    );
  };

  return (
    <>
      <View>
        <View style={{ flexDirection: "row" }}>
          {usuarios.map((usuario, index) => renderUsuario(usuario, index))}
        </View>
      </View>
    </>
  );
};
