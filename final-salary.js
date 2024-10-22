function Employee(name, age, baseSalary) {
  this.name = name;
  this.age = age;
  this.baseSalary = baseSalary;
  const monthlyBonus = 1000;

  this.getEmpDetails = function () {
    console.log(`Name: ${this.name}\nAge: ${this.age}`);
    calculateFinalSalary();
  };

  const calculateFinalSalary = function () {
    const finalSalary = baseSalary + monthlyBonus;
    console.log(`Final Salary: £${finalSalary}`);
  };
}

const emp1 = new Employee("Sheila", 90, 20000);
emp1.getEmpDetails();
//accessing the monthly bonus in this way is bad:
// emp1.monthlyBonus = 60;

