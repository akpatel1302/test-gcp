class BankAccount {
    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`);
        } else {
            console.log("Withdrawal amount must be positive and less than or equal to the balance.");
        }
    }

    getBalance() {
        return this.balance;
    }
}


