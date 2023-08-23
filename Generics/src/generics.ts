class GenericClassE<P> {
  constructor(public props: P) {}

  getProps(): P {
    return this.props;
  }
}

interface IExpirable {
  expireDate: Date;
}

interface IChocolateCake extends IExpirable {}
interface IVanillaCake extends IExpirable {}

const chocoCakes: IChocolateCake[] = [{ expireDate: new Date() }];
const vanillaCakes: IVanillaCake[] = [{ expireDate: new Date() }];

interface IGetExpiredItemsFuction {
  <Item extends IExpirable>(items: Array<Item>): Array<Item>;
}

const getExpiredItems: IGetExpiredItemsFuction = (items) => {
  const currentDate = new Date().getDate();

  return items.filter((item) => item.expireDate.getDate() < currentDate);
};

const expiredChocolateCakes = getExpiredItems(chocoCakes);
const expiredVanillaeCakes = getExpiredItems(vanillaCakes);

////////////////////////////////

interface IShoppingCart<ItemId, IItem> {
  items: Array<IItem>;
  addItem(this: IShoppingCart<ItemId, IItem>, item: IItem): void;
  getItemById(
    this: IShoppingCart<ItemId, IItem>,
    id: ItemId
  ): IItem | undefined;
}

interface IItem {
  id: number;
  price: number;
}

const cart: IShoppingCart<number, IItem> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItemById(id) {
    return this.items.find((item) => item.id === id);
  },
};
