function WeeklyReflection() {
  try {
    return (
      <WorkbookPage data-name="weekly-reflection" data-file="pages/WeeklyReflection.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-lavender rounded-full flex items-center justify-center mb-4">
            <div className="icon-mirror text-2xl text-purple-600"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Weekly Reflection</h1>
          <p className="text-lg text-gray-600">Look back on your week and plan ahead</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-blush">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Week of</label>
                <input type="date" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Overall Rating</label>
                <select className="input-field">
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Average</option>
                  <option>Needs Improvement</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="section-card bg-muted-green">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-check-circle text-lg text-green-600 mr-2"></div>
                What Went Well?
              </h4>
              <textarea 
                placeholder="Celebrate your wins and successes..."
                className="input-field h-32 resize-none"
              ></textarea>
            </div>

            <div className="section-card bg-beige">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-alert-triangle text-lg text-orange-600 mr-2"></div>
                What Could Be Improved?
              </h4>
              <textarea 
                placeholder="Areas for growth and improvement..."
                className="input-field h-32 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="section-card">
            <h4 className="font-semibold text-gray-800 mb-4">Weekly Questions</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What was my biggest accomplishment this week?</label>
                <textarea className="input-field h-16 resize-none text-sm"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What challenged me the most?</label>
                <textarea className="input-field h-16 resize-none text-sm"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What did I learn about myself?</label>
                <textarea className="input-field h-16 resize-none text-sm"></textarea>
              </div>
            </div>
          </div>

          <div className="section-card bg-lavender">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-arrow-right text-lg text-purple-600 mr-2"></div>
              Next Week's Focus
            </h4>
            <textarea 
              placeholder="What will you focus on next week?"
              className="input-field h-24 resize-none"
            ></textarea>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('WeeklyReflection component error:', error);
    return null;
  }
}