```javascript
//In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if(isRunning){
        interval = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setIsRunning(!isRunning)}>{isRunning? 'Stop' : 'Start'}</button>
    </div>
  );
};
```