/*
    Welcome to the Xero technical excercise!
    ---------------------------------------------------------------------------------
    The test consists of a small invoice application that has a number of issues.
    Your job is to fix them and make sure you can perform the functions in each method below.
    Note your first job is to get the solution to execute! 
	
    Rules
    ---------------------------------------------------------------------------------
    * The entire solution must be written in Javascript.
    * Feel free to use ECMA2015 (ES6) syntax
    * You can modify any of the code in this solution, split out classes etc
    * You can modify Invoice and InvoiceLine, rename and add methods, change property types (hint) 
    * Feel free to use any libraries or frameworks you like
    * Feel free to write tests (hint) 
    * Show off your skills! 
    Good luck :) 
    When you have finished the solution please zip it up and email it back to the recruiter or developer who sent it to you
*/

const Invoice = require('./controller/Invoice')
const InvoiceLine = require('./controller/InvoiceLine')

const main = () => {
	console.log('Welcome to Xero Tech Test!')

	createInvoiceWithOneItem()
	createInvoiceWithMultipleItemsAndQuantities()
	removeItem()
	mergeInvoices()
	cloneInvoice()
	invoiceToString()
}

const createInvoiceWithOneItem = () => {
	const invoice = new Invoice()
	invoice.addInvoiceLine(new InvoiceLine(1, 6.99, 1, 'Apple'))
	console.log(invoice.lineItems)
}

const createInvoiceWithMultipleItemsAndQuantities = () => {
	const invoice = new Invoice()
	invoice.addInvoiceLine(new InvoiceLine(1, 10.21, 4, 'Banana'))
	invoice.addInvoiceLine(new InvoiceLine(2, 5.21, 1, 'Orange'))
	invoice.addInvoiceLine(new InvoiceLine(3, 6.21, 5, 'Pineapple'))

	console.log(invoice.getTotal(invoice.lineItems))
}

const removeItem = () => {
	const invoice = new Invoice()

	invoice.addInvoiceLine(new InvoiceLine(1, 10.21, 1, 'Orange'))
	invoice.addInvoiceLine(new InvoiceLine(2, 10.99, 5, 'Banana'))

	const removeLineState = invoice.removeInvoiceLine(1)

	console.log(invoice.getTotal(removeLineState))
}

const mergeInvoices = () => {
	const invoice1 = new Invoice()

	invoice1.addInvoiceLine(new InvoiceLine(1, 10.21, 1, 'Blueberries'))

	const invoice2 = new Invoice()

	invoice2.addInvoiceLine(new InvoiceLine(2, 5.29, 4, 'Orange'))
	invoice2.addInvoiceLine(new InvoiceLine(3, 9.99, 1, 'Banana'))

	const mergedInvoice = invoice1.mergeInvoices(invoice2.lineItems)

	console.log(invoice1.getTotal(mergedInvoice))
}

const cloneInvoice = () => {
	const invoice = new Invoice()

	invoice.addInvoiceLine(new InvoiceLine(1, 0.99, 5, 'Onion'))
	invoice.addInvoiceLine(new InvoiceLine(2, 10.49, 2, 'Watermelon'))

	const clonedInvoice = invoice.clone()
	console.log(clonedInvoice)
}

const invoiceToString = () => {
	const invoice = new Invoice(new Date(), '1000', [
		new InvoiceLine(1, 1.99, 20, 'Peer'),
		new InvoiceLine(2, 1.99, 20, 'pawpaw')
	])

	console.log(invoice.makeString(invoice))
}

main()
