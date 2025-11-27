import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { config } from '../config';

function TopBanner() {
  const displayEmail = config.EMAIL && !config.EMAIL.startsWith('{{') 
    ? config.EMAIL 
    : 'info@dentalcare.com';
  const displayPhone = config.PHONE || '0546728171';

  return (
    <div className="bg-primary text-white py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6">
        <a 
          href={`mailto:${displayEmail}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          <span>Email us:</span>
          <span>{displayEmail}</span>
        </a>
        <a 
          href={`tel:${displayPhone}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          <span>Call us:</span>
          <span>{displayPhone}</span>
        </a>
      </div>
    </div>
  );
}

export default TopBanner;

