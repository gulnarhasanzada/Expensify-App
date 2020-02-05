import moment from "moment";

export default [{
    id: '1',
    description: 'Rent',
    note: 'Rent for august',
    amount: 197,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '2',
    description: 'Coffee',
    note: 'Starbucks',
    amount: 3.5,
    createdAt: moment(0).add(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Book',
    note: 'Book buy',
    amount: 10,
    createdAt: 0
}];