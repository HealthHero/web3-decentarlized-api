const Moment = require('moment-timezone');
const MomentRange = require('moment-range');
const { Op } = require("sequelize");
const moment = MomentRange.extendMoment(Moment);

module.exports = {
    async calculateLevel(req,res) {
        const xp = req.body.xp;
        let counter = 1;
        let levelBarrier = 100;
        while (xp >= levelBarrier) {
          counter++;
          levelBarrier *= 2;
        }
        res.status(200).send({level: counter });
    }
}