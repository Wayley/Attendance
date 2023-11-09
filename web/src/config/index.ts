export const minDate: Date = new Date(2022, 12, 1)

export function getNow() {
  const now: Date = new Date()
  const year: Number = now.getFullYear()
  const month: Number = now.getMonth() + 1
  const day: Number = now.getDate()
  const hours: Number = now.getHours()
  const minutes: Number = now.getMinutes()
  const seconds: Number = now.getSeconds()
  return { now, year, month, day, hours, minutes, seconds }
}
