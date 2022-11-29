import { useCallback } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from './selection.json';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const Icon = createIconSetFromIcoMoon(fontelloConfig);
  const [fontsLoaded] = useFonts({
    RedHatDisplay: require('./assets/RedHatDisplay-VariableFont_wght.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <Icon name="Polygon-1-2" size={32} /> */}
      <LinearGradient
        style={styles.greenDot}
        colors={['#F5FFCF', '#D5FFD9']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.8]}
      ></LinearGradient>
      <LinearGradient
        style={[styles.greenDotDown, { transform: [{ rotate: '-26deg' }] }]}
        colors={['#F5FFCF', '#D5FFD9']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 0.8]}
      ></LinearGradient>
      {/* <View style={styles.hearth} /> */}
      <View style={styles.titBox}>
        <View>
          <Text style={styles.title}>Health</Text>
          <Text style={styles.subtitle}>Your body condition</Text>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.blitz}></TouchableOpacity>
          <TouchableOpacity style={styles.character}></TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.manBox}></View>
        <View style={styles.stats}>
          <View style={styles.statsBox}>
            <View>
              <Text style={styles.statsNumber}>23.2</Text>
            </View>
            <View>
              <Text style={styles.statsMain}>BMI</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.statsButtonGreen}>
                <Text>Normal</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.statsBox}>
            <View>
              <Text style={styles.statsNumber}>0.96</Text>
            </View>
            <View>
              <Text style={styles.statsMain}>WHR</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.statsButtonOrage}>
                <Text>Averge</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.riskBox}>
        <View style={styles.riskBar}>
          <Text style={styles.riskTitle}>
            Risk of developing diabetes over 10 years
          </Text>
          <Text style={styles.riskStatus}>Low</Text>
          <LinearGradient
            colors={['#F93B12', '#FD7D36', '#FFC736', '#86CC5B']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.riskShow}
          ></LinearGradient>
          <TouchableOpacity style={styles.riskButton}>
            <Text style={styles.riskButtonText}>Learn more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardioBar}>
          <Text style={styles.cardioTitle}>Cardiovascular risk</Text>
          <Text style={styles.riskStatus}>Low</Text>
          <LinearGradient
            colors={['#F93B12', '#FD7D36', '#FFC736', '#86CC5B']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.riskShow}
          ></LinearGradient>
          <TouchableOpacity style={styles.riskButton}>
            <Text style={styles.riskButtonText}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    borderColor: 'black',
    borderWidth: 2,
  },
  statsButtonGreen: {
    marginTop: 8,
    backgroundColor: '#EEF3DF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  statsButtonOrage: {
    marginTop: 8,
    backgroundColor: '#FFF0D2',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  statsMain: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    fontFamily: 'RedHatDisplay',
  },
  statsNumber: {
    fontSize: 23,
    fontWeight: '500',
    lineHeight: 40,
    color: '#293C32',
  },
  statsBox: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: { flex: 1, flexDirection: 'row', marginTop: 30 },
  manBox: {
    height: 342,
    width: '50%',
  },
  stats: {
    width: '50%',
    height: 342,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5;',
  },
  titBox: {
    marginLeft: 16,
    marginTop: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'RedHatDisplay',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: 32,
  },
  subtitle: {
    color: '#97A98F',
    fontFamily: 'RedHatDisplay',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  blitz: {
    width: 44,
    height: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowRadius: 10,
  },
  character: {
    marginLeft: 11,
    width: 54,
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    shadowRadius: 10,
  },
  greenDot: {
    position: 'absolute',
    width: 230,
    height: 182,
    left: 174,
    top: -18,
    overflow: 'hidden',
    borderRadius: 800,
  },
  greenDotDown: {
    position: 'absolute',
    width: 391.42,
    height: 232.75,
    left: 36,
    top: 566.35,
    overflow: 'hidden',
    borderRadius: 800,
  },
  blur: {
    position: 'absolute',
    width: 260,
    height: 200,
    left: 154,
    top: -18,
  },
  riskBox: {
    flex: 1,
    alignItems: 'center',
    marginTop: 46,
    flexDirection: 'column',
  },
  riskBar: {
    width: 343,
    maxHeight: 144,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: 'black',
    shadowRadius: 16,
  },
  cardioBar: {
    marginTop: 8,
    width: 343,
    maxHeight: 144,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: 'black',
    shadowRadius: 16,
  },
  riskTitle: {
    marginTop: 16,
    textAlign: 'center',
    color: '#293C32',
    fontFamily: 'RedHatDisplay',
    fontWeight: '500',
  },
  cardioTitle: {
    marginTop: 16,
    textAlign: 'center',
    color: '#293C32',
    fontFamily: 'RedHatDisplay',
    fontWeight: '500',
  },
  riskStatus: {
    marginTop: 8,
    textAlign: 'center',
    color: '#B7B232',
    fontFamily: 'RedHatDisplay',
    fontWeight: '700',
  },
  riskShow: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 16,
    height: 8,
    borderRadius: 5,
  },
  riskButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 14,
    marginBottom: 10,
    backgroundColor: '#F6F6F6',
  },
  riskButtonText: {
    fontFamily: 'RedHatDisplay',
    fontSize: 14,
    fontWeight: '500',
    color: '#97A98F',
  },
});
