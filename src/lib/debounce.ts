/**
 * Utility for debouncing.
 *
 */
export const debounce = <T extends Function>(
  callback: T,
  wait: number
): ((...args: any[]) => void) => {
  let timeoutId: number | null = null

  return (...args: any[]) => {
    window.clearTimeout(timeoutId ?? undefined)

    timeoutId = window.setTimeout(() => {
      callback.apply(null, args)
    }, wait)
  }
}
