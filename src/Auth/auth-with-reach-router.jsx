import React from "react";
import { Router } from "@reach/router";

let UserContext = React.createContext();

class App extends React.Component {
  state = {
    user: null,
    setUser: user => {
      this.setState({ user });
    }
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <PrivateRoute as={Dashboard} path="/dashboard" />
        </Router>
      </UserContext.Provider>
    );
  }
}

class PrivateRoute extends React.Component {
  static contextType = UserContext;

  render() {
    let { as: Comp, ...props } = this.props;
    return this.context.user ? <Comp {...props} /> : <Login />;
  }
}

function doWhateverYouNeedToDoToLogin() {
  const message = "Blaaaaah!";
  console.log(message);
  return message;
}

class Login extends React.Component {
  static contextType = UserContext;

  render() {
    return (
      <form
        onSubmit={async () => {
          let user = await doWhateverYouNeedToDoToLogin();
          this.context.setUser(user);
        }}
      />
    );
  }
}

function Home() {
  return <div>home</div>;
}

function About() {
  return <div>about</div>;
}

function Dashboard() {
  return <div>Protected dashboard</div>;
}
