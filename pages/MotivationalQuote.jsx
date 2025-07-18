function MotivationalQuote() {
  try {
    return (
      <WorkbookPage className="bg-gradient-to-br from-purple-50 to-pink-50" data-name="motivational-quote" data-file="pages/MotivationalQuote.js">
        <div className="text-center space-y-8 py-16">
          <div className="w-20 h-20 mx-auto bg-lavender rounded-full flex items-center justify-center">
            <div className="icon-quote text-3xl text-purple-600"></div>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Daily Motivation</h1>
            
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <blockquote className="text-2xl font-light text-gray-700 leading-relaxed mb-4">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </blockquote>
              <cite className="text-lg text-gray-500">— Winston Churchill</cite>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Personal Motivation</h3>
              <textarea 
                placeholder="Write a quote, affirmation, or reminder that motivates you..."
                className="input-field h-32 resize-none text-center"
              ></textarea>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why I'm Working Hard</h3>
              <textarea 
                placeholder="Remind yourself of your bigger purpose and goals..."
                className="input-field h-24 resize-none"
              ></textarea>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-gray-500 pt-8">
            <div className="flex items-center space-x-2">
              <div className="icon-heart text-lg text-red-400"></div>
              <span>Stay Motivated</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="icon-star text-lg text-yellow-400"></div>
              <span>Dream Big</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="icon-zap text-lg text-blue-400"></div>
              <span>Take Action</span>
            </div>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('MotivationalQuote component error:', error);
    return null;
  }
}