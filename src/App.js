import './App.css';
// import Counter from './components/Counter';
import Clock from './components/Clock';

function App() {
  // const [time, setTime] = useState(new Date());
  return (
    <div className="App">
      <Clock />
      {/* <Clock time={time} setTime={setTime} /> */}
    </div>
  );
}
// function App() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div className="App">
//       <Counter counter={counter} setCounter={setCounter} />
//     </div>
//   );
// }

export default App;
