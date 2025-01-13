import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	const [goals, setGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	function endAddGoalHandler() {
		setModalIsVisible(false);
	}

	function addGoalHandler(enteredGoals) {
		setGoals((currentGoals) => [
			...currentGoals,
			{ text: enteredGoals, id: Math.random().toString() },
		]);
	}

	function deleteGoalHandler(id) {
		setGoals((currentGoals) =>
			currentGoals.filter((goal) => goal.id !== id)
		);
	}

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#b180f0"
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					onAddGoal={addGoalHandler}
					visible={modalIsVisible}
					cancelAddGoal={endAddGoalHandler}
				/>
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
						keyExtractor={(item) => item.id}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 5,
	},
});
