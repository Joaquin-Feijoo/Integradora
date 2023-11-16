import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const JugadorAlto = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://10.0.6.19:8080/jugador/alto"
        );
        setJugadores(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  const renderJugador = ({ item }) => (
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
      <Text style={styles.text}>
        TR: {item.tarjetas_rojas}
        {"\n"}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Lista de Jugadores:
        {"\n"}
      </Text>
      <FlatList
        data={jugadores ? [jugadores] : []} // Asegúrate de que `jugadores` sea un array
        keyExtractor={(item) =>
          item && item.id_jugador ? item.id_jugador.toString() : ""
        }
        renderItem={renderJugador}
      />
    </View>
  );
};

export default JugadorAlto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E67451",
  },
  text: {
    fontWeight: "bold",
  },
});
