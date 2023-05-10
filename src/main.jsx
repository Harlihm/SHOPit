import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store , persistor } from './redux/store.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'
// import { Store }


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
      <PersistGate loading={"loading"} persistor={persistor}>
          <App />
      </PersistGate> 
   </Provider>,
)
