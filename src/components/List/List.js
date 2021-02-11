import React from 'react';
import './List.css'
import Card from '../Card/Card'

import { TiUserAdd} from 'react-icons/ti'

function List() {
    return (
        <div className="List">
            <header className="listHeader">
                <h2 className="h2tittle">Tarefas: </h2>
                
            </header>


            <ul>
                <Card />
                <Card />
                <Card />
                <Card />

            </ul>
        </div>
    )
}

export default List;