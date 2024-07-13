import dayjs from 'dayjs';

/**
 * A generic compare function for sorting order and date.
 *
 * This only works if the order and date are in the first level
 * of the object. (e.g. not nested like "first.deeper.order")
 */
export const byOrderAndDate = <T>(
  orderPropertyName: keyof T,
  datePropertyName: keyof T
) => {
  return (first: T, second: T) => {
    // If both no feature order, compare by date.
    if (!first[orderPropertyName] && !second[orderPropertyName]) {
      // Return 1, to get latest date as first priority.
      if (
        dayjs(second[datePropertyName] as string).isAfter(
          dayjs(first[datePropertyName] as string)
        )
      )
        return 1;
      return -1;
    }

    // Here, either items have `order`
    if (!first[orderPropertyName] || !second[orderPropertyName]) {
      return 1;
    }

    // Lastly, here, lesser `order` have priority. 1 is first.
    if (first[orderPropertyName]! < second[orderPropertyName]!) return -1;

    return 1;
  };
};
