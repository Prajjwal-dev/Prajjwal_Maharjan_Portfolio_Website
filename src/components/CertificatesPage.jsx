import React, { useEffect } from 'react'
import Certificates from './Certificates'

export default function CertificatesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0c0f',
      paddingTop: '80px', // Add this to account for fixed header
    }}>
      <Certificates showAll={true} limit={1000} />
    </div>
  )
}