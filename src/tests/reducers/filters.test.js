import moment from "moment";
import filtersReducer from "../../reducers/filters";

test('should set filters by default value', ()=>{
    const result = filtersReducer(undefined, {type: '@@INIT'});
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set text filter',()=>{
    const result = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text:'e'});
    expect(result.text).toBe('e');
});

test('should set sortBy to amount', ()=>{
    const result = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(result.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const state = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const result = filtersReducer(state, { type: 'SORT_BY_DATE' });
    expect(result.sortBy).toBe('date');
});

test('should set startDate', ()=>{
    const result = filtersReducer(undefined,{type:'SET_START_DATE',startDate:moment(0).valueOf()});
    expect(result.startDate).toBe(moment(0).valueOf());
});

test('should set endDate', () => {
    const result = filtersReducer(undefined, { type: 'SET_END_DATE',endDate:moment(0).valueOf() });
    expect(result.endDate).toBe(moment(0).valueOf());
});