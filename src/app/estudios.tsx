import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

const Estudios = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="phone-portrait-outline" size={90} color="#2563eb" />
        <Text style={estilos.nombre}>Juan David Alonso Cuellar</Text>
        <Text style={estilos.seccionTitulo}>Estudios</Text>
      </View>

      <View style={estilos.lista}>
        <TarjetaEstudio
          titulo="Bachiller"
          institucion="Ofelia Uribe de Acosta"
          anio={2025}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Técnico en programación de software"
          institucion="SENA"
          anio={2025}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="SENA"
          anio={2026}
          enCurso={true}
        />
      </View>
    </ScrollView>
  );
};

export default Estudios;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 22, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  seccionTitulo: { fontSize: 14, color: "#2563eb", fontWeight: "bold" },
  lista: { backgroundColor: "#fff", padding: 16, borderRadius: 12, elevation: 1 },
});