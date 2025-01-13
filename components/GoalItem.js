import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem({ id, text, onDeleteItem }) {
	// function deleteGoadHandler(goal) {
	// 	onDeleteItem(goal.id);
	// } Another possible way to delete an item

	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: '#210644' }}
				onPress={onDeleteItem.bind(this, id)}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		borderRadius: 8,
		margin: 8,
		backgroundColor: '#5e0acc',
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		color: '#fff',
		padding: 8,
	},
});
export default GoalItem;
