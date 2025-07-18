function BrainDump() {
  try {
    return (
      <WorkbookPage data-name="brain-dump" data-file="pages/BrainDump.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-blush rounded-full flex items-center justify-center mb-4">
            <div className="icon-brain text-2xl text-pink-600"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Brain Dump</h1>
          <p className="text-lg text-gray-600">Clear your mind and organize your thoughts</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-muted-green">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Free Your Mind</h3>
              <p className="text-gray-600">Write down everything that's on your mind - no judgment, no organization needed</p>
            </div>
          </div>

          <div className="section-card">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <div className="icon-edit text-lg text-blue-600 mr-2"></div>
              Everything on My Mind
            </h4>
            <textarea 
              placeholder="Write down all your thoughts, worries, ideas, tasks, feelings... everything! Let it all out."
              className="input-field h-64 resize-none"
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="section-card bg-lavender">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-alert-circle text-lg text-orange-600 mr-2"></div>
                Urgent/Important
              </h4>
              <p className="text-sm text-gray-600 mb-3">Things that need immediate attention</p>
              <textarea 
                placeholder="Write urgent tasks here..."
                className="input-field h-20 resize-none text-sm"
              ></textarea>
            </div>

            <div className="section-card bg-beige">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-lightbulb text-lg text-yellow-600 mr-2"></div>
                Ideas & Inspiration
              </h4>
              <p className="text-sm text-gray-600 mb-3">Creative thoughts and ideas</p>
              <textarea 
                placeholder="Capture your ideas here..."
                className="input-field h-20 resize-none text-sm"
              ></textarea>
            </div>
          </div>

          <div className="section-card">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-filter text-lg text-purple-600 mr-2"></div>
              Organize Your Thoughts
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To Do</label>
                <textarea placeholder="Tasks to complete..." className="input-field h-24 resize-none text-sm"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To Research</label>
                <textarea placeholder="Things to look up..." className="input-field h-24 resize-none text-sm"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To Remember</label>
                <textarea placeholder="Important reminders..." className="input-field h-24 resize-none text-sm"></textarea>
              </div>
            </div>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('BrainDump component error:', error);
    return null;
  }
}
