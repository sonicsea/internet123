import React, { Component } from 'react';
import { Panel, Table, Button, Modal } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Panel bsStyle="info" className="site-panel">
          <Panel.Heading>
            <Panel.Title componentClass="h3">My Sites</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <div className="site-edit">
              <Button bsStyle="link" bsSize="small" onClick={this.handleShow}>
                <img src="images/site-edit.png" width="20" alt="Edit Sites" />
              </Button>
            </div>
            <Table>
              <tr>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
              </tr>
              <tr>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
              </tr>
              <tr>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
              </tr>
            </Table>
          </Panel.Body>
        </Panel>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Site Management</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table>
              <tr>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
              </tr>
              <tr>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
              </tr>
              <tr>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
                <td><a href="http://google.com">test</a></td>
              </tr>
            </Table>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
