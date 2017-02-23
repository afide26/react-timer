var React          = require('react');
var Clock          = require('Clock')
var Timer = React.createClass({
  render(){
    return(
      <div>
        <Clock totalSeconds = {180}/>
      </div>
    )
  }
});

module.exports = Timer;
