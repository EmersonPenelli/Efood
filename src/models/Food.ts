class Food {
  id: number
  foodTitle: string
  foodPhoto: string
  foodDescription: string
  foodPhotoAlt: string
  ProductTitle = '' // Assign a default value or initialize the property

  // ProductDetails: string
  ProductRate = 0 // Remove type annotation for ProductRate

  ProductPhoto = '' // Add initializer for ProductPhoto
  ProductToLink = '' // Add initializer for ProductToLink
  ProductCategories: string[] = [] // Add initializer for ProductCategories
  ProductDetails = '' // Assign a default value or initialize the property

  constructor(
    id: number,
    foodTitle: string,
    foodPhoto: string,
    foodDescription: string,
    foodPhotoAlt: string
  ) {
    this.id = id
    this.foodTitle = foodTitle
    this.foodPhoto = foodPhoto
    this.foodDescription = foodDescription
    this.foodPhotoAlt = foodPhotoAlt
  }
}

export default Food
