import { StyleSheet, Text, View } from 'react-native'

function GoalItem({ text }) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{text}</Text>
        </View>
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
