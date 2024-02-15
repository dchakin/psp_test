const apiFormat = (value) => {
  return {
    status: 1,
    description: 'string',
    error_cod: 0,
    data: value,
  }
}

const apiFormatStr = (value) => JSON.stringify(apiFormat(value))

const token = (time) => {
  let data = {
    access_token: `token ${time}`,
    rt: 'token',
    token_type: 'string',
  }

  return JSON.stringify(data)
}

const requestIn = {
  amount_min: 500,
  amount_max: 29345,
  amount_err: false,
  no_card: false,
  banklist: [[4, 'Тинькофф/Tinkoff', '/images/tinkoff.svg']],
  status: 'created',
  userblock: false,
  id: 6718840,
  paymentnum: '6718840',
  amount_edit: true,
  amount: 1200.23,
  bank_name: 'Тинькофф',
  currency: 643,
  rate: 0.0,
  fee: 0.0,
  payment_method: {
    method: ['P2P', 'SBP'],
    default: 'SBP',
  },
  success_url: 'https://www.google.com/',
  fail_url: 'https://www.yandex.ru/',
  return_url: 'https://www.mozilla.org/ru/firefox/new/',
  mail: 'support@kiberpay.com',
  pspname: 'KiberPay',
  helpdesk: true,
  ft: true,
  merch_name: 'Leon',
  uid: 'ee9b2bd3-2e5a-4195-bf6c-880e252fb33c',
  merchant_uid: 'Mylink',
  customer_uid: '',
  payment_method_saverequestin: 'P2P',
  pan: '2200 7009 5932 7957',
  phone: '9286831731',
  qr_data: '',
  qr_caption: '5314413561',
  holder: 'Даудов Гасан',
  flow: 1,
  time_passed: 182,
  time_passed_created: 212,
  mail_cus: '',
  attached: false,
}
const requestInStr = JSON.stringify(apiFormat(requestIn))

const withdrawal = {
  id: 23426,
  amount: 1500.43,
  pan: null,
  phone: null,
  bank_name: null,
  bank_id: null,
  currency: 643,
  status: 'creating',
  mail: '',
  success_url: null,
  fail_url: null,
  return_url: null,
  banks: [
    [1, 'Сбербанк/Sberbank', '/image'],
    [2, 'Альфа-банк/Alfa-bank', '/image'],
    [3, 'Открытие/Otkrytie', '/image'],
  ],
  // payment_method: {
  //   method: ["SBP", "P2P"],
  //   default: "SBP",
  // },
  payment_method: {
    method: ['SBP', 'P2P'],
    default: 'P2P',
  },
  helpdesk: true,
}
const withdrawalStr = JSON.stringify(apiFormat(withdrawal))

const detailsOne = {
  flow: 1,
  amount: 10000,
  amount_err: false,
  amount_max: 149687,
  amount_min: 10,
  ft: false,
  bank: [1, 'Тинькофф/Tinkoff', '/images/asaka.svg'],
  bank_err: false,
  banklist: [],
  currency: 643, // RUB = 643; KZT = 398; UZS = 860; USD = 840; EUR = 978
  fail_url: 'http://localhost:8080/',
  return_url: 'http://localhost:8080/',
  success_url: 'https://primefaces.org/primevue/button',
  helpdesk: true,
  holder: 'Адхам Ильхамович Икрамов', // vtb
  mail: 'test@example.com',
  no_card: false,
  order: '687787',
  pan: '1232 1234 2432 3240', // '1232 1234 2432 3240', // '0000000000000000000'
  payment_method: { method: ['P2P', 'QR'], default: 'QR' },
  phone: '9990709957',
  pspname: 'KiberPay',
  qr: 'https://www.tinkoff.ru/rm/chakin.dmitriy2/wA2Ye84222/',
  qr_caption: '12434323424',
  status: 'refill', // pending, timeout, reject, refill
  userblock: false,
  customer_uid: 'testCustomerUid',
  merch_name: 'TestMerch',
  merchant_uid: 'testMerchantUid',
  uid: 'ffa66290-19f0-4681-af4e-8d65e73b12bf',
  time_passed: 100,

  // "order": "7372311",
  //         "status": "pending",
  //         "amount": 777.0,
  //         "currency": 643,
  //         "pan": "2202 2069 4523 0311",
  //         "phone": "+79362565740",
  //         "qr": "",
  //         "qr_caption": "",
  //         "holder": "Жуков Дмитрий",
  //         "bank": [
  //             2,
  //             "Сбер/Sber",
  //             "/images/sber.svg"
  //         ],
  //         "banklist": [],
  //         "no_card": false,
  //         "amount_err": false,
  //         "bank_err": false,
  //         "amount_min": 10,
  //         "amount_max": 337457,
  //         "userblock": false,
  //         "payment_method": {
  //             "method": [
  //                 "SBP"
  //             ],
  //             "default": "SBP"
  //         },
  //         "success_url": "",
  //         "fail_url": "",
  //         "return_url": "",
  //         "mail": "support@kiberpay.com",
  //         "pspname": "KiberPay",
  //         "helpdesk": true,
  //         "ft": true,
  //         "flow": 1,
  //         "merch_name": "Песочница",
  //         "uid": "d8a410d7-efd3-4ac5-bba6-d42dc0cccb58",
  //         "merchant_uid": "Mylink",
  //         "customer_uid": "",
  //         "time_passed": 515,
  //         "time_passed_created": 518,
  //         "mail_cus": "",
  //         "attached": false

  // status: 'created',
  // payment_method: {'method': [], 'default': ''},
  // amount: 35.0,
  // currency: 643,
  // pan: '',
  // phone: '',
  // qr: '',
  // qr_caption: '',
  // holder: '',
  // bank: [],
  // banklist: [],
  // no_card: true,
  // amount_err: true,
  // bank_err: true,
  // amount_min: 0,
  // amount_max: 0,
  // success_url: '',
  // fail_url: '',
  // return_url: '',
  // mail: 'support@kiberpay.com',
  // pspname: 'KiberPay',
  // helpdesk: true,
  // ft: false,
  // userblock: false,
}
const detailsOneStr = JSON.stringify(apiFormat(detailsOne))

const changeDetailsOne = {
  order: '676086',
  status: 'pending',
  amount: 5000.34,
  amount_err: false,
  amount_min: 10,
  amount_max: 148952,
  currency: 643,
  // pan: "2200 7004 7261 0848", // sber
  // pan: "5536 9138 8113 9683", // tinkoff
  pan: '1232 1234 2432 3234', // vtb
  phone: '9231286422',
  qr: '',
  qr_caption: 207472,
  // holder: "Андрей К", // sber
  // holder: "Петр Л", // tinkoff
  holder: 'Дмитрий С', // vtb
  // bank: [1, "СБЕР/SBER", "/image"],
  // bank: [2, "Тинькофф/Tinkoff", "/image"],
  bank: [3, 'ВТБ/VTB', '/image'],
  bank_err: false,
  no_card: false,
  banklist: [
    // [1, "СБЕР/SBER", "/image"],
    [2, 'Тинькофф/Tinkoff', '/image'],
    [3, 'ВТБ/VTB', '/image'],
  ],
}
const changeDetailsOneStr = JSON.stringify(apiFormat(changeDetailsOne))

const bankList = {
  status: 'created',
  amount_min: 9.0,
  amount_max: 2321434.0,
  amount_err: false,
  banklist: [
    [1, 'Сбербанк/Sberbank', '/image'],
    [2, 'Альфа-банк/Alfa-bank', '/image'],
    [4, 'Тинькофф/Tinkoff', '/images/tinkoff.svg'],
  ],
  no_card: false,
  userblock: false,

  // amount_min: 0,
  // amount_max: 0,
  // amount_err: true,
  // bank_err: true,
  // no_card: true,
  // banklist: [],
  // amount: 0,
  // payment_method: '',
  // pan: '',
  // phone: '',
  // holder: '',
  // status: '',
  // userblock: true,
  // flow: 1,
}
const bankListStr = JSON.stringify(apiFormat(bankList))

const saverequest = {
  amount_min: 500,
  amount_max: 0,
  amount_err: false,
  no_card: false,
  banklist: [[4, 'Тинькофф/Tinkoff', '/images/tinkoff.svg']],
  //   banklist: [],
  status: 'pending',
  userblock: false,
  amount: 999.0,
  bank_err: false,
  payment_method: 'P2P',
  pan: '2200 7009 1157 5917',
  phone: '9302204086',
  holder: 'Зонин Кирилл',
  flow: 1,
  time_passed: 18,
  time_passed_created: 212,
  mail_cus: '',
  attached: false,

  //   amount_min: 0,
  //   amount_max: 0,
  //   amount_err: true,
  //   bank_err: true,
  //   no_card: true,
  //   banklist: [],
  //   amount: 0,
  //   payment_method: '',
  //   pan: '',
  //   phone: '',
  //   holder: '',
  //   status: '',
  //   userblock: true,
  //   flow: 1,
}
const saverequestStr = JSON.stringify(apiFormat(saverequest))

const save = {
  id: 23498,
  amount: 1500.34,
  pan: '1234 5678 1234 5678',
  phone: '',
  bank_name: '',
  bank_id: '4',
  currency: 643,
  status: 'created',
  mail: null,
  success_url: null,
  fail_url: null,
  return_url: null,
  payment_method: 'SBP',
}
const saveStr = JSON.stringify(apiFormat(save))

const statusrequestin = {
  amount: 10000,
  description: 'Перевод получен/Transfer received/uz lang',
  customer_uid: 'testCustomerUid',
  merch_name: 'TestMerch',
  merchant_uid: 'testMerchantUid',
  uid: 'ffa66290-19f0-4681-af4e-8d65e73b12bf',
  paymentnum: '123213',
  paymentstatus: 'refill', // refill, timeout, pending, custconf, confirmed
}
const statusStr = JSON.stringify(apiFormat(statusrequestin))

const status = {
  paymentstatus: 'created', // undo, done, created
  paymentnum: '000028699',
}
const statStr = JSON.stringify(apiFormat(status))

const checkPan = {
  error_code: '0',
  bank: 'Tinkoff',
  bank_code1c: '',
  bank_icon: '/images/tinkoff.svg',
  brand: 'MasterCard',
}
const checkPanStr = JSON.stringify(apiFormat(checkPan))

const requestinUrl = {
  //   success_url: 'https://primefaces.org/primevue/button',
  success_url: '',
  //   fail_url: 'https://primefaces.org/primevue/panel',
  fail_url: '',
  //   return_url: 'https://primefaces.org/primevue/carousel',
  return_url: '',
}
const requestinUrlStr = JSON.stringify(apiFormat(requestinUrl))

const rejectrequestin = {
  data: null,
}
const rejectrequestinStr = JSON.stringify(apiFormat(rejectrequestin))

const nopay = {
  status: 1,
  description: 'ok',
  error_cod: 0,
}
const nopayStr = JSON.stringify(apiFormat(nopay))

const cparam = {
  block: false,
}
const cparamStr = JSON.stringify(apiFormat(cparam))

const createCase = {
  status: 1,
  description: 'ok',
  error_cod: 0,
}
const createCaseStr = JSON.stringify(apiFormat(createCase))

const changLeng = {
  pan: '2200 7006 0922 2855',
  payment_method: 'ENG',
  phone: '9104794353',
  status: 'pending',
}
const changLengStr = JSON.stringify(apiFormat(changLeng))

const changPm = {
  pan: '2200 7006 0922 2855',
  payment_method: 'P2P',
  phone: '9104794353',
  status: 'pending',
}
const changPmStr = JSON.stringify(apiFormat(changPm))

const maillRequestin = {
  pan: '2200 7006 0922 2855',
  payment_method: 'P2P',
  phone: '9104794353',
  status: 'pending',
}
const maillRequestinStr = JSON.stringify(apiFormat(maillRequestin))

// Waiting pages PS_ECOM
const start = {
  order_data: '2024-01-12 08:08:15.632682+00:00',
  order_amount: 24984.53,
  order_id: '2234234',
  status: 'ok',
  // "success" – платеж оплачен
  // "ok" – далее запрашивать url
  // "block" – Блокировка пользователя
  // "reject" – отмена ордера
  // "waiting" – ответе не готов,запрашивать повторно /start
  // "unavailable" – отмена ордера
  fail_url: 'www.ru', // www.ru
  success_url: 'https://success_url3.com/',
  currency: '643',
}
const startStr = JSON.stringify(apiFormat(start))

const url = {
  status: 'redirect',
  // "waiting" – ответе не готов, запрашивать повторно
  // "redirect" – перенаправить пользователя на ссылку в поле «url»
  // "block" – блокировка пользователя
  // "start" – не была получена команда start с данными пользователя
  // "reject" – отмена ордера
  // "unavailable" – отмена ордера
  // url: 'https://qr.nspk.ru/AD10005CL8AADKL4958BOFC2K0HINVM1?type=02\u0026bank=100000000017\u0026sum=1000\u0026cur=RUB\u0026crc=F994', // https://www.google.com/
  url: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head></head>
    <body onload="javascript:submitForm();">
        <form action="https://acs.processingcenter.ru/api/tds/form" method="post" hidden>
            <input name="PaReq" type="hidden" value="2jOVz1MF/KjYxon3CysVmVHbZyDtscOXPTj1McmwkTALCk3m7sp5e95uskYbR6A5WIttBivzG5xC2GSIJJLirh9nXHiDlK4N6LixXg5rjNGEGg8FqykQn6ypacc3HVMnvhumyRuw9zFw40mZn65qJGmATHgPFwfttbNLCLDaBjNCFAUR1EDXGOe8YJKc/4i/+2C8D9M3iL/kmcpFCiENfpRlodhbsJbuBUhqHi+6EWN4xbKdakvGYvSfBGqP4qvTwG8LbuazK3xp91AYMRNBC36zgTlt7EDjuF276CGc2xGR8f18Imh+LaKWnJhJnNL3" />
            <input name="MD" type="hidden" value="17074638631494257389" />
            <input name="TermUrl" type="hidden" value="https://acs.processingcenter.ru/api/tds/pares?data=MmpPVnoxTUYvS2pZeG9uM0N5c1ZtVkhiWnlEdHNjT1hQVGoxTWNtd2tUQnphUVcrYlFLQ2k3bGVMWnhLZDlBaQ==" />
        </form>
        <script>
        function submitForm() {
            document.forms[0].submit();
        }
        </script>
    </body>
    </html>`,
}
const urlStr = JSON.stringify(apiFormat(url))

const finalStatus = {
  order_data: '2024-01-19 11:48:20.026632+00:00',
  order_amount: 82323.14,
  order_id: '383',
  status: 'PENDING', // 'APPROVED' 'PENDING' 'DECLINED'
  fail_url: 'https://fail_url3.com/',
  success_url: 'https://success_url3.com/',
  currency: '643',
}
const finalStatusStr = JSON.stringify(apiFormat(finalStatus))

const banks = [
  {
    bankName: 'Сбербанк',
    logoURL: 'http://pe.neopay.pro/api/logo/bank100000000111/',
    schema: 'bank100000000111',
    package_name: 'ru.sberbankmobile',
  },
  {
    bankName: 'Тинькофф Банк',
    logoURL: 'http://pe.neopay.pro/api/logo/bank100000000004/',
    schema: 'bank100000000004',
    package_name: 'com.idamob.tinkoff.android',
  },
  {
    bankName: 'Банк ВТБ',
    logoURL: 'http://pe.neopay.pro/api/logo/bank110000000005/',
    schema: 'bank110000000005',
    package_name: 'ru.vtb24.mobilebanking.android',
    webClientUrl: 'https://online.vtb.ru/i/paymentSbp/',
    isWebClientActive: 'true',
  },
  {
    bankName: 'АЛЬФА-БАНК',
    logoURL: 'http://pe.neopay.pro/api/logo/bank100000000008/',
    schema: 'bank100000000008',
    package_name: 'ru.alfabank.mobile.android',
  },
  {
    bankName: 'Райффайзенбанк',
    logoURL: 'http://pe.neopay.pro/api/logo/bank100000000007/',
    schema: 'bank100000000007',
    package_name: 'ru.raiffeisennews',
  },
]

const checkCard = {
  is_pan_valid: true,
  is_cvc_valid: true,
  is_date_valid: true,
  errors: [],
}
const checkCardStr = JSON.stringify(checkCard)

const banksStr = JSON.stringify(apiFormat(banks))
// https://qr.nspk.ru/AD1000614RFIJQ2B93MO68E42OUH22HR?type=02\u0026bank=100000000017\u0026sum=1000\u0026cur=RUB\u0026crc=9F18

module.exports = {
  token,
  requestInStr,
  bankListStr,
  saverequestStr,
  statusStr,
  requestinUrlStr,
  rejectrequestinStr,
  nopayStr,
  apiFormatStr,
  detailsOneStr,
  changeDetailsOneStr,
  withdrawalStr,
  saveStr,
  statStr,
  checkPanStr,
  changLengStr,
  maillRequestinStr,
  createCaseStr,
  cparamStr,
  changPmStr,
  startStr,
  urlStr,
  finalStatusStr,
  banksStr,
  checkCardStr,
}
