// If.. else statements
function todayIsSunday() {
    let today = new Date();
    if( today.getUTCDay()==0){
        console.log('Sunday ☀!');
    } else {
        console.log('Today is not Sunday');
    }
}

// ternary
function todayIsSundayTernary() {
    let today = new Date();
    console.log(today.getUTCDay()==0?'Sunday ☀!':'Today is not Sunday');
}

todayIsSunday();
todayIsSundayTernary();
console.log(new Date().getUTCDay()==0?'Sunday ☀!':'Today is not Sunday');
