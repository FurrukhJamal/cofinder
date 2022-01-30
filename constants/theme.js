import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window")

export const COLORS = {
    mainText : "#2E3E5C",
    secondaryText : "#9FA5C0",
    primary : "#1FCC79",
    white : "#FFFFFF",
    secondary : "#9FA5C0",
    background : "#E5E5E5"
}


export const SIZES = {
    h1 : 32,
    secondary : 15,
    body3 : 12,
    width,
    height, 

}


export const FONTS = {
    h1 : {fontFamily : "Inter_400Regular", fontSize : 22, lineHeight : 32, fontWeight : "bold", letterSpacing : 0.5, color : "#2E3E5C"},
    buttonText : {fontFamily : "Inter_400Regular", fontSize : 15, lineHeight : 18, fontWeight : "bold", letterSpacing : 0.112, color : COLORS.white},
    secondaryText : {fontFamily : "Inter_400Regular", fontSize : SIZES.secondary, lineHeight : 25, fontWeight : 500, letterSpacing : 0.5, color : COLORS.secondaryText},

}