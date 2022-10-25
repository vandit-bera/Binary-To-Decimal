/* Get button */
let btn = document.querySelector(".btn");

/* Get result */
let result = document.querySelector(".result");

/* Create event on click button */
btn.addEventListener("click", (event) => {
    /* Call function to convert Binary to Decimal */
    result.textContent = getDecimal(binary);
    return event.preventDefault();
});

function getDecimal(binary){
    /* Get Binary value */
    binary = document.querySelector("#binary").value;
    /* Convert number to string and split string by 1 element */
    binary = binary.toString().split("");
    /* Check condition if given value is 0 or 1 and store in check variable */
    let check = binary.every((num) => num == "0" || num == "1");
    /* Check variable is true or false */
    if(check){
        /* Create ans variable for store answer and i variable for check condition and length variable is store given binary number length */
        let ans = 0;
        let i = 0;
        let length = binary.length
        /* Check all given number and Convert into Decimal */
        while(i < length){
            if(binary[i] == 1){
                let num = length - 1 - i;
                ans += 2 ** num;
            }
            i++;
        }
        /* Return answer */
        return `Decimal Number : ${ans}`;
    }else{
        /* If condition false then return falsy value */
        return `Number is not Binary! Please Enter valid Binary Number`;
    }
}