import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";
import { shallow } from "enzyme";

test('Should render Expense List with expenses',()=>{
    const wrapper = shallow(<ExpenseList expenses = {expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render Expense List with empty array', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});