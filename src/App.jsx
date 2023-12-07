import { useEffect, useState } from 'react';
import PatternDivider from './PatternDivider';
import DiceIcon from './DiceIcon';

function App() {
  
  const [advice, setAdvice] = useState('Share Positive Energy');
  const [adviceCount, setAdviceCount] = useState(1);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data?.slip?.advice);
  }

  async function handleClick() {
    await getAdvice();
    setAdviceCount(adviceCount + 1);
  }

  return (
    <main className="w-scren h-screen bg-dark-blue flex justify-center items-center p-2 font-manrope text-center">
      <article className="w-[90%] sm:max-w-xl bg-dark-grayish-blue rounded-xl px-8 py-4 flex flex-col items-center gap-2 relative">
          <h1 className="text-neon-green uppercase text-sm sm:text-xl tracking-widest">#Advice {adviceCount}</h1>
          <p className="text-light-cyan font-bold sm:text-2xl">
            {advice && `"${advice}"`}
          </p>
          <PatternDivider />
          <DiceIcon handleClick={handleClick}/>
      </article>
    </main>
  )
}

export default App
