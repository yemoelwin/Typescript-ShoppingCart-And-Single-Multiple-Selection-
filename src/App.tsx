import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { Select, SelectOption } from './pages/Select';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { useState } from 'react';

const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fixth', value: 5 },
  { label: 'Sixth', value: 6 },
  { label: 'Seventh', value: 7 },
  { label: 'Eighth', value: 8 },
  { label: 'Ninth', value: 9 },
];
function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route
              path="/select"
              element={
                <>
                  <Select
                    multiple
                    options={options}
                    value={value1}
                    onChange={(i) => setValue1(i)}
                  />
                  <Select
                    options={options}
                    value={value2}
                    onChange={(o) => setValue2(o)}
                  />
                </>
              }
            />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
