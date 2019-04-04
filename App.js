import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    state= {
        inputValue: 'Put in currecny you wanna change here',
        newBal: 0,
        bal: 0,
    }
    usdEU = () => {
        this.setState({
            newBal: this.state.inputValue * .89,
        })
    }
    usdPound = () => {
       this.setState({
           newBal: this.state.inputValue * .75,
       })
   }
    usdRupee = () => {
       this.setState({
           newBal: this.state.inputValue * 64.60,
       })
   }
    usdYuan = () => {
       this.setState({
           newBal: this.state.inputValue * 6.40,
       })
   }
    usdFrance = () => {
       this.setState({
           newBal: this.state.inputValue * .99,
       })
   }
    usdYen = () => {
       this.setState({
           newBal: this.state.inputValue * 119.67,
       })
   }
    usdAus = () => {
       this.setState({
           newBal: this.state.inputValue * 1.34,
       })
   }
    usdCA = () => {
       this.setState({
           newBal: this.state.inputValue * 1.30,
       })
   }

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Currency Converter App
                </Text>
                <Text>
                Enter Currency Below
                </Text>
                <TextInput
                    
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, borderColor: 'gray', borderWidth: 1, }}
                    value={this.state.inputValue}
                />
                <View style={styles.bttnCon}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdFrance}
                >
                    <Text style={styles.buttonText}>
                        USD to France
                        
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdEU}
                >
                    <Text style={styles.buttonText}>
                        USD to Euro
                    </Text>
                </TouchableHighlight>
                </View>
                <View style={styles.bttnCon}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdYen}
                >
                    <Text style={styles.buttonText}>
                        USD to Yen
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdCA}
                >
                    <Text style={styles.buttonText}>
                        USD to Can
                    </Text>
                </TouchableHighlight>
                </View>
                <View style={styles.bttnCon}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdYuan}
                >
                    <Text style={styles.buttonText}>
                        USD to Yuan
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdAus}
                >
                    <Text style={styles.buttonText}>
                        USD to AUD
                    </Text>
                </TouchableHighlight>
                </View>
                <View style={styles.bttnCon}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdRupee}
                >
                    <Text style={styles.buttonText}>
                        USD to Rupee
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdPound}
                >
                    <Text style={styles.buttonText}>
                        USD to Pound
                    </Text>
                </TouchableHighlight>
                </View>
                <Text style={styles.paragraph}
                    style={styles.balxd}>
                   USD = {this.state.inputValue}
                </Text>
                
                <Text style={styles.paragraph}
                style={styles.balxd}>
                    Converted Balance = {this.state.newBal}
                </Text>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'LightBlue',
        
    },
     balxd:{
        fontStyle:'italic',
    color: 'black',
    },
 
    bttnCon: {
        flexDirection: 'row',
    },
   
       button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 40,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
    },
});