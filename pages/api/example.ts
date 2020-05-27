export default (req, res) => {
    if (req.method === 'GET') {
        return res.json({
            text: 'This is an example of an API route'
        });
    } else {
        return res.status(405).send('Invalid method');
    }
}
