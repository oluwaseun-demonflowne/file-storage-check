import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/api/Register",
    "/",
    "/register-company",
    "/login",
    "/register",
    "/api/RegisterCompany",
    "/api/webhooks",
    "/webhooks",
    "/api/checkCompanyExists",
    "/api/Register",
    "/pricing",
    "/help",
  ],
  ignoredRoutes: ["/api/webhooks"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
