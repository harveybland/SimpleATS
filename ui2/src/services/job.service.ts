import { HttpService } from './http.service';

export class JobService {

    constructor() { }

    async getJobListing() {
        return await HttpService.httpGet('jobs');
    }
}