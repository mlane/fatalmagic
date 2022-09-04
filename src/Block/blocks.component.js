import PropType from 'prop-types'
import { Block } from './block.component'

const Blocks = ({ blocks }) =>
  blocks.map(block => <Block id={block.id} key={block.id} />)

Blocks.prototype = {
  blocks: PropType.object.isRequired,
}

export { Blocks }
