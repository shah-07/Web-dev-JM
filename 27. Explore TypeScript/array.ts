const salary: number = 4580;
const listOfSalaries: number[] = [2323, 43434, 4343, 42244, 52322];
const friends: string[] = ["Naim", "Rahat", "Rahim", "Karim", "Jobbar"];

listOfSalaries[0] = 45353;
friends.push("Murat");

let max = 0;
for (const salary of listOfSalaries) {
  if (salary > max) {
    max = salary;
  }
}
