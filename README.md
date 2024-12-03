## Bookstore App
### A practice application created with:
- Next.js
- Tailwind CSS
- MongoDB Atlas

### Pages, Components, and Features:
- Landing page with search bar that allows users to search by title (multiple results)
- Product card with selected book details and Add to cart button
- Product card will show "Out of Stock" and disable Add to cart button if all stock have been purchased
- Product card will show "Last item" chip if stock == 1
- Product page with all book details including description
- Filter books by author (viewed as a page)
- Filter books by genre (viewed as a page)
- Cart items page where user can either purchase or delete items in cart
- Mobile view ready

### Running the Application
- To run the application, you must connect to an instance of MongoDB. The seed data is provided in the DB Seed Data folder (root).
- Take your connection string and replace the placeholder in the .env / .env.local file.

#### Seed data is from https://openlibrary.org/ primarily.
#### Some descriptions were copied from https://www.goodreads.com/ if missing from data provided by Open Library.
#### Icons from https://fontawesome.com/

### Sample views:
#### Landing Page - Desktop
<img width="1080" alt="Screenshot 2024-12-03 at 5 01 53 PM" src="https://github.com/user-attachments/assets/0b8c0af1-cc3f-430c-95d7-bdfe62a98e86">

#### Landing Page - Mobile
<img width="398" alt="Screenshot 2024-12-03 at 4 48 18 PM" src="https://github.com/user-attachments/assets/ba7e364c-30a3-4165-a171-f11ec9e2aa9b">

### Product Page - Desktop
<img width="1079" alt="Screenshot 2024-12-03 at 4 46 36 PM" src="https://github.com/user-attachments/assets/89be9b3e-b5c8-4a67-ace1-989730ed286c">

#### Side Bar - Mobile
<img width="401" alt="Screenshot 2024-12-03 at 4 47 55 PM" src="https://github.com/user-attachments/assets/b3d4c9e0-d6cb-43b4-a5ba-7fb301beaf91">

#### Filter by Author (page) - Desktop
<img width="1068" alt="Screenshot 2024-12-03 at 4 28 41 PM" src="https://github.com/user-attachments/assets/6f1027fa-a641-435c-8455-c1b070aad492">

#### Product Cart - Desktop
<img width="1079" alt="Screenshot 2024-12-03 at 4 46 54 PM" src="https://github.com/user-attachments/assets/a3997b3b-0920-4dd8-ae27-d6cb8dca5a88">

#### Product Cart - Mobile
<img width="398" alt="Screenshot 2024-12-03 at 4 47 39 PM" src="https://github.com/user-attachments/assets/e02b4327-a087-44f3-8ea6-30470b8afc31">

### Lighthouse analysis report:
Lighthouse is a tool used to check website performance. It audits the website for SEO, accessibility, and loading times, among other things, and provides insights on how to improve the code to meet industry standards. I ran the build version of the app through Lighthouse and got the following results:

<img width="1680" alt="Screenshot 2024-12-03 at 4 26 44 PM" src="https://github.com/user-attachments/assets/66041b01-5421-4d3e-9d87-a14d88634969">

### Build Pipeline Results
Jest tests and linting in build pipeline

<img width="807" alt="Screenshot 2024-12-03 at 5 24 39 PM" src="https://github.com/user-attachments/assets/9affd3cb-7276-4386-a748-61104f5137cc">

