import React from 'react';

function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#adb7be] border-s-transparent text-white bg-slate-800">
      <div className="grid grid-cols-4 px-8 py-5 justify-between">
        <span className="col-span-1 text-lg font-bold">SALMAN</span>
        <p className="col-span-3 text-sm text-center sm:text-right text-slate-200 self-center">© 2024 Salman Wiharja. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
