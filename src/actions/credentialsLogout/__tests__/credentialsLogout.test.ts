import { server } from '@/src/mocks/server';
import { rest } from 'msw';
import { credentialsLogout } from '../credentialsLogout';

jest.mock('../../../auth.ts', () => ({
  signOut: jest.fn(),
}));

describe('Functionality', () => {
  it('should return correct status and message after success logout', async () => {
    const res = await credentialsLogout();

    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
    expect(res.status).toBe('success');
  });
  it('should return correct status and message after error while logout', async () => {
    server.use(
      rest.get(
        'http://localhost:3000/api/v1/admins/logout',
        (req, res, ctx) => {
          return res(ctx.status(400));
        },
      ),
    );
    const res = await credentialsLogout();

    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
    expect(res.status).toBe('fail');
  });
});
