const express = require('express');
const path = require('path');
const router = express.Router();
const { getAllCars, getCarById, addCar, updateCar, deleteCar } = require('../carModel');

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/admin.html'));
});


router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});


router.get('/cars', (req, res) => {
    res.json(getAllCars());
});

router.post('/cars', (req, res) => {
    const newCar = addCar(req.body);
    res.status(201).json(newCar);
});

router.get('/cars/:id', (req, res) => {
    const car = getCarById(parseInt(req.params.id));
    if (car) {
        res.json(car);
    } else {
        res.status(404).send('Car not found');
    }
});

router.put('/cars/:id', (req, res) => {
    const updatedCar = updateCar(parseInt(req.params.id), req.body);
    if (updatedCar) {
        res.json(updatedCar);
    } else {
        res.status(404).send('Car not found');
    }
});

router.delete('/cars/:id', (req, res) => {
    const deletedCar = deleteCar(parseInt(req.params.id));
    if (deletedCar) {
        res.status(204).send();
    } else {
        res.status(404).send('Car not found');
    }
});

module.exports = router;
