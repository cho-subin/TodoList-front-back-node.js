import React from 'react'
import axios from 'axios';
import Buttons from '../components/Buttons';
import Input from '../components/Input';
import List from '../components/List';
import '../css/Main.css';

const Main = () => {



    return (
        <div className='main'>
            <h1>To Do List</h1>
            <Input/>
            <List/>
            <Buttons/>
        </div>
    )
}

export default Main;
