export default function handler(req, res) {
  console.log(req.body);

  if (req.method === 'POST') {
    console.log('receieved post message');
  }

  res.status(200).json({
    status: 'Added the user to newletter',
    email: req.body.email,
  });
}
