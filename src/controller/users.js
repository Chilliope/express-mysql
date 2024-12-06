const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {        
        const [data] = await UsersModel.getAllUsers()

        res.status(200).json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createNewUser = async (req, res) => {
    const { body } = req
    try {
        await UsersModel.createNewUser(body)

        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        await UsersModel.updateUser(body, id)

        res.status(200).json({
            'message': 'UPDATE user success',
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        await UsersModel.deleteUser(id)

        res.status(204).json({
            'message': 'DELETE user success'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }

}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}