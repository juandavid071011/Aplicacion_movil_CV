import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  nombre: string;
  descripcion: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

const TarjetaHobby = ({ nombre, descripcion, nombreIcono, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [estilos.tarjeta, { opacity: pressed ? 0.7 : 1 }]}
    >
      <View style={estilos.iconoContenedor}>
        <Ionicons name={nombreIcono} size={28} color="#2563eb" />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={estilos.nombre}>{nombre}</Text>
        <Text style={estilos.descripcion}>{descripcion}</Text>
      </View>
    </Pressable>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 10,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    gap: 12,
  },
  iconoContenedor: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#eff6ff",
    alignItems: "center",
    justifyContent: "center",
  },
  nombre: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  descripcion: { fontSize: 13, color: "#64748b" },
});