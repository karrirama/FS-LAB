class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log("Amount deposited:", amount);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Amount withdrawn:", amount);
        } else {
            console.log("Insufficient balance or invalid amount");
        }
    }

    checkBalance() {
        console.log("Current Balance:", this.#balance);
    }
}

// Creating an object
let account = new BankAccount(5000);

// Accessing data through methods
account.checkBalance();

account.deposit(2000);
account.checkBalance();

account.withdraw(1500);
account.checkBalance();

// Direct access is not allowed
// console.log(account.#balance);  // Error