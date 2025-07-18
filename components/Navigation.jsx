function Navigation({ currentPage, totalPages, onPageChange, pageTitle }) {
  try {
    return (
      <div className="shadow-2xl sticky top-0 z-50" style={{background: 'linear-gradient(135deg, #8B4513, #6F4E37, #5D2F0A)'}} data-name="navigation" data-file="components/Navigation.js">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => onPageChange(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="flex items-center space-x-3 px-6 py-3 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all duration-300 text-white font-semibold backdrop-blur-sm"
              >
                <div className="icon-chevron-left text-xl"></div>
                <span>Previous</span>
              </button>
              
              <span className="text-white font-bold text-lg bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                {currentPage + 1} / {totalPages}
              </span>
            </div>
            
            <h1 className="text-2xl font-bold text-white text-shadow">{pageTitle}</h1>
            
            <button
              onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="flex items-center space-x-3 px-6 py-3 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all duration-300 text-white font-semibold backdrop-blur-sm"
            >
              <span>Next</span>
              <div className="icon-chevron-right text-xl"></div>
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}