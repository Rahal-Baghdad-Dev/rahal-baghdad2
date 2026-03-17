import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col font-sans" dir="rtl">
      {/* الهيدر */}
      <header className="bg-black text-white p-4 shadow-lg text-center">
        <h1 className="text-2xl font-bold">رَحّال لنقل الركاب 🚕</h1>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="flex-grow p-6 flex flex-col items-center justify-center">
        <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-md border-2 border-black">
          <h2 className="text-xl font-bold mb-4 text-center">وين تريد تروح اليوم؟</h2>
          
          <div className="space-y-4">
            <input type="text" placeholder="موقع الانطلاق (مثلاً: المنصور)" className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 outline-none" />
            <input type="text" placeholder="وجهتك (مثلاً: الكرادة)" className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 outline-none" />
            
            <button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg">
              البحث عن خطوط متوفرة
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-3 rounded-xl text-center border border-gray-200">
              <span className="block text-2xl">🚌</span>
              <span className="text-sm font-bold">باصات</span>
            </div>
            <div className="bg-gray-100 p-3 rounded-xl text-center border border-gray-200">
              <span className="block text-2xl">🚕</span>
              <span className="text-sm font-bold">تكسي</span>
            </div>
          </div>
        </div>
      </main>

      {/* الفوتر */}
      <footer className="bg-black text-white p-4 text-center text-sm">
        جميع الحقوق محفوظة لشركة رحال - ٢٠٢٦
      </footer>
    </div>
  );
}

export default App;
