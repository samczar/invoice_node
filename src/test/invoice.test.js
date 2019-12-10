const Invoice = require('../controller/Invoice')

describe('invoice methods are defined', () => {
	it('addInvoiceLine be defined', () => {
		const inovoice = new Invoice()
		expect(inovoice.addInvoiceLine).toBeDefined()
	})

	it('clone be defined', () => {
		const inovoice = new Invoice()
		expect(inovoice.clone).toBeDefined()
	})

	it('getTotal be defined', () => {
		const inovoice = new Invoice()
		expect(inovoice.getTotal).toBeDefined()
	})

	it('makeString be defined', () => {
		const inovoice = new Invoice()
		expect(inovoice.makeString).toBeDefined()
	})

	it('mergeInvoices be defined', () => {
		const inovoice = new Invoice()
		expect(inovoice.mergeInvoices).toBeDefined()
	})

	it('removeInvoiceLine be defined', () => {
		const inovoice = new Invoice()
		expect(inovoice.removeInvoiceLine).toBeDefined()
	})

	describe('giving lines to invoice methods', () => {
		it('add line to invoice: addInvoiceLine ', () => {
			const expectedLine = {
				invoiceLineId: 1,
				cost: 20,
				quantity: 10,
				description: 'football'
			}

			const invoice = new Invoice()

			const result = invoice.addInvoiceLine(expectedLine)

			expect(result).toBeDefined()
		})

		it('have all the same properties: clone ', () => {
			const invoice = new Invoice()
			const expectedLine1 = {
				invoiceLineId: 1,
				cost: 20,
				quantity: 10,
				description: 'football'
			}

			const expectedLine2 = [
				{
					invoiceLineId: 1,
					cost: 20,
					quantity: 10,
					description: 'football'
				}
			]
			invoice.addInvoiceLine(expectedLine1)
			invoice.clone()
			expect(invoice.clone()).toEqual(expectedLine2)
		})
	})
})
//Due to my schedule, I am not going to test all methods
//Thanks
