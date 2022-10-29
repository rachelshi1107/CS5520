import { View, StyleSheet, TextInput } from 'react-native';
import { GlobalColors } from '../constants/styles';

function AddExpense() {
    return (
        <View style={styles.container}>
            <ExpenseForm
                onSubmit={confirmHandler}
                onCancel={cancelHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalColors.colors.mediumpurple
    }
});