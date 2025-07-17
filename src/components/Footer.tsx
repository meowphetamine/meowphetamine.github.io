import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center text-zinc-600 text-sm">
      <p className="mt-2">© {new Date().getFullYear()} meowphetamine — All rights reserved.</p>
    </footer>
  );
};

export default Footer;