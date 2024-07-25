import { http, HttpResponse } from 'msw';

const mockProducts = [
  {
    id: 1,
    name: 'Mock Product',
    price: 100,
    imageUrl: 'string',
    categoryId: 1,
  },
];

const mockProductOptions = [
  {
    id: 1,
    name: 'Option A',
    quantity: 10,
    productId: 1,
  },
  {
    id: 2,
    name: 'Option B',
    quantity: 20,
    productId: 1,
  },
];

export const handlers = [
  // 상품 상세 조회 핸들러
  http.get('/api/products/:productId', ({ params }) => {
    const productId = Array.isArray(params.productId) ? params.productId[0] : params.productId;
    const product = mockProducts.find(p => p.id === parseInt(productId, 10));

    if (product) {
      return HttpResponse.json(product);
    } else {
      return HttpResponse.json({ message: 'Product not found' }, { status: 404 });
    }
  }),

  // 상품 옵션 목록 조회 핸들러
  http.get('/api/products/:productId/options', ({ params }) => {
    const productId = Array.isArray(params.productId) ? params.productId[0] : params.productId;
    const options = mockProductOptions.filter(option => option.productId === parseInt(productId, 10));

    if (options.length > 0) {
      return HttpResponse.json(options);
    } else {
      return HttpResponse.json({ message: 'Product not found' }, { status: 404 });
    }
  }),
];
