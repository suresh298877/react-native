import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from "react";
import GoalItem from './components/GoalItem';
export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText !== "") {
      setCourseGoals(currentState => [...currentState, { text: enteredGoalText, id: Math.random().toString() }]);
    }
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder='Enter your goal' ></TextInput>
        <Button onPress={addGoalHandler} title="Add Goal"></Button>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} />
        }}
        
        keyExtractor={(item,index)=>{
          return item.id;
        }}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderColor: '#cccccc',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
    // backgroundColor : 'red',
  },
  goalsContainer: {
    flex: 4
    // backgroundColor : 'black'
  },
});