const calculateBalance = document.getElementById("calculate-balance");
const saveBalance = document.getElementById("save-balance");
const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const clothes = document.getElementById("clothes");
const saving = document.getElementById("saving");
const totalExp = document.getElementById("total-exp");
const balance = document.getElementById("balance");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

let balanceValue = 0;

calculateBalance.addEventListener("click", () => {
  if (
    isNaN(parseInt(income.value)) ||
    isNaN(parseInt(food.value)) ||
    isNaN(parseInt(rent.value)) ||
    isNaN(parseInt(clothes.value)) ||
    parseInt(income.value) < 0 ||
    parseInt(food.value) < 0 ||
    parseInt(rent.value) < 0 ||
    parseInt(clothes.value) < 0
  ) {
    return alert("please input a valid number");
  }

  const totalExpValue =
    parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);

  balanceValue = parseInt(income.value) - totalExpValue;

  totalExp.innerText = totalExpValue;
  balance.innerText = balanceValue;
});

saveBalance.addEventListener("click", () => {
  const savingAmountValue =
    (parseInt(income.value) * parseInt(saving.value)) / 100;
  savingAmount.innerText = savingAmountValue;

  const remainingBalanceValue = balanceValue - savingAmountValue;
  remainingBalance.innerText = remainingBalanceValue;
});
