import { Stack } from "expo-router"
import { colors} from "@/styles/theme"
import { useFonts, Rubik_600SemiBold, Rubik_400Regular , Rubik_500Medium ,Rubik_700Bold } from  "@expo-google-fonts/rubik"
import Loading from "@/components/loading"
export default function Layout (){
     const [FontsLoaded] = useFonts({ // carega todas as fontes 
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold,
    })
    if(!FontsLoaded){
        return <Loading/> // se as fontes não carregarem retorna null
    } 
    return <Stack
    screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] } // cor de background padarão 
    }}
    />
}