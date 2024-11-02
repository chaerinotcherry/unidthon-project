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
                required: false,
                attributes: {
                    exclude: [
                        'createdAt', 'updatedAt', 'gonggoAptId'
                    ]
                }
            }
        ],
        attributes: {
            exclude: [
                'createdAt', 'updatedAt', 'gonggoId'
            ]}
    });
    const today = new Date();
    let status;
    console.log(schedules.접수마감일);
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

router.get('/', async (req, res) => {
    const filter = req.query.filter;
    if(!filter){
        const gonggos = await Gonggo.findAll({
            include: [
                // {
                //     model: GonggoApt,
                //     as: '정보',
                //     required: false
                // }
            ]
        });

        const today = new Date();

        const response = gonggos.map(async gonggo => {
            const schedule = await GonggoSchedule.findOne({where: {gonggoId: gonggo.id}}); // Ensure schedules is an array
            
            const deadline = new Date(schedule.접수마감일); // Convert to Date object
            const differenceInTime = deadline - today; // Time difference in milliseconds
            const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24)); // Convert to days
            const dday = "D-" + differenceInDays; // Format as D-days

            return {
                dday // Add the calculated dday
            };
        });

        res.status(200).json(response);

    }
});

module.exports = router;
