const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const url = 'https://nationalbank.kz/rss/get_rates.cfm?fdate=23.02.2009';
  try {
    const response = await fetch(url);
    const data = await response.text();
    res.setHeader('Content-Type', 'application/rss+xml');
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};