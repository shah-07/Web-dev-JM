"use strict";
const salary = 4580;
const listOfSalaries = [2323, 43434, 4343, 42244, 52322];
const friends = ["Naim", "Rahat", "Rahim", "Karim", "Jobbar"];
listOfSalaries[0] = 45353;
friends.push("Murat");
let max = 0;
for (const salary of listOfSalaries) {
    if (salary > max) {
        max = salary;
    }
}
