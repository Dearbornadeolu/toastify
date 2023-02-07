import React from 'react'
import{ ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'


function App() {


  const notify =()=>{
    toast('basic notification', {position: toast.POSITION.TOP_CENTER})
    toast.error('Error Message')
  }

  return (
    <div className="App">
    <button onClick={notify}>Notify</button>
    <ToastContainer/>
    </div>
  )
}

export default App
