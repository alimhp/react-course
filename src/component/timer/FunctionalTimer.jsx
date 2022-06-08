import { useEffect, useState } from "react";

const FunctionalTimer = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    setInterval(() => { 
      setcount(count + 1);
    }, 1000);
  }, []);

  return <div>this is component</div>;
};

export default FunctionalTimer;

// const FunctionalTimer = () => {
//   const [count, setcount] = useState(0);
//   //   clear interval in useeffect creat by returne:)
//   useEffect(() => {
//     const mytimer = setInterval(() => {
//       console.log("salam ali");
//       setcount(count + 1);
//     }, 1000);
//     return () => {
//       console.log("stop");
//       clearInterval(mytimer);
//     };
//   }, []);
//   return <div>this is timer</div>;
// };

// export default FunctionalTimer;
