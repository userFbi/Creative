import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentTransactions = ({ transactions, onViewAll, className = '' }) => {
  const formatAmount = (amount, type) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })?.format(Math.abs(amount));
    
    return type === 'expense' ? `-${formatted}` : `+${formatted}`;
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })?.format(new Date(date));
  };

  const getCategoryIcon = (category, type) => {
    const categoryIcons = {
      // Income categories
      'salary': 'Briefcase',
      'bonus': 'Gift',
      'freelance': 'Laptop',
      'investment': 'TrendingUp',
      'other_income': 'Plus',
      
      // Expense categories
      'decorations': 'Sparkles',
      'food': 'UtensilsCrossed',
      'gifts': 'Gift',
      'clothing': 'Shirt',
      'transportation': 'Car',
      'entertainment': 'Music',
      'other_expense': 'Minus'
    };
    
    return categoryIcons?.[category] || (type === 'income' ? 'Plus' : 'Minus');
  };

  const getAmountColor = (type) => {
    return type === 'income' ? 'text-success' : 'text-error';
  };

  if (!transactions || transactions?.length === 0) {
    return (
      <div className={`bg-card rounded-xl border border-border p-6 ${className}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">Recent Transactions</h2>
        </div>
        <div className="text-center py-8">
          <Icon name="Receipt" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
          <p className="text-muted-foreground">No transactions yet</p>
          <p className="text-sm text-muted-foreground mt-1">Add your first income or expense to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-xl border border-border p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Recent Transactions</h2>
        <button
          onClick={onViewAll}
          className="text-sm text-primary hover:text-primary/80 font-medium transition-colors btn-press focus-ring rounded-md px-2 py-1"
        >
          View All
        </button>
      </div>
      <div className="space-y-4">
        {transactions?.slice(0, 7)?.map((transaction) => (
          <div
            key={transaction?.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className={`
                w-10 h-10 rounded-lg flex items-center justify-center
                ${transaction?.type === 'income' ? 'bg-success/20' : 'bg-error/20'}
              `}>
                <Icon
                  name={getCategoryIcon(transaction?.category, transaction?.type)}
                  size={18}
                  color={transaction?.type === 'income' ? 'var(--color-success)' : 'var(--color-error)'}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {transaction?.description || transaction?.category?.replace('_', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())}
                </p>
                <p className="text-xs text-muted-foreground">
                  {transaction?.category?.replace('_', ' ')?.replace(/\b\w/g, l => l?.toUpperCase())} • {formatDate(transaction?.date)}
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <p className={`text-sm font-semibold ${getAmountColor(transaction?.type)}`}>
                {formatAmount(transaction?.amount, transaction?.type)}
              </p>
            </div>
          </div>
        ))}
      </div>
      {transactions?.length > 7 && (
        <div className="mt-4 pt-4 border-t border-border">
          <button
            onClick={onViewAll}
            className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors btn-press focus-ring rounded-md py-2"
          >
            View {transactions?.length - 7} more transactions
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;