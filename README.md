# useful-hooks

> Useful react hooks

[![NPM](https://img.shields.io/npm/v/useful-hooks.svg)](https://www.npmjs.com/package/useful-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save useful-hooks
```

## Usage

useDarkMode:

```tsx
import * as React from 'react'

import { useDarkMode } from 'useful-hooks'

const Example = () => {
  const isDarkMode = useDarkMode()
  return (
    <div>
      {isDarkMode ? 'Dark mode' : 'Not dark mode'}
    </div>
  )
}
```

useOutsideClick:

```tsx
import * as React from 'react'

import { useOutsideClick } from 'useful-hooks'

const Example = () => {
  const [clickedOutside, setClickedOutside] = React.useState(false)
  useOutsideClick(divRef, () => setClickedOutside(true));
  return (
    <div style={{ backgroundColor: 'red', color: 'white', height: '50px', padding: '1em' }} ref={divRef}>{clickedOutside ? 'Clicked!' : 'Click outside of me'}</div>
  )
}
```

useWindowSize:

```tsx
import * as React from 'react'

import { useWindowSize } from 'useful-hooks'

const Example = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      Window height: {height}, window width: {width}
    </div>
  )
}
```

## License

MIT © [hjmsw](https://github.com/hjmsw)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
