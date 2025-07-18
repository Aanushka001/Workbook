function MonthlyReview() {
  try {
    return (
      <WorkbookPage data-name="monthly-review" data-file="pages/MonthlyReview.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-muted-green rounded-full flex items-center justify-center mb-4">
            <div className="icon-calendar-check text-2xl text-green-600"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">End-of-Month Review</h1>
          <p className="text-lg text-gray-600">Reflect on your monthly progress and growth</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-blush">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Month & Year</label>
                <input type="month" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Overall Success Rating</label>
                <select className="input-field">
                  <option>Outstanding (90-100%)</option>
                  <option>Great (80-89%)</option>
                  <option>Good (70-79%)</option>
                  <option>Satisfactory (60-69%)</option>
                  <option>Needs Work (Below 60%)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="section-card">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <div className="icon-target text-lg text-blue-600 mr-2"></div>
              Goal Achievement Review
            </h4>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map(goal => (
                <div key={goal} className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-4 gap-3 items-center">
                    <input type="text" placeholder={`Goal ${goal}`} className="input-field text-sm" />
                    <select className="input-field text-sm">
                      <option>Completed</option>
                      <option>In Progress</option>
                      <option>Not Started</option>
                      <option>Cancelled</option>
                    </select>
                    <input type="range" min="0" max="100" className="w-full" />
                    <span className="text-sm text-gray-600">Progress %</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="section-card bg-lavender">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-trophy text-lg text-yellow-600 mr-2"></div>
                Major Achievements
              </h4>
              <textarea 
                placeholder="What are you most proud of this month?"
                className="input-field h-32 resize-none"
              ></textarea>
            </div>

            <div className="section-card bg-beige">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-book text-lg text-orange-600 mr-2"></div>
                Key Learnings
              </h4>
              <textarea 
                placeholder="What did you learn about yourself and your studies?"
                className="input-field h-32 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="section-card bg-muted-green">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-arrow-up text-lg text-green-600 mr-2"></div>
              Next Month's Priorities
            </h4>
            <div className="space-y-3">
              {[1, 2, 3].map(priority => (
                <input 
                  key={priority}
                  type="text" 
                  placeholder={`Priority ${priority} for next month...`}
                  className="input-field"
                />
              ))}
            </div>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('MonthlyReview component error:', error);
    return null;
  }
}