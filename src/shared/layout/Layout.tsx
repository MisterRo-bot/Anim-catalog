import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <div>
      <header>
        <h1>Mon header</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
