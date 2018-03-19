import React, {Component} from 'react';
import className from 'classnames';
export default class Banner extends Component {
  render() {
    // const style = {
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   height: 400,
    //   backgroundImage: 'url(assets/img/background.jpeg)'
    // };

    return (
     <div className="Banner">
      </div>)
  }
}

class Box extends Component {
  render() {
    const style = {
      display: 'inline-block',
      border: '1px solid #f8f8f8',
      padding: '5 20'
    };

    return (
      <div className="box" style={style}>
      </div>
    )
  }
}