import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'

function App() {
 const showCart =  useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;


/* 
import {render,screen} from '@testing-library/react';
test('When button was not clicked', ()=>{
  render(<Greeting />);
  const buttonClicked = screen.getByText('Its's good to se you' {exact:false})
  expect(buttonClicked).toBeInTheDocument();

}) */