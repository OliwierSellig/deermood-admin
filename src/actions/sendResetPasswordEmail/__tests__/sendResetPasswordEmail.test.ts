import { server } from '@/src/mocks/server';
import { rest } from 'msw';
import { sendResetPasswordEmail } from '../sendResetPasswordEmail';

describe('Functionality', () => {
  it('should return correct status and message after success reset email send', async () => {
    const res = await sendResetPasswordEmail('oliwier.sellig@gmail.com');

    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
    expect(res.status).toBe('success');
  });
  it('should return correct status and message after error while reset email send', async () => {
    server.use(
      rest.post(
        'http://localhost:3000/api/v1/admins/forgotPassword',
        (req, res, ctx) => {
          return res(ctx.status(400));
        },
      ),
    );
    const res = await sendResetPasswordEmail('oliwier.sellig@gmail.com');

    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
    expect(res.status).toBe('fail');
  });
});
