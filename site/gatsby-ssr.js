import * as React from 'react'

export const onRenderBody = ({setHeadComponents}) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Heebo-Medium.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="heebo-Medium"
    />,
    <link
      rel="preload"
      href="/fonts/Lora.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="lora"
    />,
    <link
      rel="preload"
      href="/fonts/NotoSans-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="noto-sans-regular"
    />,
    <link
      rel="preload"
      href="/fonts/NotoSans-SemiBold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="noto-sans-semibold"
    />,
  ])
}
