import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {withRouter} from 'react-router'
import {joinGame} from '../../actions/games'
import './GameDetails.css'

class GameDetails extends PureComponent {

  handleClick = () => {
    const {game,history,players} = this.props
    switch(this.buttonText(players)) {
      case "join":
        this.props.joinGame(game.id)
        history.push(`/games/${game.id}/ships`)
        break
      case "enter":
      case "watch":
        history.push(`/games/${game.id}`)
        break
      default:
        return null
    }
  }
  buttonText = (players) => {
    const id = this.props.userId
    const game = this.props.game
    if (players.includes(id)) {
      if (game.status === "started") return "enter"
      return "..."
    } else {
      if (game.status === 'started') return "watch"
      return "join"
    }
  }
  render() {
    const {game,users,userId, players} = this.props
    //const playerIds = game.players.map(player => player.userId)

    if (game.status==="finished") return null

    return (
      <Card className="game-card">
        <CardContent>
          <Typography color="textSecondary">
            This game is played by&nbsp;
            {
              game.players
                .map(player => {
                  if (player.userId===userId) return 'you'
                  return users[player.userId].firstName
                })
                .join(' and ')
            }
          </Typography>
          <Typography variant="headline" component="h2">
            Game #{game.id}
          </Typography>
          <Typography color="textSecondary">
            Status: {game.status}
          </Typography>
        </CardContent>

        <CardActions>
        {
          <Button
            size="small"
            onClick={this.handleClick}
          >
            {
              this.buttonText(players)
            }
          </Button>
        }
        </CardActions>
      </Card>
    )
  }
}


const mapDispatchToProps = {
  joinGame
}
export default withRouter(
  connect(null, mapDispatchToProps)(GameDetails)
)
