function CoverPage() {
  try {
    return (
      <WorkbookPage className="bg-latte-cream" data-name="cover-page" data-file="pages/CoverPage.js">
        <div className="text-center space-y-10 py-20">
          <div className="space-y-6">
            <div className="w-32 h-32 mx-auto bg-cocoa-brown rounded-full flex items-center justify-center shadow-2xl icon-glow">
              <div className="icon-target text-6xl text-white"></div>
            </div>
            <h1 className="text-7xl font-black text-shadow" style={{background: 'linear-gradient(135deg, #8B4513, #6F4E37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Student Productivity
            </h1>
            <h2 className="text-4xl font-bold" style={{background: 'linear-gradient(135deg, #6F4E37, #5D2F0A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              & Goal-Setting Workbook
            </h2>
          </div>
          
          <div className="max-w-lg mx-auto space-y-6">
            <p className="text-2xl font-semibold text-gray-700 leading-relaxed">
              🚀 Your complete guide to academic success, time management, and personal growth
            </p>
            
            <div className="bg-soft-white rounded-2xl p-8 shadow-2xl border-2 card-hover" style={{borderColor: '#D2B48C'}}>
              <label className="block text-lg font-bold mb-3" style={{color: '#8B4513'}}>✨ Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your amazing name here"
                className="input-field text-center text-xl font-semibold"
              />
            </div>
            
            <div className="bg-soft-white rounded-2xl p-8 shadow-2xl border-2 card-hover" style={{borderColor: '#D2B48C'}}>
              <label className="block text-lg font-bold mb-3" style={{color: '#6F4E37'}}>📅 Academic Year</label>
              <input 
                type="text" 
                placeholder="2024-2025"
                className="input-field text-center text-xl font-semibold"
              />
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 text-lg font-bold pt-12">
            <div className="flex items-center space-x-3 bg-cocoa-brown text-white px-6 py-3 rounded-full shadow-lg">
              <div className="icon-book-open text-2xl"></div>
              <span>Study Tracking</span>
            </div>
            <div className="flex items-center space-x-3 bg-tan text-white px-6 py-3 rounded-full shadow-lg">
              <div className="icon-target text-2xl"></div>
              <span>Goal Setting</span>
            </div>
            <div className="flex items-center space-x-3 bg-coffee-brown text-white px-6 py-3 rounded-full shadow-lg" style={{backgroundColor: '#6F4E37'}}>
              <div className="icon-calendar text-2xl"></div>
              <span>Time Management</span>
            </div>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('CoverPage component error:', error);
    return null;
  }
}