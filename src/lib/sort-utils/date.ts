import dayjs from 'dayjs';

/**
 * A generic compare function for sorting order and date.
 *
 * This only works if the order and date are in the first level
 * of the object. (e.g. not nested like "first.deeper.order")
 */
export const byDate = <T>(datePropertyName: keyof T) => {
  return (first: T, second: T) => {
    // Return 1, to get latest date as first priority.
    if (
      dayjs(second[datePropertyName] as string).isAfter(
        dayjs(first[datePropertyName] as string)
      )
    )
      return 1;

    return -1;
  };
};
