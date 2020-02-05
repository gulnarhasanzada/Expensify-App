import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";   
import expenses from "../fixtures/expenses";  
import moment from "moment";   
import { SingleDatePicker } from "react-dates";  
import { wrap } from "module";

test('Should render Expense Form with default data',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with data', ()=>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submition',()=>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot(); 
});

test('Should set description on input change',()=>{
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set note on textarea change',()=>{
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid input',()=>{
    const value = '23.44';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
    
});

test('should not set amount if invalid input', () => {
    const value = '23.444';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
    
});

test('should call onSubmit prop for valid form submittion',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        'description': expenses[0].description,
        'amount':expenses[0].amount,
        'note': expenses[0].note,
        'createdAt': expenses[0].createdAt
    });
});

test('should set new date on date change',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set focus onFocusChange',()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});