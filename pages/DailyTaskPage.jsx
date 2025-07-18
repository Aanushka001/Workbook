function DailyTaskPage() {
  try {
    return (
      <WorkbookPage data-name="daily-task-page" data-file="pages/DailyTaskPage.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-beige rounded-full flex items-center justify-center mb-4">
            <div className="icon-check-square text-2xl text-orange-600"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Daily Task & Time-Blocking</h1>
          <p className="text-lg text-gray-600">Structure your day for maximum productivity</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-blush">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Today's Date</h3>
              <input type="date" className="input-field w-48" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Daily Intention</label>
              <input type="text" placeholder="What do you want to accomplish today?" className="input-field" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="section-card">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-star text-lg text-yellow-600 mr-2"></div>
                Must-Do Tasks (Top 3)
              </h4>
              <div className="space-y-3">
                {[1, 2, 3].map(task => (
                  <div key={task} className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-yellow-600" />
                    <input type="text" placeholder={`Priority task ${task}...`} className="input-field flex-1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-list text-lg text-blue-600 mr-2"></div>
                Additional Tasks
              </h4>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map(task => (
                  <div key={task} className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600" />
                    <input type="text" placeholder="Task..." className="input-field flex-1 text-sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-card bg-muted-green">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-clock text-lg text-green-600 mr-2"></div>
              Time Blocking Schedule
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
                '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
                '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
              ].map(time => (
                <div key={time} className="grid grid-cols-4 gap-3 items-center text-sm">
                  <span className="font-medium text-gray-700">{time}</span>
                  <input type="text" placeholder="Activity/Task" className="input-field col-span-3 text-xs" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('DailyTaskPage component error:', error);
    return null;
  }
}