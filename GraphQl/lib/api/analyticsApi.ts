import { BuildRequestOptions } from "./utils";
import request = require("request-promise");

export default class AnalyticsApi {
    static getAnalytics(branch, token, owner, app) {
        const endpoint = `/branches/${branch}/config`;
        var options = BuildRequestOptions(endpoint, token, owner, app);
        return request(options);



        // oses

        // models

        // sessions

        // languages
    }


    static getOses(branch, token, owner, app) {
        const endpoint = `/branches/${branch}/config`;
        var options = BuildRequestOptions(endpoint, token, owner, app);
        return request(options);
    }

    static deletePrBuildConfiguration(branch, token, owner, app) {
        const options = BuildRequestOptions(`/branches/${branch}/config`, token, owner, app);
        Object.assign(options, { method: 'DELETE' });
        return request(options);
    }
};
