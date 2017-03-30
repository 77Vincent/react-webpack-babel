import React from 'react';
import 'scaffold.css';
import '../styles/index.scss';
import Toggling from 'toggling';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
        <button className="trigger">Trigger</button>
        <h1 className="target">Target</h1>
      </div>
    )
  }

  componentDidMount() {
    new Toggling({
      trigger: '.trigger',
      target: '.target',
      handler(tar, tri) {
        this.toggle(tar);
        this.toggleClass(tri, 'toggle');
      }
    })
  }
}
