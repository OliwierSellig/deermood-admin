import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:3000/api/v1/admins/login', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        status: 'succes',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjE2NDAxZWQ3ODhmZDI0N2Y3MzNkOCIsImlhdCI6MTcxOTQ5MTQwNCwiZXhwIjoxNzI3MjY3NDA0fQ.jbj2DbXciUOAs5G2hY8fWtlQJEt9iTu9lfk3C3F3Xp8',
        data: {
          admin: {
            firstName: 'Brandon',
            surname: 'Sanderson',
            email: 'brandon@deermood.com',
            photo: '',
          },
        },
      }),
    );
  }),
  rest.get('http://localhost:3000/api/v1/admins/logout', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ status: 'success' }));
  }),

  rest.post(
    'http://localhost:3000/api/v1/admins/forgotPassword',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          status: 'succes',
          message: 'Token sent to email!',
        }),
      );
    },
  ),

  rest.patch(
    'http://localhost:3000/api/v1/admins/resetPassword/7c27c271492270f989482196203db43fba1f54c796785263b67b05a0a040486',
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          status: 'succes',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjE2NDAxZWQ3ODhmZDI0N2Y3MzNkOCIsImlhdCI6MTcxOTQ5MTc2MCwiZXhwIjoxNzI3MjY3NzYwfQ.BREHdKTjQj4u66D-GIxpv81scbbyDzIV8qTLa4L8sMY',
        }),
      );
    },
  ),

  rest.patch(
    'http://localhost:3000/api/v1/admins/updateMe',
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          status: 'succes',
        }),
      );
    },
  ),

  rest.patch(
    'http://localhost:3000/api/v1/admins/updatePassword',
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          status: 'succes',
        }),
      );
    },
  ),
];
