import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4" dir="rtl">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border-t-4 border-blue-600">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">رحال بغداد 🏛️</h1>
        <p className="text-gray-600 mb-6 text-lg">
          أهلاً بك! التطبيق الآن يعمل بنجاح على الإنترنت.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg text-blue-700 font-medium">
          هذا هو الأساس المتين لمشروعك، والآن يمكنك إضافة ميزاتك خطوة بخطوة.
        </div>
      </div>
    </div>
  );
}

export default App;
