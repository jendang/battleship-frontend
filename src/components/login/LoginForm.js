import React, {PureComponent} from 'react'
import './LoginForm.css'

export default class LoginForm extends PureComponent {
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
					<label htmlFor="emailLogin">Email </label>
					<input type="email" name="email" id="emailLogin" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="passwordLogin">Password </label>
					<input type="password" name="password" id="passwordLogin" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<button className="Button" type="submit">Login</button>
			</form>
		)
	}
}
