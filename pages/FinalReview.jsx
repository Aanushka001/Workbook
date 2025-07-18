function FinalReview() {
  try {
    return (
      <WorkbookPage data-name="final-review" data-file="pages/FinalReview.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-lavender rounded-full flex items-center justify-center mb-4">
            <div className="icon-graduation-cap text-2xl text-purple-600"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Final Review</h1>
          <p className="text-lg text-gray-600">Reflect on your journey and celebrate your growth</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-blush">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What I Learned</h3>
              <p className="text-gray-600">Capture the most important insights from your academic journey</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="section-card bg-muted-green">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-brain text-lg text-green-600 mr-2"></div>
                Academic Learnings
              </h4>
              <textarea 
                placeholder="What did you learn about studying, time management, and academic success?"
                className="input-field h-32 resize-none"
              ></textarea>
            </div>

            <div className="section-card bg-beige">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <div className="icon-heart text-lg text-red-600 mr-2"></div>
                Personal Growth
              </h4>
              <textarea 
                placeholder="How have you grown as a person? What did you discover about yourself?"
                className="input-field h-32 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="section-card">
            <h4 className="font-semibold text-gray-800 mb-4">Reflection Questions</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What am I most proud of achieving?</label>
                <textarea className="input-field h-16 resize-none text-sm"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What would I do differently next time?</label>
                <textarea className="input-field h-16 resize-none text-sm"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What habits will I continue?</label>
                <textarea className="input-field h-16 resize-none text-sm"></textarea>
              </div>
            </div>
          </div>

          <div className="section-card bg-lavender">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-arrow-right text-lg text-purple-600 mr-2"></div>
              Looking Forward
            </h4>
            <textarea 
              placeholder="What are your goals and aspirations for the future?"
              className="input-field h-24 resize-none"
            ></textarea>
          </div>

          <div className="text-center mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Congratulations!</h3>
            <p className="text-gray-600">You've completed your productivity workbook journey. Be proud of your commitment to growth!</p>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('FinalReview component error:', error);
    return null;
  }
}