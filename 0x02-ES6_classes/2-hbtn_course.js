export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name; // This will call the setter for name
    this.length = length; // This will call the setter for length
    this.students = students; // This will call the setter for students
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length; // Corrected to return the private variable _length
  }

  set length(newLength) {
    if (typeof newLength === 'number') { // Assuming length should be a number
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number'); // Updated error message
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents) && newStudents.every((student) => typeof student === 'string')) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
