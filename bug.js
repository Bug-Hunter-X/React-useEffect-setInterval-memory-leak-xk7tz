```javascript
//In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Incorrect logic of setting up the interval
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); //This is correct, however the issue may be in the logic before it
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};
```