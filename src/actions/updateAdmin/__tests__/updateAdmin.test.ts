import { auth } from '@/src/auth';
import { server } from '@/src/mocks/server';
import { rest } from 'msw';
import { updateAdmin } from '../updateAdmin';

jest.mock('../../../auth.ts', () => ({
  auth: jest.fn(),
}));

describe('Functionality', () => {
  it('should return correct status and message after success user update', async () => {
    (auth as jest.Mock).mockResolvedValue({
      user: {
        id: 'user-id',
        name: 'User Name',
        email: 'user@example.com',
      },
      accessToken: 'fake-access-token',
    });
    const res = await updateAdmin('Andrzej', 'Sellig');

    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
    expect(res.status).toBe('success');
  });

  it('should return correct status and message after error while user update', async () => {
    (auth as jest.Mock).mockResolvedValue({
      user: {
        id: 'user-id',
        name: 'User Name',
        email: 'user@example.com',
      },
      accessToken: 'fake-access-token',
    });
    server.use(
      rest.patch(
        'http://localhost:3000/api/v1/admins/updateMe',
        (req, res, ctx) => {
          return res(ctx.status(400));
        },
      ),
    );

    const res = await updateAdmin('Andrzej', 'Sellig');

    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
    expect(res.status).toBe('fail');
  });
});
