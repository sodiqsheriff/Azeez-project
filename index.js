let budget = 0;
const expensesList = document.getElementById('expensesList');

function updateBudget(amount) {
  budget += amount;
  document.getElementById('budgetValue').textContent = `$${budget}`;
}

document.getElementById('addIncome').addEventListener('click', function() {
  const incomeInput = document.getElementById('incomeInput');
  const incomeAmount = parseFloat(incomeInput.value);
  if (!isNaN(incomeAmount) && incomeAmount > 0) {
    updateBudget(incomeAmount);
    incomeInput.value = '';
  }
});

document.getElementById('addExpense').addEventListener('click', function() {
  const expenseInput = document.getElementById('expenseInput');
  const expenseAmount = parseFloat(expenseInput.value);
  if (!isNaN(expenseAmount) && expenseAmount > 0) {
    updateBudget(-expenseAmount);
    expenseInput.value = '';

    const expenseItem = document.createElement('li');
    expenseItem.classList.add('expense-item');
    expenseItem.textContent = `$${expenseAmount}`;
    expensesList.appendChild(expenseItem);
  }
});
