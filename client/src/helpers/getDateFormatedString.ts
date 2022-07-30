export function getDateFormatedString(date: Date): string {
  const dateFormatter = new Intl.DateTimeFormat('ru');

  return dateFormatter.format(date);
}
