const router = require('express').Router();



const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');
//const { route } = require('./user-routes');

router
    .route('/')
    .get(getAllThoughts)

router
    .route("/:userId")
    .post(createThought);
    //.post(createThought);

router
    .route('/:thoughtid')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions/')
    .post(addReaction)
    //.delete(deleteReaction)

router
    .route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction);

module.exports = router;
