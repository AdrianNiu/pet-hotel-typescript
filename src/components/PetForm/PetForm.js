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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleSubmit = () => {
    console.log("in handleSubmit");

    this.props.dispatch({
      type: "POST_PET",
      payload: this.state,
    });
    //TODO validate inputs
    this.setState({
      name: "",
      color: "",
      breed: "",
      owner: "",
    });
  };

  handleOwnerChange = (event) => {
    this.setState({ owner: event.target.value });
  };

  handleChange = (event, propertyName) => {
    console.log("in handleChange", propertyName, event.target.value);

    this.setState({
      [propertyName]: event.target.value,
    });
  };

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
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
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
          });
      }
    );
  };

  render() {
      console.log('here is state', this.state);
    return (
      <>
        <div>
          <h2>Add Pet</h2>
        </div>
        <Form onSubmit={this.handleSubmit} inline>
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
            <select value={this.state.value} onChange={this.handleOwnerChange}>
              <option value="">Choose an owner</option>
              {this.props.store.ownerReducer &&
                this.props.store.ownerReducer.map((item) => (
                  <option value={item.id}>{item.username}</option>
                ))}
            </select>
            <Input
              placeholder="Pet"
              onChange={(event) => {
                this.handleChange(event, "name");
              }}
            ></Input>
            <Input
              placeholder="Pet Color"
              onChange={(event) => {
                this.handleChange(event, "color");
              }}
            ></Input>
            <Input
              placeholder="Pet Breed"
              onChange={(event) => {
                this.handleChange(event, "breed");
              }}
            ></Input>
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Form>
      </>
    );
  }
}



export default connect(mapStoreToProps)(PetForm);