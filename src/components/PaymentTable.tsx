import React from 'react';

interface Payment {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'captured' | 'refunded';
  createdAt: string;
}

interface PaymentTableProps {
  payments: Payment[];
  onRefund: (id: string) => void;
}

export function PaymentTable({ payments, onRefund }: PaymentTableProps) {
  return (
    <div style={{ padding: '24px', backgroundColor: '#1a1b26', borderRadius: '8px' }}>
      <h2 style={{ color: '#e2e8f0', fontSize: '18px', marginBottom: '16px' }}>Recent Payments</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #2a2b36' }}>
            <th style={{ textAlign: 'left', padding: '12px', color: '#94a3b8' }}>ID</th>
            <th style={{ textAlign: 'right', padding: '12px', color: '#94a3b8' }}>Amount</th>
            <th style={{ textAlign: 'center', padding: '12px', color: '#94a3b8' }}>Status</th>
            <th style={{ textAlign: 'right', padding: '12px', color: '#94a3b8' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id} style={{ borderBottom: '1px solid #2a2b36' }}>
              <td style={{ padding: '12px', color: '#e2e8f0' }}>{p.id}</td>
              <td style={{ textAlign: 'right', padding: '12px', color: '#e2e8f0' }}>
                {(p.amount / 100).toFixed(2)} {p.currency.toUpperCase()}
              </td>
              <td style={{ textAlign: 'center', padding: '12px' }}>
                <span style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: p.status === 'captured' ? '#065f46' : p.status === 'refunded' ? '#7f1d1d' : '#78350f',
                  color: '#e2e8f0',
                }}>
                  {p.status}
                </span>
              </td>
              <td style={{ textAlign: 'right', padding: '12px' }}>
                {p.status === 'captured' && (
                  <button
                    onClick={() => onRefund(p.id)}
                    style={{ padding: '6px 12px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Refund
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
