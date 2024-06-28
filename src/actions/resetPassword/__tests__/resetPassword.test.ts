import { server } from '@/src/mocks/server';
import { rest } from 'msw';
import { resetPassword } from '../resetPassword';

describe('Functionality', () => {
  it('should return correct status and message after success password reset', async () => {
    const res = await resetPassword(
      '7c27c271492270f989482196203db43fba1f54c796785263b67b05a0a040486',
      'newpass1234',
    );

    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
    expect(res.status).toBe('success');
  });
  it('should return correct status and message after error while password reset', async () => {
    server.use(
      rest.patch(
        'http://localhost:3000/api/v1/admins/resetPassword/7c27c271492270f989482196203db43fba1f54c796785263b67b05a0a040486',
        (req, res, ctx) => {
          return res(ctx.status(400));
        },
      ),
    );
    const res = await resetPassword(
      '7c27c271492270f989482196203db43fba1f54c796785263b67b05a0a040486',
      'newpass1234',
    );

    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
    expect(res.status).toBe('fail');
  });
});
