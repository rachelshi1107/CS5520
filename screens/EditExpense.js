import { View, Pressable, StyleSheet } from 'react-native';
import TextButton from '../components/TextButton';
import { deleteFromDB, updateToDB } from '../firebase/firestore';
import { GlobalColors } from '../constants/styles';

function EditExpense( { route } ) {

    async function onItemMark() {
        const expense = route.params.expense;
        expense.important = true;
        await updateToDB(expense);
    }

    async function onItemDelete() {
        await deleteFromDB(route.params.expense.key);
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <TextButton
                    text={'Make it important'} style={styles.button} onPress={onItemMark}
                />       
                <TextButton
                    text={'Delete'} style={styles.button} onPress={onItemDelete}
                />  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalColors.colors.mediumpurple,
        flex: 1,
    },
    buttons: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginVertical: 10
    }
});

export default EditExpense;