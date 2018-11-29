import React, {PureComponent} from 'react'
import {getGames, createGame} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {userId} from '../../jwt'
import GameDetails from './GameDetails'
import {withRouter} from 'react-router'
import './GamesList.css'

class GamesList extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.games === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  renderGame = (game) => {
    const {users, userId} = this.props
    const players = game.players.map(player => player.userId)
    return (
      <GameDetails
        key={game.id}
        game={game} users={users} userId={userId}
        players={players}
      />
    )
  }

  render() {
    const {games, users, authenticated, createGame, history} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (games === null || users === null) return null

    return (
      <div>
        <h1>Welcome {this.props.userId} to battleship</h1>
        <button className="Button" onClick={createGame}>Create game</button>
        <button className="Button" onClick={() => history.push('/')}>Logout</button>
        
          <div>
            {games.map(game => this.renderGame(game))}
          </div>
        

      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  // currentUser: state.currentUser && userId(state.currentUser.jwt),
  users: state.users === null ? null : state.users,
  games: state.games === null ?
    null : Object.values(state.games).sort((a, b) => b.id - a.id)
})

export default withRouter(
  connect(mapStateToProps, {getGames, getUsers, createGame})(GamesList)
)
