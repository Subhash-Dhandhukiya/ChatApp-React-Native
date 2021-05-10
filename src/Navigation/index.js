import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

//import all Screen
import {Login,Signup,Dashboard,Welcome, Splash, Setting} from '../Container';
import {color} from '../Utility';
import {LOGIN,SIGNUP,WELCOME,DASHBOARD, SPLASH, SETTING, BOTTOMTAB} from '../Utility/Constant/Route'
import {ChatBoxIcon, SettingIcon} from '../Component/Icon'

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

const tabBarOptions={
    showLabel:true,
    activeTintColor:color.BLUE,
    inactiveTintColor:color.PLACEHOLDER
}

const tabBarListeners = ({ navigation, route }) => ({
    tabPress: () => navigation.navigate(route.name),
});

function MainScreen(){
    return(
        <Tab.Navigator 
            initialRouteName={Dashboard}
            tabBarOptions={tabBarOptions}
        >
            <Tab.Screen 
                name={DASHBOARD} 
                component={Dashboard}
                listeners={tabBarListeners}
                options={{
                    tabBarIcon:({color})=>(
                        <ChatBoxIcon
                            fill={color}
                            height={25}
                            width={25}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name={SETTING} 
                component={Setting}
                listeners={tabBarListeners}
                options={{
                    tabBarIcon:({color})=>(
                        <SettingIcon
                            fill={color}
                            height={25}
                            width={25}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

function NavContainer(){
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName={SPLASH}
                screenOptions={{
                    headerShown:false,
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
                    name={SPLASH} 
                    component={Splash}
                    options={{headerShown:false}}
                />
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
                    name={BOTTOMTAB} 
                    component={MainScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavContainer;