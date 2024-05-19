import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply, zero } from './redux/counter/counterSlice'
import Navbar from './components/Navbar'

function App() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        --- count is: {count} ---
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        -----
        <button onClick={() => dispatch(multiply())}>x2</button>
      </div>
      <br />
      <div>
        <button onClick={() => dispatch(zero())}>Set value to 0</button>
      </div>
    </>
  )
}

export default App
