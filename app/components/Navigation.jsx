var React          = require('react');
var {Link, IndexLink}         = require('react-router');
var Navigation = React.createClass({
  render(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              <i className="fa fa-clock-o fa-fw"></i> React Timer App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><i className="fa fa-hourglass-start fa-fw"></i> Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><i className="fa fa-clock-o fa-fw"></i> Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              <span>Coded by:
              <a href="#" target="_blank"> <i className="fa fa-user"></i> Alan Fidelino</a></span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Navigation;
