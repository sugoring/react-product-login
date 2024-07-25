import { rest } from 'msw';

export const handlers = [
  // 상품 상세 조회 핸들러
  rest.get('/api/products/:productId', (req, res, ctx) => {
    const { productId } = req.params;
    const product = {
      id: productId,
      name: 'Mock Product',
      price: 100,
      imageUrl: 'string',
      categoryId: 1,
    };
    return res(
      ctx.status(200),
      ctx.json(product)
    );
  }),
  
  // 상품 옵션 목록 조회 핸들러
  rest.get('/api/products/:productId/options', (req, res, ctx) => {
    const { productId } = req.params;
    const options = [
      { id: 1, name: 'Option A', quantity: 10, productId: parseInt(productId, 10) },
      { id: 2, name: 'Option B', quantity: 20, productId: parseInt(productId, 10) }
    ];
    return res(
      ctx.status(200),
      ctx.json(options)
    );
  })
];
