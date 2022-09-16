import React from 'react'
import Stars from './Stars.js'

class ProductCard extends React.Component {

  render() {
    let srcString = "http://picsum.photos/200/140?" + this.props.name;

    let saleAlert = null;
    let price = <div className='price'>{'$' + this.props.price}</div>;
    let listPrice = this.props.salePrice ? this.props.salePrice : this.props.price;
    if (this.props.salePrice) {
      saleAlert = <div className='sale-alert'>Save {Math.round((1 - (this.props.salePrice / this.props.price)) * 100)}%</div>
      price = <div className='price'><span className='canceled-price'>{'$' + this.props.price}</span>{'$'+ this.props.salePrice}</div>;
    }
  
    return (
      <div className='product-card'>
        <img className="product-image" src={srcString} alt='creamy foam cleanser'/>
        {saleAlert}
        <div className='product-details'>
          <p className='product-name'>{this.props.name}</p>
          <div className='feedback'>
            <Stars stars={this.props.stars}/>
            <span className="product-reviews">{this.props.reviews} Reviews</span>
          </div>
          {price}
          <button 
          className = 'add-to-bundle'
          onClick={() => {this.props.handleClick(listPrice)}}
          >
          Add to Bundle
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;