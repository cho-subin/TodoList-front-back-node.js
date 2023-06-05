// 스키마(데이터 틀)와 model 만들기

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Schema() : 생성자 함수 메소드, new를 붙이면 js객체를 전달할 수 있다.

// mongoose의 스키마는 원한다면 추가적인 프로퍼티도 전달할 수도 있다.
const listSchema = new Schema({
    content: { type: String, required: true }, //required: true -> 필수 항목
    check: { type: Boolean, required: true }
})

// 스키마에 기반한 모델 추가
module.exports = mongoose.model('List', listSchema) //model(모델이름,위에서 만든 스키마 이름)