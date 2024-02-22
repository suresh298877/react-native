import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
function CategoryGridTile({title,color}){
    return (
        <View style={[styles.gridItem]}>
            <Pressable style={({pressed})=>{ return [styles.button,pressed?styles.buttonPressed:null]}} android_ripple={{color : '#ccc'}}>
                <View style={[styles.innerContainer,{backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles=StyleSheet.create({
    gridItem:{
        flex : 1,
        height: 150,
        borderRadius:8,
        elevation: 4,
        overflow : Platform.OS==='android' ? 'hidden': 'visible',
        backgroundColor:'white',
        margin : 16,
        shadowRadius:8,

    },
    buttonPressed :{
        opacity : 0.5,
    },
    button:{
        flex : 1,
    },
    innerContainer:{
        flex : 1,
        padding : 16,
        justifyContent : 'center',
        borderRadius : 8,
        alignItems : 'center',
    },
    title:{
        fontWeight:'bold',
        fontSize: 18,
    }
})

