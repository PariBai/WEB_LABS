function incrementSalaries(salaries) {
  //   const increment = (amount, percentage) => amount * (1 + percentage / 100);

  return salaries.map((salary, index) => {
    if (index < 2) {
      return salary + salary * 0.1;
    } else if (index < 4) {
      return salary + salary * 0.1;
    } else {
      return salary + salary * 0.1;
    }
  });
}

// Example usage:
const salaries = [2000, 3000, 4000, 5000, 6000];
const updatedSalaries = incrementSalaries(salaries);
console.log(updatedSalaries);
