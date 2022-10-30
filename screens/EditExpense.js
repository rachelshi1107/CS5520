import { View, Alert, StyleSheet } from 'react-native';
import TextButton from '../components/TextButton';
import { deleteFromDB, updateToDB } from '../firebase/firestore';
import { GlobalColors } from '../constants/styles';

function EditExpense( { route, navigation } ) {

    async function onItemMark() {
        Alert.alert(
            'Important',
            'Are you sure you want to mark this as important?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: async() => {
                        const expense = route.params.expense;
                        expense.important = true;
                        await updateToDB(expense);
                        navigation.navigate('AllExpenses');
                    }
                }
            ]
        );
    }

    async function onItemDelete() {
        Alert.alert(
            'Delete',
            'Are you sure you want to delete this?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: async() => {
                        await deleteFromDB(route.params.expense.key);
                        navigation.navigate('AllExpenses');
                    }
                }
            ]
        );
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
        minWidth: 160,
        marginVertical: 12
    }
});

export default EditExpense;