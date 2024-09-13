import React from 'react'

const Footer = () => {
  return (
      <footer className="text-white py-6">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          
          <div className="space-y-2">
            <p>Email: <a href="mailto:contact@devwallet.com" className="text-blue-400 hover:underline">contact@devwallet.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+123-456-7890</a></p>
            <p>Address: 123 Crypto Street, Web3 City</p>
          </div>
          
          <div className="mt-6">
            <p className="text-lg mb-2">Follow us on:</p>
            <div className="flex justify-center space-x-6">
              <a href="" className="text-blue-400 hover:text-blue-500" aria-label="Twitter">
                Twitter
              </a>
              <a href="" className="text-blue-400 hover:text-blue-500" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>
  
          <div className="mt-8 text-sm text-gray-400">
            © 2024 Dev Wallet. All rights reserved. <h1>Vishesh Dwivedi</h1>
          </div>
        </div>
      </footer>
  )
}

export default Footer
