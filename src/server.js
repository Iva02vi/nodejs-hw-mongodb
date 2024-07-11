import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { env } from './utils/env.js';
import { getAllContacts, getContactById } from './sevices/contacts.js';

const PORT = Number(env('PORT', 3000));

export const setupServer = () => {
    const app = express();

    const logger = pino({
        transport: {
            target: 'pino-pretty'
        }
    });

    app.use(logger);
    app.use(cors());

    app.get('/contacts', async(req, res) => {
        const contacts = await getAllContacts();
        res.status(200).json({
            status: 200,
            message: 'Successfully found contacts!',
            data: contacts,
        });
    })


    app.get('/contacts/:contactId', async(req, res) => {
        const { contactId } = req.params;
        const contact = await getContactById(contactId);

        if (!contact) {
            res.status(404).json({
                message: 'Contact not found',
            });
            return;
        }

        res.status(200).json({
            status: 200,
            message: `Successfully found contact with id ${contactId}!`,
            data: contact,
        });
    })

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}