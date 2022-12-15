
import { HttpHeaders } from '@angular/common/http';
import { objectToQs } from './app.helpers';
//import { default as decode } from 'jwt-decode';
export class API {

  _http: any;
  _path: any = 'http://localhost:3000';
  _token: any;
  _tokenGSA: any;
  _idl: any;

  /** @function constructora
   * @param {HttpClient} _http [Cliente http]
   * @param {string}     _name [Nombre de la api a la que se conectara]
   */
  constructor(
    _http,
    ) {
    this._http = _http;

  }

  /**
  *
  * @param {string}  url      La url a la que se hará la petición
  * @param {any}     params   El objeto con los parametros
  */
  get(url: string, params?: any) {
    // params = this.forzarIdCampus(params);
    var path = this._path + url;
    return this._http.get(path + '?' + objectToQs(params), { headers: new HttpHeaders()  });
  }


 /**
  *
  * @param {string}  url      La url a la que se hará la petición
  * @param {any}     params   El objeto con los parametros
  */
  post(url, params?) {
    var path = this._path + url;
    return this._http.post(path, params, { headers: new HttpHeaders() });
  }

}

