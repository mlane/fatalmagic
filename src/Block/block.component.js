import PropType from 'prop-types'
import { useEffect, useState } from 'react'
import { isBroken, removeDurability } from './block-utils'
import blockStyles from './block.resource.json'
import { BLOCK_TYPES } from '../common/globals'
import { randomObjectIndex } from '../common/utils'

const Block = ({ id }) => {
  const [durability, setDurability] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState()
  const [type, setType] = useState()

  // timer to check if block hasn't been clicked for X seconds (increase durability).

  const onBlockClick = () => {
    setDurability(previousDurability => removeDurability(previousDurability))
  }

  useEffect(() => {
    const randomType = randomObjectIndex(BLOCK_TYPES)
    setDurability(randomType.durability)
    setIsLoading(false)
    setName(randomType.name)
    setType(randomType.type)
  }, [])

  if (isLoading) {
    return <>isLoading</>
  }

  if (isBroken(durability)) {
    return <>Block is broken</>
  }

  return isLoading ? null : (
    <div onClick={onBlockClick}>
      <div style={blockStyles.block}></div>
      <div>
        <div>Durability: {durability}</div>
        <div>Name: {name}</div>
        <div>Type: {type}</div>
        <br />
      </div>
    </div>
  )
}

Block.PropType = {
  id: PropType.number.isRequired,
}

export { Block }
