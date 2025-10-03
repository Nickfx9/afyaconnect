// pages/api/auth/logout.js
import cookie from 'cookie';

export default async function handler(req, res) {
  // clear cookie
  res.setHeader('Set-Cookie', cookie.serialize('afyaconnectToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: new Date(0),
    path: '/'
  }));

  return res.status(200).json({ message: 'Logged out' });
}
