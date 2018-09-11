import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Layout extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			file: '',
			imagePreviewUrl: ''
		}

	  }

	onChangeFile = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const reader = new FileReader();
        var file = event.target.files[0];

        console.log("file---", file);
        
   		reader.onloadend = () => {
            this.setState({
              file: file,
              imagePreviewUrl: reader.result
            });

            console.log("state uploaded", this.state);
          }
       
        if(file){
            reader.readAsDataURL(file);
        }
       
    }

    uploadImage = () => {

  //   	var myHeaders = new Headers();
		// myHeaders.append('Content-Type', 'application/json');
		// myHeaders.append('Access-Control-Allow-Origin', '*');
		// myHeaders.append('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1Yjk0MWUwNjE2NDVkNjA1ZDA5MDllZmYiLCJpYXQiOjE1MzY0NTg2NzgsImV4cCI6MTUzNjU0NTA3OCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYTM5YzljZDMtNGNmMy00ZWJlLWJjYzItMmMyNWZhYzkwY2QzIn0.1u9-REMQj5cYqaGjIWgYB3chGoBg6JpoGudmNEI3JL0');

		// var myInit = { method: 'POST',
		//                headers: myHeaders,
		//                body: { uri: this.state.imagePreviewUrl},
		//                mode: 'cors'};

		// var myRequest = new Request('https://uvuneapp.herokuapp.com/upload-logo');

		// fetch(myRequest,myInit).then((response) => {
		//   console.log("response", response);
		// });

		const data = { 'uri': this.state.imagePreviewUrl };
		const options = {
		  method: 'POST',
		  headers: { 'content-type': 'application/json', 
		  'access-control-allow-origin': '*',
		  'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1Yjk0MWUwNjE2NDVkNjA1ZDA5MDllZmYiLCJpYXQiOjE1MzY0NTg2NzgsImV4cCI6MTUzNjU0NTA3OCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYTM5YzljZDMtNGNmMy00ZWJlLWJjYzItMmMyNWZhYzkwY2QzIn0.1u9-REMQj5cYqaGjIWgYB3chGoBg6JpoGudmNEI3JL0'
		  },
		  data: data,
		  url: 'https://uvuneapp.herokuapp.com/upload-logo',
		};
		axios(options).then((response) => {
		  console.log("response", response.data);
		});
    }


	componentDidMount(){

	}



	render(){
		return (
			
			<main className="Main" style={{ marginTop: '7%'}}>

				<h1>Profile</h1>

				<h1>Let's upload some files!</h1>
		        <input 
		          id='myInput'
		          type="file"
		          ref={(ref) => this.upload = ref}
		          onChange={this.onChangeFile.bind(this)}
		         />

		        <a className="button is-primary" onClick={this.uploadImage}>Upload</a>
			</main>
			      
		);
	}
}

