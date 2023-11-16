import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const ListaArgentinos = ({ navigation }) => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    axios
      .get("http://10.0.6.19:8080/jugadores/argentinos")
      .then((response) => setJugadores(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Jugadores Argentinos:
        {"\n"}
      </Text>
      <FlatList
        data={jugadores}
        keyExtractor={(jugador) => jugador.id_jugador.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>Nombre: {item.nombre}</Text>
            <Text style={styles.text}>POS: {item.posicion}</Text>
            <Text style={styles.text}>Edad: {item.edad}</Text>
            <Text style={styles.text}>Est: {item.estatura}</Text>
            <Text style={styles.text}>P: {item.peso}</Text>
            <Text style={styles.text}>NAC: {item.nacionalidad}</Text>
            <Text style={styles.text}>Ap: {item.apariciones}</Text>
            <Text style={styles.text}>SUB: {item.apariciones_sustituto}</Text>
            <Text style={styles.text}>A: {item.atajadas}</Text>
            <Text style={styles.text}>GA: {item.goles_concedidos}</Text>
            <Text style={styles.text}>A: {item.asistencias}</Text>
            <Text style={styles.text}>FC: {item.faltas_cometidas}</Text>
            <Text style={styles.text}>FS: {item.faltas_sufridas}</Text>
            <Text style={styles.text}>TA: {item.tarjetas_amarillas}</Text>
            <Text style={styles.text}>TR: {item.tarjetas_rojas}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListaArgentinos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E67451",
  },
  text: {
    fontWeight: "bold",
  },
});
