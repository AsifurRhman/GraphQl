export const categories = [
    {
      id: "658c9a242cf2169be56770a8",
      name: "Audio Devices"
    },
    {
      id: "658c9a242cf2169be56770a9",
      name: "Mobile Devices"
    },
    {
      id: "658c9a242cf2169be56770aa",
      name: "Entertainment Systems"
    },
    {
      id: "658c9a242cf2169be56770ab",
      name: "Computers"
    },
    {
      id: "658c9a242cf2169be56770ac",
      name: "Accessories"
    }
  ];
  

  export const products = [
    {
      id: "658c9a242cf2169be56770a8",
      name: "Wireless Headphones",
      image: "https://example.com/images/wireless-headphones.jpg",
      description: "High-quality wireless headphones with noise cancellation.",
      price: 149.99,
      quantity: 50,
      onStock: true,
      CategoryId: "658c9a242cf2169be56770a8"  // Audio Devices
    },
    {
      id: "658c9a242cf2169be56770ac",
      name: "Bluetooth Speaker",
      image: "https://example.com/images/bluetooth-speaker.jpg",
      description: "Portable Bluetooth speaker with deep bass.",
      price: 89.99,
      quantity: 75,
      onStock: true,
      CategoryId: "658c9a242cf2169be56770a8"  // Audio Devices
    },
    {
      id: "658c9a242cf2169be56770a9",
      name: "Smartphone",
      image: "https://example.com/images/smartphone.jpg",
      description: "Latest model smartphone with advanced features.",
      price: 799.99,
      quantity: 30,
      onStock: true,
      CategoryId: "658c9a242cf2169be56770a9"  // Mobile Devices
    },
    {
      id: "658c9a242cf2169be56770af",
      name: "Tablet",
      image: "https://example.com/images/tablet.jpg",
      description: "10-inch tablet with 128GB storage and stylus support.",
      price: 329.99,
      quantity: 35,
      onStock: true,
      CategoryId: "658c9a242cf2169be56770a9"  // Mobile Devices
    },
    {
      id: "658c9a242cf2169be56770aa",
      name: "4K TV",
      image: "https://example.com/images/4k-tv.jpg",
      description: "55-inch 4K Ultra HD Smart TV with HDR.",
      price: 599.99,
      quantity: 15,
      onStock: true,
      CategoryId: "658c9a242cf2169be56770aa"  // Entertainment Systems
    },
    {
      id: "658c9a242cf2169be56770ae",
      name: "Digital Camera",
      image: "https://example.com/images/digital-camera.jpg",
      description: "24.2 MP DSLR camera with 18-55mm lens.",
      price: 499.99,
      quantity: 20,
      onStock: true,
      CategoryId: "658c9a242cf2169be56770aa"  // Entertainment Systems
    },
    {
      id: "658c9a242cf2169be56770ab",
      name: "Gaming Laptop",
      image: "https://example.com/images/gaming-laptop.jpg",
      description: "High-performance gaming laptop with the latest GPU.",
      price: 1299.99,
      quantity: 25,
      onStock: true,
      CategoryId: "658c9a242cf2169be56770ab"  // Computers
    },
    {
      id: "658c9a242cf2169be56770ad",
      name: "Smartwatch",
      image: "https://example.com/images/smartwatch.jpg",
      description: "Smartwatch with heart rate monitor and GPS.",
      price: 199.99,
      quantity: 40,
      onStock: true,
      CategoryId: "658c9a242cf2169be56770ab"  // Computers
    },
    {
      id: "658c9a242cf2169be56770b0",
      name: "Fitness Tracker",
      image: "https://example.com/images/fitness-tracker.jpg",
      description: "Water-resistant fitness tracker with sleep monitoring.",
      price: 79.99,
      quantity: 60,
      onStock: true,
      CategoryId: "658c9a242cf2169be56770ac"  // Accessories
    },
    {
      id: "658c9a242cf2169be56770b1",
      name: "Wireless Charger",
      image: "https://example.com/images/wireless-charger.jpg",
      description: "Fast wireless charger compatible with all Qi devices.",
      price: 39.99,
      quantity: 90,
      onStock: true,
      CategoryId: "658c9a242cf2169be56770ac"  // Accessories
    }
  ];
  

  export const reviews = [
    {
      id: "658c9a242cf2169be56770c1",
      productId: "658c9a242cf2169be56770a8",
      reviewer: "John Doe",
      rating: 4.5,
      comment: "Great sound quality and comfortable to wear.",
      date: "2024-08-01"
    },
    {
      id: "658c9a242cf2169be56770c2",
      productId: "658c9a242cf2169be56770a8",
      reviewer: "Jane Smith",
      rating: 4.0,
      comment: "Good value for the price, but could use more bass.",
      date: "2024-08-05"
    },
    {
      id: "658c9a242cf2169be56770c3",
      productId: "658c9a242cf2169be56770ac",
      reviewer: "Alice Johnson",
      rating: 4.8,
      comment: "Portable and has amazing sound for its size.",
      date: "2024-08-10"
    },
    {
      id: "658c9a242cf2169be56770c4",
      productId: "658c9a242cf2169be56770a9",
      reviewer: "Michael Brown",
      rating: 4.7,
      comment: "Fast and responsive, with a fantastic display.",
      date: "2024-08-12"
    },
    {
      id: "658c9a242cf2169be56770c5",
      productId: "658c9a242cf2169be56770af",
      reviewer: "Emily Davis",
      rating: 4.6,
      comment: "Great tablet for drawing and media consumption.",
      date: "2024-08-15"
    },
    {
      id: "658c9a242cf2169be56770c6",
      productId: "658c9a242cf2169be56770aa",
      reviewer: "David Wilson",
      rating: 4.3,
      comment: "Stunning picture quality, but the sound could be better.",
      date: "2024-08-18"
    },
    {
      id: "658c9a242cf2169be56770c7",
      productId: "658c9a242cf2169be56770ae",
      reviewer: "Sarah Lee",
      rating: 4.9,
      comment: "Excellent camera for beginners and professionals alike.",
      date: "2024-08-20"
    },
    {
      id: "658c9a242cf2169be56770c8",
      productId: "658c9a242cf2169be56770ab",
      reviewer: "Chris White",
      rating: 4.7,
      comment: "Handles all modern games smoothly at high settings.",
      date: "2024-08-22"
    },
    {
      id: "658c9a242cf2169be56770c9",
      productId: "658c9a242cf2169be56770ad",
      reviewer: "Laura Martinez",
      rating: 4.4,
      comment: "Very useful for fitness tracking, though the battery could last longer.",
      date: "2024-08-23"
    },
    {
      id: "658c9a242cf2169be56770ca",
      productId: "658c9a242cf2169be56770b0",
      reviewer: "Mark Anderson",
      rating: 4.6,
      comment: "Tracks sleep and exercise well, easy to use.",
      date: "2024-08-25"
    },
    {
      id: "658c9a242cf2169be56770cb",
      productId: "658c9a242cf2169be56770b1",
      reviewer: "Paul Roberts",
      rating: 4.2,
      comment: "Convenient charging, but gets a bit warm during use.",
      date: "2024-08-27"
    }
  ];
  