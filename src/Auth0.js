import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dcaceres7.auth0.com',
    clientID: 'NZXsgZr1jYc5dAZwzKtVTGTAVsSWtYSE',
    redirectUri: 'http://localhost:3000/home',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  logout() {
    this.auth0.logout({
        returnTo: window.location.origin
    });
  }
}