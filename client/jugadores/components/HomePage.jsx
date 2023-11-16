import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Lista")}
      >
        <Text style={styles.buttonText}>Lista Jugadores</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Nacionalidad")}
      >
        <Text style={styles.buttonText}>Nacionalidad Argentina</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Peso")}
      >
        <Text style={styles.buttonText}>75-80kg</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Altura")}
      >
        <Text style={styles.buttonText}>Jugador mas alto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Formulario")}
      >
        <Text style={styles.buttonText}>Formulario Jugador</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E67451",
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#1E90FF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
