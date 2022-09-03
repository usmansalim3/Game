import { View,Text,StyleSheet} from "react-native";

export default function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        padding:24,
        borderWidth:4,
        borderRadius:10,
        borderColor:"#ddb52f"
    },
    text:{
        textAlign:"center",
        fontSize:36,
        fontWeight:"bold",
        color:"white"
    }
})