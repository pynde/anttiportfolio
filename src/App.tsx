import { createContext, useContext, useEffect, useRef, useState } from 'react';
import './App.scss';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

interface IScrollContext {
  scrolledY : number;
}

interface ISelectionContext {
  selectedAsString: string;
  setSelectedAsString: (selectedAsString: string) => void;
}

export const ScrollContext= createContext<IScrollContext>({scrolledY : 0});
export const SelectionContext = createContext<ISelectionContext>({ selectedAsString: '', setSelectedAsString: () => {} });

function App() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [_selectedAsString, _setSelectedAsString] = useState<ISelectionContext['selectedAsString']>('');
  const appRef = useRef<HTMLDivElement>(null);
  const setScrolledHeight = () =>{
    if(!!appRef.current)
    setScrollY(appRef.current.scrollTop);
  }


  return (
    <SelectionContext.Provider value={{ selectedAsString: _selectedAsString, setSelectedAsString: _setSelectedAsString }}>
      <ScrollContext.Provider value={{scrolledY: scrollY}}>
      <div className="App" onScroll={setScrolledHeight} ref={appRef}>
        <Nav/>
        <Main/>
      </div>
      </ScrollContext.Provider>
    </SelectionContext.Provider>
  );
}

export default App;
