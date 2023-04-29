const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
//@desc Get goals
//@route GET /api/goals
//@access public
const getGoals = asyncHandler (async(req,res)=>{
    const goals = await Goal.find()
    res.status(200).json(goals)
})
//@desc SET goals
//@route POST /api/goals
//@access public
const setGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})
//@desc Update goals
//@route PUT /api/goals:id
//@access public
const updateGoal = asyncHandler( async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedGoal)
})
//@desc delete goals
//@route DELETE /api/goals:id
//@access public
const deleteGoal = asyncHandler(async(req,res)=>{
   const goal = Goal.findById(req.params.id)
   if(!goal){
    res.status(400)
    throw new Error('Goal not found')
   }
   await goal.deleteOne()
    res.status(200).json({msg: `deleted goal ${req.params.id}`})
})
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,

}