import { useState, useEffect } from "react"
import { motion } from "framer-motion"
// import UpPackage from "package-1-pj"
// import DownPackage from "package-2-pj"

import { countUp, countDown, countReset } from "package-3-pj"

function App() {
  const [count, setCount] = useState(0)

  const [text, setText] = useState("Welcome")

  // console.log(countReset)

  function countUpFunc() {
    setCount((prevNum) => countUp(prevNum))
    setText("One more...")
  }

  function countDownFunc() {
    setCount((prevNum) => countDown(prevNum))
    setText("One less...")
  }

  function resetFunc() {
    setCount((prev) => countReset(prev))
    setText("Recount")
  }

  return (
    <div className="container">
      <h1>{text}</h1>
      <motion.div
        onHoverStart={countUpFunc}
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.4, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        whileHover={{ scale: 0.8, rotate: 360 }}
      >
        <h2>+</h2>
      </motion.div>
      <motion.div
        onHoverStart={countDownFunc}
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.4, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        whileHover={{ scale: 0.8, rotate: 360 }}
      >
        <h2>-</h2>
      </motion.div>
      <motion.h1
        whileHover={{ scale: 0.8, rotate: 360 }}
        whileTap={{
          scale: 0.2,
          rotate: -20,
          borderRadius: "100%",
        }}
      >
        {count}
      </motion.h1>

      <div>
        <button onClick={countDownFunc}>Decrease</button>
        <button onClick={countUpFunc}>Increase</button>
        <button onClick={resetFunc}>Reset</button>
      </div>
    </div>
  )
}

export default App
