import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const FormularioJugador = () => {
  const [nombre, setNombre] = useState("");
  const [posicion, setPosicion] = useState("");
  const [edad, setEdad] = useState("");
  const [estatura, setEstatura] = useState("");
  const [peso, setPeso] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [apariciones, setApariciones] = useState("");
  const [apareciones_sustituto, setAparicionesSustituto] = useState("");
  const [atajadas, setAtajadas] = useState("");
  const [goles_concedidos, setGolesConcedidos] = useState("");
  const [asistencias, setAsistencias] = useState("");
  const [faltas_cometidas, setFaltasCometidas] = useState("");
  const [faltas_sufridas, setFaltasSufridas] = useState("");
  const [tarjetas_amarillas, setTarjetasAmarillas] = useState("");
  const [tarjetas_rojas, setTarjetasRojas] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://10.0.6.19:8080/jugador/agregar", {
        nombre,
        posicion,
        edad,
        estatura,
        peso,
        nacionalidad,
        apariciones,
        apareciones_sustituto,
        atajadas,
        goles_concedidos,
        asistencias,
        faltas_cometidas,
        faltas_sufridas,
        tarjetas_amarillas,
        tarjetas_rojas,
      })
      .then((response) => {
        console.log("Jugador agregado:", response.data);
        setNombre("");
        setPosicion("");
        setEdad("");
        setEstatura("");
        setPeso("");
        setNacionalidad("");
        setApariciones("");
        setAparicionesSustituto("");
        setAtajadas("");
        setGolesConcedidos("");
        setAsistencias("");
        setFaltasCometidas("");
        setFaltasSufridas("");
        setTarjetasAmarillas("");
        setTarjetasRojas("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Actualizar Jugador:
        {"\n"}
      </Text>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        style={styles.text}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        placeholder="Posicion"
        value={posicion}
        style={styles.text}
        onChangeText={(text) => setPosicion(text)}
      />
      <TextInput
        placeholder="Edad"
        value={edad}
        style={styles.text}
        onChangeText={(text) => setEdad(text)}
      />
      <TextInput
        placeholder="Estatura"
        value={estatura}
        style={styles.text}
        onChangeText={(text) => setEstatura(text)}
      />
      <TextInput
        placeholder="Peso"
        value={peso}
        style={styles.text}
        onChangeText={(text) => setPeso(text)}
      />
      <TextInput
        placeholder="Nacionalidad"
        value={nacionalidad}
        style={styles.text}
        onChangeText={(text) => setNacionalidad(text)}
      />
      <TextInput
        placeholder="Apariciones"
        value={apariciones}
        style={styles.text}
        onChangeText={(text) => setApariciones(text)}
      />
      <TextInput
        placeholder="Apariciones Sustituto"
        value={apareciones_sustituto}
        style={styles.text}
        onChangeText={(text) => setAparicionesSustituto(text)}
      />
      <TextInput
        placeholder="Atajadas"
        value={atajadas}
        style={styles.text}
        onChangeText={(text) => setAtajadas(text)}
      />
      <TextInput
        placeholder="Goles Concedidos"
        value={goles_concedidos}
        style={styles.text}
        onChangeText={(text) => setGolesConcedidos(text)}
      />
      <TextInput
        placeholder="Asistencias"
        value={asistencias}
        style={styles.text}
        onChangeText={(text) => setAsistencias(text)}
      />
      <TextInput
        placeholder="Faltas Cometidas"
        value={faltas_cometidas}
        style={styles.text}
        onChangeText={(text) => setFaltasCometidas(text)}
      />
      <TextInput
        placeholder="Faltas Sufridas"
        value={faltas_sufridas}
        style={styles.text}
        onChangeText={(text) => setFaltasSufridas(text)}
      />
      <TextInput
        placeholder="Tarjetas Amarillas"
        value={tarjetas_amarillas}
        style={styles.text}
        onChangeText={(text) => setTarjetasAmarillas(text)}
      />
      <TextInput
        placeholder="Tarjetas Rojas"
        value={tarjetas_rojas}
        style={styles.text}
        onChangeText={(text) => setTarjetasRojas(text)}
      />
      <Button title="Formulario Jugador" onPress={handleSubmit} />
    </View>
  );
};

export default FormularioJugador;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E67451",
  },
  text: {
    fontWeight: "bold",
  },
});
