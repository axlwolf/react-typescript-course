"use strict";
function someFn(myArgument) {
    if (typeof myArgument === 'string') {
        let x = myArgument.toUpperCase();
    }
    else if (typeof myArgument === 'number') {
        myArgument.toFixed();
    }
    else {
        myArgument;
    }
}
