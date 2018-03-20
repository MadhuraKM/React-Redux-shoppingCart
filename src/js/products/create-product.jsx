import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addProduct } from "./action";

const mapStateToProps = state => {
    return { products: state.products };
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => dispatch(addProduct(product))
    };
};

class ConnectedForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            brand: 'Maiyas',
            name: '',
            price: '',
            weight:'',
            image: '',
        };
        
        this.showMsg = false;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        this.setState({
            image: this.state.brand + ".jpg",
            id: this.props.products.length + 1
        })

    }

    handleSubmit(event) {

        this.props.addProduct(this.state);

        this.setState({
            brand: 'Maiyas',
            name: '',
            price: '',
            weight:'',
            image: '',
        });

        this.showMsg = true;

        event.preventDefault();
    }

    render() {
        return (

            <form className="productForm" onSubmit={this.handleSubmit}>
                <h2>Create New Product:</h2>
                <h5 hidden={!this.showMsg}>Product created successfully</h5>
                <label htmlFor="brand">Product Category:</label>                    
                <select id="brand" name="brand" value={this.state.value} onChange={this.handleInputChange}>
                    <option value="Maiyas">Maiyas</option>
                    <option value="MTR">MTR</option>
                </select>

                <label htmlFor="name">Product Name:</label>                    
                <input id="name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange} />

                <label htmlFor="price">Price:</label>                   
                <input id="price"
                name="price"
                type="number"
                value={this.state.price}
                onChange={this.handleInputChange} />
            
                <label htmlFor="weight">Weight:</label>                   
                <input id="weight"
                name="weight"
                type="number"
                value={this.state.weight}
                onChange={this.handleInputChange} />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const CreateProduct = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

/*ConnectedForm.propTypes = {
  addArticle: PropTypes.func.isRequired
};*/

export default CreateProduct;