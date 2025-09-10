import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from 'recharts';

const SpendingChart = ({ chartType, data, title }) => {
  const COLORS = [
    'var(--color-primary)',
    'var(--color-secondary)', 
    'var(--color-accent)',
    'var(--color-success)',
    'var(--color-warning)',
    'var(--color-error)',
    '#8B5CF6',
    '#06B6D4'
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-modal">
          <p className="text-sm font-medium text-foreground mb-1">
            {label || payload?.[0]?.name}
          </p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {`${entry?.dataKey}: $${entry?.value?.toLocaleString()}`}
              {entry?.payload?.percentage && ` (${entry?.payload?.percentage}%)`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    switch (chartType) {
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                paddingAngle={2}
                dataKey="value"
              >
                {data?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS?.[index % COLORS?.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value) => <span className="text-sm text-foreground">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
                axisLine={{ stroke: 'var(--color-border)' }}
              />
              <YAxis 
                tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
                axisLine={{ stroke: 'var(--color-border)' }}
                tickFormatter={(value) => `$${value?.toLocaleString()}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
                axisLine={{ stroke: 'var(--color-border)' }}
              />
              <YAxis 
                tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
                axisLine={{ stroke: 'var(--color-border)' }}
                tickFormatter={(value) => `$${value?.toLocaleString()}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="var(--color-primary)" 
                strokeWidth={3}
                dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'var(--color-primary)', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'comparison':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
                axisLine={{ stroke: 'var(--color-border)' }}
              />
              <YAxis 
                tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
                axisLine={{ stroke: 'var(--color-border)' }}
                tickFormatter={(value) => `$${value?.toLocaleString()}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="income" fill="var(--color-success)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" fill="var(--color-error)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );

      default:
        return (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <p>Chart type not supported</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      <div className="h-80 w-full">
        {renderChart()}
      </div>
    </div>
  );
};

export default SpendingChart;