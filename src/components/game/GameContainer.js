import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getBoards, joinGame, updateGame, getGames} from '../../actions/games'
import {getUsers} from '../../actions/users'
import {userId} from '../../jwt'
import Board from './Board'
import GuessBoard from './GuessBoard'
import {withRouter} from 'react-router'
import './GameContainer.css'

class GameBattle extends Component {

  //here or in ShipsContainer or both?
  joinGame = () => this.props.joinGame(this.props.game.id)

  makeMove = (toRow, toCell) => {
    const {game, updateGame} = this.props

    const board = game.board.map(
      (row, rowIndex) => row.map((cell, cellIndex) => {
        if (rowIndex === toRow && cellIndex === toCell) return game.turn
        else return cell
      })
    )
    updateGame(game.id, board)
  }

  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game===null) this.props.getGames()
      this.props.getBoards(this.props.match.params.id)
      if (this.props.users === null) this.props.getUsers()
    }
  }

  render() {
    const {game, users, authenticated, userId} = this.props
    console.log('==================');
    console.log(game);
    if (game === null || users === null) return 'Loading...'

    if (!authenticated) return (
			<Redirect to="/login" />
		)
    // if (!game) return 'Not found'

    const player = game.players.find(p => p.userId === userId)
    console.log(player);
    if (player && ((player.symbol==='1' && !game.p1ready) || (player.symbol==='2' && !game.p2ready)))
      return (
  			<Redirect to={`/games/${game.id}/ships`} />
  		)

    return (
      // <div>
      // <div class="outer-paper">
      //   <h1>Game #{game.id}</h1>
      //
      //   <p>Status: {game.status}</p>
      //
      //   {
      //     game.status === 'started' &&
      //     player && player.symbol === game.turn &&
      //     <div>Its your turn!</div>
      //   }
      //
      //   {
      //     game.status === 'pending' &&
      //     game.players.map(p => p.userId).indexOf(userId) === -1 &&
      //     <button onClick={this.joinGame}>Join Game</button>
      //   }
      //
      //   <hr />
      //
      //   {game.board.map(this.renderRow)}
      // </div>)
      <div>
      <div className="Boards">
        <Board board={this.props.boards.board}/>
        <GuessBoard player={player} board={this.props.boards.guessBoard}/>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  game: state.games && state.games[props.match.params.id],
  boards: state.boards,
  users: state.users
})

const mapDispatchToProps = {
  getBoards, getGames, getUsers, joinGame, updateGame
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GameBattle)
)
