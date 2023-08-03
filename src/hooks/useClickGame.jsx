import {useState, useEffect} from 'react'

function useClickGame(startingTime) {
    // eslint-disable-next-line no-unused-vars
    const [start, setStart] = useState(false)
    const [timeIsRunning, setTimeIsRunning] = useState(false)
    const [clickCount, setClickCount] = useState(0)
    const [maxClickCount, setMaxClickCount] = useState(0)
    const [message, setMessage] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(startingTime)

  
    const handleClick = () => {
      if (timeIsRunning) {
        setClickCount(clickCount + 1)
      }
    }  
  
    const startGame = () => {
      setTimeRemaining(startingTime)
      setStart(true)
        setClickCount(0)
        setMessage('Set')
    }
  
    const endGame = () => {
      setTimeIsRunning(false)
    }
    
    //Count down from current timeRemaining to 0 and end game
    useEffect(() => {
      if (timeIsRunning && timeRemaining > 0) {
        setTimeout(() => {
          setTimeRemaining(time => time -1)
        }, 1000)
      } else if (timeRemaining === 0) {
          endGame()
          setClickCount(0)
          setMessage('Game Ended, Play Again ?')
      }
    }, [timeRemaining, timeIsRunning])

    //Set, Ready, Go countdown
     useEffect(() => {
        if (message === "Set") {
            const timer = setTimeout(() => { setMessage("Ready"); }, 1000);
            return () => clearTimeout(timer);
        }

        if (message === "Ready") {
            const timer = setTimeout(() => { setMessage("Go"); }, 1000);
            return () => clearTimeout(timer);
        }

        if (message === "Go") {
            setTimeIsRunning(true);
        }
     }, [message]);
    
    //Calculate max click score
    useEffect(() => {
      if (clickCount > maxClickCount) {
        setMaxClickCount(clickCount)
      }
      }, [clickCount, maxClickCount])
    
    
    return {handleClick, startGame, timeIsRunning, timeRemaining, maxClickCount, clickCount, message}
}

export default useClickGame