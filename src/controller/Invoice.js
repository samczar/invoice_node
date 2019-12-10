class Invoice {
	constructor(invoiceDate = new Date(), invoiceNumber = '', lineItems = []) {
		this.invoiceDate = invoiceDate
		this.invoiceNumber = invoiceNumber
		this.lineItems = lineItems
	}

	/**
	 * Adds a line to invoice
	 * @param {Object} line - a line to add
	 */
	addInvoiceLine(line) {
		this.lineItems = [...this.lineItems, line]
		return this.lineItems
	}

	/**
	 * Removes a line
	 */
	removeInvoiceLine(id) {
		const removeState = this.lineItems.filter(line => line.invoiceLineId !== id)
		return removeState
	}

	getTotal(line = []) {
		const totalCost = line.reduce((prevLine, currentLine) => {
			return prevLine + currentLine.cost
		}, 0)

		return totalCost.toFixed(2)
	}

	mergeInvoices(objToMerge) {
		const data = [...this.lineItems, ...objToMerge]

		return data
	}

	clone() {
		return [...this.lineItems]
	}

	makeString(invoice) {
		return JSON.stringify(invoice)
	}
}

module.exports = Invoice
