import { donateForm, donateInput, donateContainer, amountContainer } from "../constants/constants"
import { DonateItem } from "../modules/donate-item"
import { takeDonateInputValue, updateAmmount } from "../utils/utils"

export class App {
	run() {
		donateForm.addEventListener('submit', e => {
			e.preventDefault()
			const donateInputValue = takeDonateInputValue(donateInput)
			const donateItem = new DonateItem // Создание инстанса задано здесь, а не в конструкторе, т.к., если задать его в конструкторе, то строка каждый раз перезаписывается
			const donateItemString = donateItem.render(donateInputValue)
			updateAmmount(amountContainer, donateInputValue)
			donateContainer.append(donateItemString)
		})
	}
}


