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
    $('#modal1').openModal();
  },

  startMeteorSubscriptions() {
    Meteor.subscribe("users");
  },

  render() {

    return (
      <div>
        <h3>Button Presser, simple</h3>
        <a
          className="waves-effect waves-light btn"
          href="#modal1"
          onClick={this.handleClick}>
            Click me
        </a>
        <div id="modal1" className="modal bottom-sheet">
          <div className="modal-content">
            <h4>You've clicked the button:</h4>
            <h4>{this.state.clickedCount} times!</h4>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Ok!</a>
          </div>
        </div>
      </div>
    );
  }
});
