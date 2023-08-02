const apiFormat = (value) => {
  return {
    status: 1,
    description: "string",
    error_cod: 0,
    data: value,
  }
}

const apiFormatStr = (value) => JSON.stringify(apiFormat(value))

const token = (time) => {
  let data = {
    access_token: `token ${time}`,
    rt: "token",
    token_type: "string",
  }

  return JSON.stringify(data)
}

const requestIn = {
  id: 1,
  amount: 2000.43,
  amount_err: false,
  no_card: false,
  ft: true,
  bank_name: "bank",
  banklist: [[1, "Сбербанк/Sberbank", "/image"],[2, "Альфа-банк/Alfa-bank", "/image"],[3, "Открытие/Otkrytie", "/image"],],
  // banklist: [],
  currency: 840, // RUB = 643; KZT = 398; UZS = 860; USD = 840; EUR = 978
  rate: 1.0,
  fee: 1.0,
  // payment_method: { 'method': [], 'default': '' },
  payment_method: { method: ["SBP", "P2P"], default: "P2P" },
  status: "created",
  // 'success_url': 'https://primefaces.org/primevue/button',
  success_url: "",
  // 'fail_url': 'https://primefaces.org/primevue/panel',
  fail_url: "",
  return_url: 'https://primefaces.org/primevue/carousel',
  // return_url: "",
  amount_edit: true,
  amount_min: 0,
  amount_max: 50000,
  helpdesk: true,
  mail: "test@test.ru",
  // 'mail': ''
  paymentnum: "3297434",
  // 'psplogo': '/images/canceled-application.svg',
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
  status: "creating",
  mail: '',
  success_url: null,
  fail_url: null,
  return_url: null,
  banks: [
    [1, "Сбербанк/Sberbank", "/image"],
    [2, "Альфа-банк/Alfa-bank", "/image"],
    [3, "Открытие/Otkrytie", "/image"],
  ],
  // payment_method: {
  //   method: ["SBP", "P2P"],
  //   default: "SBP",
  // },
  payment_method: {
    method: ["P2P"],
    default: "P2P",
  },
  helpdesk: true,
}
const withdrawalStr = JSON.stringify(apiFormat(withdrawal))

const detailsOne = {
  amount: 500,
  amount_err: false,
  amount_max: 149687,
  amount_min: 10,
  ft: true,
  bank: [3, "Тинькофф/Tinkoff", "/image"],
  bank_err: false,
  banklist: [
    // [1, "СБЕР/SBER", "/image"],
    // [2, "Тинькофф/Tinkoff", "/image"],
    [3, "Тинькофф/Tinkoff", "/image"],
  ],
  currency: 643, // RUB = 643; KZT = 398; UZS = 860; USD = 840; EUR = 978
  // fail_url: "https://primefaces.org/primevue/panel",
  // return_url: 'https://primefaces.org/primevue/carousel',
  // success_url: 'https://primefaces.org/primevue/button',
  helpdesk: true,
    // holder: "Андрей К", // sber
  // holder: "Петр Л", // tinkoff
  holder: "Дмитрий С", // vtb
  mail: "test@example.com",
  no_card: false,
  order: "687787",
  // pan: "2200 7004 7261 0848", // sber
  // pan: "5536 9138 8113 9683", // tinkoff
  pan: "1232 1234 2432 3234", // vtb
  payment_method: { method: ["SBP", "QR"], default: "QR" },
  // payment_method: { method: ["P2P"], default: "P2P" },
  // payment_method: { method: ["SBP"], default: "SBP" },

  phone: "9307160753",
  pspname: "KiberPay",
  // qr: "https://www.tinkoff.ru/rm/chakin.dmitriy2/wA2Ye84222/",
  qr: "https://www.sberbank.com/ru/person/dl/jc?user_link=fOYfCLYuDoehaTVqL",
  // qr: "",
  qr_caption: "00000001",
  // qr_bank: "sber",
  status: "pending",
  paymentnum: "9999999",

  // order: '2038850',
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
  order: "676086",
  status: "pending",
  amount: 5000.34,
  amount_err: false,
  amount_min: 10,
  amount_max: 148952,
  currency: 643,
  // pan: "2200 7004 7261 0848", // sber
  // pan: "5536 9138 8113 9683", // tinkoff
  pan: "1232 1234 2432 3234", // vtb
  phone: "9231286422",
  qr: "",
  qr_caption: 207472,
  // holder: "Андрей К", // sber
  // holder: "Петр Л", // tinkoff
  holder: "Дмитрий С", // vtb
  // bank: [1, "СБЕР/SBER", "/image"],
  // bank: [2, "Тинькофф/Tinkoff", "/image"],
  bank: [3, "ВТБ/VTB", "/image"],
  bank_err: false,
  no_card: false,
  banklist: [
    // [1, "СБЕР/SBER", "/image"],
    [2, "Тинькофф/Tinkoff", "/image"],
    [3, "ВТБ/VTB", "/image"]
  ],
}
const changeDetailsOneStr = JSON.stringify(apiFormat(changeDetailsOne))

const bankList = {
  status: "created",
  amount_min: 9.0,
  amount_max: 2321434.0,
  amount_err: false,
  banklist: [[1, "Сбербанк/Sberbank", "/image"],[2, "Альфа-банк/Alfa-bank", "/image"],[4, "Тинькофф/Tinkoff", "/images/tinkoff.svg"],],
  no_card: false,
  // banklist: [],
  // no_card: true,
}
const bankListStr = JSON.stringify(apiFormat(bankList))

const saverequest = {
  amount_err: false,
  no_card: false,
  // no_card: true,
  bank_err: false,
  banklist: [[1, "Сбербанк/Sberbank", "/image"],[2, "Альфа-банк/Alfa-bank", "/image"],],
  // banklist: [],
  payment_method: "SBP",
  status: "created",
  amount: 2000.43,
  amount_min: 0,
  amount_max: 40000.0,
  pan: "1234 5678 1234 5678",
  phone: "9000000000",
  holder: "Дмитрий Ч.",
  qr: "https://www.tinkoff.ru/rm/chakin.dmitriy2/wA2Ye84222/",
  qr_caption: "00000001",
}
const saverequestStr = JSON.stringify(apiFormat(saverequest))

const save = {
  id: 23498,
  amount: 1500.34,
  pan: "1234 5678 1234 5678",
  phone: "",
  bank_name: "",
  bank_id: "4",
  currency: 643,
  status: "created",
  mail: null,
  success_url: null,
  fail_url: null,
  return_url: null,
  payment_method: "SBP",
}
const saveStr = JSON.stringify(apiFormat(save))

const statusrequestin = {
  amount: 10000,
  customer_uid: "testCustomerUid",
  // 'description': 'Ждем перевод еще/Waiting for the transfer',
  // 'description': 'Перевод не получен/Transfer not received',
  description: "Перевод получен/Transfer received",
  merch_name: "TestMerch",
  merchant_uid: "testMerchantUid",
  uid: "ffa66290-19f0-4681-af4e-8d65e73b12bf",
  paymentstatus: "pending",
  paymentnum: "222",
}
const statusStr = JSON.stringify(apiFormat(statusrequestin))

const status = {
  paymentstatus: "created", // undo, done, created
  paymentnum: "000028699",
}
const statStr = JSON.stringify(apiFormat(status))

const checkPan = {
  error_code: "0",
  bank: "Tinkoff",
  bank_code1c: "",
  bank_icon: "/images/tinkoff.svg",
  brand: "MasterCard"
}
const checkPanStr = JSON.stringify(apiFormat(checkPan))

const requestinUrl = {
  // 'success_url': 'https://primefaces.org/primevue/button',
  success_url: '',
  // 'fail_url': 'https://primefaces.org/primevue/panel',
  fail_url: '',
  // 'return_url': 'https://primefaces.org/primevue/carousel',
  return_url: '',
}
const requestinUrlStr = JSON.stringify(apiFormat(requestinUrl))

const rejectrequestin = {
  data: null,
}
const rejectrequestinStr = JSON.stringify(apiFormat(rejectrequestin))

const nopay = {
  status: 1,
  description: "ok",
  error_cod: 0,
}
const nopayStr = JSON.stringify(apiFormat(nopay))

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
}
