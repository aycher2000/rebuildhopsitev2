'use client';

import React, { useRef } from 'react';

interface InfoCardProps {
  id: string;
  title: string;
  content: {
    short: string;
    full: React.ReactNode;
  };
}

const InfoCard = ({ id, title, content }: InfoCardProps) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  
  const handleClose = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <details 
      id={id} 
      ref={detailsRef}
      style={{
        borderRadius: '8px',
        border: '1px solid #333',
        overflow: 'hidden',
        marginBottom: '20px',
        backgroundColor: '#1a1a1a',
        color: '#fff'
      }}
    >
      <summary 
        style={{
          padding: '15px 20px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: 'details[open] ? 1px solid #333 : none',
          outline: 'none',
          listStyle: 'none',
          color: '#0ff',
          fontSize: '18px',
          fontWeight: 'normal',
          textTransform: 'none'
        }}
      >
        {title}
        <span style={{ color: '#0ff', fontSize: '24px' }}>+</span>
      </summary>
      <div style={{ padding: '20px' }}>
        {content.full}
        <div style={{ marginTop: '30px', textAlign: 'right' }}>
          <button
            onClick={handleClose}
            style={{
              padding: '8px 16px',
              background: 'transparent',
              border: '1px solid #0ff',
              cursor: 'pointer',
              borderRadius: '4px',
              color: '#0ff',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span style={{ marginRight: '4px' }}>Close</span>
            <span style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>+</span>
          </button>
        </div>
      </div>
    </details>
  );
};

// Remove the default disclosure triangle
const style = `
  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }
`;

// Add the style to the component
const InfoCardWithStyle = (props: InfoCardProps) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <InfoCard {...props} />
    </>
  );
};

export default InfoCardWithStyle;