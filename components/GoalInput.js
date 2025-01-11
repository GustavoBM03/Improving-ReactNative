import { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function GoalInput({ onAddGoal }) {
    const [enteredGoals, setEnteredGoals] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoals(enteredText)
    }

    function addGoalHandler() {
        onAddGoal(enteredGoals)
        setEnteredGoals('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={goalInputHandler}
                value={enteredGoals}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
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
})
