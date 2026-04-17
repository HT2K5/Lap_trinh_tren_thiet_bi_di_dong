
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  ImageBackground,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Student badge */}
      <View style={styles.studentBadge}>
        <Text style={styles.studentText}>Trần Minh Hiếu</Text>
      </View>

      <ImageBackground
        source={require("./assets/onboarding_bg.png")}
        style={styles.bgImage}
        resizeMode="cover"
      >
       
        <View style={styles.overlay} />

        
        <View style={styles.bottomContent}>
          
          <Image
            source={require("./assets/carrot_white.png")}
            style={styles.carrotIcon}
            resizeMode="contain"
          />

          
          <Text style={styles.title}>Welcome{"\n"}to our store</Text>

         
          <Text style={styles.subtitle}>
            Ger your groceries in as fast as one hour
          </Text>

          
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  studentBadge: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 99,
    backgroundColor: "rgba(255,235,0,0.9)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  studentText: { fontWeight: "700", fontSize: 13, color: "#333" },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  bottomContent: {
    paddingHorizontal: 28,
    paddingBottom: 60,
    paddingTop: 20,
    alignItems: "center",
  },
  carrotIcon: {
    width: 40,
    height: 46,
    marginBottom: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: "900",
    color: "#fff",
    lineHeight: 56,
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)",
    marginBottom: 32,
    lineHeight: 24,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#53B175",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
    width: "100%"
  },
  btnText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});
