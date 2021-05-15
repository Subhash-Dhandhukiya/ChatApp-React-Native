import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


//import all Screen
import { Login, Signup, Dashboard, Welcome, Splash, Setting, Profile, ShowFullImg, Chat, Theme } from '../Container';
import { color } from '../Utility';
import { LOGIN, SIGNUP, WELCOME, DASHBOARD, SPLASH, SETTING, PROFILE, DASHBOARDSCREEN, SHOWFULLIMG, CHAT, THEME } from '../Utility/Constant/Route'
import { ChatBoxIcon, SettingIcon } from '../Component/Icon'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarOptions = {
    showLabel: true,
    activeTintColor: color.BLUE,
    inactiveTintColor: color.ICON,
    keyboardHidesTabBar: true,
    style: {
        position: 'relative'
    }
}

const tabBarListeners = ({ navigation, route }) => ({
    tabPress: () => navigation.navigate(route.name),
});


function HomeTabs() {
    return (
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
                    ),
                    title:'Chat'
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
                    ),
                    title:'Setting'
                }}
            />
        </Tab.Navigator>
    )
}


const NavContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
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
                    name={DASHBOARDSCREEN} 
                    component={HomeTabs}
                    options={{headerShown:false}}
                />
                <Stack.Screen 
                    name={PROFILE} 
                    component={Profile}
                    options={{headerShown:false}}
                />
                <Stack.Screen 
                    name={SHOWFULLIMG} 
                    component={ShowFullImg} 
                    options={{headerShown:false}}
                />
                <Stack.Screen 
                    name={CHAT} 
                    component={Chat}
                />
                <Stack.Screen 
                    name={THEME} 
                    component={Theme}
                    options={{headerShown:false}}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const getHeaderTitle = (route) => {
    if (route === DASHBOARD) {
        return "Chat";
    } else if (route === SETTING) {
        return "Setting"
    } else {
        return route;
    }
}

export default NavContainer;