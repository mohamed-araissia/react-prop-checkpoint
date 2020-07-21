import React from 'react';
import './App.css';
import ProductTable from './ProductTable'


const productarray=[{name:'t-shirt',price:'50',category:'clothes'},{name:'shoe',price:'250',category:'clothes'},{name:'smartphone',price:'850',category:'electronics'},{name:'laptop',price:'1500',category:'elctronics'}]
function App() {
  return (
    <div className="App">
      <ProductTable props={productarray}/>
  
    </div>
  );
}

export default App;
