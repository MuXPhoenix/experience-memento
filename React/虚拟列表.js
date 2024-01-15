import React from 'react'
import { List } from 'react-virtualized'
import 'react-virtualized/styles.css'

// 请注意，您需要确保已正确安装了`react-virtualized`库，并将其作为依赖项添加到您的项目中。
// 安装`react-virtualized`库
// ```bash
// npm install react-virtualized --save
// ```

// 生成虚拟列表的数据
const list = Array(1000)
  .fill()
  .map((_, index) => `Item ${index + 1}`)

// 渲染单个列表项的函数
function rowRenderer({ key, index, style }) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  )
}

// React组件
function App() {
  return <List width={300} height={500} rowCount={list.length} rowHeight={30} rowRenderer={rowRenderer} />
}

export default App
