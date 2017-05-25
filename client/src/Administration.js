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
        photoslist:[]
      }

  }

  componentDidMount(){

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.getPaintings = this.getPaintings.bind(this);
    this.getPaintings();
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
    putPainting(this.state.file[0],(response)=>
      this.setState({fileName: response})
    );
  }


  getPaintings(){
    getPaintingsList((images)=>{
      this.setState({photoslist: images})
    });
  }



  onResetText(e){
    e.preventDefault();
    this.setState({nameText:"",descText:""});
  }

  handleNameChange(event) {
    this.setState({nameText: event.target.value});
  }

  handleDescChange(event) {
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
                  {this.state.photoslist.map((elem, index) => {
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
