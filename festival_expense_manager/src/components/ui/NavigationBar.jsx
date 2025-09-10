import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const NavigationBar = ({ className = '', onRouteChange }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      label: 'Dashboard',
      path: '/dashboard-overview',
      icon: 'LayoutDashboard',
      tooltip: 'View financial overview and quick stats'
    },
    {
      label: 'Add Transaction',
      path: '/add-transaction',
      icon: 'PlusCircle',
      tooltip: 'Record new income or expense'
    },
    {
      label: 'Reports',
      path: '/financial-reports',
      icon: 'BarChart3',
      tooltip: 'Analyze spending patterns and export data'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (onRouteChange) {
      onRouteChange(path);
    }
  };

  const isActive = (path) => location?.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-100 bg-card border-b border-border ${className}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Coins" size={20} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-foreground">Festival</span>
                <span className="text-xs text-muted-foreground -mt-1">Expense Manager</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                  btn-press focus-ring hover-lift
                  ${isActive(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-card'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
                title={item?.tooltip}
                aria-current={isActive(item?.path) ? 'page' : undefined}
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={item?.icon} 
                    size={16} 
                    color={isActive(item?.path) ? 'currentColor' : 'currentColor'} 
                  />
                  <span>{item?.label}</span>
                </div>
                {isActive(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-foreground rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* User Profile Placeholder */}
          <div className="hidden md:flex items-center">
            <button className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors btn-press focus-ring">
              <Icon name="User" size={16} color="currentColor" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Bottom Navigation */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 z-100 bg-card border-t border-border"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-around h-16 px-2">
          {menuItems?.map((item) => (
            <button
              key={item?.path}
              onClick={() => handleNavigation(item?.path)}
              className={`
                flex flex-col items-center justify-center space-y-1 px-3 py-2 rounded-lg
                transition-all duration-200 btn-press focus-ring min-w-0 flex-1
                ${isActive(item?.path)
                  ? 'text-primary' :'text-muted-foreground hover:text-foreground'
                }
              `}
              title={item?.tooltip}
              aria-current={isActive(item?.path) ? 'page' : undefined}
            >
              <Icon 
                name={item?.icon} 
                size={20} 
                color="currentColor"
              />
              <span className="text-xs font-medium truncate">{item?.label}</span>
              {isActive(item?.path) && (
                <div className="w-1 h-1 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </nav>
      {/* Spacer for fixed navigation */}
      <div className="h-16 md:block hidden" />
      <div className="h-16 md:hidden block" style={{ marginBottom: '0' }} />
    </>
  );
};

export default NavigationBar;