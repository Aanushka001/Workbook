function NotesPage() {
  try {
    return (
      <WorkbookPage data-name="notes-page" data-file="pages/NotesPage.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-blush rounded-full flex items-center justify-center mb-4">
            <div className="icon-notebook text-2xl text-pink-600"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Notes & Ideas</h1>
          <p className="text-lg text-gray-600">Capture your thoughts, insights, and creative ideas</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-muted-green">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Quick Notes</h3>
              <input type="date" className="input-field w-48" />
            </div>
            <textarea 
              placeholder="Jot down quick thoughts, reminders, or insights..."
              className="input-field h-40 resize-none"
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="section-card">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-lightbulb text-lg text-yellow-600 mr-2"></div>
                Creative Ideas
              </h4>
              <textarea 
                placeholder="Capture your creative and innovative ideas..."
                className="input-field h-32 resize-none"
              ></textarea>
            </div>

            <div className="section-card">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-book text-lg text-blue-600 mr-2"></div>
                Study Insights
              </h4>
              <textarea 
                placeholder="Important insights from your studies..."
                className="input-field h-32 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="section-card bg-beige">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-quote text-lg text-purple-600 mr-2"></div>
              Inspiring Quotes & References
            </h4>
            <div className="space-y-3">
              {[1, 2, 3, 4].map(quote => (
                <div key={quote} className="grid md:grid-cols-3 gap-3">
                  <input type="text" placeholder="Quote..." className="input-field text-sm md:col-span-2" />
                  <input type="text" placeholder="Source..." className="input-field text-sm" />
                </div>
              ))}
            </div>
          </div>

          <div className="section-card bg-lavender">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-target text-lg text-green-600 mr-2"></div>
              Action Items from Notes
            </h4>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map(item => (
                <div key={item} className="flex items-center space-x-3">
                  <input type="checkbox" className="w-4 h-4 text-green-600" />
                  <input type="text" placeholder="Action item..." className="input-field flex-1 text-sm" />
                  <input type="date" className="input-field w-32 text-sm" />
                </div>
              ))}
            </div>
          </div>

          <div className="section-card">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-edit text-lg text-orange-600 mr-2"></div>
              Free Writing Space
            </h4>
            <textarea 
              placeholder="Use this space for free writing, brainstorming, or any other notes..."
              className="input-field h-48 resize-none"
            ></textarea>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('NotesPage component error:', error);
    return null;
  }
}