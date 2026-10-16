import http from 'k6/http'
import { sleep, check } from 'k6'
import { pegarBaseURL } from '../utils/vaviaveis.js'
const postLogin = JSON.parse(open ('../fixtures/postLogin.json'))

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '50s', target: 10 },
    { duration: '20s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<3000', 'max<5000'],
    http_req_failed: ['rate<0.01']
  },
}


export default function () {
    const url = pegarBaseURL() + '/login'
    const payload = JSON.stringify(postLogin)

    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    }

    const res = http.post(url, payload, params)

    check(res, {
        'Verificar se o status code é 200': (r) => r.status === 200,
        'Verificar se o token e uma string': (r) => typeof(r.json().token) == 'string'
    })

    sleep(1)
}