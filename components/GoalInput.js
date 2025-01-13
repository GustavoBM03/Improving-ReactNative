import { useState } from 'react';
import {
	Button,
	Modal,
	StyleSheet,
	TextInput,
	View,
	Alert,
	Image,
} from 'react-native';

export default function GoalInput({ onAddGoal, visible, cancelAddGoal }) {
	const [enteredGoals, setEnteredGoals] = useState('');

	function goalInputHandler(enteredText) {
		setEnteredGoals(enteredText);
	}

	function addGoalHandler() {
		if (enteredGoals.trim().length === 0) {
			Alert.alert('Goal text is empty!');
			return;
		}
		onAddGoal(enteredGoals);
		setEnteredGoals('');
	}

	function cancelGoalHandler() {
		cancelAddGoal();
		setEnteredGoals('');
	}

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoals}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Add Goal"
							onPress={addGoalHandler}
							color="#b180f0"
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="Cancel"
							onPress={cancelGoalHandler}
							color="#f31282"
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#311b6b',
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		borderRadius: 6,
		backgroundColor: '#e4d0ff',
		color: '#120438',
		width: '100%',
		padding: 16,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	button: {
		width: '30%',
		marginHorizontal: 8,
	},
});
