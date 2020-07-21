import React from 'react'
import PropTypes from 'prop-types';
const productarray=[{name:'t-shirt',price:'50',category:'clothes'},{name:'shoe',price:'250',category:'clothes'},{name:'smartphone',price:'850',category:'electronics'},{name:'laptop',price:'1500',category:'elctronics'}]

export default function ProductTable(props) {
    return (
        <div>
<table>
    <tr>
    <th style={{color: "red"}}>Product</th>    
    <th style={{color: "red"}}>Price</th> 
    <th style={{color: "red"}}>Category</th>   
    </tr>  
    <tbody>
    {productarray.map(prop => (
          <tr key={prop.name}>
            <td>{prop.name}</td>
            <td>{prop.price}</td>
            <td>{prop.category}</td>
          </tr>
        ))}
        </tbody>  
</table>      
      </div>
    )
}

ProductTable.propTypes ={
name:PropTypes.string,
price:PropTypes.number,
category:PropTypes.string


}