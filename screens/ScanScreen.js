import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component {
    constructor(){
        super();
        this.state = {
          hasCameraPermissions: null,
          scanned: false,
          scannedData: '',
          buttonState: 'normal'
        }
    }

    getCameraPermissions = async () =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        
        this.setState({
          hasCameraPermissions: status === "granted",
          buttonState: 'clicked',
          scanned: false
        });
    }
  
    handleBarCodeScanned = async({type, data})=>{
        this.setState({
          scanned: true,
          scannedData: data,
          buttonState: 'normal'
        });
    }

    render() {
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
  
        if (buttonState === "clicked" && hasCameraPermissions){
          return(
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          );
        }
  
        else if (buttonState === "normal"){
          return(
            <View style={styles.container}>
            
            <Text style={{ marginTop: 20, borderWidth: 5, textAlign:"center", backgroundColor: "#EF9B0F", fontSize: 35, fontWeight: "bold", color:'black', height: 60, width: 400, justifyContent: 'center', alignSelf: 'center', borderRadius: 20, marginTop: -240, marginBottom:50 }}>Bar Code Scanner</Text>

                <Image
                style={{
                width: 200,
                height: 200,
                alignSelf: 'center',
                justifyContent: "center",
                marginBottom: 50
                }}
                source={{
                uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Barcode-scanner.jpg/220px-Barcode-scanner.jpg',
                }}
          />
  
            <Text style={styles.displayText}>{
              hasCameraPermissions===true ? this.state.scannedData: ""
            }</Text>     
  
            <TouchableOpacity
              onPress={this.getCameraPermissions}
              style={styles.scanButton}>
              <Text style={styles.buttonText}>Scan QR Code</Text>
            </TouchableOpacity>
          </View>
          );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      displayText:{
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#EF9B0F',
        textAlign: "center"
      },
      scanButton:{
        borderWidth: 5,        
        borderWidth: 5,        
        backgroundColor: "#EF9B0F",  
        justifyContent: 'center', 
        alignSelf: 'center', 
        borderRadius: 20 ,
        marginTop: 10,
        height: 60,
        width: 200
      },
      buttonText:{
        textAlign:"center",
        fontSize: 25, 
        fontWeight: "bold", 
        color:'black',
      }
});