import { Image, View } from "react-native";
import { styles } from "./styles";
import LogoImage from "../../assets/logo.png";

export function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={LogoImage} />
      <View style={styles.logo} />
    </View>
  )
}