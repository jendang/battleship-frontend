import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'
import './LoginPage.css'
import SignupPage from '../signup/SignupPage'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
		console.log(data)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/games" />
		)

		return (
			<div className="Login">
				<h1>Please login to board the ship</h1>

				<LoginForm onSubmit={this.handleSubmit} />

        { this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }

				{/* <SignupPage /> */}
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
    error: state.login.error
	}
}

export default connect(mapStateToProps, {login})(LoginPage)
