function UserCard(number) {
    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];
    this.key = number

    this.time = function () {
        let times = new Date()
        let resMonth
        let second
        times.getMonth() < 10 ? resMonth = '0' + times.getMonth() : resMonth = times.getMonth();
        times.getSeconds() < 10 ? second = '0' + times.getSeconds() : second = times.getSeconds();
        let result = `${times.getDate()}/${resMonth}/${times.getFullYear()}, ${times.getHours()}:${times.getMinutes()}:${second}`;
        return result
    }
    this.getCardOptions = function () {
        return {
            balance: +this.balance.toFixed(1),
            transitionLimit: +this.transactionLimit.toFixed(1),
            historyLogs: this.historyLogs,
            key: this.key,
        }
    }
    this.putCredits = function (money) {
        this.historyLogs.push({operationType: 'Received credits', credits: money, operationTime: this.time()})
        this.balance += money;
    }
    this.takeCredits = function (money) {
        if (this.balance >= money && this.transactionLimit >= money) {
            // this.transactionLimit -= money; // це прям для правильного розрахунку, ліміт теж треба зменшувати при переводі
            this.balance -= money;
            this.historyLogs.push({operationType: 'Withdrawal of credits', credits: money, operationTime: this.time()})
        } else {
            console.error('Недостатньо коштів на картці або ж використано ліміт транзакцій.')
        }
    }
    this.setTransactionLimit = function (number) {
        this.transactionLimit = number;
        this.historyLogs.push({operationType: 'Transaction limit change', credits: number, operationTime: this.time()})
    };
    this.transferCredits = function (howMuch, someCard) {
        if (this.balance >= howMuch * 1.005 && this.transactionLimit >= howMuch * 1.005) {
            this.balance -= howMuch * 1.005;
            // this.transactionLimit -= howMuch * 1.005; // це прям для правильного розрахунку, ліміт теж треба зменшувати при переводі
            someCard.balance += howMuch;
            someCard.historyLogs.push({
                operationType: 'Received Credits',
                credits: +howMuch.toFixed(1),
                operationTime: this.time()
            })
            this.historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: +this.balance.toFixed(1),
                operationTime: this.time()
            })
        } else {
            console.error('Недостатньо коштів на картці або ж використано ліміт транзакцій.')
        }
    }

}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length < 3) {
            this.cards.push(new UserCard(this.cards.length + 1))
        } else {
            console.error('Максимальна кількість карток')
        }
    }

    getCardByKey(number) {
        if (number < 4 && number > 0) {
            return this.cards[number - 1]
        } else {
            console.error('Неправильний номер карти')
        }
    }

}

let user = new UserAccount('Yaroslav')
user.addCard()
user.addCard()


let card1 = user.getCardByKey(1)
let card2 = user.getCardByKey(2)

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOptions());

console.log(card2.getCardOptions());

