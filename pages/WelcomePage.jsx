function WelcomePage() {
  try {
    return (
      <WorkbookPage data-name="welcome-page" data-file="pages/WelcomePage.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4 icon-glow">
            <div className="icon-heart text-2xl text-white"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Your Success Journey!</h1>
          <p className="text-lg text-gray-600">How to use this workbook effectively</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="section-card bg-gradient-to-br from-pink-50 to-pink-100 card-hover">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <div className="icon-lightbulb text-xl text-yellow-600 mr-3"></div>
              Getting Started
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="icon-check text-green-600 mr-3 mt-1"></div>
                <span>Fill out each section honestly and thoughtfully</span>
              </li>
              <li className="flex items-start">
                <div className="icon-check text-green-600 mr-3 mt-1"></div>
                <span>Review your goals weekly and adjust as needed</span>
              </li>
              <li className="flex items-start">
                <div className="icon-check text-green-600 mr-3 mt-1"></div>
                <span>Use this workbook daily for maximum impact</span>
              </li>
            </ul>
          </div>

          <div className="section-card bg-gradient-to-br from-green-50 to-emerald-100 card-hover">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <div className="icon-star text-xl text-yellow-500 mr-3"></div>
              Pro Tips
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="icon-arrow-right text-blue-600 mr-3 mt-1"></div>
                <span>Start with small, achievable goals</span>
              </li>
              <li className="flex items-start">
                <div className="icon-arrow-right text-blue-600 mr-3 mt-1"></div>
                <span>Celebrate your wins, no matter how small</span>
              </li>
              <li className="flex items-start">
                <div className="icon-arrow-right text-blue-600 mr-3 mt-1"></div>
                <span>Be consistent rather than perfect</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-card bg-gradient-to-br from-orange-50 to-yellow-100 mt-6 card-hover">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <div className="icon-map text-xl text-orange-600 mr-3"></div>
            Your Workbook Structure
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-800">Planning & Goals</h4>
              <p className="text-gray-600">SMART goals, monthly & weekly planners, daily tasks</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-800">Tracking & Progress</h4>
              <p className="text-gray-600">Study tracker, subject progress, habit tracker</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-800">Reflection & Growth</h4>
              <p className="text-gray-600">Weekly reflection, monthly review, affirmations</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Ready to Transform Your Academic Life?</h3>
          <p className="text-gray-600">Let's begin this journey together. Your future self will thank you!</p>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('WelcomePage component error:', error);
    return null;
  }
}