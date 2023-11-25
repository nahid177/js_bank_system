function getInputFieldValueById(inputFieldID){
    const inputField = document.getElementById(inputFieldID);
    const InputFieldValueByStringwithd = inputField.value;
    const convertInputFieldValuewithd = parseFloat(InputFieldValueByStringwithd);
    inputField.value = '';
    return convertInputFieldValuewithd;
}

function getTextValueById(elementID){
    const textEle = document.getElementById(elementID);
    const textEleValueByStringwithd = textEle.innerText;
    const converttextEleValuewithd = parseFloat(textEleValueByStringwithd );
    return converttextEleValuewithd;
}


function setTextEleValuebyID(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}