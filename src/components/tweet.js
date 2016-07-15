import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class Tweet extends Component {

 constructor(props) {
    super(props);
    // console.log('props in tweet', props)
    // this.state = {
    //   'tweetInfo': this.props.tweetInfo,
    // };

    /*
        <CardActions>
          <FlatButton label="Hide" onTouchTap={this.handleHide.bind(this)} />
          <FlatButton label="Favorite" onTouchTap={this.handleFavorite.bind(this)} />
        </CardActions>
    */
  }

  // handleFavorite() {
  //   console.log('Favorited!');
  // }

  // handleHide() {
  //   console.log('Hidden!');
  // }

  render() {
		return (
			<Card>
        <CardHeader
          title={this.props.tweet.user.screen_name}
          subtitle={this.props.tweet.user.name}
          avatar={this.props.tweet.user.profile_image_url}
          actAsExpander={false}
          showExpandableButton={false}
        />
        <CardText>
          {this.props.tweet.text}
        </CardText>
      </Card>
		)
	}
}