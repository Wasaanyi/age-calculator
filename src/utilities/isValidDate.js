export function isValidDate(dateString){
    const regex = /^\d{4}-\d{1,2}-\d{1,2}$/;
    if (!regex.test(dateString)) {
        return false; // Date string format is not valid (YYYY-MM-DD)
    }

    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);

    // Check for valid month (1 to 12) and valid day in that month
    const isValidMonth = month >= 1 && month <= 12;
    const isValidDay = day >= 1 && day <= new Date(year, month, 0).getDate();

    return isValidMonth && isValidDay;
}


