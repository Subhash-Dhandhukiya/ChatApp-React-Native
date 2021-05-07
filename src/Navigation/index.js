import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//import all Screen
import {Login,Signup,Dashboard,Welcome} from '../Container';
import {color} from '../Utility';
import {LOGIN,SIGNUP,WELCOME,DASHBOARD} from '../Utility/Constant/Route'
import { Logout } from '../../assets/Icon';

const Stack=createStackNavigator();

function NavContainer(){
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName={WELCOME}
                screenOptions={{
                    headerShown:true,
                    headerStyle:{backgroundColor:color.WHITE},
                    headerTintColor:color.BLUE,
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        fontWeight:'bold',
                        fontSize:20
                    }

                }}
            >
                <Stack.Screen 
                    name={WELCOME} 
                    component={Welcome}
                    options={{headerShown:false}}
                />
                <Stack.Screen 
                    name={LOGIN} 
                    component={Login} 
                    options={{headerShown:false}}
                />
                <Stack.Screen 
                    name={SIGNUP} 
                    component={Signup} 
                    options={{headerShown:false}}
                />
                <Stack.Screen 
                    name={DASHBOARD} 
                    component={Dashboard} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavContainer;