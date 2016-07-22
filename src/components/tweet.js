import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import DateDisplay from './dateDisplay'

export default class Tweet extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
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
            <DateDisplay date={this.props.tweet.created_at} />
          </CardText>
        </Card>
      </span>
		)
	}
}