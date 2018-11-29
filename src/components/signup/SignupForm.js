import React, {PureComponent} from 'react'
import './SignupForm.css'


export default class SignupForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form className="Submit" onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="firstName">First Name</label>
					<input type="firstName" name="firstName" id="firstName" value={
						this.state.firstName || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="lastName">LastName</label>
					<input type="lastName" name="lastName" id="lastName" value={
						this.state.lastName || ''
					} onChange={ this.handleChange } />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="confirmPassword">Confirm password</label>
					<input type="password" name="confirmPassword" id="confirmPassword" value={
						this.state.confirmPassword || ''
					} onChange={ this.handleChange } />
				</div>

				{
					this.state.password &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{color:'red'}}>The passwords do not match!</p>
				}

				<button className="Button" type="submit">Sign up</button>
			</form>
		)
	}
}
