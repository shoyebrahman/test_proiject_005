//import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/ui/layout/Navbar'

// import { decrement, increment } from './redux/features/counter/counterSlice';
//import type { RootState } from './redux/store';
//import { useAppDispatch, useAppSelector } from './redux/hook';
//import { Button } from "@/components/ui/button"

function App() {
//  const dispatch = useAppDispatch();
//  const { count } = useAppSelector((state) => state.counter);

//  const handleIncrement = (amount: number) => {
//   dispatch(increment(amount));
//  };

//  const handleDecrement = () => {
//   dispatch(decrement());
//  }

  return (
    <>
      <section id="center">
        <Navbar></Navbar>
        <Outlet></Outlet>
      
      </section>
    </>
  )
}

export default App
