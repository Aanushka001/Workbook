function PriorityMatrix() {
  try {
    return (
      <WorkbookPage data-name="priority-matrix" data-file="pages/PriorityMatrix.js">
        <div className="page-header">
          <div className="w-16 h-16 mx-auto bg-beige rounded-full flex items-center justify-center mb-4">
            <div className="icon-grid text-2xl text-orange-600"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Priority Matrix</h1>
          <p className="text-lg text-gray-600">Organize tasks by importance and urgency</p>
        </div>

        <div className="space-y-6">
          <div className="section-card bg-blush">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Eisenhower Decision Matrix</h3>
              <p className="text-gray-600">Categorize your tasks to improve time management</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-96">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-red-800 flex items-center justify-center">
                  <div className="icon-alert-circle text-lg mr-2"></div>
                  Urgent & Important
                </h4>
                <p className="text-xs text-red-600">DO FIRST</p>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map(task => (
                  <input 
                    key={task}
                    type="text" 
                    placeholder="Crisis/Emergency task..."
                    className="w-full p-2 text-xs border border-red-200 rounded focus:outline-none focus:ring-1 focus:ring-red-300"
                  />
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-blue-800 flex items-center justify-center">
                  <div className="icon-calendar text-lg mr-2"></div>
                  Important, Not Urgent
                </h4>
                <p className="text-xs text-blue-600">SCHEDULE</p>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map(task => (
                  <input 
                    key={task}
                    type="text" 
                    placeholder="Plan/Prevent task..."
                    className="w-full p-2 text-xs border border-blue-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                  />
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-yellow-800 flex items-center justify-center">
                  <div className="icon-users text-lg mr-2"></div>
                  Urgent, Not Important
                </h4>
                <p className="text-xs text-yellow-600">DELEGATE</p>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map(task => (
                  <input 
                    key={task}
                    type="text" 
                    placeholder="Interruption task..."
                    className="w-full p-2 text-xs border border-yellow-200 rounded focus:outline-none focus:ring-1 focus:ring-yellow-300"
                  />
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-gray-800 flex items-center justify-center">
                  <div className="icon-trash text-lg mr-2"></div>
                  Not Urgent & Not Important
                </h4>
                <p className="text-xs text-gray-600">ELIMINATE</p>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map(task => (
                  <input 
                    key={task}
                    type="text" 
                    placeholder="Time waster..."
                    className="w-full p-2 text-xs border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="section-card bg-lavender">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <div className="icon-lightbulb text-lg text-purple-600 mr-2"></div>
              Action Plan
            </h4>
            <textarea 
              placeholder="Based on your matrix, what will you do first? What will you schedule for later?"
              className="input-field h-24 resize-none"
            ></textarea>
          </div>
        </div>
      </WorkbookPage>
    );
  } catch (error) {
    console.error('PriorityMatrix component error:', error);
    return null;
  }
}