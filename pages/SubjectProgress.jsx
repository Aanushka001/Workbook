function SubjectProgress() {
  try {
    return (
      <WorkbookPage data-name="subject-progress" data-file="pages/SubjectProgress.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-muted-green rounded-full flex items-center justify-center mb-4">
            <div className="icon-trending-up text-2xl text-green-600"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Subject Progress Tracker</h1>
          <p className="text-lg text-gray-600">Track your performance across all subjects</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-blush">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Academic Term</h3>
              <select className="input-field w-48">
                <option>Fall 2024</option>
                <option>Spring 2024</option>
                <option>Summer 2024</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map(subject => (
              <div key={subject} className="section-card">
                <div className="grid md:grid-cols-6 gap-4 items-center">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject Name</label>
                    <input type="text" placeholder="e.g., Mathematics" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Grade</label>
                    <input type="text" placeholder="A, B, C..." className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Grade</label>
                    <input type="text" placeholder="A, B, C..." className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                    <select className="input-field">
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    <select className="input-field">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Strengths</label>
                    <textarea placeholder="What are you good at?" className="input-field h-16 resize-none text-sm"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Areas to Improve</label>
                    <textarea placeholder="What needs work?" className="input-field h-16 resize-none text-sm"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Action Plan</label>
                    <textarea placeholder="How will you improve?" className="input-field h-16 resize-none text-sm"></textarea>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-card bg-lavender">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-chart-bar text-lg text-purple-600 mr-2"></div>
              Overall Progress Notes
            </h4>
            <textarea 
              placeholder="Reflect on your overall academic progress..."
              className="input-field h-24 resize-none"
            ></textarea>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('SubjectProgress component error:', error);
    return null;
  }
}