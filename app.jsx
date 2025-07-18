class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [currentPage, setCurrentPage] = React.useState(0);
    
    const pages = [
      { component: CoverPage, title: "Cover Page" },
      { component: WelcomePage, title: "Welcome & How to Use" },
      { component: SMARTGoalPlanner, title: "SMART Goal Planner" },
      { component: MonthlyGoalPlanner, title: "Monthly Goal Planner" },
      { component: WeeklyFocusPlanner, title: "Weekly Focus Planner" },
      { component: DailyTaskPage, title: "Daily Task & Time-Blocking" },
      { component: StudyTracker, title: "Study Tracker" },
      { component: SubjectProgress, title: "Subject Progress Tracker" },
      { component: HabitTracker, title: "Habit Tracker" },
      { component: MotivationalQuote, title: "Motivational Quote" },
      { component: BrainDump, title: "Brain Dump" },
      { component: WeeklyReflection, title: "Weekly Reflection" },
      { component: MonthlyReview, title: "End-of-Month Review" },
      { component: AcademicAffirmations, title: "Academic Affirmations" },
      { component: PriorityMatrix, title: "Priority Matrix" },
      { component: NotesPage, title: "Notes & Ideas" },
      { component: ChecklistPage, title: "Checklist Page" },
      { component: FinalReview, title: "Final Review" },
      { component: ThankYouPage, title: "Thank You" }
    ];

    const CurrentPageComponent = pages[currentPage].component;

    return (
      <div className="min-h-screen bg-gray-50" data-name="app" data-file="app.js">
        <Navigation 
          currentPage={currentPage}
          totalPages={pages.length}
          onPageChange={setCurrentPage}
          pageTitle={pages[currentPage].title}
        />
        <CurrentPageComponent />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);