import { Request, Response } from 'express';

export default class SubjectsController {
    async index(request: Request, response: Response): Promise<Response> {
        return response.json({
            subjects: ['Matemática', 'Inglês', 'Português', 'Geografia'],
        });
    }
}
