import { Blocks } from './Block/blocks.component'
import { getCurrentBlocks } from './common/blocks-util'

const blocks = getCurrentBlocks()

const App = () => (
  <div id='app'>
    <h1>FATAL MAGIC</h1>
    <Blocks blocks={blocks} />
  </div>
)

export default App
