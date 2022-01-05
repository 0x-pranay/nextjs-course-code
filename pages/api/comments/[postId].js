const dummyData = [
  {
    text: 'My comment is amazing',
    name: 'Maximilian',
  },
  {
    text: 'My comment is amazing',
    name: 'Maximilian',
  },
  {
    text: 'My comment is amazing',
    name: 'Maximilian',
  },
  {
    text: 'My comment is amazing',
    name: 'Maximilian',
  },
];

export default function handler(req, res) {
  console.log(req.query);
  if (req.method === 'GET') {
    res.status(200).json({ comments: dummyData });
  }
  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    console.log('Input comment data: ', req.body);

    res.status(200).json({
      message: 'Comment submitted successfully',
    });
  }
}
