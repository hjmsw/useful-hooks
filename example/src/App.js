import React, { useState, useRef } from 'react'
import { useDarkMode, useOutsideClick, useWindowSize } from 'useful-hooks'

const App = () => {
  const isDarkMode = useDarkMode()

  const divRef = useRef(null);
  const [clickedOutside, setClickedOutside] = useState(false)

  useOutsideClick(divRef, () => setClickedOutside(true));

  const { width, height } = useWindowSize();

  return (
    <div>
      <p>{isDarkMode ? 'Dark mode' : 'Not dark mode'}</p>
      <div style={{ backgroundColor: 'red', color: 'white', height: '50px', padding: '1em' }} ref={divRef}>{clickedOutside ? 'Clicked!' : 'Click outside of me'}</div>
      <p>Window height: {height}, window width: {width}</p>
    </div>
  )
}
export default App
