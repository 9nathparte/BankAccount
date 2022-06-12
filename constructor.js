function BankAccount(name, balance = 0) {
  this.accountNumber = Date.now();
  this.customerName = name;
  this.balance = balance;

  this.deposite = (amount) => {
    this.balance += amount;
  };
  this.withdrow = (amount) => {
    this.balance -= amount;
  };
}

const accounts = [];
const accountForm = document.querySelector("#account-form");
const customerName = document.querySelector("#CustomerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#deposit-form");
const Amount = document.querySelector("#amount");
const accountNumber = document.querySelector("#accountNumber");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new account.find((account) => {
    account.accountNumber === +accountNumber.value;
  });

  account.deposite(+Amount.value);
  console.log(accounts);
});
