const billInput = document.querySelector("#bill");
const personInput = document.querySelector("#people");
const customInput = document.querySelector("#custom");
const perPerson = document.querySelector("#amt-money-person");
const totalPerson = document.querySelector("#amt-money-total");
const resetBtn = document.querySelector("#reset");
const wrongMsg = document.querySelector(".wrong-text");

function calculateTip(tipValue) {
    let billInputValue = billInput.value;
    let personInputValue = personInput.value;

    if (personInputValue == "") {
        wrongMsg.classList.remove("display-none");
        personInput.classList.add("wrong-input");
    } else {
        wrongMsg.classList.add("display-none");
        personInput.classList.remove("wrong-input");
        let billAmtPerPerson = parseFloat(billInputValue * tipValue).toFixed(2);
        let billAmtTotalPerson = parseFloat(
            billAmtPerPerson * personInputValue
        ).toFixed(2);

        perPerson.innerHTML = "$" + billAmtPerPerson;
        totalPerson.innerHTML = "$" + billAmtTotalPerson;
    }
}

resetBtn.addEventListener("click", (e) => {
    perPerson.innerHTML = "$0.00";
    totalPerson.innerHTML = "$0.00";
    billInput.value = "";
    personInput.value = "";
});

customInput.addEventListener("keyup", (e) => {
    let tipValue = customInput.value;
    let billInputValue = billInput.value;
    let personInputValue = personInput.value;

    if (personInputValue == "") {
        wrongMsg.classList.remove("display-none");
        personInput.classList.add("wrong-input");
    } else {
        wrongMsg.classList.add("display-none");
        personInput.classList.remove("wrong-input");
        let billAmtPerPerson = parseFloat(billInputValue * tipValue).toFixed(2);
        let billAmtTotalPerson = parseFloat(
            billAmtPerPerson * personInputValue
        ).toFixed(2);

        perPerson.innerHTML = "$" + billAmtPerPerson;
        totalPerson.innerHTML = "$" + billAmtTotalPerson;
    }
});