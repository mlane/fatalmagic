const randomObjectIndex = object => {
  const index = Object.keys(object)

  return object[index[Math.floor(Math.random() * index.length)]]
}

export { randomObjectIndex }
