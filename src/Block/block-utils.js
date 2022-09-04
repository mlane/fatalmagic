const addDurability = durability => ++durability

const isBroken = durability => durability <= 0

const removeDurability = durability => --durability

export { addDurability, isBroken, removeDurability }
