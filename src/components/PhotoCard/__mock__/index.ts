interface Photo {
    location: string;
    imageUrl: string;
    description: string;
    likes: number;
}

const photos: Photo[] = [
    {
        location: "London",
        imageUrl: "../src/assets/London.jpg",
        description: "Big Ben Clock Tower",
        likes: 10,
    },
    {
        location: "Paris",
        imageUrl: "../src/assets/Paris.jpg",
        description: "Eiffel Tower at sunset",
        likes: 15,
    },
    {
        location: "Tokyo",
        imageUrl: "../src/assets/Tokio.jpg",
        description: "Cityscape of Tokyo",
        likes: 20,
    },
    {
        location: "Sydney",
        imageUrl: "../src/assets/Sydney.jpg",
        description: "Sydney day view with sailboats",
        likes: 20,
    }
];

export default photos;
