import classroom from './0-classroom';

/**
 * Creates an array of {@link classroom}s with a specific size.
 * @returns An array of {@link classroom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new classroom(size));
}
