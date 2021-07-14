import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


class Home extends React.Component {
	constructor(props){
		super(props)
	
	}

	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Bienvenue sur la Home</Text>
				
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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

export default Home