import { transform } from "figma2code"
import { createElement } from "react"
import mockJson from "./assets/mock.json"

function App() {
  const data = transform(mockJson as any)

  return createElement(data.type, data.props, ...data.children)
}

export default App
