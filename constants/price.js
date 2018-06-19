module.exports = {
    CURRENCY: 'SGD',
    STYLE: 'currency',
    ITEMS: [
        {
            'min': 0,
            'max': 25,
            'label': 'Under $25',
        },
        {
            'min': 25,
            'max': 50,
            'label': '$25 - $50',
        },
        {
            'min': 50,
            'max': 100,
            'label': '$50 - $100',
        },
        {
            'min': 100,
            'max': 150,
            'label': '$100 - $150',
        },
        {
            'min': 150,
            'max': 300,
            'label': '$150 - $300',
        },
        {
            'min': 300,
            'max': 999999,
            'label': 'Above $300',
        }
    ],
};
