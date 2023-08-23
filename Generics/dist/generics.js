"use strict";
class GenericClassE {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
const chocoCakes = [{ expireDate: new Date() }];
const vanillaCakes = [{ expireDate: new Date() }];
const getExpiredItems = (items) => {
    const currentDate = new Date().getDate();
    return items.filter((item) => item.expireDate.getDate() < currentDate);
};
const expiredChocolateCakes = getExpiredItems(chocoCakes);
const expiredVanillaeCakes = getExpiredItems(vanillaCakes);
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    },
};
