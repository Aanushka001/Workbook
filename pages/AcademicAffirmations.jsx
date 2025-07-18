function AcademicAffirmations() {
  try {
    return (
      <WorkbookPage className="bg-gradient-to-br from-green-50 to-blue-50" data-name="academic-affirmations" data-file="pages/AcademicAffirmations.js">
        <div className="text-center space-y-8 py-16">
          <div className="w-20 h-20 mx-auto bg-muted-green rounded-full flex items-center justify-center">
            <div className="icon-heart text-3xl text-green-600"></div>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Academic Affirmations</h1>
            
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Daily Affirmations</h3>
              <div className="space-y-4 text-left">
                <p className="text-lg text-gray-700">✓ I am capable of achieving my academic goals</p>
                <p className="text-lg text-gray-700">✓ I learn from my mistakes and grow stronger</p>
                <p className="text-lg text-gray-700">✓ I am focused, determined, and resilient</p>
                <p className="text-lg text-gray-700">✓ Every day I am becoming a better student</p>
                <p className="text-lg text-gray-700">✓ I have the power to create positive change</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">My Personal Affirmations</h3>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map(affirmation => (
                  <input 
                    key={affirmation}
                    type="text" 
                    placeholder={`Write your personal affirmation ${affirmation}...`}
                    className="input-field text-center"
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">My Academic Identity</h3>
              <textarea 
                placeholder="I am a student who... (describe your ideal academic self)"
                className="input-field h-24 resize-none text-center"
              ></textarea>
            </div>
          </div>
          
          <div className="text-center mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <p className="text-lg font-medium text-gray-700">Read these affirmations daily to build confidence and maintain a positive mindset!</p>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('AcademicAffirmations component error:', error);
    return null;
  }
}