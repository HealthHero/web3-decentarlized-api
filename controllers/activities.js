
const { Activities } = require("../database/models");
const Moment = require('moment-timezone');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);


module.exports = {
    async getActivities(select, param) {
        const activity = await Activities.findOne(
            {
                attributes: select,
                where: param,
            },
        );
        return activity;
    },

    async insertActivities(params) {
        const activity = await Activities.create(params);
        return activity.dataValues.id;
    },

    async updateActivities(params, where) {
        const activity = await Activities.update(params, { where, individualHooks: true });
        return activity[0];
    },

    async createAndUpdateStepsActivity(req, res) {
        if (req.role === "user") {
            const activityData = {
                source: req.body.source,
                activity_type: req.body.activity_type,
                provider: req.body.provider,
                description: req.body.description,
                user_id: req.userId,
                source_info: req.body.source_info,
                start_time: await moment(new Date(req.body.start_time)).tz('America/New_York').startOf('day').toISOString(),
                end_time: await moment(new Date(req.body.start_time)).tz('America/New_York').endOf('day').toISOString(),
            }
            const previousActivities = await module.exports.getActivities(["id"], activityData);
            activityData.step_count = req.body.steps_count;
            let activity;
            try {
                if (previousActivities) {
                    activity = await module.exports.updateActivities({ step_count: req.body.steps_count }, {
                        id: previousActivities.id,
                    });
                } else {

                    activityData.step_count = req.body.steps_count;
                    activityData.created_at = new Date(),
                        activityData.updated_at = new Date()

                    activity = await module.exports.insertActivities(activityData);
                }
            } catch (err) {
                console.log(err);
            }
            res.status(200).send({ activity: "Steps are create or Updated Successfully" });
        } else {
            res.status(200).send({ message: "only users can create activities" });

        }
    }
}