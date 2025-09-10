import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const QuickActions = ({ className = '' }) => {
  const navigate = useNavigate();

  const actions = [
    {
      title: 'Add Income',
      description: 'Record money received',
      icon: 'TrendingUp',
      variant: 'default',
      onClick: () => navigate('/add-transaction', { state: { type: 'income' } })
    },
    {
      title: 'Add Expense',
      description: 'Record money spent',
      icon: 'TrendingDown',
      variant: 'destructive',
      onClick: () => navigate('/add-transaction', { state: { type: 'expense' } })
    },
    {
      title: 'View Reports',
      description: 'Analyze spending patterns',
      icon: 'BarChart3',
      variant: 'outline',
      onClick: () => navigate('/financial-reports')
    }
  ];

  return (
    <div className={`bg-card rounded-xl border border-border p-6 ${className}`}>
      <h2 className="text-lg font-semibold text-foreground mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions?.map((action, index) => (
          <div
            key={index}
            className="group p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-muted/30 transition-all duration-200 cursor-pointer"
            onClick={action?.onClick}
          >
            <div className="flex items-start space-x-3">
              <div className={`
                w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                ${action?.variant === 'default' ? 'bg-primary/10 group-hover:bg-primary/20' :
                  action?.variant === 'destructive'? 'bg-error/10 group-hover:bg-error/20' : 'bg-muted group-hover:bg-muted/80'}
              `}>
                <Icon
                  name={action?.icon}
                  size={20}
                  color={action?.variant === 'default' ? 'var(--color-primary)' :
                         action?.variant === 'destructive' ? 'var(--color-error)' :
                         'var(--color-muted-foreground)'}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {action?.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {action?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            iconName="Download"
            iconPosition="left"
            onClick={() => navigate('/financial-reports')}
            className="flex-1"
          >
            Export Data
          </Button>
          <Button
            variant="ghost"
            iconName="History"
            iconPosition="left"
            onClick={() => navigate('/financial-reports')}
            className="flex-1"
          >
            Transaction History
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;