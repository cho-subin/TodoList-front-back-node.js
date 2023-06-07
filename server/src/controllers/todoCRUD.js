// const mongoose = require('mongoose'); //mongoose 불러오기
const ListModel = require('../models/list'); // list 모델+스키마 불러오기

const createList = async (req, res, next) => {
    const createdList = new ListModel({
        content : req.body.content,
        check : req.body.check
    })
    // save(): mongoose에서 생성한 모델과 스키마에 연결해서 사용가능,
    // 그리고 무거운 작업들을 모두 수행할 수 있는 큰 장점이 있다.
    let result
    try {
        result = await createdList.save();
    }
    catch (err) {
        console.log(err);
        return next(err); // 오류가 생겼을때 코드 실행 중단.
    }
    res.json(result);
}

const getList = async (req, res, next) => {
    let getUser;

    try {
        getUser = await ListModel.find().exec(); // exec() : promiss로 반환하기위해 쓴다.
    }
    catch (err) {
        console.log(err);
        return next(err); // 오류가 생겼을때 코드 실행 중단.
    }
    res.json(getUser)
}

const patchList = async (req, res, next) => {
    const id = req.params.id
    const { content, check } = req.body

    console.log('check', check);
    console.log('content', content);

    try {
        const list = {};
        // name 및 age 필드를 검사하여 업데이트할 필드를 동적으로 설정해 불필요한 업데이트를 방지
        if (content !== undefined) {
            list.content = content;
        }
        if (check !== undefined) {
            list.check = check;
        }
        console.log('list1', list);

        const updateList = await ListModel.findOneAndUpdate(
            { _id: id },
            list,
            { new: true }
        );

        if (!updateList) {
            return res.status(404).json({ message: '다시 한번 시도해주세요.' })
        }
    }
    catch (err) {
        console.log(err);
        return next(err); // 오류가 생겼을때 코드 실행 중단.
    }

    res.json({ message: 'list 정보 업데이트 성공' });
}

const deleteList = async (req, res, next) => {
    const id = req.params.id

    console.log('id',id)
    
    let list;
    if(id){
        try{
            list = await ListModel.findById(id).exec();
            await list.deleteOne();
        }
        catch{
            console.log(err);
            return next(err); // 오류가 생겼을때 코드 실행 중단.
        }

        res.json({message : '마지막 항목이 삭제되었습니다.'})
    }

    else if(id==undefined){
        try {
            await ListModel.deleteMany({});
        }
        catch {
            console.log(err);
            return next(err); // 오류가 생겼을때 코드 실행 중단.
        }

        res.json({ message: '모든 항목이 삭제되었습니다.' })
    }
}

exports.createList = createList;
exports.getList = getList;
exports.patchList = patchList;
exports.deleteList = deleteList;