const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/proxy', async (req, res) => {
    const apiKey = 'enGWEdP1pN1w2wF201K4ym9UTCc5KfIHCbB2BMDiQBVx20I3f26KpelYNXoQfuLK';
    const apiId = 'd3csmU2H';
    const sign = apiId + apiKey;
    const type = 'services';
    const filterType = 'game';
    const filterValue = 'free fire';

    try {
        const response = await fetch('https://vip-reseller.co.id/api/game-feature', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                key: apiKey,
                sign: sign,
                type: type,
                filter_type: filterType,
                filter_value: filterValue
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Proxy server running on http://localhost:3000');
});
