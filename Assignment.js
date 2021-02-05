

// kilometerToMeter 
function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    if ( kilometer < 0 ) {
        return 'invalid input!';
    }
    else if ( kilometer == undefined) {
        return 'fill the box.'
    }
    return meter + ' meter.';
}


// budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    var sum = watch * 50 + phone * 100 + laptop * 500;
    if (watch == undefined || phone == undefined || laptop == undefined) {
        return  'You should input three iteams value.';
    }
    else if (watch < 0 || phone < 0 || laptop < 0) {
        return 'invalid input!'
    }
        return sum + ' Taka.';
}



//hotelCost
function hotelCost(day) {
    var hotelVara = 0;
    if (day <= 10) {
        hotelVara = day * 100;
    }
    else if (day <= 20) {
        var firstTenDays = 10 * 100;
        var discount = day - 10;
        var nextTenDays = discount * 80;
        hotelVara = firstTenDays + nextTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var nextTenDays = 10 * 80;
        var discount = day - 20;
        var lastFewDays = discount * 50;
        hotelVara = firstTenDays + nextTenDays + lastFewDays;
    }
    return hotelVara + ' Taka.';
}


// megaFriend
function megaFriend(array) {
    var bigName = array[0];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (bigName.length < element.length) {
            bigName = element;
        }
    }
    if (bigName == undefined) {
        return 'please fill the box';
    }
    else if (typeof bigName == 'number') {
        return 'The valu cannot be number';
    }
        return bigName;
}