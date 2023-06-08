import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Buttons from '../components/Buttons';
import Input from '../components/Input';
import List from '../components/List';
import '../css/Main.css';

const Main = () => {

    const [isListUpdated, setListUpdated] = useState(false);
    const [lists, setLists] = useState();

    const handleListUpdated = () => {
        setListUpdated(true);
    }

    useEffect(() => {
        if (isListUpdated) {
            // 리스트가 업데이트되었으므로 필요한 작업 수행
            // 예: 다시 데이터를 가져온다.
        }
    }, [isListUpdated]);

    // 작성한 todo list 불러오기
    const getListMain = async () => {
        await axios.get('/api/lists/getMain')
            .then((res) => {
                console.log(res)
                setLists(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
            getListMain();
    }, [isListUpdated]);
    
    return (
        <div className='main'>
            <h1>To Do List</h1>
            <Input onListUpdated={getListMain} />
            <List lists={lists} />
            <Buttons lists={lists} onListUpdated={handleListUpdated }/>
        </div>
    )
}

export default Main;
