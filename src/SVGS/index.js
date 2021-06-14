import * as React from 'react'

export const BankIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 106.25 113.33"
      {...props}
    >
      <g data-name="Capa 2">
        <image
          width={105}
          height={112}
          transform="scale(1.01)"
          xlinkHref="data:image/png;base64,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"
          data-name="Capa 1"
        />
      </g>
    </svg>
  )
}

export const MailIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 125.32 110.94"
      {...props}
    >
      <g data-name="Capa 2">
        <image
          width={122}
          height={108}
          transform="scale(1.03)"
          xlinkHref="data:image/png;base64,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"
          data-name="Capa 1"
        />
      </g>
    </svg>
  )
}

export const HomeIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={133.4}
      height={105.8}
      viewBox="0 0 133.4 105.8"
      overflow="visible"
      {...props}
    >
      <image
        width={147}
        height={109}
        xlinkHref="data:image/png;base64,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 TkSuQmCC"
        transform="scale(.9075 .971)"
        overflow="visible"
      />
    </svg>
  )
}

export const UbiIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 17.28 23.76"
      {...props}
    >
      <image
        width={72}
        height={99}
        transform="scale(.24)"
        xlinkHref="data:image/png;base64,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"
        data-name="Capa 2"
      />
    </svg>
  )
}

export const Logo = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.49 9.88" {...props}>
      <g data-name="Capa 2">
        <path
          d="M5 1.86H3.21v-.5a.89.89 0 011.79 0zm0 1a.21.21 0 00.22.14.21.21 0 00.21-.21v-.47h1.1l.52 5.19a.68.68 0 01-.66.82h-2.6c-.07 0-.09 0-.06-.09.11-.32.21-.6.28-.82a3.2 3.2 0 00.17-.7 1.25 1.25 0 000-.36A1.14 1.14 0 004 6a1.19 1.19 0 00-.32-.31 1 1 0 00-.56-.17 2.75 2.75 0 00-.86.19C2 5.84 1.64 6 1.37 6l.34-3.7h1.05v.52A.21.21 0 003 3a.21.21 0 00.22-.21v-.48H5zM2.34 6.71l.6-.19a.4.4 0 01.19 0c.05 0 .07 0 .08.07a.21.21 0 010 .14 2.22 2.22 0 01-.12.43l-.36 1.17c-.13.39-.23.68-.29.83a.6.6 0 01-.1.2h-.2a.13.13 0 01-.07-.06.72.72 0 01-.07-.19l-.27-.6c-.07-.16-.08-.19-.09-.22a.18.18 0 00-.1-.09 1.74 1.74 0 00-.3-.14L.8 7.89l-.29-.14a.34.34 0 01-.12-.08.14.14 0 010-.09.49.49 0 010-.12.23.23 0 010-.1s0-.06.42-.18zm-1.56 3l.44-.44a.09.09 0 01.13 0 .09.09 0 010 .12l-.45.47a.09.09 0 01-.12 0 .09.09 0 010-.13zm-.65-.8l.45-.44a.11.11 0 01.13 0 .11.11 0 010 .13L.26 9a.11.11 0 01-.13 0 .1.1 0 010-.09zm-.1.8l1-1a.09.09 0 01.13 0 .08.08 0 010 .12l-1 1a.09.09 0 01-.12 0A.09.09 0 010 9.71zm3.26-1.4a.37.37 0 000 .11.53.53 0 00.06.13.6.6 0 00.11.12.23.23 0 00.09.06 1.13 1.13 0 00.31 0h2.58a1 1 0 00.45-.1 1.36 1.36 0 00.24-.17 1.31 1.31 0 00.22-.25 1 1 0 00.1-.21 1.28 1.28 0 000-.3c0-.12 0-.26-.08-1.1s-.19-2.36-.26-3.2-.08-1-.1-1.1A1 1 0 007 2.1a.62.62 0 00-.11-.1.35.35 0 00-.15-.08 5.75 5.75 0 00-1 0h-.31v-.59A1.29 1.29 0 005 .36 1.32 1.32 0 004.1 0a1.35 1.35 0 00-.91.36 1.33 1.33 0 00-.43 1v.52h-.25a7.8 7.8 0 00-.89 0h-.15a.38.38 0 00-.13.1.54.54 0 00-.11.18.57.57 0 000 .22c0 .12 0 .29-.06.74S1 4.31 1 4.85s-.09.87-.1 1.07a1.17 1.17 0 000 .24.3.3 0 000 .1 1.27 1.27 0 00.14.17.33.33 0 00.16.07.64.64 0 00.25 0h.07A2.43 2.43 0 002 6.38c.21-.08.49-.19.71-.26A1.92 1.92 0 013.12 6a.58.58 0 01.25.05.72.72 0 01.18.17.85.85 0 01.14.21.49.49 0 010 .21 1 1 0 010 .26 4.2 4.2 0 01-.14.43c0 .16-.13.34-.18.49a2.34 2.34 0 00-.08.35.24.24 0 000 .14z"
          fill="#34b8a9"
          fillRule="evenodd"
          data-name="Capa 1"
        />
      </g>
    </svg>
  )
}
