import { Global, css } from '@emotion/react'
import { FC } from 'react'

export const GlobalStyles: FC = () => {
  const globalStyles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: #18181b; /* bg-zinc-900 と同等 */
      height: 100%; /* h-full と同等 */
      overflow-x: hidden;
    }
  `

  return <Global styles={globalStyles} />
} 