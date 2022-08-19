function updateCaseNumber(isTrue){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const prevCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if(isTrue){
        newCaseNumber = prevCaseNumber + 1;
    }
    else{
        newCaseNumber = prevCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return  newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalELement = document.getElementById('case-total');
    caseTotalELement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    claculateSubTotal()
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    claculateSubTotal()
})