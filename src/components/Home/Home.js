import React, {Component} from 'react';
import Video from '../../assets/bg.mp4'
import './Home.css';

// import Dropzone from 'react-dropzone'
// import {fileReader} from '../Util/File';

// state = {files: []}
//
// onChange = (e) => {
//  const files = e.target.files;
//  const file = files[0];
//  fileReader(file);
// }
//
// onDrop = (files) =>  {
//  this.setState({files});
// }
//
// {/* <input type='file' onChange={this.onChange}/>
// <Dropzone onDrop={this.onDrop}>
//       <p>Try dropping some files here, or click to select files to upload.</p>
// </Dropzone>
// <ul>
//     {
//       this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
//     }
//   </ul> */}


 class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <video muted autoPlay loop>
          <source src={Video} type='video/mp4'/>
        </video>
      </div>
    );
  }
}

export default Home
