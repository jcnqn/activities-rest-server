const {response} = require('express');

const activities = require('../data/activities.data');

const getActivities = (req, res = response) => {
    res.status(200).json(activities);
};

const getActivitiesById = (req, res = response) => {
    const {id} = req.params;

    if (isNaN(id)) {
        res.status(400).send({
            msg: 'The activity Id is not a number',
        });
    }

    const activityToSend = activities.find(act => act.activityId === Number(id));

    if (!activityToSend) {
        res.status(400).send({
            msg: `There is no activity with id ${id}`,
        });
    }

    res.status(200).json(activityToSend);
};

module.exports = {
    getActivities,
    getActivitiesById,
};