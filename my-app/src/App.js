import './App.css';
import Menu from './Components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand>Navbar</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
