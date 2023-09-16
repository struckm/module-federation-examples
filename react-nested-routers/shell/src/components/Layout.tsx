import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { app1RoutingPrefix, app2RoutingPrefix } from '../routing/constants';

export function Layout() {
  return (
    <>
      <nav style={{ marginBottom: "3rem" }}>
        <Link to={`/${app1RoutingPrefix}`} style={{ marginRight: "1rem" }}>
          App1
        </Link>
        <Link to={`/${app2RoutingPrefix}`} style={{ marginRight: "1rem" }}>
          App2
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
