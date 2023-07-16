const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plants');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/plants
router.get('/', ensureLoggedIn, plantsCtrl.getAll);
// POST /api/plants
router.post('/', ensureLoggedIn, plantsCtrl.create);
// GET /api/plants/details/:id
router.get('/details/:id', ensureLoggedIn, plantsCtrl.show);
// PUT /api/plants/confirm-water/:id
router.put('/confirm-water/:id', ensureLoggedIn, plantsCtrl.updateWatered);
// PUT /api/plants/edit/:id
router.put('/edit/:id', ensureLoggedIn, plantsCtrl.update);
// DELETE /api/plants/delete/:id
router.delete('/delete/:id', ensureLoggedIn, plantsCtrl.delete);

module.exports = router;
