import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricCard = ({ title, amount, type, icon, trend, trendValue, className = '' }) => {
  const formatAmount = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })?.format(Math.abs(value));
  };

  const getCardStyles = () => {
    switch (type) {
      case 'income':
        return 'bg-success/10 border-success/20 text-success-foreground';
      case 'expense':
        return 'bg-error/10 border-error/20 text-error-foreground';
      case 'balance':
        return amount >= 0 
          ? 'bg-success/10 border-success/20 text-success-foreground'
          : 'bg-error/10 border-error/20 text-error-foreground';
      default:
        return 'bg-card border-border text-card-foreground';
    }
  };

  const getAmountColor = () => {
    switch (type) {
      case 'income':
        return 'text-success';
      case 'expense':
        return 'text-error';
      case 'balance':
        return amount >= 0 ? 'text-success' : 'text-error';
      default:
        return 'text-foreground';
    }
  };

  const getTrendColor = () => {
    if (type === 'income' || (type === 'balance' && trendValue > 0)) {
      return trendValue > 0 ? 'text-success' : 'text-error';
    } else if (type === 'expense') {
      return trendValue > 0 ? 'text-error' : 'text-success';
    }
    return 'text-muted-foreground';
  };

  return (
    <div className={`
      p-6 rounded-xl border shadow-card hover-lift transition-all duration-200
      ${getCardStyles()} ${className}
    `}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`
            w-10 h-10 rounded-lg flex items-center justify-center
            ${type === 'income' ? 'bg-success/20' : 
              type === 'expense' ? 'bg-error/20' : 
              amount >= 0 ? 'bg-success/20' : 'bg-error/20'}
          `}>
            <Icon 
              name={icon} 
              size={20} 
              color={type === 'income' ? 'var(--color-success)' : 
                     type === 'expense' ? 'var(--color-error)' : 
                     amount >= 0 ? 'var(--color-success)' : 'var(--color-error)'} 
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          </div>
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
            <Icon 
              name={trendValue > 0 ? 'TrendingUp' : 'TrendingDown'} 
              size={16} 
              color="currentColor" 
            />
            <span className="text-xs font-medium">{Math.abs(trendValue)}%</span>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <div className={`text-2xl font-bold number-transition ${getAmountColor()}`}>
          {type === 'expense' && amount > 0 ? '-' : ''}{formatAmount(amount)}
        </div>
        {trend && (
          <p className="text-xs text-muted-foreground">
            {trendValue > 0 ? 'Increased' : 'Decreased'} from last month
          </p>
        )}
      </div>
    </div>
  );
};

export default MetricCard;