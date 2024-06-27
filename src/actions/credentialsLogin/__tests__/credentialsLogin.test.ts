import { server } from '@/src/mocks/server';
import { rest } from 'msw';
import { credentialsLogin } from '../credentialsLogin';

jest.mock('../../../auth.ts', () => ({
  signIn: jest.fn(),
}));

describe('Functionality', () => {
  it('should return correct status and message after succes login', async () => {
    const res = await credentialsLogin('oliwier.sellig@gmail.com', 'test1234');

    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
    expect(res.status).toBe('success');
  });
  it('should return correct status and message after error while login', async () => {
    server.use(
      rest.post(
        'http://localhost:3000/api/v1/admins/login',
        (req, res, ctx) => {
          return res(ctx.status(400));
        },
      ),
    );
    const res = await credentialsLogin('oliwier.sellig@gmail.com', 'test1234');

    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
    expect(res.status).toBe('fail');
  });
});
