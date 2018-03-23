import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addProduct } from "./action";
import {validateProductForm} from "./util/validate-form";
import {FormErrors} from "./util/form-errors.jsx"
import "./form.scss";
//import "../../assets/style-new.css";

const mapStateToProps = state => {
    return { products: state.products };
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => dispatch(addProduct(product))
    };
};

const initialState = {
    fields: {
        id: '',
        brand: 'Maiyas',
        name: '',
        price: '',
        weight:'',
        image: ''
    },
    errors: {
        id: '',
        brand: '',
        name: '',
        price: '',
        weight:'',
        image: ''
    },
    hasError: false,
    isFormValid: false,
    alertMessage: '',
    isFormSubmissionSuccess: false,
    showMsg: false
}

class ConnectedForm extends Component{
    
    constructor(props) {
        super(props);
        this.state = initialState;       

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        let key = e.target.name;
        let value = e.target.value;
        let fields = this.state.fields;
        fields[key] = value;
        fields['image'] = this.state.fields.brand + ".jpg";
        fields['id'] = this.props.products.length + 1;

        this.setState(
            {fields},
            () => this.validateField(key, value)
        );
    }


    validateField(key, value) {
        let {errors, isFormValid, hasError} = validateProductForm(key, value, this.state.errors);
        this.setState(
            {
                errors,
                isFormValid,
                hasError
            }
        )
    }

    handleSubmit(event) {

        this.props.addProduct(this.state.fields);
        this.setState({initialState});
        this.showMsg = true;

        event.preventDefault();
    }

    render() {
        return (

            <form className="productForm" onSubmit={this.handleSubmit}>
                <h2>Create New Product:</h2>
                <h5 hidden={!this.showMsg}>Product created successfully</h5>
                {
                    this.state.hasError ?
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.errors}/>
                        </div> : null
                }
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

                <input type="submit" value="Submit" disabled={!this.state.isFormValid}/>
            </form>
        );
    }
}

const CreateProduct = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default CreateProduct;