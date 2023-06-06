import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import '../css/List.css';

const List = ({ onListUpdated }) => {

    const [lists, setLists] = useState();
    
    const [isCheck, setIsCheck] = useState(null);
    const [isClick, setIsClick] = useState('n');
    const [idx, setIdx] = useState(null);

    // 작성한 todo list 불러오기
    const getList = async() => {
        await axios.get('/api/lists/get')
        .then((res) => {
            console.log(res)
            setLists(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    // check F/T lists에 업데이트 하기
    const checkTF = async (idx) => {
        console.log(idx)

        if (lists[idx]?.check === true){
            setIsCheck(false);
            setIdx(idx);
            setIsClick('y');
        }
        else if (lists[idx]?.check === false){
            setIsCheck(true);
            setIdx(idx);
            setIsClick('y');
        }
    };

    // check 상태변경 mongoDB
    const patchCheck = useCallback(async () => {
        if (isClick === 'y' && idx >= 0 && idx < lists?.length) {
            const listId = lists[idx]?._id;
            let check = { check: isCheck }

            await axios.patch(`/api/lists/patch/${listId}`, check)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [lists, idx, isCheck, isClick]);

    useEffect(() => {
        getList();
    }, [onListUpdated]);

    useEffect(() => {
        if ((isCheck !== null && idx !== null) || (isCheck !== undefined && idx !== undefined)){
            patchCheck();
        }
    }, [idx, isCheck, patchCheck])

    // console.log('lists', lists);
    // console.log('isCheck', isCheck);
    // console.log('idx', idx);

    return (
        <table className="list-table">
            {/* <colgroup> : table의 컬럼(td태그)에 적용할 스타일 width, background를 미리 적용 가능한 태그 */}
            <colgroup>
                <col width="10%" />
                <col width="90%" />
            </colgroup>

            {/* <thead> : HTML 테이블에서 헤더 콘텐츠(header content)들을 하나의 그룹으로 묶을 때 사용
                각 영역(header, body, footer)을 명시하기 위해 <tbody>, <tfoot> 요소와 함께 사용 */}
            <thead>
                <tr>
                    <th>check</th>
                    <th>To do List</th>
                </tr>
            </thead>
            <tbody id="listBody">
                {lists?.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td>
                                <input type="checkbox" className="btn-chk" defaultChecked={item?.check} onChange={() => { checkTF(idx); }} />
                            </td>
                            <td>{item?.content}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default List
