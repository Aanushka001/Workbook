function HabitTracker() {
  try {
    return (
      <WorkbookPage data-name="habit-tracker" data-file="pages/HabitTracker.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-beige rounded-full flex items-center justify-center mb-4">
            <div className="icon-repeat text-2xl text-orange-600"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Habit Tracker</h1>
          <p className="text-lg text-gray-600">Build positive habits for academic success</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-blush">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                <input type="month" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Habit Goal</label>
                <input type="text" placeholder="What's your main habit focus?" className="input-field" />
              </div>
            </div>
          </div>

          <div className="section-card">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <div className="icon-check-circle text-lg text-green-600 mr-2"></div>
              Daily Habits to Track
            </h4>
            
            <div className="space-y-4">
              {[
                'Wake up early (before 7 AM)',
                'Review notes daily',
                'Exercise/Physical activity',
                'Read for 30 minutes',
                'Plan tomorrow before bed',
                'Drink 8 glasses of water',
                'Limit social media (< 1 hour)',
                'Practice gratitude'
              ].map((habit, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-gray-800">{habit}</span>
                    <input type="checkbox" className="w-4 h-4 text-green-600" />
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 31 }, (_, i) => (
                      <div key={i} className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-xs">
                        <input type="checkbox" className="w-3 h-3" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-2 text-xs text-gray-600">
                    Days 1-31 (check off completed days)
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="section-card bg-muted-green">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-plus text-lg text-green-600 mr-2"></div>
                Custom Habits
              </h4>
              <div className="space-y-3">
                {[1, 2, 3].map(habit => (
                  <input 
                    key={habit}
                    type="text" 
                    placeholder={`Custom habit ${habit}...`}
                    className="input-field"
                  />
                ))}
              </div>
            </div>

            <div className="section-card bg-lavender">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-award text-lg text-purple-600 mr-2"></div>
                Monthly Reflection
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Most consistent habit:</label>
                  <input type="text" className="input-field text-sm" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Biggest challenge:</label>
                  <input type="text" className="input-field text-sm" />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Next month's focus:</label>
                  <input type="text" className="input-field text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('HabitTracker component error:', error);
    return null;
  }
}