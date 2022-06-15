interface Image {
    asset: {
        url: string
    }
}
export interface Creator {
    _id: string,
    name: string
    address: string
    slug: {
        current: string
    }
    image: string
    bio: string
}
export interface Collection {
    _id: string,
    title: string
    description: string
    ntfCollectionName: string
    address: string
    slug: {
        current: string
    }
    Creator: Creator
    mainImage: Image
    previewImage: Image
}