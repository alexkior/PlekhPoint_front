const USER_HEADER_TITLE_PLACEHOLDER = '-';

export function getUserHeaderTitle(firstName?: string, secondName?: string): string {
  if (!firstName || !secondName) return USER_HEADER_TITLE_PLACEHOLDER;

  return `${firstName} ${secondName[0]}.`;
}
