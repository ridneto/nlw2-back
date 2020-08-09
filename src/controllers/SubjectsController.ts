import { Request, Response } from 'express';

export default class SubjectsController {
    async index(request: Request, response: Response): Promise<Response> {
        return response.json({
            subjects: [
                { ds_subject: 'Matemática', id_subject: 'math' },
                { ds_subject: 'Inglês', id_subject: 'ingles' },
                { ds_subject: 'Português', id_subject: 'port' },
                { ds_subject: 'Geografia', id_subject: 'geo' },
            ],
        });
    }
}
