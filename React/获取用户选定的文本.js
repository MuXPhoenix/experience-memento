import React, { useRef } from 'react'

function App() {
  const textRef = useRef(null)

  const handleSelection = () => {
    const selectedText = window.getSelection().toString()
    alert(`选定的文字: ${selectedText}`)
  }

  return (
    <div>
      <p ref={textRef}>思维决定行为，行为决定结果，结果决定位置，位置又决定了眼界、思维、资源、认知一样，一切兼为因果循环关系。</p>
      <button onClick={handleSelection}>选定文字</button>
    </div>
  )
}

export default App
