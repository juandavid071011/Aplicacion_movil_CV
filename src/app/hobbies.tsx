import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

type Hobby = {
  nombre: string;
  descripcion: string;
  icono: keyof typeof Ionicons.glyphMap;
  detalle: string;
};

const HOBBIES: Hobby[] = [
  {
    nombre: "Videojuegos",
    descripcion: "Juegos de estrategia y aventura",
    icono: "game-controller-outline",
    detalle:
      "Juego desde hace 8 años. Me ayuda a desarrollar el trabajo en equipo.",
  },
  {
    nombre: "Música",
    descripcion: "Escuchar musica",
    icono: "musical-notes-outline",
    detalle:
      "Mis géneros favoritos son variados ",
  },
  {
    nombre: "Fútbol",
    descripcion: "Partidos con amigos los fines de semana",
    icono: "football-outline",
    detalle: "Juego todos los Domingos en la cancha del barrio con mis amigos.",
  },
  {
    nombre: "Programar",
    descripcion: "Proyectos personales de código",
    icono: "code-slash-outline",
    detalle:
      "En mi tiempo libre creo apps pequeñas con React Native y Python.",
  },
];

const Hobbies = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="heart" size={80} color="#2563eb" />
        <Text style={estilos.nombre}>Juan David Alonso Cuellar</Text>
        <Text style={estilos.seccionTitulo}>Intereses / Hobbies</Text>
      </View>

      <View style={estilos.lista}>
        {HOBBIES.map((h) => (
          <TarjetaHobby
            key={h.nombre}
            nombre={h.nombre}
            descripcion={h.descripcion}
            nombreIcono={h.icono}
            onPress={() => Alert.alert(h.nombre, h.detalle)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 22, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  seccionTitulo: { fontSize: 14, color: "#2563eb", fontWeight: "bold" },
  lista: { backgroundColor: "#fff", padding: 16, borderRadius: 12, elevation: 1 },
});