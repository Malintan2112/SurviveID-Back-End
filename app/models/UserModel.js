const Sequelize = require('sequelize')
const db = require('../config/database.js')

const { DataTypes } = Sequelize

const User = db.define('users', {
    // Personal Information
    idCardType:{
        type: Sequelize.ENUM,
        values: ['KTP', 'SIM', 'KIA','KARTU PELAJAR','PASPOR'],
        defaultValue: null
    },
    idCardImage: {
        type: DataTypes.STRING
    },
    idCardData: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING(100)
    },
    phone: {
        type: DataTypes.STRING(20)
    },
    name: {
        type: DataTypes.STRING(100)
    },
    gender: {
        type: Sequelize.ENUM,
        values: ['MEN', 'WOMEN', 'OTHERS'],
        defaultValue: null
    },
    dateOfBirth: {
        type: DataTypes.DATE
    },
    weight: {
        type: DataTypes.INTEGER
    },
    height: {
        type:  DataTypes.INTEGER
    },
    nameEmergencyPhone: {
        type: DataTypes.STRING
    },
    relationEmergencyPhone: {
        type: DataTypes.STRING
    },
    emergencyPhone: {
        type: DataTypes.STRING
    },
    idVillage: {
        type: DataTypes.INTEGER
    },
    address: {
        type: DataTypes.STRING
    },
    // End Personal Information
    userName: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    imgProfile: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    },
    role: {
        type: Sequelize.ENUM,
        values: ['USER', 'ADVISOR', 'ADMIN','PARTNER'],
        defaultValue: 'USER'
    },
    isEmailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    isPhoneVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }
}, {
    freezeTableName: true
})

module.exports = User;

