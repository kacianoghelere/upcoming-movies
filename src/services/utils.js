export function normalize(collection) {
  let result = {}

  for (const item of collection) {
    if (item.id) {
      result[item.id] = item
    }
  }

  return result
}

export function trimText(text = '', length = 100) {
  if (!text || text.length < length) {
    return text
  }

  return text.substr(0, length) + '...'
}