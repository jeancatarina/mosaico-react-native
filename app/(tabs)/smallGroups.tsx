import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { Strings } from '../../constants/Strings';
import MapView from 'react-native-maps';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
	  <MapView
	  	style={styles.map}
		initialRegion={{
			latitude: -26.281970,
			longitude: -48.863880,
			latitudeDelta: 0.09,
			longitudeDelta: 0.04,
		}}
		showsUserLocation={true}
		showsMyLocationButton={true}
		></MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  map: {
	position:'absolute',
top:0,
bottom:0,
left:0,
right:0,
  }
});
