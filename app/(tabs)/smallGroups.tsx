import { MaterialCommunityIcons } from "@expo/vector-icons"
import { StyleSheet } from "react-native"
import MapView, { Marker } from "react-native-maps"

import { Text, View } from "../../components/Themed"

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <MapView
        zoomEnabled
        zoomControlEnabled
        style={styles.map}
        initialRegion={{
          latitude: -26.28197,
          longitude: -48.86388,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
        showsUserLocation
        showsMyLocationButton
      >
        <Marker coordinate={{ latitude: -26.28197, longitude: -48.86388 }}>
          <Text style={styles.churchText}>Mosaico</Text>
          <View style={styles.markerContainer}>
            <MaterialCommunityIcons name="church" size={30} color="#f9d833" />
          </View>
        </Marker>
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  churchText: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  map: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  markerContainer: {
    backgroundColor: "#030000",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 15,
    padding: 5,
    alignItems: "center",
  },
})
