import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const handleInputChange = e => {
    setInputText(e.target.value)
  }

  const handleButtonClick = () => {
    const capitalizedText = inputText.charAt(0).toUpperCase() + inputText.slice(1)
    setOutputText(capitalizedText)
  }

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>转换</button>
      <p>结果: {outputText}</p>
    </div>
  )
}

export default App
