import React from 'react';

interface ChartData {
  label: string;
  value: number;
}

interface DashboardChartsProps {
  revenue: ChartData[];
  transactions: ChartData[];
}

export function DashboardCharts({ revenue, transactions }: DashboardChartsProps) {
  const maxRevenue = Math.max(...revenue.map((d) => d.value));
  const maxTransactions = Math.max(...transactions.map((d) => d.value));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', padding: '24px' }}>
      <div style={{ backgroundColor: '#1a1b26', borderRadius: '8px', padding: '20px' }}>
        <h3 style={{ color: '#e2e8f0', fontSize: '16px', marginBottom: '16px' }}>Revenue</h3>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '200px' }}>
          {revenue.map((d) => (
            <div key={d.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: '100%',
                  height: `${(d.value / maxRevenue) * 180}px`,
                  backgroundColor: '#a78bfa',
                  borderRadius: '4px 4px 0 0',
                }}
              />
              <span style={{ color: '#94a3b8', fontSize: '11px', marginTop: '4px' }}>{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: '#1a1b26', borderRadius: '8px', padding: '20px' }}>
        <h3 style={{ color: '#e2e8f0', fontSize: '16px', marginBottom: '16px' }}>Transactions</h3>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '200px' }}>
          {transactions.map((d) => (
            <div key={d.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: '100%',
                  height: `${(d.value / maxTransactions) * 180}px`,
                  backgroundColor: '#5eead4',
                  borderRadius: '4px 4px 0 0',
                }}
              />
              <span style={{ color: '#94a3b8', fontSize: '11px', marginTop: '4px' }}>{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
