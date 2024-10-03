// Import the ClassRoom class from the specified path
// The ClassRoom class is expected to be located in the "0x02-ES6_classes" directory,
// and is defined in the "0-ClassRoom.js" file.
import ClassRoom from './0-Classroom';

/**
 * Function: initializeRooms
 *
 * This function creates an array of three ClassRoom objects, each initialized with a different
 * maximum student size (19, 15, and 10 respectively).
 *
 * @returns {Array} - An array of ClassRoom objects
 *
 * Example output:
 * [
 *   ClassRoom { _maxStudentsSize: 19 },
 *   ClassRoom { _maxStudentsSize: 15 },
 *   ClassRoom { _maxStudentsSize: 10 }
 * ]
 */
export default function initializeRooms() {
  // Create an array with three ClassRoom instances, each with the specified size
  return [19, 20, 34].map((size) => new ClassRoom(size));

}
