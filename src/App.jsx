import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './Redux/features/counter/counterSlice';

function App() {

  const dispatch = useDispatch();
  const {count} = useSelector((state) => state.counter);
  
  return (
    <section>
      <h1>Counter with Redux</h1>
      <div>
        <button onClick={()=>dispatch(increment(5))}>
          Increment
        </button>
        <div>
        {count}      
        </div>
        <button onClick={()=> dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </section>
  )
}

export default App
