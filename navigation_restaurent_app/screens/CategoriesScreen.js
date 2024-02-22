import {FlatList} from "react-native";
import {CATEGORIES} from "../Data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile";
function CategoriesScreen(){

    function renderCategoryItem(itemData){
        return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
        );
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item)=>item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;