import React, { useState } from 'react';
import DealsCard from './DealsCard'
import { productsData } from "../_constants/index"


// interface Product {
//   id?:number
//   category: string;
//   text?: string;
//   amount?: number;
//   Image?: string;
//   link?:string;
//   timeLable? :string;
//   label?: string;
//   name?: string
// }


const ProductFilter = () =>  {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <div>
        <h2>Categories:</h2>
        <ul>
          {uniqueCategories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryChange(category)}
              style={{
                cursor: 'pointer',
                backgroundColor:
                  selectedCategory === category ? 'red' : 'transparent',
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Products:</h2>
        <ul>
          {products
            .filter((product) => !selectedCategory || product.category === selectedCategory)
            .map((product, index) => (
          
              <DealsCard
              key={index}
              imageSrc={product.Image as any}
              text={product.text}
              amount={product.amount}
              link={product.link}
            />
            ))}
        </ul>
      </div>
    </div>
  );
}
export default ProductFilter;