import moment from 'moment';

export function getDateFromDateTime (d) {
    return moment(d).format('dddd') + ', ' + moment(d).format('MMM DD');
}

export function getCurrentDate () {
    var d = new Date();
    return getDateFromDateTime(d)
}