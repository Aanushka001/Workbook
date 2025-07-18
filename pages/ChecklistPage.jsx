function ChecklistPage() {
  try {
    return (
      <WorkbookPage data-name="checklist-page" data-file="pages/ChecklistPage.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-muted-green rounded-full flex items-center justify-center mb-4">
            <div className="icon-clipboard-check text-2xl text-green-600"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Checklist Page</h1>
          <p className="text-lg text-gray-600">Daily and weekly checklists for consistent progress</p>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="section-card bg-blush">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <div className="icon-sun text-lg text-yellow-600 mr-2"></div>
                Daily Checklist
              </h4>
              <div className="space-y-2">
                {[
                  'Review daily goals',
                  'Complete priority tasks',
                  'Study session completed',
                  'Exercise/physical activity',
                  'Healthy meals',
                  'Adequate sleep (7-8 hours)',
                  'Plan tomorrow',
                  'Gratitude practice'
                ].map((item, index) => (
                  <div key={index} className="checkbox-field">
                    <input type="checkbox" className="w-4 h-4 text-pink-600" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-card bg-lavender">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <div className="icon-calendar text-lg text-purple-600 mr-2"></div>
                Weekly Checklist
              </h4>
              <div className="space-y-2">
                {[
                  'Review and update goals',
                  'Complete weekly reflection',
                  'Plan next week',
                  'Organize study materials',
                  'Review progress on projects',
                  'Connect with study group',
                  'Self-care activities',
                  'Review and adjust habits'
                ].map((item, index) => (
                  <div key={index} className="checkbox-field">
                    <input type="checkbox" className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-card bg-beige">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <div className="icon-book text-lg text-orange-600 mr-2"></div>
              Academic Checklist
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                {[
                  'Assignments submitted on time',
                  'Notes reviewed and organized',
                  'Reading assignments completed',
                  'Study schedule followed',
                  'Participated in class discussions'
                ].map((item, index) => (
                  <div key={index} className="checkbox-field">
                    <input type="checkbox" className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  'Sought help when needed',
                  'Prepared for upcoming exams',
                  'Reviewed feedback from instructors',
                  'Updated academic calendar',
                  'Maintained good attendance'
                ].map((item, index) => (
                  <div key={index} className="checkbox-field">
                    <input type="checkbox" className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-card bg-muted-green">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <div className="icon-plus text-lg text-green-600 mr-2"></div>
              Custom Checklist
            </h4>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                <div key={item} className="flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4 text-green-600" />
                  <input 
                    type="text" 
                    placeholder={`Custom item ${item}...`}
                    className="input-field flex-1 text-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('ChecklistPage component error:', error);
    return null;
  }
}
