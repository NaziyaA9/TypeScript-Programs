interface LengthCheck{
    length:number;
}


function checkLength<T extends LengthCheck>(value:T){

    console.log("Length:",value.length);

}


checkLength("GCD");
checkLength([10,20,30]);