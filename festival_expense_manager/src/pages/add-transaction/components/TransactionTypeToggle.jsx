import React from 'react';

import Icon from '../../../components/AppIcon';

const TransactionTypeToggle = ({ activeType, onTypeChange, className = '' }) => {
  const types = [
    {
      value: 'income',
      label: 'Income',
      icon: 'TrendingUp',
      color: 'success',
      description: 'Money received'
    },
    {
      value: 'expense',
      label: 'Expense',
      icon: 'TrendingDown',
      color: 'error',
      description: 'Money spent'
    }
  ];

  return (
    <div className={`bg-muted rounded-lg p-1 ${className}`}>
      <div className="grid grid-cols-2 gap-1">
        {types?.map((type) => (
          <button
            key={type?.value}
            onClick={() => onTypeChange(type?.value)}
            className={`
              relative px-4 py-3 rounded-md text-sm font-medium transition-all duration-200
              flex items-center justify-center space-x-2 btn-press focus-ring
              ${activeType === type?.value
                ? type?.color === 'success' ?'bg-success text-success-foreground shadow-sm' :'bg-error text-error-foreground shadow-sm' :'text-muted-foreground hover:text-foreground hover:bg-background'
              }
            `}
            title={type?.description}
            aria-pressed={activeType === type?.value}
          >
            <Icon 
              name={type?.icon} 
              size={16} 
              color="currentColor" 
            />
            <span>{type?.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransactionTypeToggle;