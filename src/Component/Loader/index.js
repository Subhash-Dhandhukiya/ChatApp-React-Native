import React ,{useContext} from 'react'
import {ActivityIndicator,View,StyleSheet,Dimensions,Platform} from 'react-native'
import { Store } from '../../Context/store';
import {color} from '../../Utility'


const {height,width}=Dimensions.get('window');

const styles=StyleSheet.create({
    loaderContainer:{
        zIndex:1,
        elevation:2,
        height,
        width,
        position: 'absolute',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:color.SEMI_TRANSPARENT,
    },
    indicator:{
        backgroundColor:color.PLACEHOLDER,
        height:44,
        width:44,
        borderRadius:22,
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    }
})


const Loader=()=>{
    const loadingContext=useContext(Store);
    const loading=loadingContext.loadingState;

    return loading ? (
        <View style={styles.loaderContainer}>
            <View style={styles.indicator}>
                <ActivityIndicator
                    size="large"
                    animating={loading}
                    color={color.BLUE}
                    style={{
                        left:Platform.OS==="ios"?1.3:0,
                        top:Platform.OS === "ios" ? 1:0,
                    }}
                />
            </View>
        </View>
    ):null
}

export default Loader;