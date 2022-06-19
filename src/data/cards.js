import images from '../images/imageData';

export const cards = () =>
    [
        {
            cardImage: images[0].img,
            cardTitle: 'Request',
            cardContent: 'Request for product delivery any where around the country through one of our agents or clients.',
            cardAction: 'Request Courier',
        },
        {
            cardImage: images[5].img,
            cardTitle: 'Track',
            cardContent: "Get detailed information about your product's delivery.",
            cardAction: 'Track',
        },
        {
            cardImage: images[2].img,
            cardTitle: 'Deliver',
            cardContent: 'Delivery confirmation and details.',
            cardAction: 'Delivery Details',
        },
    ];

