const asyncHandler = require('express-async-handler')
//@desc Get goals
//@route GET /api/goals
//@access public
const getGoals = asyncHandler (async(req,res)=>{
    res.status(200).json({msg: 'Get Goals'})
})
//@desc SET goals
//@route POST /api/goals
//@access public
const setGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('add a text field')
    }
    res.status(200).json({msg : 'set goal'})
})
//@desc Update goals
//@route PUT /api/goals:id
//@access public
const updateGoal = asyncHandler( async(req,res)=>{
    res.status(200).json({msg: `updated goal ${req.params.id}`})
})
//@desc delete goals
//@route DELETE /api/goals:id
//@access public
const deleteGoal = asyncHandler(async(req,res)=>{
    res.status(200).json({msg: `deleted goal ${req.params.id}`})
})
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,

}