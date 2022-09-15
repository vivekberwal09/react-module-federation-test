import React from 'lib-app/react';

const styleMapping = {
  primary: {
    marginLeft: '10px',
    color: '#fff',
    backgroundColor: '#409eff',
    borderColor: '#409eff',
    padding: '12px 20px',
    fontSize: '14px',
    borderRadius: '4px',
    outline: 'none',
    border: '1px solid #dcdfe6',
    cursor: 'pointer',
  },
  warning: {
    marginLeft: '10px',
    color: '#fff',
    backgroundColor: '#e6a23c',
    borderColor: '#e6a23c',
    padding: '12px 20px',
    fontSize: '14px',
    borderRadius: '4px',
    outline: 'none',
    border: '1px solid #dcdfe6',
    cursor: 'pointer',
  },
};

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    var type = this.props.type || 'primary';
    return    <div>
      <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
      Click me
    </button>
  </div>;
  }
}
