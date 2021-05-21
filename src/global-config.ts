import { Injectable } from '@angular/core';

@Injectable()

export class GlobalConfig { }

// Production
//export const url_api = 'https://api.bzs.com.br/api/v1/';
export const url_api = 'http://dev.api.sistema/api/v1/';

// Test
// export const url_api = 'http://10.0.0.4:8000/api/v1/';