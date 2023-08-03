import useClickGame from "./hooks/useClickGame"

function App() {

  const {
    handleClick,
    startGame,
    timeIsRunning,
    timeRemaining,
    maxClickCount,
    message,
    clickCount,
  } = useClickGame(5)

  return (
    <main className="container bg-[#457b9d] h-[35rem] flex-col flex justify-around items-center p-6 rounded-3xl m-auto">
      <h1 className="text-5xl m-0 text-[#f1faee] font-black"> How fast do you click ?</h1>
      <button
        className="bg-[#e63946] text-[#f1faee] font-bold w-32 h-12 border-2 border-[#e63946] hover:border-blue-500 disabled:opacity-40 rounded-lg"
        onClick={startGame}
        disabled={timeIsRunning}>Start
      </button>
      <h1 className="text-4xl text-[#f1faee] font-bold">{message}</h1>
      
      <button
        className="bg-[#e63946] text-[#f1faee] font-bold w-64 h-16  border-2 border-[#e63946] hover:border-blue-500 disabled:opacity-60 rounded-lg"
        onClick={handleClick}
        disabled={!timeIsRunning}
      >{ message === 'Go' ? '¡¡ CLICK ME FAST !!' : 'BE READY TO CLICK ME AT GO!' }
      </button>
      <h1 className="text-3xl m-0 text-[#a8dadc] font-semibold">time remaining: <span className="text-6xl text-[#e63946] font-bold">{timeRemaining}</span></h1>
    
      {maxClickCount ? <div className="text-[#a8dadc] font-semibold"><h1>Current clicks: {clickCount}</h1> <h1>Max points scored: {maxClickCount}</h1></div> : <h1 className="text-[#a8dadc] font-semibold">Current clicks: {clickCount}</h1>}
    </main>
  )
}

export default App
