import { useEffect, useState } from "react";

const  Count=({ end })=> {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 2;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(interval);
  }, [end]);

  return <span>{count}</span>;
}
export default Count                                        