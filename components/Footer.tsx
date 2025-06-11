export default function Footer() {
  return (
    <footer className="bg-background text-foreground mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-primary">
              Contacto
            </h3>
            <div className="space-y-2 text-sm">
              <p>📍 Av. Principal 123, Buenos Aires</p>
              <p>📞 +54 11 1234-5678</p>
              <p>✉️ info@autopointusados.com</p>
              <p>🕒 Lun-Vie: 9:00-18:00 | Sáb: 9:00-14:00</p>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-primary">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Información legal */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-primary">
              Legal
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="hover:text-primary block transition-colors"
              >
                Términos y Condiciones
              </a>
              <a
                href="#"
                className="hover:text-primary block transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="hover:text-primary block transition-colors"
              >
                Aviso Legal
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-muted">
          <p>&copy; 2024 Autopoint Usados. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
