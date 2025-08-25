import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    // 1. constructor(): Initializes state and binds event handlers
    // Called before the component is mounted.
    // Best place to set initial state or bind methods to the component instance.
    this.state = {
      message: 'Initial message from constructor',
      count: 0
    };
    console.log('1. Constructor called');
    this.handleClick = this.handleClick.bind(this); // Binding event handler.
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 2. static getDerivedStateFromProps(): Called before render on both mounting and updating
    // Syncs state based on changes in props. Returns an object to update state or null to indicate no changes.
    console.log('2. getDerivedStateFromProps called');
    if (nextProps.initialCount !== prevState.count) {
      return { count: nextProps.initialCount }; // Updates state based on new props.
    }
    return null; // Indicates no changes to the state.
  }

  componentDidMount() {
    // 3. componentDidMount(): Called after the component is mounted (inserted into the DOM)
    // Good for fetching data, setting up subscriptions, or interacting with the DOM.
    console.log('3. componentDidMount called');
    // Simulate an API call after component mounts.
    setTimeout(() => {
      this.setState({ message: 'Data fetched after mounting' });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 4. shouldComponentUpdate(): Controls whether the component should re-render
    // Used for performance optimization. Returns true to re-render, false to prevent re-render.
    console.log('4. shouldComponentUpdate called');
    // Only re-render if the count is even, for example.
    if (nextState.count % 2 === 0) {
      return true; // Allow re-render.
    }
    return false; // Prevent re-render.
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 5. getSnapshotBeforeUpdate(): Captures information from the DOM before it's updated
    // The returned value is passed as a parameter to componentDidUpdate.
    console.log('5. getSnapshotBeforeUpdate called');
    // For example, capturing scroll position before an update.
    if (prevState.count !== this.state.count) {
      return `Previous count was: ${prevState.count}`;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 6. componentDidUpdate(): Called after the component is updated and re-rendered
    // Ideal for performing side effects based on changes in props or state.
    console.log('6. componentDidUpdate called');
    if (snapshot !== null) {
      console.log('Snapshot from getSnapshotBeforeUpdate:', snapshot); // Logs snapshot captured before update.
    }
    if (prevState.message !== this.state.message) {
      console.log('Message has been updated:', this.state.message); // Example of side effect based on state change.
    }
  }

  componentWillUnmount() {
    // 7. componentWillUnmount(): Called just before a component is unmounted (removed from the DOM)
    // Used for cleanup tasks like clearing timers or unsubscribing from events.
    console.log('7. componentWillUnmount called');
    // Example: Clearing a timer before unmounting to prevent memory leaks.
    // clearInterval(this.timer); 
  }

  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1,
      message: 'Count updated'
    }));
  }

  render() {
    // 8. render(): The only required method in a class component
    // Responsible for returning the JSX (UI) to be displayed.
    console.log('8. render called');
    const { message, count } = this.state;
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Message: {message}</p>
        <p>Count: {count}</p>
        <button onClick={this.handleClick}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleDemo;