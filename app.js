const transArray = [{ name: "Job", amount: 300, date: "27/8/2010" }];
const expenseArray = [{ name: "bill", amount: 30, date: "28/7/2023" }];

function displayList() {
  let incomeList = document.querySelector(".income-list li");
  transArray.forEach((trans) => {
    let liString = `<li class="income-items">${trans.name} $${trans.amount} ${trans.date}</li>`;
    incomeList.innerHTML += liString;
  });

  let expenseList = document.querySelector(".expense-list li");
  expenseArray.forEach((trans) => {
    let liString = `<li class="expense-items">${trans.name} $${trans.amount} ${trans.date}</li>`;
    expenseList.innerHTML += liString;
  });
}
displayList();
