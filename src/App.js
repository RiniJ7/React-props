
import './App.css';
import Product from './Product';

function App() {
  return (
    <div className="App">
   <h1>Welcome to shoppers page!</h1>
  <div class="container">
   <Product name='Amazon Eco' description='Your AI assistant' price={30.99}/>
   </div>
   <div class="container">
   <Product name='Google home' description='Your AI assistant' price={50.99}/>
   </div>
   <div class="container">
   <Product name='Mac Book Air' description='Your computer' price={500.99}/>
   </div>
   <div class="container">
   <Product name='Mac book Pro' description='Your pro computer' price={700.99}/>
   </div>
   {/* Product name, description, price */}
   {/* Product name, description, price */}
   {/* Product name, description, price */}
   {/* Product name, description, price */}
    </div>
  );
}

export default App;
