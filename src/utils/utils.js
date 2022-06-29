export const takeDonateInputValue = donateInput => {
	const donateInputValue = donateInput.value
	donateInput.value = ''
	return donateInputValue
}

export const updateAmmount = (amountContainer, donateInputValue) => {
	let currentAmount = Number(parseInt(amountContainer.textContent))
	currentAmount += Number(donateInputValue)
	amountContainer.textContent = currentAmount + '$'
}