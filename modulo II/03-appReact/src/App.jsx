// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { FilterableProductTable } from './components/FilterableProductTable.jsx';


const PRODUCTS = [
  { category: "Frutas", price: "$1", stocked: true, name: "Manzana" },
  { category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón" },
  { category: "Frutas", price: "$2", stocked: false, name: "Maracuyá" },
  { category: "Verduras", price: "$2", stocked: true, name: "Espinaca" },
  { category: "Verduras", price: "$4", stocked: false, name: "Calabaza" },
  { category: "Verduras", price: "$5", stocked: true, name: "Zapallo" },
  { category: "Verduras", price: "$2", stocked: false, name: "Acelga" },
  { category: "Verduras", price: "$1", stocked: true, name: "Guisantes" }
];

function App() {

  return <FilterableProductTable products={PRODUCTS} />;
  
}

export default App


