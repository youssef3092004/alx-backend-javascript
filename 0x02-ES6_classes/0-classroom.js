/**
 * Represents a classroom.
 */
export default class Classroom {
    /**
     * Creates a new Classroom.
     * @param {number} maxStudentsSize - The maximum number of students that can be accommodated in the classroom.
     */
    constructor(maxStudentsSize) {
        this._maxStudentsSize  = maxStudentsSize;
    }
}
