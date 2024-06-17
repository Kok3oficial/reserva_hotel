const Reserva = require('../models/reserva');

// Crear reserva
exports.crearReserva = async (req, res) => {
    try {
        const nuevaReserva = new Reserva(req.body);
        await nuevaReserva.save();
        res.status(201).json(nuevaReserva);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener lista de reservas
exports.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find(req.query);
        res.status(200).json(reservas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener información de una reserva específica
exports.obtenerReservaPorId = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.status(200).json(reserva);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar información de una reserva
exports.actualizarReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.status(200).json(reserva);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar una reserva específica
exports.eliminarReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findByIdAndDelete(req.params.id);
        if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
        res.status(200).json({ message: 'Reserva eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener lista de reservas con filtros
exports.obtenerReservas = async (req, res) => {
    try {
        const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes } = req.query;
        let filter = {};

        if (hotel) filter.hotel = hotel;
        if (fecha_inicio && fecha_fin) filter.fecha = { $gte: new Date(fecha_inicio), $lte: new Date(fecha_fin) };
        if (tipo_habitacion) filter.tipo_habitacion = tipo_habitacion;
        if (estado) filter.estado = estado;
        if (num_huespedes) filter.num_huespedes = { $gte: Number(num_huespedes) };

        const reservas = await Reserva.find(filter);
        res.status(200).json(reservas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

