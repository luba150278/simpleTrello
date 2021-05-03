export function isValidTitle(title: string): boolean {
  const newStr = title.trim().replaceAll(/^[а-яА-ЯёЁa-zA-z0-9\s,-_.]+/gm, '');
  return newStr.length === 0 && title !== '';
}
