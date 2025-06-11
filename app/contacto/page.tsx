"use client";

export default function ContactoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-background text-foreground font-sans min-h-screen">
      {/* Título de la página */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary">
          Contacto
        </h1>
        <p className="text-muted mt-2">
          Estamos aquí para ayudarte a encontrar tu próximo auto
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Información de contacto */}
        <div>
          <h2 className="text-xl font-heading font-semibold mb-6 text-primary">
            Información de Contacto
          </h2>

          <div className="space-y-4 text-foreground">
            {/* Dirección */}
            <div className="flex items-start space-x-3">
              <div className="text-primary mt-1">
                {/* Ícono */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-primary">Dirección</h3>
                <p>
                  Av. Principal 123
                  <br />
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start space-x-3">
              <div className="text-primary mt-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-primary">Teléfono</h3>
                <p>+54 11 1234-5678</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3">
              <div className="text-primary mt-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-primary">Email</h3>
                <p>info@autopointusados.com</p>
              </div>
            </div>

            {/* Horarios */}
            <div className="flex items-start space-x-3">
              <div className="text-primary mt-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-primary">
                  Horarios de Atención
                </h3>
                <p>
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Sábados: 9:00 - 14:00
                  <br />
                  Domingos: Cerrado
                </p>
              </div>
            </div>
          </div>

          {/* Botones de contacto rápido */}
          <div className="mt-8 space-y-3">
            <a
              href="https://wa.me/5491234567890"
              className="w-full bg-primary hover:bg-hover text-buttonText text-center py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108" />
              </svg>
              <span>Contactar por WhatsApp</span>
            </a>
            <a
              href="tel:+5491234567890"
              className="w-full bg-primary hover:bg-hover text-buttonText text-center py-3 px-6 rounded-lg font-medium transition-colors block"
            >
              Llamar por Teléfono
            </a>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div>
          <h2 className="text-xl font-heading font-semibold mb-6 text-primary">
            Envíanos un Mensaje
          </h2>

          <form className="space-y-4">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Nombre completo *
              </label>
              <input
                type="text"
                required
                className="w-full p-3 border border-gray-700 rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                className="w-full p-3 border border-gray-700 rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="tu@email.com"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                className="w-full p-3 border border-gray-700 rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="+54 11 1234-5678"
              />
            </div>

            {/* Asunto */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Asunto *
              </label>
              <select
                required
                className="w-full p-3 border border-gray-700 rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Selecciona un asunto</option>
                <option value="consulta-auto">
                  Consulta sobre un auto específico
                </option>
                <option value="financiacion">
                  Información sobre financiación
                </option>
                <option value="tasacion">Tasación de mi auto</option>
                <option value="general">Consulta general</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Mensaje *
              </label>
              <textarea
                required
                rows={5}
                className="w-full p-3 border border-gray-700 rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            {/* Botón enviar */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-hover text-buttonText py-3 px-6 rounded-md font-medium transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>

          <p className="text-xs text-muted mt-4">
            * Campos obligatorios. Tu información será tratada de forma
            confidencial.
          </p>
        </div>
      </div>
    </div>
  );
}
