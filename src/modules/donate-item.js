import moment from "moment"

export class DonateItem {
	#container

	constructor() {
		this.#container = document.createElement('div')
		this.#container.className = 'donate-item'
	}

	render(donateInputValue) {
		this.#container.textContent = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a") + ' - '

		const moneyBlock = document.createElement('b')
		moneyBlock.textContent = donateInputValue + '$'

		this.#container.append(moneyBlock)

		return this.#container
	}
}