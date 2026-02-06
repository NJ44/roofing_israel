import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { config } from '../config';
import { useTranslation } from '../hooks/useTranslation';

function TopBanner() {
  const { t } = useTranslation();
  const displayEmail = config.EMAIL && !config.EMAIL.startsWith('{{')
    ? config.EMAIL
    : 'info@apexroofing.com';
  const displayPhone = config.PHONE || '050-1234567';

  return (
    <div className="hidden md:block bg-primary text-white py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6">
        <a
          href={`mailto:${displayEmail}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          <span>{t.topBanner.emailUs}</span>
          <span>{displayEmail}</span>
        </a>
        <a
          href={`tel:${displayPhone}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          <span>{t.topBanner.callUs}</span>
          <span>{displayPhone}</span>
        </a>
      </div>
    </div>
  );
}

export default TopBanner;

