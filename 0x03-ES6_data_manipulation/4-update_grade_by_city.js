export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];

  return students.map((student) => {
    if (student.location === city && newGrades[student.id]) {
      return { ...student, grade: newGrades[student.id] };
    }
    return student;
  });
}
