const { Router } = require('express');
const {getActivities, getActivitiesById} = require("../controllers/activities.controller");

const router = Router();

router.get('/', getActivities);
router.get('/:id', getActivitiesById);

module.exports = router;