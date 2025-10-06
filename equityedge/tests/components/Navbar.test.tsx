import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';
// --- FIX #1: Import the type along with the context ---
import { AuthContext, type AuthContextType } from '../../src/context/AuthContext';

// Helper function with the new type annotation
const renderNavbar = (contextValue: AuthContextType) => { // <-- FIX #2: Apply the type here
  const user = userEvent.setup();
  const utils = render(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </AuthContext.Provider>
  );
  return { user, ...utils };
};

describe('Navbar Component', () => {
  describe('When user is logged out', () => {
    it('should render the app title and not show the profile avatar', () => {
      const loggedOutValue: AuthContextType = {
        user: null,
        login: () => {},
        logout: () => {},
      };
      
      renderNavbar(loggedOutValue);

      expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
      expect(screen.queryByAltText(/User Avatar/i)).not.toBeInTheDocument();
    });
  });

  describe('When user is logged in', () => {
    const mockUser = { name: 'Test User', email: 'test@example.com' };
    const loggedInValue: AuthContextType = {
      user: mockUser,
      login: () => {},
      logout: vi.fn(),
    };

    it('should render the profile avatar', () => {
      renderNavbar(loggedInValue);
      expect(screen.getByAltText(/User Avatar/i)).toBeInTheDocument();
    });

    it('should open the profile menu and show logout when the user clicks the avatar', async () => {
      const { user } = renderNavbar(loggedInValue);
      const avatarButton = screen.getByRole('button', { name: /open profile menu/i });

      await user.click(avatarButton);

      expect(await screen.findByRole('button', { name: /logout/i })).toBeInTheDocument();
    });
  });
});