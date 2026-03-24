import React from 'react';

export function RevenueChart({ data }: { data: Array<{ date: string; amount: number }> }) {
  return (
    <div style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
      <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Revenue</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '200px' }}>
        {data.map((d, i) => (
          <div key={i} style={{
            flex: 1,
            backgroundColor: '#3b82f6',
            borderRadius: '4px 4px 0 0',
            height: `${(d.amount / Math.max(...data.map(x => x.amount))) * 100}%`,
          }} title={`${d.date}: $${d.amount}`} />
        ))}
      </div>
    </div>
  );
}
