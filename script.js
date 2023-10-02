function setDayInputErrorStyles() {
    const dil = document.getElementById('day-input');
    const label1 = document.getElementById('label1');
    
    dil.style.borderColor = 'hsl(0, 100%, 67%)';
    label1.style.color = 'hsl(0, 100%, 67%)';
    label1.style.fontWeight = 'bolder';
}

function setMonthInputErrorStyles() {
    const mil = document.getElementById('month-input');
    const label2 = document.getElementById('label2');
    
    mil.style.borderColor = 'hsl(0, 100%, 67%)';
    label2.style.color = 'hsl(0, 100%, 67%)';
    label2.style.fontWeight = 'bolder';
}

function setYearInputErrorStyles() {
    const yil = document.getElementById('year-input');
    const label3 = document.getElementById('label3');
    
    yil.style.borderColor = 'hsl(0, 100%, 67%)';
    label3.style.color = 'hsl(0, 100%, 67%)';
    label3.style.fontWeight = 'bolder';
}

function resetErrorStyles() {
    const dil = document.getElementById('day-input');
    dil.style.borderColor = '';
    
    const mil = document.getElementById('month-input');
    mil.style.borderColor = '';
    
    const yil = document.getElementById('year-input');
    yil.style.borderColor = '';
    
    const label1 = document.getElementById('label1');
    label1.style.color = '';
    label1.style.fontWeight = '';
    
    const label2 = document.getElementById('label2');
    label2.style.color = '';
    label2.style.fontWeight = '';
    
    const label3 = document.getElementById('label3');
    label3.style.color = '';
    label3.style.fontWeight = '';
    
    const err1 = document.getElementById('error');
    err1.innerHTML = '';
    
    const err2 = document.getElementById('error2');
    err2.innerHTML = '';
    
    const err3 = document.getElementById('error3');
    err3.innerHTML = '';
}

function myFunction() {
    const daysInput = document.getElementById('day-input');
    const monthsInput = document.getElementById('month-input');
    const yearsInput = document.getElementById('year-input');

    const innerYear = document.getElementById('main-p1');
    const innerMonth = document.getElementById('main-p2');
    const innerDay = document.getElementById('main-p3');

    // Reset error styles before checking for errors
    resetErrorStyles();

    if (daysInput.value === '' || monthsInput.value === '' || yearsInput.value === '') {
        innerDay.innerHTML = '--';
        innerMonth.innerHTML = '--';
        innerYear.innerHTML = '--';
    } else {
        const inputDay = parseInt(daysInput.value);
        const inputMonth = parseInt(monthsInput.value) - 1; // Months are 0-indexed
        const inputYear = parseInt(yearsInput.value);

        // Move currentDate and inputDate declaration here
        const currentDate = new Date();
        const inputDate = new Date(inputYear, inputMonth, inputDay);

        function isLeapYear(year) {
            // Check if the year is a leap year (divisible by 4, not divisible by 100, or divisible by 400)
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        }

        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Check if it's a leap year and update February's days accordingly
        if (isLeapYear(inputYear)) {
            daysInMonth[1] = 29;
        }

        if (inputYear >= 0 && inputYear <= currentDate.getFullYear() && inputMonth >= 0 && inputMonth < 12 && inputDay >= 1 && inputDay <= daysInMonth[inputMonth]) {
            const timeDifference = currentDate.getTime() - inputDate.getTime(); // Use getTime() to get timestamps
            const yearsDifference = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
            const monthsDifference = Math.floor((timeDifference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
            const daysDifference = Math.floor((timeDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

            innerYear.innerHTML = yearsDifference;
            innerMonth.innerHTML = monthsDifference;
            innerDay.innerHTML = daysDifference;
        } else {
            // If any part of the date is invalid, show an error message
            if (inputDay < 1 || inputDay > daysInMonth[inputMonth]) {
                const err1 = document.getElementById('error');
                err1.innerHTML = 'Must be a valid day';
                err1.style.fontSize = '11px';
                err1.style.fontStyle = 'italic';
                err1.style.margin = '5px';
                err1.style.color = 'hsl(0, 100%, 67%)';
                err1.style.opacity = '0.7';
                err1.style.padding = '0';
                setDayInputErrorStyles();
                setMonthInputErrorStyles();
                setYearInputErrorStyles();
            }
            if (inputMonth < 0 || inputMonth >= 12) {
                const err2 = document.getElementById('error2');
                err2.innerHTML = 'Must be a valid Month';
                err2.style.fontSize = '11px';
                err2.style.fontStyle = 'italic';
                err2.style.margin = '5px';
                err2.style.color = 'hsl(0, 100%, 67%)';
                err2.style.opacity = '0.7';
                err2.style.padding = '0';
                setMonthInputErrorStyles();
                setDayInputErrorStyles();
                setYearInputErrorStyles();
            }
            if (inputYear > currentDate.getFullYear() || inputYear < 0) {
                const err3 = document.getElementById('error3');
                err3.innerHTML = 'Must be in the past';
                err3.style.fontSize = '11px';
                err3.style.fontStyle = 'italic';
                err3.style.margin = '5px';
                err3.style.color = 'hsl(0, 100%, 67%)';
                err3.style.opacity = '0.7';
                err3.style.padding = '0';
                setYearInputErrorStyles();
                setMonthInputErrorStyles();
                setDayInputErrorStyles();
            }
            // Reset the innerHTML values
            innerDay.innerHTML = '--';
            innerMonth.innerHTML = '--';
            innerYear.innerHTML = '--';
        }
    }
}
