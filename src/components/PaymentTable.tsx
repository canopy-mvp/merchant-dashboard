// VIOLATION: Inline styles instead of Tailwind
import React from 'react';

interface Payment {
  id: string;
  amount: number;
  status: string;
  createdAt: string;
}

export function PaymentTable({ payments }: { payments: Payment[] }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>
        Payments
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e5e7eb' }}>
        <thead>
          <tr style={{ backgroundColor: '#f9fafb' }}>
            <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>ID</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Amount</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Status</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px 16px' }}>{p.id}</td>
              <td style={{ padding: '12px 16px' }}>${(p.amount / 100).toFixed(2)}</td>
              <td style={{ padding: '12px 16px' }}>
                <span style={{
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  backgroundColor: p.status === 'succeeded' ? '#dcfce7' : '#fef3c7',
                  color: p.status === 'succeeded' ? '#166534' : '#92400e',
                }}>
                  {p.status}
                </span>
              </td>
              <td style={{ padding: '12px 16px' }}>{new Date(p.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
