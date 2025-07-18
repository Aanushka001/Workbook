function ErrorBoundaryWrapper({ children }) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white p-6">
          <h1 className="text-3xl font-bold text-red-600 mb-2">Oops! Something went wrong.</h1>
          <p className="mb-4 text-gray-700">Please refresh the page or try again later.</p>
          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
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
    { component: ThankYouPage, title: "Thank You" },
  ];

  const CurrentPage = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentPage={currentPage}
        totalPages={pages.length}
        onPageChange={setCurrentPage}
        pageTitle={pages[currentPage].title}
      />
      <div className="p-4">
        <CurrentPage />
      </div>
    </div>
  );
}
