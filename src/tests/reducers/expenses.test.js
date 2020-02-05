import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test('should set default state',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
})

test('should add new expense',()=>{
    const expense = {
        id:'123456',
        description: 'Test description',
        note: 'Test note',
        amount: 100,
        createdAt: moment()
    }
    const state = expensesReducer(expenses,{ type: 'ADD_EXPENSE', expense:expense});
    expect(state).toEqual([...expenses,expense]);
});

test('Should remove expense by id',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([
        expenses[0],expenses[2]
    ]);
});

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 7
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            amount: 20000
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(20000);
});

test('Should not edit expense if id is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 7,
        updates: {
            amount: 20000
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
