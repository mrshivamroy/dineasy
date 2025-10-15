import { Router } from 'express';
import { sendReservation } from '../controllers/reservation.js';

const router = Router();

router.post("/send", sendReservation)
export default router;