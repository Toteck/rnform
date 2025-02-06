import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof Feather.glyphMap;
};

export function Button({ title, icon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Feather name={icon} color={"#fff"} size={18} />
    </TouchableOpacity>
  );
}
