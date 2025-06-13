import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: ["/admin/:path*", "/api/autos/:path*"],
};
// Este middleware protege las rutas /admin y /api/autos, asegurando que solo los usuarios autenticados puedan acceder a ellas.
// Puedes ajustar el matcher para incluir o excluir otras rutas según sea necesario.