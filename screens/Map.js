import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'


class Map extends React.Component {
	constructor(props){
		super(props)
        this.state = {
            lat: 37.78825 , 
            lng:-122.4324 
        }
	
	}

    componentDidMount = () =>{
        this.getGeolocAsync()

    }

    getGeolocAsync = async () =>{
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let myLocation = await Location.getCurrentPositionAsync({});
        console.log(myLocation);

        this.setState({lat: myLocation.coords.latitude, lng: myLocation.coords.longitude})
    }

	render(){
		return (
			<View style={styles.container}>
                <View style={{flex: 0.2}}>
				<Text style={styles.text}>Bienvenu sur la map</Text>
                </View>
                <MapView
                style={styles.map}
                    Region={{
                    latitude: this.state.lat,
                    longitude: this.state.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                    showsUserLocation = {true}
                >

                    <MapView.Marker
        coordinate={{latitude: this.state.lat, longitude: this.state.lng}}
                    />
                    </MapView>
				
			</View>
		)
	}
}

const styles = StyleSheet.create({
    map: {
        flex: 2
    },
  container: {
    flex: 1,
    
  },
  text: {
  	color: "green",
  	fontSize: 20
  },
  button: {
  	borderWidth: 1,
  	borderColor: "black",
  	borderStyle: "solid",
  	margin: 15
  }
});

export default Map