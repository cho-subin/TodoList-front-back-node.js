import React, { useEffect, useState } from 'react'
import Buttons from '../components/Buttons';
import Input from '../components/Input';
import List from '../components/List';
import '../css/Main.css';

const Main = () => {

    const [isListUpdated, setListUpdated] = useState(false);

    const handleListUpdated = () => {
        setListUpdated(true);
    }

    useEffect(() => {
        if (isListUpdated) {
            // 리스트가 업데이트되었으므로 필요한 작업 수행
            // 예: 다시 데이터를 가져온다.
            setListUpdated(false); // 업데이트 후 상태 초기화
        }
    }, [isListUpdated]);
    
    return (
        <div className='main'>
            <h1>To Do List</h1>
            <Input onListUpdated={handleListUpdated} />
            <List onListUpdated={handleListUpdated} />
            <Buttons />
        </div>
    )
}

export default Main;
