function isWeekend(date) {
    const formattedDate = date.format('dddd');
    if (formattedDate === 'Sunday' || formattedDate === 'Saturday') {
        return formattedDate;
    } else {
        return -1;
    }
}

export default isWeekend;