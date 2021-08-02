var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function flip(math) {
    return 10 > math ? 1 : 0;
}
console.log(flip(12));
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date + "!");
}
greet("Brendan", "abv");
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (v) {
    console.log(v);
});
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (v) {
    console.log(v.toUpperCase());
});
var food = {
    food1: 'a',
    food2: 'b'
};
var printFood = function (obj) {
    console.log(obj);
};
printFood(food);
var printFoods = function (obj) {
    console.log(obj.obj1);
};
printFoods({ obj1: "a", obj2: "b" });
console.log(Array.isArray(arr));
function sanitizeInput(str) {
    return (str).toString();
}
console.log(sanitizeInput(1));
var x = "hello";
console.log(x);
var person = /** @class */ (function () {
    function person(p) {
        this.name = p.name;
        this.age = p.age;
        this.count = p.count;
    }
    person.prototype.setName = function (name) {
        this.name = name;
    };
    person.prototype.setAge = function (age) {
        this.age = age;
    };
    person.prototype.getName = function () {
        return this.name;
    };
    person.prototype.getAge = function () {
        return this.age;
    };
    person.prototype.setCount = function (count) {
        this.count = count;
    };
    person.prototype.getCount = function () {
        return this.count;
    };
    person.prototype.toString = function () {
        return ("Name : " + this.getName() + " and age : " + this.getAge() + "  and count : " + this.getCount());
    };
    return person;
}());
var ArrPerson = [];
var p1 = new person({ name: "nguyen van a", age: "20", count: 20 });
var p2 = new person({ name: "nguyen van b", age: "21", count: 22 });
ArrPerson.push(p1, p2);
function PrintPerson(p) {
    p.forEach(function (v) {
        console.log(v.toString());
    });
}
PrintPerson(ArrPerson);
function countPersonDouble(count) {
    return count * 2;
}
ArrPerson.forEach(function (v) {
    console.log(countPersonDouble(v.getCount()));
});
function printName(name) {
    return name.toUpperCase();
}
ArrPerson.forEach(function (v) {
    console.log(printName(v.getName()));
});
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(p, english, math) {
        var _this = _super.call(this, p) || this;
        _this.english = english;
        _this.math = math;
        return _this;
    }
    Student.prototype.getEnglish = function () {
        return this.english;
    };
    Student.prototype.getMath = function () {
        return this.math;
    };
    Student.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " english: " + this.getEnglish() + " and math : " + this.getMath();
    };
    return Student;
}(person));
var ArrStudent = [];
var s1 = new Student(p1, 10, 10);
ArrStudent.push(s1);
ArrStudent.forEach(function (s) {
    console.log(s.toString());
});
