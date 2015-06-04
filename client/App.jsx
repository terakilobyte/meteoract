/**
 * Created by nathanleniz on 6/1/15.
 */

var cs = React.addons.classSet;

Users = new Meteor.Collection("users");

App = ReactMeteor.createClass({
  mixins: [ReactMeteor.Mixin],

  templateName: "App",

  getInitialState() {
    return ({
      clickedCount: 0
    });
  },

  handleClick() {
    this.setState({
      clickedCount: this.state.clickedCount + 1
    });
  },

  startMeteorSubscriptions() {
    Meteor.subscribe("users");
  },

  render: function() {

    return (
      <div>
        <h3>You've clicked the button {this.state.clickedCount} times.</h3>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
});
