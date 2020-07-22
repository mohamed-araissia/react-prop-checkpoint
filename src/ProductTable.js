import React from 'react'
import PropTypes from 'prop-types';

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
    {props.productarray.map(prop => (
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
