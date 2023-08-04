
# Models
## 1. User
The User model represents the user accounts in the application. Each user is identified by a unique id and is associated with the following attributes:

- id: An auto-incrementing integer that serves as the primary key for the User model.
- email: A string representing the user's email address. This attribute is marked as unique to ensure that each email address corresponds to a unique user.
- password: A string representing the user's password.
- firstName: An optional string containing the user's first name.
- lastName: An optional string containing the user's last name.

Additionally, each user can be associated with multiple transaction details, such as rentList, LentDetail, PurchaseDetail, and SellDetail, which represent various interactions with products.
## 2. Product
The Product model represents the various products available in the application. Each product is identified by a unique id and is associated with the following attributes:
- id: An auto-incrementing integer that serves as the primary key for the Product model.
- name: A string representing the name of the product.
- description: An optional string providing a description of the product.
- price: An optional float indicating the price of the product if it is for sale.
- createdBy: An optional integer representing the ID of the user who created the product.
- rentPrice: An optional float indicating the rental price of the product, if it is available for rent.
  
Each product can belong to multiple categories, represented by the categories relationship. The product can also be associated with one set of transaction details for each of the following interactions: RentDetail, LentDetail, PurchaseDetail, and SellDetail.

##3. Category

The Category model represents the different categories that products can be classified into. Each category is identified by a unique id and is associated with the following attributes:

- id: An auto-incrementing integer that serves as the primary key for the Category model.
- name: A string representing the name of the category. This attribute is marked as unique to ensure each category has a distinct name.
Each category can be associated with multiple products, represented by the products relationship.

## 4. RentDetail
The RentDetail model represents the details of a product that has been rented by a user. Each rent detail is identified by a unique id and is associated with the following attributes:

- id: An auto-incrementing integer that serves as the primary key for the RentDetail model.
- startDate: A datetime representing the start date of the rental period.
- endDate: A datetime representing the end date of the rental period.
- totalPrice: An optional float indicating the total price of the rental.
  
Each rent detail is associated with one product (via product relationship) and one user (via User relationship).

## 5. LentDetail
The LentDetail model represents the details of a product that has been lent by a user to someone else. Each lent detail is identified by a unique id and is associated with the following attributes:

- id: An auto-incrementing integer that serves as the primary key for the LentDetail model.
- startDate: A datetime representing the start date of the lending period.
- endDate: A datetime representing the end date of the lending period.
- totalPrice: A float indicating the total price of the lent product.

Each lent detail is associated with one product (via product relationship) and one user (via User relationship).

## 6. PurchaseDetail
The PurchaseDetail model represents the details of a product that has been purchased by a user. Each purchase detail is identified by a unique id and is associated with the following attributes:

- id: An auto-incrementing integer that serves as the primary key for the PurchaseDetail model.
- totalPrice: A float indicating the total price of the purchased product.
  
Each purchase detail is associated with one product (via product relationship) and one user (via User relationship).

## 7. SellDetail

The SellDetail model represents the details of a product that has been sold by a user. Each sell detail is identified by a unique id and is associated with the following attributes:

- id: An auto-incrementing integer that serves as the primary key for the SellDetail model.
- totalPrice: A float indicating the total price of the sold product.

Each sell detail is associated with one product (via product relationship) and one user (via User relationship).
Relationships

- The database schema defines several relationships between the models:
- Each User can have multiple RentDetail, LentDetail, PurchaseDetail, and SellDetail.
- Each Product can belong to multiple Categories.
- Each Product can have one set of RentDetail, LentDetail, PurchaseDetail, and SellDetail.
- Each Category can be associated with multiple Product.
  
These relationships help establish the connections between users, products, categories, and the various transaction details in the application.

# Features
### 1. Login
Login feature takes two input value email, password and matches the raw data in the database.

example fields: email: string password: string

### 2. Registration
User can register using giving necessary information and mutation function createUser handles registration of the user.

example fields: email: string password: string ,firstName: string,lastName: string,

### 3. Add Product
User can add product and mutation function addProduct handles and creates a new product.

example fields: id:Int, name:string, description:string, price:Float, categories:[String] ,createdBy:Int, rentPrice: Float

### 4. Edit Product
User can edit the existing product and mutation function editProduct takes id and exisiting data to update the values

example fields: id:Int, name:string, description:string, price:Float, categories:[String] ,createdBy:Int, rentPrice: Float

### 5. Delete Product
User can delete the product passing only the user id to mutation deleteProduct.

example fields: id: int

### 6. Get Product
User can get product by product id, by product creator and it can also get all the product using mutation getProductById, getProductByCreator, getAllProduct

## Corner Cases
I have checked all the rent period timing so that it if the rent timing clashes then it won't let the user rent. Though errors messages were not provided.

## Limitations
The server isn't secure and there is no required argument which can cause error if wrong values are passed.





