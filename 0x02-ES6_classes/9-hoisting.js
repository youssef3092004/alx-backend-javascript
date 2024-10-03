export class HolbertonClass {
    constructor(year, location) {
      this.year = year; // This will call the setter
      this.location = location; // This will call the setter
    }
  
    get year() {
      return this._year;
    }
  
    set year(value) {
      this._year = value; // Setter to initialize _year
    }
  
    get location() {
      return this._location;
    }
  
    set location(value) {
      this._location = value; // Setter to initialize _location
    }
  }
  
  // Make sure to define the HolbertonClass first
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  
  export class StudentHolberton {
    constructor(firstName, lastName, holbertonClass) { // Added holbertonClass as parameter
      this.firstName = firstName;
      this.lastName = lastName;
      this.holbertonClass = holbertonClass; // Use the parameter passed to the constructor
    }
  
    get firstName() {
      return this._firstName;
    }
  
    set firstName(value) {
      this._firstName = value; // Setter to initialize _firstName
    }
  
    get lastName() {
      return this._lastName;
    }
  
    set lastName(value) {
      this._lastName = value; // Setter to initialize _lastName
    }
  
    get holbertonClass() {
      return this._holbertonClass;
    }
  
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    get fullStudentDescription() {
      return `${this._firstName} ${this._lastName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`; // Use 'this' instead of 'self'
    }
  }
  
  // Define the students after the class definitions
  const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
  const student2 = new StudentHolberton('John', 'Doe', class2020);
  const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
  const student4 = new StudentHolberton('Donald', 'Bush', class2019);
  const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
  
  export const listOfStudents = [student1, student2, student3, student4, student5];
