// Опишите типы для двух функций:

export function keys<O extends object>(obj: 0) {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}

export function values<O extends object>(obj: 0): Array<O[keyof O]> {
  const currentValues = [];

  for (let key in obj) {
    currentValues.push(obj[key]);
  }

  return currentValues;
}
