import React, { useState } from 'react';

function App() {
  const [view, setView] = useState('home'); // home, passenger, driver
  const [search, setSearch] = useState({ from: '', to: '' });
  
  // قاعدة بيانات تجريبية (مثل جداول Base44)
  const [trips, setTrips] = useState([
    { id: 1, from: 'الحرية', to: 'حي أور', price: '١٢,٠٠٠ د.ع', driver: 'أبو فهد' },
    { id: 2, from: 'المنصور', to: 'الكرادة', price: '٨,٠٠٠ د.ع', driver: 'عمر' }
  ]);

  // صفحة البداية (مثل صورة نور)
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-[#1a0b3d] flex flex-col items-center justify-center p-6 text-white text-center font-sans" dir="rtl">
        <div className="bg-yellow-500 p-4 rounded-2xl mb-4 shadow-lg">
          <span className="text-4xl">🚌</span>
        </div>
        <h1 className="text-4xl font-bold mb-2">رَحّال</h1>
        <p className="text-gray-300 mb-10">نظام إدارة خطوط النقل الذكي</p>
        
        <button onClick={() => setView('driver')} className="w-full max-w-xs bg-yellow-500 text-black font-bold py-4 rounded-xl mb-4 hover:scale-105 transition-all text-xl">
          أنا سائق 🚕
        </button>
        
        <button onClick={() => setView('passenger')} className="w-full max-w-xs bg-[#6c48ff] text-white font-bold py-4 rounded-xl hover:scale-105 transition-all text-xl shadow-xl">
          أنا راكب 👤
        </button>
        
        <p className="mt-10 text-xs text-gray-500 italic opacity-70">بوابة الإدارة 🛡️</p>
      </div>
    );
  }

  // صفحة الراكب (البحث)
  if (view === 'passenger') {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col p-4 font-sans" dir="rtl">
        <button onClick={() => setView('home')} className="self-start text-blue-600 mb-4 font-bold">← رجوع</button>
        <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-yellow-500">
          <h2 className="text-xl font-bold mb-4">البحث عن خط متوفر</h2>
          <input onChange={(e) => setSearch({...search, from: e.target.value})} placeholder="من أين؟" className="w-full p-3 bg-gray-50 border rounded-xl mb-3 outline-none focus:border-yellow-500" />
          <input onChange={(e) => setSearch({...search, to: e.target.value})} placeholder="إلى أين؟" className="w-full p-3 bg-gray-50 border rounded-xl mb-4 outline-none focus:border-yellow-500" />
          
          <div className="space-y-3">
            {trips.filter(t => t.from.includes(search.from) && t.to.includes(search.to)).map(trip => (
              <div key={trip.id} className="p-4 border-r-4 border-green-500 bg-green-50 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-800">{trip.from} ➔ {trip.to}</p>
                  <p className="text-xs text-gray-500">السائق: {trip.driver}</p>
                </div>
                <p className="text-lg font-bold text-green-700">{trip.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // صفحة السائق (إضافة بيانات)
  if (view === 'driver') {
    return (
      <div className="min-h-screen bg-gray-100 p-6 font-sans" dir="rtl">
        <button onClick={() => setView('home')} className="text-blue-600 mb-4 font-bold">← رجوع</button>
        <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-purple-600">
          <h2 className="text-xl font-bold mb-4 italic">بوابة السائق - إضافة خط</h2>
          <p className="text-sm text-gray-500 mb-6">سجل خطك الآن ليظهر للركاب في بغداد.</p>
          <div className="space-y-4">
             <input placeholder="المنطقة" className="w-full p-3 border rounded-xl" />
             <input placeholder="الوجهة" className="w-full p-3 border rounded-xl" />
             <input placeholder="السعر" className="w-full p-3 border rounded-xl" />
             <button className="w-full bg-black text-white py-4 rounded-xl font-bold shadow-lg">نشر الخط الآن</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
