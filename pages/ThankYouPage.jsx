function ThankYouPage() {
  try {
    return (
      <WorkbookPage className="bg-gradient-to-br from-pink-50 to-purple-50" data-name="thank-you-page" data-file="pages/ThankYouPage.js">
        <div className="text-center space-y-8 py-16">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
            <div className="icon-heart text-3xl text-white"></div>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-5xl font-bold text-gray-800 text-shadow mb-8">Thank You!</h1>
            
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">You Did It!</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Congratulations on completing your Student Productivity & Goal-Setting Workbook! 
                Your dedication to personal growth and academic excellence is truly inspiring.
              </p>
              <p className="text-gray-600">
                Remember, this is just the beginning of your journey. Keep setting goals, 
                tracking progress, and celebrating your wins along the way.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-2xl border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
              <div className="flex justify-center">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg text-xl font-bold">
                  <div className="icon-instagram text-3xl"></div>
                  <span>👉 @curatedbyaanushka</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Share Your Success</h3>
              <p className="text-gray-600 mb-4">
                We'd love to hear about your achievements! Share your progress and inspire others.
              </p>
              <div className="text-sm text-gray-500">
                Tag us in your posts: #StudentProductivityWorkbook #AcademicSuccess
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-gray-500 pt-8">
            <div className="flex items-center space-x-2">
              <div className="icon-star text-lg text-yellow-400"></div>
              <span>Keep Shining</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="icon-trophy text-lg text-orange-400"></div>
              <span>Achieve Greatness</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="icon-rocket text-lg text-purple-400"></div>
              <span>Reach New Heights</span>
            </div>
          </div>
          
          <div className="text-center mt-8 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
            <p className="text-lg font-medium text-gray-700">
              "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt
            </p>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('ThankYouPage component error:', error);
    return null;
  }
}