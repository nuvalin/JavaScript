//Projects 7


//Employee tracking 


class Employee {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    }
}
const person1 = new Employee("Nuvalin", "Moodley", 30);

const person2 = new Employee("James", "Dayton", 8);

const workers = [person1, person2];

Employee.prototype.details = function () {
    return this.first + " " + this.last + " has worked here " +
        this.years + " years";
}
workers.forEach((person) => {
    console.log(person.details());
});


//Menu items price calculator

class Menu {
    #offer1 = 10;
    #offer2 = 20;
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    calTotal() {
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }
    get total() {
        return this.calTotal();
    }
}

