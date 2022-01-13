const { Activities } = require("../../database/models");
const Moment = require('moment-timezone');
const MomentRange = require('moment-range');
const { Op } = require("sequelize");
const moment = MomentRange.extendMoment(Moment);

module.exports = {
    async calculateHPXP(req,res){
        let userId = req.params.id
        let startTime = req.body.startTime
        let endTime = req.body.endTime
        let hp = 0;
        let xp = 0;
        let activities;

        if (startTime && endTime) {
          startTime =  await moment(new Date(req.body.startTime)).tz('America/New_York').startOf('day').toISOString(),
          endTime = await moment(new Date(req.body.endTime)).tz('America/New_York').startOf('day').toISOString(),
            activities = await Activities.findAll({
              attributes: ["id", "user_id", "start_time", "end_time", "step_count"],
              where: {
                activity_type: 2,
                user_id: userId,
                source: 0,
                start_time: {
                  [Op.gte]: startTime,
                },
                end_time: {
                  [Op.lte]: endTime,
                },
              },
            });
          } else {
            activities = await Activities.findAll({
              attributes: ["id", "user_id", "start_time", "end_time", "step_count"],
              where: {
                activity_type: 2,
                user_id: userId,
                source: 0,
              },
            });
          }
        
          activities.forEach(
            (activity) => {
              if ((activity.dataValues.step_count >= 5000 && activity.dataValues.step_count <= 9999)) {
                hp += 2;
                xp += 10;
              } else if ((activity.dataValues.step_count >= 10000 && activity.dataValues.step_count <= 14999)) {
                hp += 4;
                xp += 20;
              } else if ((activity.dataValues.step_count >= 15000 && activity.dataValues.step_count <= 19999)) {
                hp += 6;
                xp += 30;
              } else if ((activity.dataValues.step_count >= 20000 && activity.dataValues.step_count <= 24999)) {
                hp += 8;
                xp += 40;
              } else if (activity.dataValues.step_count >= 25000) {
                hp += 10;
                xp += 50;
              }
            },
          );
        res.status(200).send({hp, xp});  
    }
}