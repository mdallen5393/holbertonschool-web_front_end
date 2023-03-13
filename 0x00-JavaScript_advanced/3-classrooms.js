function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
      return () => {return seat;};
  }
  let students = [];
  for (let i = 0; i < numbersOfStudents; i++) {
      const student = studentSeat(i + 1);
      students.push(student);
  }
  return students;
}

let classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
