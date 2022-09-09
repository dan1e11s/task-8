let obj = {
    name: 'Jack',
    age: 34,
    work: 'IT',
    hours: 23,
    salary: 2300,
    experience: 450,
    goWork: () => {
        obj.hours += 6;
        obj.salary += 600;
    },
    getSalary: () => {
        if(obj.salary >= 3000) {
            obj.experience += obj.hours;
            obj.salary = 0;
            obj.hours = 0;
        }
    }
}

obj.goWork();
obj.goWork();
console.log(obj.hours, obj.salary);
obj.getSalary();
console.log(obj.hours, obj.salary, obj.experience);