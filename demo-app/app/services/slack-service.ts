import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class SlackService {
    constructor (private http: HttpClient) {
    }

    sendMessage ( completeUrl, component, user, question ) {
        const url = 'https://hooks.slack.com/services/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';
        const body: any = {
            'text': `New Component Question from <@${user}>!`,
            'attachments': [
                {
                    'title': `Question for Component: ${component}`,
                    'text': `${question}`,
                    'color': `#3AA3E3`
                },
                {
                    'title': `Component page`,
                    'text': `<${completeUrl}|${component}>`
                }
            ]
        };
        const options: {
            headers?: HttpHeaders,
            observe?: 'body',
            params?: HttpParams,
            reportProgress?: boolean,
            responseType: 'text',
            withCredentials?: boolean
        } = {
            responseType: 'text'
        };
        const payload = JSON.stringify(body);
        return this.http.post(url, payload, options);
    }
}
