import { Component } from 'react';
import './card-list-styles.css'
import Card from '../card/card-component.jsx'


class CardList extends Component {
  
  render(){
    const { monsters } = this.props;
    
    return (
      <div className='card-list' >
        {monsters.map((monster) => {
          return (
            <Card monster={monster} key={monster.id}/>
        )})}
      </div>
    )
  }
}

export default CardList;