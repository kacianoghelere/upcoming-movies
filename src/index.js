import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'
import store from './store'
import Root from './pages/Root'
import './index.scss'

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

serviceWorker.unregister()
