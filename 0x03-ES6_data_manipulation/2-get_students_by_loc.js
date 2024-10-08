export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];
  return students.filter(students.filter((student) => student.city === city));
}
