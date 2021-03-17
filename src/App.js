import React from 'react'
import { GlobalStyle } from  './style'
import { IconStyle } from './assets/iconfont/iconfont'
// renderRoutes 读取路由配置转化为 Route 标签
import { renderRoutes } from 'react-router-config'
import routes from './routes/index'
import { HashRouter, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      { renderRoutes(routes) }
    </BrowserRouter>
  )
}

export default App
