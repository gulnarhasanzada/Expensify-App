import moment from "moment";
import { setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate } from "../../actions/filters";

test('Should set text filter wth given value',()=>{
    expect(setTextFilter('tuk')).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'tuk'
    });
});

test('Should set text filter with default value', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should set sort by date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
    });
});

test('Should set sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('Should set start date', () => {
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should set end date', () => {
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});