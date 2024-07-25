
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/product-detail', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '1',
        name: 'Mock Product',
        description: 'This is a mock product description.',
        price: 100,
      })
    );
  }),
  rest.get('/api/product-options', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '1',
        options: [
          { size: 'S', color: 'Red' },
          { size: 'M', color: 'Blue' },
        ],
      })
    );
  }),
];
