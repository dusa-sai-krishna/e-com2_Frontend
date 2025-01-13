export const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '/',
                    imageSrc:  "https://rukminim1.flixcart.com/image/612/612/xif0q/dress/h/m/h/xl-na-awd-23-yellow-aarvia-original-imagzfs6ykq3z7jw.jpeg?q=70",               imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '/',
                    imageSrc: "https://rukminim1.flixcart.com/image/612/612/knyxqq80/salwar-kurta-dupatta/q/i/q/32-skd7385-biba-original-imag2jag2zzz3shw.jpeg?q=70",                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
                        { name: 'Dresses', id:"women_dress", href: '#' },
                        { name: 'Women Jeans', id: 'women_jeans' },
                        { name: 'Lengha Choli', id: 'lengha_choli' },
                        { name: 'Sweaters', id: 'sweater' },
                        { name: 'T-Shirts', id: 't-shirt' },
                        { name: 'Jackets', id: 'jacket' },
                        { name: 'Gouns', id: 'gouns' },
                        { name: 'Sarees', id: 'saree' },
                        { name: 'Kurtas', id: 'kurtas' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', id: 'watch' },
                        { name: 'Wallets', id: 'wallet' },
                        { name: 'Bags', id: 'bag' },
                        { name: 'Sunglasses', id: 'sunglasse' },
                        { name: 'Hats', id: 'hat' },
                        { name: 'Belts', id: 'belt' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', id: '#' },
                        { name: 'My Way', id: '#' },
                        { name: 'Re-Arranged', id: '#' },
                        { name: 'Counterfeit', id: '#' },
                        { name: 'Significant Other', id: '#' },
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    id: '#',
                    imageSrc: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70",

                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    id: '#',
                    imageSrc: "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70",
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Mens Kurtas', id: 'mens_kurta' },
                        { name: 'Shirt', id: 'shirt' },
                        { name: 'Men Jeans', id: 'men_jeans' },
                        { name: 'Sweaters', id: '#' },
                        { name: 'T-Shirts', id: 't-shirt' },
                        { name: 'Jackets', id: '#' },
                        { name: 'Activewear', id: '#' },

                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', id: '#' },
                        { name: 'Wallets', id: '#' },
                        { name: 'Bags', id: '#' },
                        { name: 'Sunglasses', id: '#' },
                        { name: 'Hats', id: '#' },
                        { name: 'Belts', id: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Re-Arranged', id: '#' },
                        { name: 'Counterfeit', id: '#' },
                        { name: 'Full Nelson', id: '#' },
                        { name: 'My Way', id: '#' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', id: '/' },
        { name: 'Stores', id: '/' },
    ],
}