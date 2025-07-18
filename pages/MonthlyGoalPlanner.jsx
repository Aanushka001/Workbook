function MonthlyGoalPlanner() {
  try {
    return (
      <WorkbookPage data-name="monthly-goal-planner" data-file="pages/MonthlyGoalPlanner.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-4 icon-glow">
            <div className="icon-calendar text-2xl text-white"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Monthly Goal Planner</h1>
          <p className="text-lg text-gray-600">Plan and track your monthly academic objectives</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-gradient-to-br from-green-50 to-emerald-100 card-hover">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Month & Year</h3>
              <input 
                type="month" 
                className="input-field w-48"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="section-card">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-book text-lg text-blue-600 mr-2"></div>
                Academic Goals (3-5 goals)
              </h4>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map(goal => (
                  <div key={goal} className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600" />
                    <input 
                      type="text" 
                      placeholder={`Academic goal ${goal}...`}
                      className="input-field flex-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-user text-lg text-purple-600 mr-2"></div>
                Personal Development Goals
              </h4>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map(goal => (
                  <div key={goal} className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-purple-600" />
                    <input 
                      type="text" 
                      placeholder={`Personal goal ${goal}...`}
                      className="input-field flex-1"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-card bg-gradient-to-br from-purple-50 to-blue-100 card-hover">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-star text-lg text-yellow-600 mr-2"></div>
              Priority Focus Areas
            </h4>
            <p className="text-sm text-gray-600 mb-4">What are your top 3 focus areas this month?</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map(priority => (
                <div key={priority} className="bg-white p-4 rounded-lg border border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority #{priority}
                  </label>
                  <input 
                    type="text" 
                    placeholder="Focus area..."
                    className="input-field"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="section-card bg-gradient-to-br from-orange-50 to-yellow-100 card-hover">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-trending-up text-lg text-green-600 mr-2"></div>
              Success Metrics
            </h4>
            <p className="text-sm text-gray-600 mb-4">How will you measure success this month?</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">GPA Target</label>
                <input type="number" step="0.1" min="0" max="4" className="input-field w-32" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Study Hours per Week</label>
                <input type="number" min="0" className="input-field w-32" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assignments to Complete</label>
                <input type="number" min="0" className="input-field w-32" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Books to Read</label>
                <input type="number" min="0" className="input-field w-32" />
              </div>
            </div>
          </div>

          <div className="section-card">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-edit text-lg text-orange-600 mr-2"></div>
              Monthly Reflection
            </h4>
            <p className="text-sm text-gray-600 mb-3">What do you want to focus on this month?</p>
            <textarea 
              placeholder="Write your monthly intentions and focus areas..."
              className="input-field h-24 resize-none"
            ></textarea>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('MonthlyGoalPlanner component error:', error);
    return null;
  }
}
