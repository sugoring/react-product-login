// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  // 상품 상세 조회 핸들러
  http.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const product = {
      id: productId,
      name: 'Mock Product',
      price: 100,
      imageUrl: 'string',
      categoryId: 1,
    };
    return res(
      HttpResponse.json(product)
    );
  }),
  
  // 상품 옵션 목록 조회 핸들러
  http.get('/api/products/:productId/options', (req, res) => {
    const { productId } = req.params;
    const options = [
      { id: 1, name: 'Option A', quantity: 10, productId: parseInt(productId) },
      { id: 2, name: 'Option B', quantity: 20, productId: parseInt(productId) }
    ];
    return res(
      HttpResponse.json(options)
    );
  })
];
