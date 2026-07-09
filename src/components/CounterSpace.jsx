export default function CounterSpace({count, setCount}){
    return (<div className="counter">
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}>Click</button>
    </div>)
}