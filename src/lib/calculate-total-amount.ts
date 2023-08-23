export interface IOrder {
	calculateTotal(): number;
	//products: Array<any>;
}

export const calculateTotalAmount = (order: IOrder) => {
	let total = order.calculateTotal();
	const discount = total * 0.1;
	total -= discount;

	const tax = total * 0.2;
	total += tax;

	return total;
};
