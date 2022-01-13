const { Activities } = require("../../database/models");
const Moment = require('moment-timezone');
const MomentRange = require('moment-range');
const { Op } = require("sequelize");
const moment = MomentRange.extendMoment(Moment);

module.exports = {
    async calculateStars(req,res) {
        const userId = req.params.id;
        const mydates = [];
        const NUM_OF_DAYS = 5;
        let stars = 0;

        for (let i = 0; i <= NUM_OF_DAYS; i++) {
            const date = moment();
            date.subtract(i, "day").format("DD-MM-YYYY");
            mydates.push(date);
        }
        await Promise.all(mydates.map(async (dataset) => {
            const userActivities = await Activities.findAll({
                attributes: ["id", "user_id", "start_time", "end_time", "step_count"],
                where: {
                    activity_type: 2,
                    user_id: userId,
                    source: 0,
                    start_time: {
                        [Op.gte]: await dataset.tz("America/New_York").startOf("day").toISOString(),
                    },
                    end_time: {
                        [Op.lte]: await dataset.tz("America/New_York").add(24, "hours").toISOString(),
                    },
                },
            });
            if (userActivities.length > 0) {
                stars++;
            }
        }));
        if (stars >= 5) {
            stars = 5;
        }
        res.status(200).send({stars});
    }
}