[![tests](https://github.com/Kellswork/loan-managment-web-app/actions/workflows/main.yaml/badge.svg)](https://github.com/Kellswork/loan-managment-web-app/actions/workflows/main.yaml)

# LendMe Project Documentation
A Financial service loan management system


Deployed on Vercel - 

## Tools and Technologies:
React
TypeScript
Next.js
Sass(SCSS)

**State Management:**
Context API and useReducer

Testing
Jest
React Testing Library
End-to-End Testing: Playwright

##  User Experience Features Implemented
**Login / Home View**
- Input Validation: Validates email format and minimum password length.
- Password Visibility Toggle: Users can show/hide the password input.
- Error Handling: Displays error messages for invalid inputs.
- Form Submission: Handles form submission, including disabling the button during loading.
- Local Storage: Stores user details locally upon successful login.
- Routing: Redirects to the dashboard after login.

**Dashbaord / Users view**
- Users Table: Displays a paginated table of users with various details including organization, username, email, phone number, date joined, and status.
- Card Layout: Shows summary cards with user statistics such as total users, active users, users with loans, and users with savings.
- Filter Functionality: Provides a filter button on each table header to toggle a filter card for refined searches.
- Status Update: Allows updating the status of a user to "Blacklisted" or "Active" by clicking on an action icon in the table.
- Loading States: Displays skeleton loaders when data is being fetched.
- Error Handling: Shows an error message when there is a problem fetching the data.
- Pagination: Implements pagination to navigate through the user data table.

## Get Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

- clone repository https://github.com/Kellswork/loan-managment-web-app.git 
- Navigate to the project directory.
- CD into the folder
- In your terminal, run `npm install` to install dependencies.
- To run in development, `npm run dev`
- check package.json for build and production commands

To Run Test

End to End Test: `npm run cypress:open`

