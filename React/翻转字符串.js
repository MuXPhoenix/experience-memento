import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [reversedText, setReversedText] = useState('')

  const handleInputChange = e => {
    setInputText(e.target.value)
  }

  const handleButtonClick = () => {
    const reversed = inputText.split('').reverse().join('')
    setReversedText(reversed)
  }

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>翻转</button>
      <p>结果: {reversedText}</p>
    </div>
  )
}

export default App
