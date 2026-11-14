import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

const Experiencia = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="briefcase" size={80} color="#2563eb" />
        <Text style={estilos.nombre}>Juan David Alonso Cuellar</Text>
        <Text style={estilos.seccionTitulo}>Experiencia Laboral</Text>
      </View>

      <View style={estilos.lista}>
        <TarjetaExperiencia
          cargo="Desarrollador Móvil Junior (Pasante)"
          empresa="TecnoSoft Colombia S.A.S."
          periodo="Enero 2025 - Junio 2025"
          descripcion="Desarrollo de pantallas en React Native, consumo de APIs REST y apoyo en pruebas de la aplicación móvil de la empresa."
        />
        <TarjetaExperiencia
          cargo="Auxiliar de Soporte Técnico"
          empresa="Compu Servicios del Norte"
          periodo="2023 - 2024"
          descripcion="Mantenimiento de equipos, instalación de software y atención a usuarios con incidencias de red y hardware."
        />
        <TarjetaExperiencia
          cargo="Asistente de Sistemas"
          empresa="Almacén El Ahorro"
          periodo="2022 - 2023"
          descripcion="Manejo del inventario en hojas de cálculo, apoyo en la base de datos de clientes y generación de reportes semanales."
        />
      </View>
    </ScrollView>
  );
};

export default Experiencia;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 22, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  seccionTitulo: { fontSize: 14, color: "#2563eb", fontWeight: "bold" },
  lista: { backgroundColor: "#fff", padding: 16, borderRadius: 12, elevation: 1 },
});