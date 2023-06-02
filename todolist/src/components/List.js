import React, { useState } from 'react';
import '../css/List.css';

const List = () => {

    const [list, setList] = useState([
        { text : 'HTML + CSS 공부하기', check : true },
        { text: 'JavaScript 공부하기', check: false },
        { text: '헬스 하기', check: true },
    ]);

    const [isCheck, setIsCheck] = useState();

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
                {list.map((item,idx)=>{
                    return(
                        <tr key={idx}>
                            <td>
                                <input type="checkbox" className="btn-chk" defaultChecked={item.check} />
                            </td>
                            <td>{item.text}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default List
