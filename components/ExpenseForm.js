import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from './Input';

function ExpenseForm({ onSubmit }) {

    const [inputs, setInputs] = useState('');

    function resetInputHandler() {
        setInputs('');
    }

    function changeInputHandler(enteredValue) {
        setInputs(enteredValue);
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            description: inputs.description.value,
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !descriptionIsValid) {
            Alert.alert(
                "Invalid amount or description",
                "Please enter valid amount or description",
                [
                  {
                    text: "Okay",
                    style: "destructive",
                    onPress: resetInputHandler
                  }
                ]
            );
        } else {
            onSubmit(expenseData);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={StyleSheet.form}>
                <Text style={StyleSheet.title}>Your Expense</Text>
                <Input 
                    label="Amount"
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: {changeInputHandler},
                        value: inputs.amount.value
                    }}
                />
                <Input
                    label="Description"
                    textInputConfig={{
                        multiline: true,
                        onChangeText: {changeInputHandler},
                        value: inputs.description.value
                    }}
                />
                <View style={styles.buttons}>
                    <Button style={styles.button} mode="flat" onPress={onCancel}>
                        Cancel
                    </Button>
                    <Button style={styles.button} onPress={submitHandler}>
                        Submit
                    </Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
});

export default ExpenseForm;