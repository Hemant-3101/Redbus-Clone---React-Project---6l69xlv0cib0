import React from "react";

const ValidateInputComp =(pattern, input)=>{
    if(input.match(pattern)){
        return true
    }
    return false
}

export default ValidateInputComp