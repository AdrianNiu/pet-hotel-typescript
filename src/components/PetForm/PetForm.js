import React, { Component } from 'react';

import { Button, Form, FormGroup, Input,} from 'reactstrap';

import { connect } from 'react-redux'; 

import mapStoreToProps from '../../redux/mapStoreToProps';

import { storage } from "../../Firebase";



class PetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: "",
      breed: "",
      owner: "",
      image: null,
      url: "",
      progress: 0,
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleSubmit = () => {
        console.log('in handleSubmit');
        if((this.state.name === '') || (this.state.color === '') || (this.state.breed === '') || (this.state.owner === '')){
            console.log('missing data!');
            this.setState({
                errorMessage:  'Please Fill in all attributes of your pet',
            })
 
        }else{
            this.props.dispatch({
                type: 'POST_PET', payload: this.state
            });
            this.setState({
                name: '',
                color: '',
                breed: '',
                owner: '',
                url: '',
        });
        }

    }
  
 

 handleOwnerChange = (event) => {
        this.setState({owner: event.target.value, errorMessage: ''});
    }

  handleChange =(event, propertyName) => {

        this.setState({
            [propertyName]: event.target.value, errorMessage: ''
        })
  }

  //Image upload code
  handleChangeImage = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      this.setState(() => ({ image }));
    }
  };


  handleUpload = (event) => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ progress });
      },
      (error) => {
        //error function
        console.log(error);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
           })
        });
    }
    
    render(){
        
        return (
          <>
            <div>
              <h2>Add Pet</h2>
            </div>

            <Form
              onSubmit={this.handleSubmit}
              inline
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <h5>Upload An Image</h5>
              </div>
              <div>
                <input type="file" onChange={this.handleChangeImage} />
              </div>
              <progress value={this.state.progress} max="100" />
              <div>
                <button onClick={this.handleUpload}>Upload</button>
                {/* <img src={this.state.url} alt="Uploaded images" height='400' width='400'/> */}
              </div>
              <FormGroup>
                <Input
                  type="select"
                  value={this.state.value}
                  onChange={this.handleOwnerChange}
                >
                  <option value="">Choose an owner</option>
                  {this.props.store.ownerReducer &&
                    this.props.store.ownerReducer.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.username}
                      </option>
                    ))}
                </Input>
                &nbsp;&nbsp;
                <Input
                  placeholder="Pet"
                  value={this.state.name}
                  onChange={(event) => {
                    this.handleChange(event, "name");
                  }}
                ></Input>
                &nbsp;&nbsp;
                <Input
                  value={this.state.color}
                  placeholder="Pet Color"
                  onChange={(event) => {
                    this.handleChange(event, "color");
                  }}
                ></Input>
                &nbsp;&nbsp;
                <Input
                  value={this.state.breed}
                  placeholder="Pet Breed"
                  onChange={(event) => {
                    this.handleChange(event, "breed");
                  }}
                ></Input>
                &nbsp;&nbsp;
                <Button id="petFormSubmit" type="submit">
                  Submit
                </Button>
                <p style={{ color: "red" }}>{this.state.errorMessage}</p>
              </FormGroup>
            </Form>
          </>
        );
  }
}



export default connect(mapStoreToProps)(PetForm);