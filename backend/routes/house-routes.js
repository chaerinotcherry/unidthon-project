const db = require('../models'); 
const Gonggo = db.Gonggo; 
const GonggoSchedule = db.GonggoSchedule;
const GonggoApt = db.GonggoApt;
const GonggoAptNear = db.GonggoAptNear;
const express = require('express');
const router = express.Router();

router.get('/:houseId/info', async (req, res) => {
    const {houseId} = req.params;
    const gonggo = await Gonggo.findOne({ where: { id: houseId } });
    const schedules = await GonggoSchedule.findOne({
        where:{gonggoId: houseId},
        attributes: {
        exclude: [
            'createdAt', 'updatedAt', 'gonggoId'
        ]}
    });
    const apts = await GonggoApt.findAll({
        where: {gonggoId: houseId},
        include: [
            {
                model: GonggoAptNear,
                as: '단지 주변 시설',
                required: false
            }
        ],
        attributes: {
            exclude: [
                'createdAt', 'updatedAt', 'gonggoId'
            ]}
    });
    const today = new Date();
    let status;
    if(today<schedules.접수마감일) status='공고중';
    else status='공고 마감';

    const differenceInTime = schedules.접수마감일 - today; 
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    const dday = "D-"+differenceInDays;
    console.log(apts);
    
    res.status(200).json({
        id: gonggo.id,
        '공고명': gonggo.공고명,
        '주관사': gonggo.주관사,
        '공고 유형': gonggo.공고유형,
        '공고 상태': status,
        '접수 마감': dday,
        '공급 일정': schedules,
        '공급 정보': apts,
        '공고 링크': gonggo.공고링크
    })
});


module.exports = router;
