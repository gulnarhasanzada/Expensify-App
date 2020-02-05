import { addExpense,removeExpense, editExpense } from "../../actions/expenses";

test('Should return remove action object', ()=>{
    expect(removeExpense({id:'123456789'})).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123456789'
    });
});

test('Should return edit action object', ()=>{
    expect(editExpense('aaaa',{description:'bbbb'})).toEqual({
        type:'EDIT_EXPENSE',
        id:'aaaa',
        updates:{
            description:'bbbb'
        }
    });
});


test('Should return add action object with given data',()=>{
    const data = {
        description: 'TEST',
        note: 'TEST',
        amount: 100,
        createdAt: 12345
    }
    const action = addExpense(data);

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...data,
            id: expect.any(String)
        }
        
    });
});

test('Should return add action object with default data', () => {
    expect(addExpense()).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id:expect.any(String)
        }
    });
});