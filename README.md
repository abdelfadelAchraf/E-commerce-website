# E-commerce Website

## Project Overview
This project is a fully functional **e-commerce website** built using the **MERN stack (MongoDB, Express.js, React, Node.js)** and follows the **MVC (Model-View-Controller) architecture**. It allows users to browse products, add them to their cart, place orders, and manage their profiles. Admins can manage products and orders.

## Features
### **User Functionalities**
- Browse products
- Add products to cart
- Place orders
- Manage profile
- Contact support

### **Admin Functionalities**
- Add new products
- List all products
- Manage orders

### **Visitor Functionalities**
- Browse products
- View product details

## **Architecture: MVC with MERN Stack**
The project follows the **MVC (Model-View-Controller)** pattern:
- **Model (MongoDB):** Handles database interactions (User, Product, Order, etc.)
- **View (React.js):** User interface (Frontend pages)
- **Controller (Express.js & Node.js):** Manages logic and communication between Model and View
![mvc](https://github.com/user-attachments/assets/2bb18782-518b-49ae-84c4-d1bef5dd31a5)
## **Use Case Diagram (UML)**
The following diagram represents the **use case interactions** of the project:

```plantuml
@startuml

actor Visitor
actor User
actor Admin

usecase "Browse Products" as UC1
usecase "View Product Details" as UC1a
usecase "Add Product to Cart" as UC2
usecase "Place Order" as UC3
usecase "Manage Profile" as UC4
usecase "Contact Support" as UC5

usecase "Add Product" as UC6
usecase "List Products" as UC7
usecase "Manage Orders" as UC8

Visitor --> UC1
Visitor --> UC1a
User --> UC1
User --> UC1a
User --> UC2
User --> UC3
User --> UC4
User --> UC5

Admin --> UC6
Admin --> UC7
Admin --> UC8

@enduml
```
![image](https://github.com/user-attachments/assets/1c7dc791-4d13-4a5a-a91a-3ac94383d431)




## **Sequence Diagram (UML)**
- The following diagram represents the **order placement process**:

```plantuml
@startuml

actor User
participant "Frontend (React)" as FE
participant "Backend (Node.js)" as BE
participant "Database (MongoDB)" as DB

User -> FE: Selects products and adds to cart
FE -> BE: Sends cart details
BE -> DB: Fetch product details and availability
DB --> BE: Returns product details
BE -> FE: Updates cart
User -> FE: Proceeds to checkout
FE -> BE: Sends order details
BE -> DB: Saves order in database
DB --> BE: Confirms order
BE -> FE: Displays order confirmation

@enduml
```
![image](https://github.com/user-attachments/assets/b82a17f3-b20c-483f-9f09-446e513097ef)
- The following diagram represents the **account creation process**:

```plantuml
@startuml
actor Visitor
participant "Frontend (React)" as FE
participant "Backend (Node.js)" as BE
participant "Database (MongoDB)" as DB

Visitor -> FE: Fills registration form
FE -> BE: Sends user data
BE -> DB: Checks if email exists
DB --> BE: Returns result
BE -> DB: Saves new user data
DB --> BE: Confirms save
BE -> FE: Returns success message
FE -> Visitor: Displays confirmation
@enduml
```
![image](https://github.com/user-attachments/assets/c5a8a3b3-e158-49ae-bc44-cb1e9a30ea07)

- The following diagram represents the **login process**:

```plantuml
@startuml
actor User
participant "Frontend (React)" as FE
participant "Backend (Node.js)" as BE
participant "Database (MongoDB)" as DB

User -> FE: Enters email and password
FE -> BE: Sends login request
BE -> DB: Verifies credentials
DB --> BE: Returns user data
BE -> FE: Sends JWT token
FE -> User: Stores token and redirects

@enduml
```
![image](https://github.com/user-attachments/assets/e731c2cd-ce24-41c9-9779-b1f03d595116)


- The following diagram represents the **Checkout & Payment process**:

```plantuml
@startuml
actor User
participant "Frontend (React)" as FE
participant "Backend (Node.js)" as BE
participant "Database (MongoDB)" as DB
participant "Payment Gateway" as PG

User -> FE: Proceeds to checkout
FE -> BE: Sends order details
BE -> DB: Checks product stock
DB --> BE: Confirms availability
BE -> PG: Processes payment
PG --> BE: Returns payment confirmation
BE -> DB: Saves order details
DB --> BE: Confirms save
BE -> FE: Returns order confirmation
FE -> User: Displays success message

@enduml
```
![image](https://github.com/user-attachments/assets/a511d6a5-f7dd-4e79-9a55-fd0945c24492)


- The following diagram represents the **Admin Adds a Product process**:

```plantuml
@startuml
actor Admin
participant "Frontend (React)" as FE
participant "Backend (Node.js)" as BE
participant "Database (MongoDB)" as DB

Admin -> FE: Fills product form
FE -> BE: Sends product details
BE -> DB: Stores product in database
DB --> BE: Confirms save
BE -> FE: Returns success message
FE -> Admin: Displays confirmation

@enduml
```

![Working-of-MVC](https://github.com/user-attachments/assets/7f48b035-2b28-41ad-bc39-c6f1c3f62cf3)

## **Class Diagram (UML)**
The following diagram represents the **class structure** of the project:

```plantuml
@startuml

class User {
  +id: int
  +name: string
  +email: string
  +password: string
  +placeOrder(order: Order)
}

class Product {
  +id: int
  +name: string
  +price: float
  +description: string
  +category: string
}

class Order {
  +id: int
  +userId: int
  +totalAmount: float
  +status: string
  +products: List<Product>
  +placeOrder(): void
}

class Cart {
  +id: int
  +userId: int
  +products: List<Product>
  +addProduct(product: Product): void
  +removeProduct(product: Product): void
}

class Admin {
  +id: int
  +name: string
  +email: string
  +password: string
  +addProduct(product: Product): void
  +listProducts(): List<Product>
  +manageOrders(): void
}

User "1" -- "*" Order
Order "*" -- "*" Product
User "1" -- "1" Cart
Admin "1" -- "*" Product : manages
Admin "1" -- "*" Order : oversees

@enduml
```
![image](https://github.com/user-attachments/assets/bd0118e6-63ff-4ea7-9c4b-ef72b94fb797)


## **Installation & Setup**
### **1. Clone the Repository**
```sh
git clone https://github.com/abdelfadelAchraf/E-commerce-website.git
cd E-commerce-website
```

### **2. Install Dependencies**
```sh
npm install  # Install backend and frontend dependencies
```


### **4. Run the Project**
```sh
cd frontend 
npm run dev  # Starts the frontend part 
```
```sh
cd admin 
npm run dev  # Starts the admin dashboard
```
```sh
cd backend 
npm run server  # Starts the backend part
```



## **Environment Variables**
Create a `.env` file in the root directory and add:
```env
MONGO_DB_URL="mongodb+srv://<username>:<password>@clusterwebcommerce.luxe3.mongodb.net"
PORT="4000"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_SECRET_KEY="your-secret-key"
CLOUDINARY_CLOUD_NAME="your-cloud-name"
JWT_SECRET="your-secret-jwt-key"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="your-admin-password"

```

## **API Endpoints**
### **User Routes**
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Authenticate user & get token
- `GET /api/users/profile` - Get user profile (protected)

### **Product Routes**
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details

### **Order Routes**
- `POST /api/orders` - Place an order (protected)
- `GET /api/orders/:id` - Get order details (protected)

## **Authentication & Authorization**
- **JWT (JSON Web Token)** is used for authentication.
- Passwords are **hashed** using `bcrypt`.
- Protected routes require a **valid token**.


## **Future Enhancements**
- **Payment Gateway Integration** (Stripe, PayPal)
- **Wishlist Functionality**
- **Reviews and Ratings System**

## **License**
This project is open-source and available under the **MIT License**.

---



