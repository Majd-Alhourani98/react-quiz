/**
 * Main Component
 * Wrapper component for main content area
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 */
function Main({ children }) {
  return <main className="main">{children}</main>;
}

export default Main;
