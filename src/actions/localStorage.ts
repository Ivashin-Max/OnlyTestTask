
//В реальном приложении данные бы хранились в глобальном сторе
export const checkLocalStorage = (item: string) => {
  const neededItem = localStorage.getItem(item);
  if (neededItem) return neededItem;
  return
}
