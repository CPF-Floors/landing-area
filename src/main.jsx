import { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
//
import LoadScreen from './components/LoadScreen'
const App = lazy(() => import("./App"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<LoadScreen />}>
    <App />
  </Suspense>
)