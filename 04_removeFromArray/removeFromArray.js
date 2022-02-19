const removeFromArray = function(arr, num1, num2, num3, num4) {
    //console.log(arr);


    removeItemFromArray(arr, num1);
    //console.log("Updated Array? ");
    //console.log(arr)


    if(num2 === undefined){
        return arr
    } else{
        removeItemFromArray(arr, num2);
    }
    if(num3 === undefined){
        return arr
    } else{
        removeItemFromArray(arr, num3);
    }
    if(num4 === undefined){
        return arr
    } else{
        removeItemFromArray(arr, num4);
    }
    if(num4 === undefined){
        return arr
    } else{
        removeItemFromArray(arr, num4);
    } return arr
    
};

function removeItemFromArray(arr, num){
    if(arr.indexOf(num) >= 0){
        arr.splice(arr.indexOf(num),1);
    }

    
}

// Do not edit below this line
module.exports = removeFromArray;
