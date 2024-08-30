import { renderHook, act } from '@testing-library/react-hooks';
import useCartService, { cartStore } from '../../lib/hooks/useCartStore';
import { OrderItem } from '../../lib/models/OrderModel';
describe('useCartService', () => {
  beforeEach(() => {
    cartStore.setState({
      items: [],
      itemPrice: 0,
      shippingPrice: 0,
      totalPrice: 0,
      paymentMethod: '',
      shippingAddress: {
        fullName: '',
        address: '',
        phoneNumber: '',
        district: '',
      },
    });
  });

  it('Empty cart', () => {
    const { result } = renderHook(() => useCartService());
    const { items, itemPrice } = result.current;
    
    expect(items).toEqual([]);
    expect(itemPrice).toBe(0);
  });

  it('Checking if item is added', () => {
    const { result } = renderHook(() => useCartService());
    const newItem: OrderItem = {
        slug: 'item1', qty: 1, price: 100,
        name: '',
        qtyR: 0,
        qtyL: 0,
        image: '',
        color: '',
        visionR: '',
        visionL: ''
    };

    act(() => {
      result.current.increase(newItem);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0]).toEqual(newItem);
    expect(result.current.itemPrice).toBe(100);
  });

  it('Increasing quantity for existing item ', () => {
    const { result } = renderHook(() => useCartService());
    const newItem: OrderItem = {
        slug: 'item1', qty: 1, price: 100,
        name: '',
        qtyR: 0,
        qtyL: 0,
        image: '',
        color: '',
        visionR: '',
        visionL: ''
    };

    act(() => {
      result.current.increase(newItem);
      result.current.increase(newItem);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].qty).toBe(2);
    expect(result.current.itemPrice).toBe(200);
  });
});
