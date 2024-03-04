// 导入样式
import './index.css'

const style = {
  color: 'red',
  fontSize: '50px'
}

function App() {
  return (
    <div>
      {/* 行内样式控制 */}
      <span style={style}>this is span</span>
      {/* 通过class类名控制 */}
      <span className="foo-blue">this is class blue</span>
    </div>
  )
}

export default App
