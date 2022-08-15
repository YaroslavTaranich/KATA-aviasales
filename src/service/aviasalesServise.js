export default class AviasalesServise {
  constructor() {
    this.baseURL = 'https://aviasales-test-api.kata.academy/'
  }

  getSearchID = async () => {
    const res = await fetch(`${this.baseURL}search`)
    if (!res.ok) throw new Error('Fetching faild')
    const body = await res.json()
    return body.searchId
  }

  getTickets = async (searchID) => {
    const res = await fetch(`${this.baseURL}tickets?searchId=${searchID}`)
    if (!res.ok) throw new Error('Fetching faild')
    const body = await res.json()
    return body
  }
}
