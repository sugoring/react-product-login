import type { ResponseComposition, RestContext,RestRequest } from 'msw';
import { rest } from 'msw';

interface ProductDetail {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ProductOption {
  id: string;
  options: Array<{ size: string; color: string }>;
}

export const handlers = [
  rest.get<RestRequest, ResponseComposition<ProductDetail>, RestContext>(
    '/api/product-detail',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: '1',
          name: 'Mock Product',
          description: 'This is a mock product description.',
          price: 100,
        })
      );
    }
  ),
  rest.get<RestRequest, ResponseComposition<ProductOption>, RestContext>(
    '/api/product-options',
    (req, res, ctx) => {
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
    }
  ),
];
