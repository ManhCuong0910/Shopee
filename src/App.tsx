import { useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppContext } from './contexts/app.context'
import useRouteElement from './useRouteElement'
import { LocalStorageEventTarget, navigateToNotFoundEventTarget } from './utils/auth'
function App() {
  const routeElements = useRouteElement()
  const { reset, navigateToNotFound } = useContext(AppContext)
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])

  useEffect(() => {
    navigateToNotFoundEventTarget.addEventListener('navigateToNotFound', navigateToNotFound)
    return () => {
      navigateToNotFoundEventTarget.removeEventListener('navigateToNotFound', navigateToNotFound)
    }
  }, [navigateToNotFound])

  return (
    <div>
      {routeElements}
      <ToastContainer />
    </div>
  )
}

export default App
