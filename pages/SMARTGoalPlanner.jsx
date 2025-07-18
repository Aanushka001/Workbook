function SMARTGoalPlanner() {
  try {
    return (
      <WorkbookPage data-name="smart-goal-planner" data-file="pages/SMARTGoalPlanner.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 icon-glow">
            <div className="icon-target text-2xl text-white"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">SMART Goal Planner</h1>
          <p className="text-lg text-gray-600">Set Specific, Measurable, Achievable, Relevant, Time-bound goals</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-gradient-to-br from-pink-50 to-pink-100 card-hover">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">My Primary Academic Goal</h3>
            <textarea 
              placeholder="Write your main academic goal for this semester/year..."
              className="input-field h-24 resize-none"
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="section-card">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-crosshair text-lg text-blue-600 mr-2"></div>
                Specific
              </h4>
              <p className="text-sm text-gray-600 mb-3">What exactly do you want to accomplish?</p>
              <textarea 
                placeholder="Be as detailed as possible..."
                className="input-field h-20 resize-none"
              ></textarea>
            </div>

            <div className="section-card">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-bar-chart text-lg text-green-600 mr-2"></div>
                Measurable
              </h4>
              <p className="text-sm text-gray-600 mb-3">How will you track your progress?</p>
              <textarea 
                placeholder="Define metrics, numbers, milestones..."
                className="input-field h-20 resize-none"
              ></textarea>
            </div>

            <div className="section-card">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-check-circle text-lg text-purple-600 mr-2"></div>
                Achievable
              </h4>
              <p className="text-sm text-gray-600 mb-3">Is this goal realistic for you?</p>
              <textarea 
                placeholder="Consider your resources, skills, time..."
                className="input-field h-20 resize-none"
              ></textarea>
            </div>

            <div className="section-card">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-heart text-lg text-red-600 mr-2"></div>
                Relevant
              </h4>
              <p className="text-sm text-gray-600 mb-3">Why is this goal important to you?</p>
              <textarea 
                placeholder="Connect to your values, future plans..."
                className="input-field h-20 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="section-card bg-lavender">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-clock text-lg text-orange-600 mr-2"></div>
              Time-bound
            </h4>
            <p className="text-sm text-gray-600 mb-4">When will you achieve this goal?</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input type="date" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Date</label>
                <input type="date" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Review Date</label>
                <input type="date" className="input-field" />
              </div>
            </div>
          </div>

          <div className="section-card bg-beige">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-list text-lg text-indigo-600 mr-2"></div>
              Action Steps
            </h4>
            <p className="text-sm text-gray-600 mb-4">Break your goal into smaller, actionable steps</p>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map(step => (
                <div key={step} className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-500 w-8">#{step}</span>
                  <input 
                    type="text" 
                    placeholder={`Action step ${step}...`}
                    className="input-field flex-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('SMARTGoalPlanner component error:', error);
    return null;
  }
}