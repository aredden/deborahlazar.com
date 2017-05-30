import React, { Component } from 'react';
import 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { putPainting, getPaintingsList}from './Server.js';

class Administration extends Component {
  constructor(props) {
      super(props);
      this.state={
        fileName:"No File Selected",
        file:["No Preview"],
        nameText:"",
        descText:"",
        medText:"",
        priceText:"",
        categoryText:"",
        dateText:"",
        paintingslist:[]
      }
  }

  componentDidMount(){
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleMediumChange = this.handleMediumChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }


  onDrop(acceptedFiles, rejectedFiles) {
    if(rejectedFiles.length == 0){
      this.setState({fileName: acceptedFiles[0].name,
                      file: acceptedFiles
                    })
    }
  }

  handleSubmitArt(e){
    e.preventDefault();
    debugger;
    putPainting(this.state.file[0],this.state.nameText,this.state.descText,
      this.state.medText,this.state.priceText,this.state.categoryText,
      this.state.dateText,this.props.location.state.paintingslist.length,
      (response)=> this.setState({fileName: response})
    );
  }



  onResetText(e){
    e.preventDefault();
    this.setState({nameText:"",descText:""});
  }

  handleNameChange(event) {
    event.preventDefault();
    this.setState({nameText: event.target.value});
  }
  handleDateChange(event) {
    event.preventDefault();
    this.setState({dateText: event.target.value});
  }
  handleCategoryChange(event) {
    event.preventDefault();
    this.setState({categoryText: event.target.value});
  }
  handlePriceChange(event) {
    event.preventDefault();
    this.setState({priceText: event.target.value});
  }
  handleMediumChange(event) {
    event.preventDefault();
    this.setState({medText: event.target.value});
  }
  handleDescChange(event) {
    event.preventDefault();
    this.setState({descText: event.target.value});
  }

  render() {
    return (
      <div>
      <div className="col-md-2"/>
      <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center"><b>Add a painting</b></h3>
              </div>
              <div className="panel-body">
                <div className="App">
                File Name: {this.state.fileName}
                <Dropzone onDrop={(acceptedFiles,rejectedFiles) =>
                    this.onDrop(acceptedFiles,rejectedFiles)} disablePreview={false}>
                <div className="text-center">Click to browse, or drop painting here!</div>
                </Dropzone>
                </div>
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img className="media-object max-preview-size" src={this.state.file[0].preview} alt="..."/>
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Painting Name</h4>
                      <input className="input-group form-control" value={this.state.nameText} onChange={this.handleNameChange}>
                      </input>
                      <br/>
                    <h4 className="media-heading">Painting Description</h4>
                      <input  className="input-group form-control" value={this.state.descText} onChange={this.handleDescChange}>
                      </input>
                    <h4 className="media-heading">Date</h4>
                      <input  className="input-group form-control" value={this.state.dateText} onChange={this.handleDateChange}>
                      </input>
                    <h4 className="media-heading">Painting Medium</h4>
                      <input  className="input-group form-control" value={this.state.medText} onChange={this.handleMediumChange}>
                      </input>
                    <h4 className="media-heading">Category</h4>
                      <input  className="input-group form-control" value={this.state.categoryText} onChange={this.handleCategoryChange}>
                      </input>
                    <h4 className="media-heading">Price</h4>
                      <input  className="input-group form-control" value={this.state.priceText} onChange={this.handlePriceChange}>
                      </input>
                  </div>
                  </div>
                  <br/>
                  <section>
                    <div className="btn-group btn-group-justified" role="group" aria-label="...">
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-default" onClick={(e) => this.handleSubmitArt(e)}>submit</button>
                      </div>
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-default">cancel</button>
                      </div>
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-default" onClick={(e) => this.onResetText(e)}>reset text</button>
                      </div>
                    </div>

                  </section>
      </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center"><b>Remove a painting</b></h3>
        </div>
        <div className="panel-body">
            <section>
              <table className="table">
                  <tbody>
                  {this.props.location.state.paintingslist.map((elem, index) => {
                      return(<tr key={index}><td key={index}>{elem}<br/></td></tr>)
                      }
                    )
                  }
                  </tbody>
              </table>
            </section>
            <section>
              <div className="btn-group btn-group-justified" role="group" aria-label="...">
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default">submit</button>
                </div>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default">cancel</button>
                </div>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default" onClick={(e) => this.onResetText(e)}>reset text</button>
                </div>
              </div>
            </section>
        </div>
        </div>
      </div>
      <div className="col-md-2"/>
      </div>

    )
  }
}

export default Administration;
