import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class Tweet extends Component {

 constructor(props) {
    super(props);
    console.log('props in tweet', props)
    this.state = {
      'tweetInfo': this.props.tweetInfo,
    };
  }

  handleFavorite() {
    console.log('Favorited!');
  }

  handleHide() {
    console.log('Hidden!');
  }

  render() {
		return (
			<Card>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="http://lorempixel.com/100/100/nature/"
          actAsExpander={false}
          showExpandableButton={false}
        />
        <CardText>
          Tweedly tweedly deet
        </CardText>
        <CardActions>
          <FlatButton label="Hide" onTouchTap={this.handleHide.bind(this)} />
          <FlatButton label="Favorite" onTouchTap={this.handleFavorite.bind(this)} />
        </CardActions>
      </Card>
		)
	}
}