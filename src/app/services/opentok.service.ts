import { Injectable } from '@angular/core';

import * as OT from '@opentok/client';
import config from '../config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OpentokService {
  sessionId: object
  session: OT.Session;
  token: string;

  constructor(private http: HttpClient) { }

  getOT() {
    return OT;
  }
  
  initSession(apikey, sessionId, token) {
      if (sessionId) {
        this.session = OT.initSession(apikey, sessionId);
        this.token = token;
        return Promise.resolve(this.session);
      } else {
        " in the else of init session"
        return fetch(config.SAMPLE_SERVER_BASE_URL + '/session')
          .then((data) => data.json())
          .then((json) => {
            this.session = this.getOT().initSession(json.apiKey, json.sessionId);
            this.token = json.token;
            return this.session;
          });
      }
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.session.connect(this.token, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(this.session);
        }
      });
    });
  }
}
