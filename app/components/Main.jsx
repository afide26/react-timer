var React          = require('react');
var Nav            = require('Nav');

// Stateless Functional Component
var Main = (props)=>{
  return(
    <div>
      <div/>
        <div>
          <div>
            <Nav/>
            <p>Main.jsx Rendered</p>
            {props.children}
          </div>
        </div>
    </div>
  );
}

module.exports = Main;
