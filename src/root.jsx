import React from 'react'
import ReactDOM from 'react-dom/client'

import Editor from "./screens/editor"

import '../res/index.css'


const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Editor projectName="Snake" gameName="1" gameLevel="1" />
  </React.StrictMode>,
)
