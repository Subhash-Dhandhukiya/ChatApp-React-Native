import {Dimensions} from 'react-native'
import * as color from '../../Colors'
import {smallDeviceHeigh} from '../../Constant'

export const {height:deviceHeight,width:deviceWidth}=Dimensions.get("window")

const getFieldDimensions=()=>{
    if(deviceHeight>smallDeviceHeigh){
        return{
            fieldHeight:50,
            fieldMarginVertical:10,
            btnMarginVertical:20,
            btnBorderRadius:10,
            btnHeight:50
        };  
    }else{
        return{
            fieldHeight:40,
            fieldMarginVertical:8,
            btnMarginVertical:16,
            btnBorderRadius:8,
            btnHeight:40
        }
    }
}

export const fieldBgColor=color.WHITE;
export const fieldTextColor=color.BLACK;
export const logoBgColor=color.BLUE;
export const fieldHeight=getFieldDimensions().fieldHeight;
export const fieldMarginVertical=getFieldDimensions().fieldMarginVertical;
export const btnMarginVertical = getFieldDimensions().btnMarginVertical;
export const btnBorderRadius = getFieldDimensions().btnBorderRadius;
export const btnHeight = getFieldDimensions().btnHeight;