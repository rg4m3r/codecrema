import * as React from 'react';
import '../App.css';
import logo from '../Img/mug-hot-solid.png';


function Title(props) {
  const { description, title } = props;

  return (
    <div className='customTitle'>  
        <img className="Logo" src={logo} alt="Logo" width="50" height="50" />
        <h1 className='HeadTitle'>{title}</h1>
    </div>
  );
}


export default Title;
