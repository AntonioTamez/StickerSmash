import React, { useState } from 'react';
import MapView, { Circle, Marker } from 'react-native-maps';
import { Button, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

export default function MapaScreen({ route, navigation }) {
    const { nombre, latitud, longitud, telefono } = route.params
    
    const [location, setLocation] = useState({
        latitude: Number(latitud),
        longitude: Number(longitud) 
    });

    const [posicionInicial, setPositionInicial] = useState({
        latitude: Number(latitud),
        longitude: Number(longitud), 
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
    })
    
    const mapStyle = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#a700f5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f56e00"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f80d0d"
                },
                {
                    "weight": 3
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c9c9c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#16c5c2"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        }
    ]

    

    const geoLocalizar = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: location.latitude, 
            longitude: location.longitude
        });

        setPositionInicial({
            latitude: location.latitude, 
            longitude: location.longitude, 
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
        });


    }

    return (
        
        <View style={styles.container}>
            <MapView style={styles.map}
                customMapStyle={mapStyle}
                initialRegion={posicionInicial}
                Region={posicionInicial}
                onRegionChangeComplete={setPositionInicial}> 
                <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                    title={nombre} description={telefono}
                />
                <Circle
                    center={{ latitude: location.latitude, longitude: location.longitude }}
                    radius={500}
                    strokeColor="rgba(255,0,0,0.5)"
                    fillColor="rgba(255,0,0,0.1)"
                    strokeWidth={3}
                />
            </MapView>
            <View style={styles.buttonContainer}>
                <Button title='Geolocalizar' onPress={() => geoLocalizar()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        alignItems: 'center',
    },
});