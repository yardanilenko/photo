const express = require('express');
const route = express.Router();
const {User} = require('../db/models/indexmodels');

route.get('/api/users/:name', async (req, res) => {
    const {name} = req.params;
    try {
        const response = await User.findOne({where: {name}});
        console.log("response", response)
        if (response) {
            res.json({
                userId: response.id,
            });
        } else {
            res.status(404).json({
                message: 'User not found',
            });
        }
    } catch (error) {
        res.status(500).json({error});
    }
})

module.exports = route;