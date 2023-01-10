import { createContext } from 'react';

export const ModeloContext = createContext({});

export const ModeloProvider = (props) => {
  const [selectedModelo, setSelectedModelo] = useState('Modelo');

  return (
    <ModeloContext.Provider value={{ selectedModelo, setSelectedModelo }}>
      {props.children}
    </ModeloContext.Provider>
  );
};