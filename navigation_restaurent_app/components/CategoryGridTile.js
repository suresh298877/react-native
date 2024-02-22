import {View,Pressable,Text,StyleSheet} from "react-native"
function CategoryGridTile({title,color}){
    return (
        <View style={styles.gridItem}>
            <Pressable style={styles.button}>
                <View style={styles.innerContainer}>
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
        backgroundColor:'white',
        margin : 16,
        shadowRadius:8,

    },
    button:{
        flex : 1,
    },
    innerContainer:{
        flex : 1,
        padding : 16,
        justifyContent : 'center',
        alignItems : 'center',
    },
    title:{
        fontWeight:'bold',
        fontSize: 18,
    }
})

