import React from 'react'
import Certificates from './Certificates'

export default function CertificatesPage(){
  return (
    <div className="container" style={{padding:'48px 20px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:18}}>
        <h1>All Certificates</h1>
        <a href="/" className="btn outline">Back to home</a>
      </div>
      <Certificates showAll={true} limit={1000} />
    </div>
  )
}
