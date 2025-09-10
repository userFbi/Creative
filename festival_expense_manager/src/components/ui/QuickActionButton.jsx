import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';

const QuickActionButton = ({ className = '', onActionSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const actions = [
    {
      type: 'income',
      label: 'Add Income',
      icon: 'TrendingUp',
      color: 'success',
      description: 'Record money received'
    },
    {
      type: 'expense',
      label: 'Add Expense',
      icon: 'TrendingDown',
      color: 'error',
      description: 'Record money spent'
    }
  ];

  const handleActionClick = (actionType) => {
    navigate('/add-transaction', { state: { type: actionType } });
    if (onActionSelect) {
      onActionSelect(actionType);
    }
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Desktop Version - Button Group */}
      <div className={`hidden md:flex items-center space-x-3 ${className}`}>
        {actions?.map((action) => (
          <Button
            key={action?.type}
            variant={action?.color === 'success' ? 'default' : 'destructive'}
            onClick={() => handleActionClick(action?.type)}
            iconName={action?.icon}
            iconPosition="left"
            className="btn-press hover-lift"
          >
            {action?.label}
          </Button>
        ))}
      </div>
      {/* Mobile Version - Floating Action Button */}
      <div className={`md:hidden fixed bottom-20 right-4 z-50 ${className}`}>
        {/* Expanded Actions */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 flex flex-col space-y-2 animate-slide-up">
            {actions?.map((action) => (
              <button
                key={action?.type}
                onClick={() => handleActionClick(action?.type)}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-full shadow-modal
                  transition-all duration-200 btn-press hover-lift
                  ${action?.color === 'success' ?'bg-success text-success-foreground' :'bg-error text-error-foreground'
                  }
                `}
                title={action?.description}
              >
                <Icon name={action?.icon} size={20} color="currentColor" />
                <span className="text-sm font-medium whitespace-nowrap">{action?.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={toggleExpanded}
          className={`
            w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-modal
            flex items-center justify-center transition-all duration-200 btn-press hover-lift
            ${isExpanded ? 'rotate-45' : 'rotate-0'}
          `}
          title="Quick actions"
          aria-label="Quick transaction actions"
          aria-expanded={isExpanded}
        >
          <Icon name="Plus" size={24} color="currentColor" />
        </button>

        {/* Backdrop */}
        {isExpanded && (
          <div
            className="fixed inset-0 bg-black/20 -z-10"
            onClick={() => setIsExpanded(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </>
  );
};

export default QuickActionButton;