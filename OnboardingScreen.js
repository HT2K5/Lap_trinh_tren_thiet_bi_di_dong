import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Animated,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleY      = useRef(new Animated.Value(40)).current;
  const subOpacity  = useRef(new Animated.Value(0)).current;
  const btnOpacity  = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(180, [
      Animated.parallel([
        Animated.timing(titleOpacity, { toValue: 1, duration: 700, useNativeDriver: true }),
        Animated.timing(titleY,      { toValue: 0, duration: 700, useNativeDriver: true }),
      ]),
      Animated.timing(subOpacity, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(btnOpacity, { toValue: 1, duration: 600, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('./assets/Image Onboarding.png')}
        style={styles.bg}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Animated.Text style={[styles.title, { opacity: titleOpacity, transform: [{ translateY: titleY }] }]}>
            Fall in Love with{'\n'}Coffee in Blissful{'\n'}Delight!
          </Animated.Text>
          <Animated.Text style={[styles.subtitle, { opacity: subOpacity }]}>
            Welcome to our cozy coffee corner, where{'\n'}every cup is a delightful for you.
          </Animated.Text>
        </View>

        <Animated.View style={[styles.btnWrap, { opacity: btnOpacity }]}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.85}
            onPress={() => navigation.replace('MainTabs')}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  bg: { flex: 1, width, height, },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 42,
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.72)',
    textAlign: 'center',
    lineHeight: 22,
  },
  btnWrap: {
    paddingHorizontal: 30,
    paddingBottom: 52,
  },
  btn: {
    backgroundColor: '#C67C4E',
    borderRadius: 16,
    paddingVertical: 17,
    alignItems: 'center',
    width: width - 60,
    shadowColor: '#C67C4E',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
    elevation: 8,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});