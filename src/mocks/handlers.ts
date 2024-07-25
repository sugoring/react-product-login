import { rest } from 'msw';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  categoryId: number;
}

interface ProductOption {
  id: number;
  name: string;
  quantity: number;
  productId: number;
}

const mockProducts: Product[] = [
  { id: 1, name: 'Mock Product', price: 100, imageUrl: 'string', categoryId: 1 },
  // 다른 상품 데이터를 추가할 수 있습니다.
];

const mockProductOptions: ProductOption[] = [
  { id: 1, name: 'Option A', quantity: 10, productId: 1 },
  { id: 2, name: 'Option B', quantity: 20, productId: 1 },
  // 다른 옵션 데이터를 추가할 수 있습니다.
];

export const handlers = [
  // 상품 상세 조회 핸들러
  rest.get('/api/products/:productId', (req, res, ctx) => {
    const { productId } = req.params;
    const product = mockProducts.find(p => p.id === parseInt(productId));

    if (product) {
      return res(
        ctx.status(200),
        ctx.json(product)
      );
    } else {
      return res(
        ctx.status(404),
        ctx.json({ message: 'Product not found' })
      );
    }
  }),

  // 상품 옵션 목록 조회 핸들러
  rest.get('/api/products/:productId/options', (req, res, ctx) => {
    const { productId } = req.params;
    const options = mockProductOptions.filter(option => option.productId === parseInt(productId));

    if (options.length > 0) {
      return res(
        ctx.status(200),
        ctx.json(options)
      );
    } else {
      return res(
        ctx.status(404),
        ctx.json({ message: 'Product not found' })
      );
    }
  }),
];
