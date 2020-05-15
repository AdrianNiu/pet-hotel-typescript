import React, { Component } from "react";
import { storage } from "../../Firebase";
import "./ImageUpload.css";


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = (event) => {
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

  saveImage = () => {
    console.log("in saveImage");
    this.props.dispatch({
      type: "SAVE_IMAGE",
      payload: this.state,
    });

    // this.props.dispatch({
    //   type: "FETCH_IMAGES",
    //   payload: this.props.match.params,
    // });
  };

  render() {
    console.log("here is IMAGE UPLOAD state", this.state);

    return (
      <>
        <div>
          <h3>Upload An Image</h3>
        </div>
        <div>
          <input
            type="file"
            onChange={this.handleChange}
          />
        </div>
        <progress value={this.state.progress} max="100" />
        <div>
          <button onClick={this.handleUpload}>
            Upload
          </button>
          <button onClick={this.saveImage}>
            Save Image
          </button>

          {/* <img src={this.state.url} alt="Uploaded images" height='400' width='400'/> */}
        </div>
      </>
    );
  }
}

export default ImageUpload;
