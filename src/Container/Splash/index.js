import React, { useEffect } from 'react'
import { getAsyncStorage, keys } from '../../AsyncStorage'
import { BOTTOMTAB, DASHBOARD, LOGIN, WELCOME } from '../../Utility/Constant/Route'
import {setUniqueValue} from '../../Utility/Constant'
import Logo from '../../Component/Logo/index'

const Splash = ({ navigation }) => {
    useEffect(() => {
        const redirect = setTimeout(async() => {
            await getAsyncStorage(keys.uuid)
            .then((uuid) => {
                if (uuid) {
                    setUniqueValue(uuid)
                    navigation.replace(BOTTOMTAB)
                } else {
                    navigation.replace(WELCOME)
                }
            })
            .catch((error) => {
                console.log(error)
                navigation.replace(LOGIN)
            })
        }, 1500);

        return ()=>clearTimeout(redirect)

    }, [navigation])

    return (
       <Logo/>
    )
}

export default Splash;