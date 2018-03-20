var student = {firstName: 'John',
age: '26',
printAgeInMonths: function(){var months= student.age*12;
return months},
printAgeInDays: function(){var days = (student.printAgeInMonths()*30);
return days}
printMessage: function(){console.log(`I am ${student.firstName} and I am ${student.age} years, or ${student.printAgeInMonths()} months old }
}
console.log(student.printAgeInDays())
console.log(student.printAgeinMonths())
