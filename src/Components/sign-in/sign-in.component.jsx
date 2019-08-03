import React from 'react';
import './sign-in.style.scss';
import FormInput from '../../Components/form-input/form-input.component';
import CustomButton from '../../Components/custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../Components/firebase/firebase.util';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const{ email,password } = this.state;

    try{
     await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: '', password: '' });
    }
     catch(error){
       console.log(error);
    }
  };

  handleChange = event => {
    

    this.setState({[event.target.name]:event.target.value});
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
            label='email'
          />
          
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label='password'
          />
          <div className='buttons'>
          <CustomButton type='submit' > SIGN IN </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn > sign in with google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;