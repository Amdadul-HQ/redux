import { useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment } from './Redux/features/counter/counterSlice';

function App() {

  const dispatch = useDispatch();
  
  return (
    <section>
      <h1>Counter with Redux</h1>
      <div>
        <button onClick={()=>dispatch(increment())}>
          Increment
        </button>
        <div>
        0          
        </div>
        <button onClick={()=> dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </section>
  )
}

export default App
