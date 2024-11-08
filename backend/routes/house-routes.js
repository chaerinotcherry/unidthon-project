const db = require('../models'); 
const Gonggo = db.Gonggo; 
const GonggoSchedule = db.GonggoSchedule;
const GonggoApt = db.GonggoApt;
const GonggoAptNear = db.GonggoAptNear;
const express = require('express');
const gonggoApt = require('../models/gonggoApt');
const router = express.Router();

router.get('/:houseId/info', async (req, res) => {
    const {houseId} = req.params;
    const gonggo = await Gonggo.findOne({ where: { id: houseId } });
    const schedules = await GonggoSchedule.findOne({
        where:{gonggoId: houseId},
        butes: {
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
    const newDate = new Date(schedules.접수마감일);
    if(today<newDate) status='공고중';
    else status='공고 마감';

    const differenceInTime = newDate - today; 
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    const dday = "D-"+differenceInDays;
    console.log(apts);
    
    res.status(200).json({
        id: gonggo.id,
        '공고명': gonggo.공고명,
        '주관사': gonggo.주관사,
        '공고유형': gonggo.공고유형,
        '공고상태': status,
        '접수마감': dday,
        '공급일정': schedules,
        '공급정보': apts,
        '공고링크': gonggo.공고링크
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

        const response = await Promise.all(gonggos.map(async gonggo => {
            const schedule = await GonggoSchedule.findOne({ where: { gonggoId: gonggo.id } });
            const rent = await GonggoApt.min('월세', {
                where: { gonggoId: gonggo.id }
            });
            const city = await GonggoApt.findOne({
                where: { gonggoId: gonggo.id },
                attributes: 
                    ['시도군구']
                
            });
            if (!schedule || !schedule.접수마감일) {
                // Handle case where schedule is not found or 접수마감일 is not set
                return { dday: "No deadline" }; // Or any default value you prefer
            }
            let text = '접수마감';
            let dday;
            
            const startdate = new Date(schedule.접수시작일);
            if(startdate>today) {
                text = '점수시작';
                const differenceInTime = startdate - today; // Time difference in milliseconds
                const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24)); // Convert to days
                dday = "D-" + differenceInDays;
            } else {
                const deadline = new Date(schedule.접수마감일); // Convert to Date object
                const differenceInTime = deadline - today; // Time difference in milliseconds
                const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24)); // Convert to days
                
                if(differenceInDays>0){
                    dday = "D-" + differenceInDays;
                    
                } // Format as D-days
                else if (differenceInDays==0) dday = "D-DAY";
                else{ dday = "D+" + -differenceInDays;
                }
            }
            return {
                '공고명': gonggo.공고명,
                '지역': city.시도군구,
                '최소 월세': rent,
                [text] : dday // Add the calculated dday
            };
        }));

        res.status(200).json(response);

    }
});

module.exports = router;
