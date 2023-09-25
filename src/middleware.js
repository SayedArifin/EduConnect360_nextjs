import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(async function middleware(req) {
  const userEmail = req.nextauth.token.email;
  const pathSegments = req.nextUrl.pathname.split("/");
  const basePath = pathSegments[1];
  let user_role;
  let permittedDashboard;

  async function fetchData() {
    const response = await fetch(
      process.env.NEXT_PUBLIC_USER_API_URL + `/${userEmail}`
    );
    const newData = await response.json();
    user_role = newData.user.user_role;
  }

  await fetchData();

  if (user_role === 1) {
    permittedDashboard = "admin-dashboard";
  } else if (user_role === 2) {
    permittedDashboard = "superadmin-dashboard";
  } else {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "You do not have permission to view this page",
        userEmail,
      }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }

  if (!(basePath === permittedDashboard)) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "You do not have permission to view this page",
        userEmail,
      }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
});

export const config = {
  matcher: ["/admin-dashboard/:path*", "/superadmin-dashboard:path*"],
};
