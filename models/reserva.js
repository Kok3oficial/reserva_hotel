const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    hotel: String,
    fecha: Date,
    tipo_habitacion: String,
    estado: String,
    num_huespedes: Number,
    detalles: String
});

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;
