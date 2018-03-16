import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styless from '../styles.css';
import { addProduct } from "../actions/index";

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
        this.fileSelectedHandler = this.fileSelectedHandler .bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        //if( !this.state.image || name == 'brand'){
            this.setState({
                image: "./images/" + this.state.brand + ".jpg",
                id: this.props.products.length + 1
            })
        //}

    }

    handleSubmit(event) {
        //alert('Your favorite flavor is: ' + this.state.value);
        //event.preventDefault();


        //const formData = new FormData();
        //formData.append('myFile', this.state.selectedImage, this.state.selectedImage.name);
        //axios.post('http://localhost:8282/images/', formData);

        /*axios.post('/images/', formData, {
            onUploadProgress: progressEvent => {
              console.log(progressEvent.loaded / progressEvent.total)
            }
        });*/
        
        
        console.log("this.state-- ", this.state);
        //event.preventDefault();

        //this.props.addNewProductProp(this.state);
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

    fileSelectedHandler(event) {
        console.log(event.target.files[0]);
        this.setState({
            selectedImage: event.target.files[0]
        });
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

                <div hidden="false">
                <label htmlFor="image"  hidden="true">Image:</label>                   
                <input id="image"
                name="image"
                type="text"
                value={this.state.image}
                onChange={this.handleInputChange}  hidden="true"/>

                <input type="file" onChange={this.fileSelectedHandler}  hidden="true"/></div>

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