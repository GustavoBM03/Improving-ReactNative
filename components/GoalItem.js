import { Pressable, StyleSheet, Text, View } from 'react-native'

function GoalItem({ id, text, onDeleteItem }) {
    function deleteGoadHandler(goal) {
        onDeleteItem(goal.id)
    }

    return (
        <Pressable onPress={onDeleteItem.bind(this, id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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
export default GoalItem
