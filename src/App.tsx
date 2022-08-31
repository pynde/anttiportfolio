import { createContext, useContext, useEffect, useRef, useState } from 'react';
import './App.scss';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

interface IScrollContext {
  scrolledY : number;
}

export const ScrollContext= createContext<IScrollContext>({scrolledY : 0});

function App() {
  const [scrollY, setScrollY] = useState<number>(0);
  const appRef = useRef<HTMLDivElement>(null);
  const setScrolledHeight = () =>{
    if(!!appRef.current)
    setScrollY(appRef.current.scrollTop);
  }

  return (
    <ScrollContext.Provider value={{scrolledY: scrollY}}>
    <div className="App" onScroll={setScrolledHeight} ref={appRef}>
      <Nav/>
      <Main>
      </Main>
    </div>
    </ScrollContext.Provider>
  );
}

export default App;
