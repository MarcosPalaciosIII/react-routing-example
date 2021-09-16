import React, { Component } from 'react';

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.generateProductsList();
    }
    
    generateProductsList() {
        this.setState({products: this.props.products});
    }

    displayProducts() {
        // if(this.state.products.length === 0) {
        //     this.generateProductsList();
        // }
        return this.state.products.map((product, i) => {
            return (
                <div key={i}>
                    <h3>name: {product.name}</h3>
                    <h4>price: {product.price}</h4>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.displayProducts()}
            </div>
        );
    }
}

export default Products;