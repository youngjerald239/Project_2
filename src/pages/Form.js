import React from "react"
import ReactDOM from 'react-dom'
import Form from 'react-bootstrap/Form'

function Forms (props){
    return class Form extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            username: '',
            password:'',
            age: null,
            errormessage: ''
          };
        }
        myChangeHandler = (event) => {
          const nam = event.target.name;
          const val = event.target.value;
          let err = '';
          if (nam === "age") {
            if (val !=="" && !Number(val)) {
              err = <strong>Your age must be a number</strong>;
            }
          }
          this.setState({errormessage: err});
          this.setState({[nam]: val});
        }
        render() {
          return (
              <div>
            <form>
            <h1>Enter information to Sign in {this.state.username} {this.state.age}</h1>
            <p>Enter your name:</p>
            <input
              type='text'
              name='username'
              onChange={this.myChangeHandler}
            />
            <p>Enter your Password:</p>
            <input
              type='text'
              name='Password'
              onChange={this.myChangeHandler}
            />
            <p>Enter your age:</p>
            <input
              type='text'
              name='age'
              onChange={this.myChangeHandler}
            />
            {this.state.errormessage}
            </form>
            </div>
          );
        }
      }
      
       ReactDOM.render(<Form />, document.getElementById('root'));
    }
export default Forms