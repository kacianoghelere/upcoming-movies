export function normalize(collection) {
  let result = {};

  for (const item of collection) {
    if (item.id) {
      result[item.id] = pluck(item, 'id');
    }
  }

  return result;
}

export function pluck(object, propertyName) {
  let result = {};

  for (const property in object) {
    if (object.hasOwnProperty(property)) {
      if (property === propertyName) {
        continue;
      }

      result[property] = object[property];
    }
  }

  return result;
}

export function trimText(text = '', length = 100) {
  if (!text || text.length < length) {
    return text;
  }

  return text.substr(0, length) + '...';
}