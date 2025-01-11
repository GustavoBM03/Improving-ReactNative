import { useState } from 'react'
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'

export default function App() {
    const [enteredGoals, setEnteredGoals] = useState('')
    const [goals, setGoals] = useState([])

    function goalInputHandler(enteredText) {
        setEnteredGoals(enteredText)
    }

    function addGoalHandler() {
        setGoals((currentGoals) => [...currentGoals, enteredGoals])
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <ScrollView>
                    {goals.map((goal, index) => (
                        <View key={index} style={styles.goalItem}>
                            <Text style={styles.goalText}>{goal}</Text>
                        </View>
                    ))}
                </ScrollView>
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
    goalItem: {
        borderRadius: 8,
        padding: 8,
        margin: 8,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: '#fff',
    },
})
