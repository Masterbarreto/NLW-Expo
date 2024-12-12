import { ActivityIndicator } from "react-native" 
import { s } from "./styles"
import { colors } from "@/styles/theme"

export default function Loading(){
    return <ActivityIndicator size="large" color={colors.gray[500]} style={s.container}/>
}

