import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './components/app/App'
import 'normalize.css'
import './index.scss'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
