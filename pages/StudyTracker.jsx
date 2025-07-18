function StudyTracker() {
  try {
    return (
      <WorkbookPage data-name="study-tracker" data-file="pages/StudyTracker.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-lavender rounded-full flex items-center justify-center mb-4">
            <div className="icon-book-open text-2xl text-purple-600"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Study Tracker</h1>
          <p className="text-lg text-gray-600">Monitor your study sessions and progress</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-blush">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Week of</label>
                <input type="date" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Study Goal (hours)</label>
                <input type="number" min="0" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Total Hours</label>
                <input type="number" min="0" step="0.5" className="input-field" readonly />
              </div>
            </div>
          </div>

          <div className="section-card">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <div className="icon-calendar text-lg text-blue-600 mr-2"></div>
              Daily Study Log
            </h4>
            <div className="space-y-4">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <div key={day} className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-5 gap-3 items-center">
                    <div className="font-medium text-gray-800">{day}</div>
                    <div>
                      <input type="text" placeholder="Subject" className="input-field text-sm" />
                    </div>
                    <div>
                      <input type="number" step="0.5" min="0" placeholder="Hours" className="input-field text-sm" />
                    </div>
                    <div>
                      <select className="input-field text-sm">
                        <option>Focus Level</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Average</option>
                        <option>Poor</option>
                      </select>
                    </div>
                    <div>
                      <input type="text" placeholder="Notes" className="input-field text-sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="section-card bg-muted-green">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-target text-lg text-green-600 mr-2"></div>
                Study Techniques Used
              </h4>
              <div className="space-y-2">
                {['Pomodoro Technique', 'Active Reading', 'Flashcards', 'Practice Problems', 'Group Study', 'Mind Mapping'].map(technique => (
                  <div key={technique} className="checkbox-field">
                    <input type="checkbox" className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{technique}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card bg-beige">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-lightbulb text-lg text-yellow-600 mr-2"></div>
                Weekly Reflection
              </h4>
              <textarea 
                placeholder="What worked well? What can be improved?"
                className="input-field h-24 resize-none text-sm"
              ></textarea>
            </div>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('StudyTracker component error:', error);
    return null;
  }
}