const PP_COUNT_PLACEHOLDER = '-';

export function getPPFormatedString(ppCount?: number, isShort: boolean = false): string {
  if (ppCount === undefined) {
    return PP_COUNT_PLACEHOLDER;
  }
  const numberFormatter = isShort
    ? new Intl.NumberFormat('en', {
      notation: 'compact',
    })
    : new Intl.NumberFormat('ru');
  return `${numberFormatter.format(ppCount)}`;
}
