export function isValidTitle(title: string): boolean {
  const newStr = title.trim().replaceAll(/[а-яА-ЯёЁ]|[a-zA-z]|[0-9]|\s|,|-|_|\.+/gm, '');
  return newStr.length === 0 && title !== '';
}
