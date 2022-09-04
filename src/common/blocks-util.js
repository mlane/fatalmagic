import { BLOCK_SIZE } from './globals'

const getCurrentBlocks = () => {
  const blocks = []

  Array.from({ length: BLOCK_SIZE }, (_, block_index) => {
    blocks.push({
      id: block_index
    })
  })
  
  console.log(blocks)

  return blocks
}

export { getCurrentBlocks }
