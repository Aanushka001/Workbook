function WorkbookPage({ children, className = "" }) {
  try {
    return (
      <div className={`workbook-page ${className}`} data-name="workbook-page" data-file="components/WorkbookPage.js">
        {children}
      </div>
    );
  } catch (error) {
    console.error('WorkbookPage component error:', error);
    return null;
  }
}