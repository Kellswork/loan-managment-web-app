// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Table from './Table'; // Adjust path as necessary
// import { StoreContext } from '@/app/_context-and-reducer/storeContext';

// // Mock context data
// const mockData = {
//   userData: [
//     {
//       general: { user_id: '1', date_joined: '2023-07-21', user_status: 'Active' },
//       personal_information: {
//         organization: 'Org1',
//         username: 'User1',
//         email: 'user1@example.com',
//         phone_number: '1234567890',
//       },
//     },
//     // Add more users as necessary
//   ],
//   updateUserStatus: jest.fn(),
//   error: null,
//   loading: false,
// };

// const renderTable = (contextValue) =>
//   render(
//     <StoreContext.Provider value={contextValue}>
//       <Table />
//     </StoreContext.Provider>
//   );

// describe('Table Component Unit Tests', () => {
//   test('renders loading state', () => {
//     renderTable({ ...mockData, loading: true });
//     expect(screen.getByTestId('table-skeleton-loader')).toBeInTheDocument();
//     expect(screen.getByTestId('mobile-table-skeleton-loader')).toBeInTheDocument();
//   });

//   test('renders error state', () => {
//     renderTable({ ...mockData, error: 'Error fetching data' });
//     expect(screen.getByText(/There was a problem fetching the data/i)).toBeInTheDocument();
//   });

//   test('pagination logic', () => {
//     renderTable(mockData);
//     expect(screen.getAllByRole('row')).toHaveLength(mockData.userData.length + 1); // +1 for the header row
//   });

//   test('toggle filter', () => {
//     renderTable(mockData);
//     fireEvent.click(screen.getAllByRole('button', { name: /filter results button/i })[0]);
//     expect(screen.getByTestId('filter-card')).toBeInTheDocument();
//     fireEvent.click(screen.getAllByRole('button', { name: /filter results button/i })[0]);
//     expect(screen.queryByTestId('filter-card')).not.toBeInTheDocument();
//   });

//   test('toggle status card', () => {
//     renderTable(mockData);
//     fireEvent.click(screen.getByAltText(/view actions/i));
//     expect(screen.getByTestId('status-card')).toBeInTheDocument();
//     expect(screen.getByTestId('status-card')).toHaveStyle({ top: expect.any(String), left: expect.any(String) });
//   });

//   test('status update', () => {
//     renderTable(mockData);
//     fireEvent.click(screen.getByAltText(/view actions/i));
//     fireEvent.click(screen.getByText(/Active/i));
//     expect(mockData.updateUserStatus).toHaveBeenCalledWith('1', 'Active');
//   });
// });

// describe('Table Component Integration Tests', () => {
//   test('pagination interaction', () => {
//     renderTable(mockData);
//     fireEvent.click(screen.getByText('2'));
//     waitFor(() => {
//       expect(screen.getByText('2')).toHaveClass('active');
//       expect(screen.getAllByRole('row')).toHaveLength(mockData.userData.length + 1); // Adjust based on pagination logic
//     });
//   });

//   test('conditional rendering of filter and status cards', () => {
//     renderTable(mockData);
//     fireEvent.click(screen.getAllByRole('button', { name: /filter results button/i })[0]);
//     expect(screen.getByTestId('filter-card')).toBeInTheDocument();
//     fireEvent.click(screen.getByAltText(/view actions/i));
//     expect(screen.getByTestId('status-card')).toBeInTheDocument();
//   });

//   test('mobile view', () => {
//     global.innerWidth = 500;
//     global.dispatchEvent(new Event('resize'));
//     renderTable(mockData);
//     expect(screen.getByTestId('mobile-table')).toBeInTheDocument();
//   });
// });
