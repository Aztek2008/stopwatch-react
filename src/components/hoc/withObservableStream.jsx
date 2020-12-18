import React from "react";

const withObservableStream = (observable, triggers) => (Component) => {
  return class extends React.Component {
    componentDidMount() {
      this.subscription = observable.subscribe((newState) =>
        this.setState({ ...newState })
      );
    }

    componentWillUnmount() {
      this.subscription.unsubscribe();
    }

    render() {
      return <Component {...this.props} {...this.state} {...triggers} />;
    }
  };
};

export default withObservableStream;
