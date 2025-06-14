import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Staff from './components/staff/Staff';
import NoMatch from './components/NoMatch';
import { AdminInventory } from './components/inventory/AdminInventory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="inventario" element={<AdminInventory />} />
        <Route path="staff" element={<Staff />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
