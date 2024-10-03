// Import the Classroom class from the specified path
// The Classroom class is expected to be located in the "0x02-ES6_classes" directory,
// and is defined in the "0-classroom.js" file.
import Classroom from './0-classroom';

/**
 * Function: initializeRooms
 *
 * This function creates an array of three Classroom objects, each initialized with a different
 * maximum student size (19, 15, and 10 respectively).
 *
 * @returns {Array} - An array of Classroom objects
 *
 * Example output:
 * [
 *   Classroom { _maxStudentsSize: 19 },
 *   Classroom { _maxStudentsSize: 15 },
 *   Classroom { _maxStudentsSize: 10 }
 * ]
 */
export default function initializeRooms() {
  // Create an array with three Classroom instances, each with the specified size
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
