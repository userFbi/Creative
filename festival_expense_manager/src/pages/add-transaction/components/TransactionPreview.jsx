import React from 'react';
import Icon from '../../../components/AppIcon';

const TransactionPreview = ({ transaction, onEdit, className = '' }) => {
  if (!transaction) return null;

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })?.format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryLabel = (category) => {
    const categories = {
      decorations: 'Decorations & Lighting',
      food: 'Food & Catering',
      gifts: 'Gifts & Presents',
      clothing: 'Clothing & Accessories',
      entertainment: 'Entertainment & Events',
      travel: 'Travel & Transportation',
      religious: 'Religious Items',
      sweets: 'Sweets & Treats',
      flowers: 'Flowers & Garlands',
      other: 'Other Festival Expenses'
    };
    return categories?.[category] || category;
  };

  const getSourceLabel = (source) => {
    const sources = {
      salary: 'Salary',
      bonus: 'Festival Bonus',
      gift_money: 'Gift Money',
      freelance: 'Freelance Work',
      business: 'Business Income',
      investment: 'Investment Returns',
      rental: 'Rental Income',
      other: 'Other Income'
    };
    return sources?.[source] || source;
  };

  return (
    <div className={`bg-card border border-border rounded-lg p-6 ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center
            ${transaction?.type === 'income' ?'bg-success/10 text-success' :'bg-error/10 text-error'
            }
          `}>
            <Icon 
              name={transaction?.type === 'income' ? 'TrendingUp' : 'TrendingDown'} 
              size={20} 
              color="currentColor" 
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground capitalize">
              {transaction?.type} Added
            </h3>
            <p className="text-sm text-muted-foreground">
              {formatDate(transaction?.date)}
            </p>
          </div>
        </div>

        <button
          onClick={onEdit}
          className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors btn-press focus-ring"
          title="Edit transaction"
        >
          <Icon name="Edit2" size={16} color="currentColor" />
        </button>
      </div>
      <div className="space-y-3">
        {/* Amount */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Amount:</span>
          <span className={`text-lg font-semibold ${
            transaction?.type === 'income' ? 'text-success' : 'text-error'
          }`}>
            {transaction?.type === 'income' ? '+' : '-'}{formatAmount(transaction?.amount)}
          </span>
        </div>

        {/* Category or Source */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            {transaction?.type === 'expense' ? 'Category:' : 'Source:'}
          </span>
          <span className="text-sm font-medium text-foreground">
            {transaction?.type === 'expense' 
              ? getCategoryLabel(transaction?.category)
              : getSourceLabel(transaction?.source)
            }
          </span>
        </div>

        {/* Description */}
        <div className="pt-2 border-t border-border">
          <p className="text-sm text-muted-foreground mb-1">Description:</p>
          <p className="text-sm text-foreground">{transaction?.description}</p>
        </div>
      </div>
      {/* Success Indicator */}
      <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-border">
        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
        <span className="text-sm text-success font-medium">
          Transaction saved successfully
        </span>
      </div>
    </div>
  );
};

export default TransactionPreview;