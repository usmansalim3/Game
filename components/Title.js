import { Text,View,StyleSheet } from "react-native";


export default function title({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
   
}
const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:"white",
        padding:10,
        borderRadius:6
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        color:"#ddb52f",
        textAlign:"center"

    }
})