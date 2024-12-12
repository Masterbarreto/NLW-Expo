import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginLeft: 30,
    },
    logo: {
        width: 40,
        height: 40,
        marginTop: 1,
        marginBottom: 21,
        marginLeft: 10,
    },
    title: {
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.gray[600],
        marginLeft: 10,
        marginTop: 1,
    } ,
    subtitle: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 12,
        marginLeft: 10,
    }
})