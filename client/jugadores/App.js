import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./components/HomePage";
import ListaJugadores from "./components/listaJugadores";
import ListaArgentinos from "./components/listaArgentinos";
import ListaPesos from "./components/listaPesos";
import JugadorAlto from "./components/JugadorAlto";
import FormularioJugador from "./components/FormularioJugador";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#E67451",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
          presentation: "modal",
          bodyStyle: {
            backgroundColor: "#E67451",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            title: "Home Page",
            headerTitleAlign: "center",
            headerTitleStyle: {
              borderRadius: 10,
            },
          }}
        />
        <Stack.Screen name="Lista" component={ListaJugadores} />
        <Stack.Screen name="Nacionalidad" component={ListaArgentinos} />
        <Stack.Screen name="Peso" component={ListaPesos} />
        <Stack.Screen name="Altura" component={JugadorAlto} />
        <Stack.Screen name="Formulario" component={FormularioJugador} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
