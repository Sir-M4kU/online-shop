import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters-context.jsx'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
