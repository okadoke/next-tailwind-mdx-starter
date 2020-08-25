import 'styles/globals.css'

import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Article from "layouts/article"
const components = {
  Article,
  wrapper: ({children, ...props}) => {
    console.log(props)
    if (props.meta && props.meta.layout === 'Article') {
      return (
        <Article title={props.meta.title}>{children}</Article>
      )
    }
    return <>{children}</>
  }
}

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
