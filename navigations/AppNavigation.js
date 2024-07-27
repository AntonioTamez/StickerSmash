import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StartScreen from '../screens/StartScreen';
import TerminosScreen from '../screens/TerminosScreen';
import EscritorioScreen from '../screens/EscritorioScreen';
import ProveedoresPage from '../screens/pages/ProveedoresPage';
import EmpleadosPage from '../screens/pages/EmpleadosPage';
import TiendaPage from '../screens/pages/TiendaPage';
import ProductosPage from '../screens/pages/ProductosPage';
import ProductoDetallePage from '../screens/pages/ProductoDetallePage';
import DirectoresPage from '../screens/pages/DirectoresPage';
import DirectoresInsertPage from '../screens/pages/DirectoresInsertPage';
import { COLORS } from '../constants/theme';
import DirectoresEditPage from '../screens/pages/DirectoresEditPage';
import LoginPage from '../screens/pages/LoginPage';
import MapaScreen from '../screens/MapaScreen';
import EnviosScreen from '../screens/EnviosScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTransparent:true,
                    headerTitle: '',
                    headerTintColor: COLORS.colorBlanco
                }}
                >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Bienvenida' }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil del usuario' }} />
                <Stack.Screen name="Start" component={StartScreen} 
                    options={{ title: 'Empezar',
                        headerStyle: {
                            backgroundColor: 'rgba(0,0,0,0.7)'
                        },headerTitle: "Empezando..."
                    }} />
                <Stack.Screen name="Terminos" component={TerminosScreen} options={{ title: 'Términos y condiciones' }} />
                <Stack.Screen name="Escritorio" component={EscritorioScreen} options={{ title: 'Escritorio' }} />
                <Stack.Screen name="Proveedores" component={ProveedoresPage} options={{ title: 'Proveedores' }} />
                <Stack.Screen name="Empleados" component={EmpleadosPage} options={{ title: 'Colaboradores' }} />
                <Stack.Screen name="Tienda" component={TiendaPage} options={{ title: 'Tienda' }} />
                <Stack.Screen name="Productos" component={ProductosPage} options={{ title: 'Productos' }} />
                <Stack.Screen name="ProductoDetalle" component={ProductoDetallePage} options={{ title: 'Producto Detalle' }} />
                <Stack.Screen name="Directores" component={DirectoresPage} options={{ title: 'Directores' }} />
                <Stack.Screen name="DirectoresInsert" component={DirectoresInsertPage} options={{ title: 'Directores' }} />
                <Stack.Screen name="DirectoresEdit" component={DirectoresEditPage} options={{ title: 'Directores' }} />
                <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Iniciar sesión' }} />
                <Stack.Screen name="Mapa" component={MapaScreen} options={{ title: 'Mapa' }} />
                <Stack.Screen name="Envios" component={EnviosScreen} options={{ title: 'Envios' }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}