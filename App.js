import { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
    const [goals, setGoals] = useState([])

    function addGoalHandler(enteredGoals) {
        setGoals((currentGoals) => [
            ...currentGoals,
            { text: enteredGoals, id: Math.random().toString() },
        ])
    }

    function deleteGoalHandler(id) {
        console.log('Delete', id)
        setGoals((currentGoals) =>
            currentGoals.filter((goal) => goal.id !== id)
        )
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goals}
                    renderItem={(itemData) => (
                        <GoalItem
                            id={itemData.item.id}
                            text={itemData.item.text}
                            onDeleteItem={deleteGoalHandler}
                        />
                    )}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 10,
        marginRight: 10,
    },
    goalsContainer: {
        flex: 5,
    },
})
