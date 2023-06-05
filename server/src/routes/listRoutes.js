const express = require('express');
const todoCRUD = require('../controllers/todoCRUD');

// express.Router로 접근할 수 있는 router 설정
const router = express.Router();

router.post('/post', todoCRUD.createList);
router.get('/get', todoCRUD.getList);
router.patch('/patch/:id', todoCRUD.patchList);

module.exports = router;