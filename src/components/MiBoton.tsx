import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton?: string;
  onPress: () => void;
};

const MiBoton = ({ textoBoton, nombreIcono, colorBoton = "#2563eb", onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[estilos.boton, { backgroundColor: colorBoton }]}
    >
      <Ionicons name={nombreIcono} size={18} color="#ffffff" />
      <Text style={estilos.texto}>{textoBoton}</Text>
    </Pressable>
  );
};

export default MiBoton;

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 4,
    gap: 8,
  },
  texto: { color: "#ffffff", fontWeight: "bold", fontSize: 14 },
});