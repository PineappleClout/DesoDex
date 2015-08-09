var React = require("react");

var Router = require("react-router");
var Link = Router.Link;

var UserLink = React.createClass({

  propTypes: {
      address: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      shortId: this.props.address
    };
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      shortId: nextProps.address.substr(0, 8)
    });
  },

  render() {
    return (
      <Link to="userDetails">
        { this.props.showIcon &&
          <span className="glyphicon glyphicon-user"></span> } { this.state.shortId + '\u2026' }
      </Link>
    );
  }
});

module.exports = UserLink;
