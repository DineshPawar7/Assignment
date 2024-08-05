let cars = [];
let nextId = 1;

function getAllCars() {
    return cars;
}

function getCarById(id) {
    return cars.find(car => car.id === id);
}

function addCar(car) {
    car.id = nextId++;
    cars.push(car);
    return car;
}

function updateCar(id, updatedCar) {
    const index = cars.findIndex(car => car.id === id);
    if (index !== -1) {
        cars[index] = { ...cars[index], ...updatedCar };
        return cars[index];
    }
    return null;
}

function deleteCar(id) {
    const index = cars.findIndex(car => car.id === id);
    if (index !== -1) {
        return cars.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    getAllCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar
};
