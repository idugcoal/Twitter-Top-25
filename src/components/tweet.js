import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class Tweet extends Component {

 constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
		return (
			<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
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
        <CardMedia
          expandable={false}
        >
        </CardMedia>
        <CardActions>
          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
        </CardActions>
      </Card>
		)
	}
}