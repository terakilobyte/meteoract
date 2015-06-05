var cs = React.addons.classSet;


Test = ReactMeteor.createClass({
  mixins: [ReactMeteor.Mixin],

  render: function() {
    return (
      <h3 className="red-text">You've clicked the button {this.props.text} times</h3>
    );
  }
});

Test.propTypes = {
  text: React.PropTypes.string.isRequired
};