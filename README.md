# JavaScript 3 | 2<sup>nd</sup> assignment 
[live-demo-1](https://business-app-eight.vercel.app/)  |  [live-demo-2](https://business-app-live.herokuapp.com)

## Demand
- React
- JSX
- React Router Dom
- useState
- useEffect
- useContext 📌 (for customersList and login user's info)
- Styled Components
  - create styled components
  - inherit from other styled components 📌 

## API
**URL:** "https://frebi.willandskill.eu/"

**E-mail:** nackademin@willandskill.se

**password:** js-fend-19

**Swagger Navigation:** https://frebi.willandskill.eu/swagger/

## Requirement
1. Create a new user
2. Activate this user via link which sends to your register-email.
3. Once sucessfully login with E-mail and password, the user will be able to login via a token.
4. On `/home` page, the user will see all customers listed - if there is any -, meanwhile the user should be able to create a new user (maxmum 10 user)
  
     - To create a new user, there should contain a **name**, **organisationNr**, **vatNr** (📌  : should begin with SE and follow with 10 digit), **reference**, **paymentTerm**, **website**, **email**, **phoneNumber**.
     - List current logged-in user's email, firstname and lastname.
     - Once the user creates a new customer, this new customer should be listed on this page.
5. For each individuel customer's page, all these fields should be listed: **name**, **organisationNr**, **vatNr**, **reference**, **paymentTerm**, **website**, **email**, **phoneNumber**.
   
   - 📌 Add a button to delete a customer. Once delete a customer, the user will navigate to `/home` page.
   - 📌 The user should be able to update/edit customers' information. 


## Dependencies
1. react-router-dom
2. styled-component
3. react-hook-form
4. yup
5. react-super-responsive-table

## URL
ROOT_URL: "https://frebi.willandskill.eu/"
---
📌 : extra requirement for VG
