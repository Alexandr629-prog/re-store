import React from 'react';
const compose =(...func) =>(comp)=> {
    return func.reduceRight((prevResult, f)=> f(prevResult), comp)
}


export default compose;

// const arr = ['a', 'b', 'c'];
// const result = arr.reduceRight((prevResult, value)=>{
//
//     return prevResult + value;
// }, 'hui')
//
// console.log(result);




