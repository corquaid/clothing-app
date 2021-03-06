import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      // Check user credentials on the firebase authentication
      await auth.signInWithEmailAndPassword(email, password);
      // If auth is successful, clear state
      this.setState( { email: '', password: '' })
    } catch (error) {
      console.log(error);
    }

    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required />
          <FormInput
            type='password'
            name='password' 
            value={password} 
            handleChange={this.handleChange}
            label='Password'
            required />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;