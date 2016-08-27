import React from 'react';
import { Router } from 'react-router';
import {Panel, FormControl, Button, Checkbox} from 'react-bootstrap';

// Navigation mixin doesn't seem to exist
// http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
import {withRouter} from 'react-router';

var LoginPage = React.createClass({

  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  render: function(){

    return <div className="col-md-4 col-md-offset-4">

        <div className="text-center">
          <h1 className="login-brand-text">SB Admin React</h1>
          <h3 className="text-muted">Created by <a href="http://startreact.com">StartReact.com</a> team</h3>
        </div>

        <Panel header={<h3>Please Sign In</h3>} className="login-panel">

          <form role="form" onSubmit={this.handleLogin}>
            <fieldset>
                <FormControl placeholder="Username" />
                <FormControl placeholder="Password" />
                <Checkbox inline>
                  Remember Me
                </Checkbox>
              <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>

            </fieldset>
          </form>

        </Panel>

      </div>


  },

  setLoginID: function(e) {

    this.setState({
      loginID: e.target.value,
      loginError: ''
    });

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  handleLogin: function(e){

    this.props.router.push('dashboard');

    return false;

  }

});

export default LoginPage;
