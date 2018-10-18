import * as React from 'react';

class AsyncComponent extends React.Component {

  state = { settled: false, ComponentToRender: null };

  mapFunctionWrapper = (map) => (value) => this.setState({ settled: true, ComponentToRender: map(value) });

  componentDidMount() {
    const { job, onFulfilled, onRejected } = this.props;

    job.then(this.mapFunctionWrapper(onFulfilled), this.mapFunctionWrapper(onRejected));
  }

  render() {
    const { job, onFulfilled, onRejected, WhilePending, ...forwardProps } = this.props;
    const { settled, ComponentToRender } = this.state;

    return (
      settled ?
        <ComponentToRender {...forwardProps} /> :
        <WhilePending {...forwardProps} />
    );
  }
}

export default AsyncComponent;