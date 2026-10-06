import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '@calcom/atoms/globals.min.css';

const services = [
  { slug: 'manicura', name: 'Manicura Rusa' },
  { slug: 'esmaltados', name: 'Esmaltado Semipermanente' },
  { slug: 'esculpidas', name: 'Esculpidas en Gel' },
  { slug: 'kapiing', name: 'Kapping Gel' },
  { slug: 'service', name: 'Service de Gel' },
  { slug: 'nail', name: 'Nail Art Simple' },
  { slug: 'nailfull', name: 'Nail Art Full' },
];

function showMessage(message, backgroundColor) {
  const messageDiv = document.createElement('div');
  messageDiv.setAttribute('role', 'status');
  messageDiv.style.cssText = `position:fixed;top:20px;right:20px;background:${backgroundColor};color:white;padding:15px 20px;border-radius:5px;z-index:1000;font-family:'Poppins',sans-serif;max-width:300px`;
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
  window.setTimeout(() => messageDiv.remove(), 5000);
}

function getBookingData(result, serviceName) {
  const data = result?.data ?? result ?? {};
  const booking = data.booking ?? data;
  const responses = booking.responses ?? booking.bookingFieldsResponses ?? {};
  const attendee = booking.attendees?.[0] ?? {};

  return {
    nombre: responses.name ?? attendee.name ?? booking.name ?? '',
    email: responses.email ?? attendee.email ?? booking.email ?? '',
    fecha: booking.startTime ?? booking.start ?? booking.startAt ?? new Date().toISOString(),
    evento: data.eventType?.title ?? booking.eventType?.title ?? booking.title ?? serviceName,
  };
}

async function saveBookingToDatabase(result, serviceName) {
  try {
    const response = await fetch('/api/reservas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(getBookingData(result, serviceName)),
    });

    if (response.ok) {
      showMessage('¡Cita reservada exitosamente!', '#4caf50');
    } else if (response.status === 429) {
      showMessage('Has alcanzado el límite de 2 reservas por hora. Inténtalo de nuevo más tarde.', '#f44336');
    } else {
      showMessage('La reserva se creó, pero no se pudo guardar en la base de datos.', '#f44336');
    }
  } catch {
    showMessage('La reserva se creó, pero no se pudo conectar con la base de datos.', '#f44336');
  }
}

function BookingWidget() {
  const [serviceSlug, setServiceSlug] = useState('');
  const [BookerEmbedComponent, setBookerEmbedComponent] = useState(null);
  const selectedService = services.find((service) => service.slug === serviceSlug);

  useEffect(() => {
    let isCurrent = true;
    setBookerEmbedComponent(null);
    if (serviceSlug) {
      import('@calcom/atoms').then(({ BookerEmbed: Component }) => {
        if (isCurrent) setBookerEmbedComponent(() => Component);
      }).catch(() => {
        if (isCurrent) showMessage('No se pudo cargar el calendario. Recarga la página e inténtalo de nuevo.', '#f44336');
      });
    }
    return () => { isCurrent = false; };
  }, [serviceSlug]);

  return (
    <div className="cal-booker">
      <label className="cal-booker__label" htmlFor="cal-service-select">Elige un servicio</label>
      <select
        className="cal-booker__select"
        id="cal-service-select"
        value={serviceSlug}
        onChange={(event) => setServiceSlug(event.target.value)}
      >
        <option value="">Selecciona un servicio</option>
        {services.map((service) => (
          <option key={service.slug} value={service.slug}>{service.name}</option>
        ))}
      </select>
      {selectedService ? (
        <div className="cal-booker__widget">
          {BookerEmbedComponent ? (
            <BookerEmbedComponent
              username="guillesrl"
              eventSlug={selectedService.slug}
              defaultPhoneCountry="ad"
              view="MONTH_VIEW"
              onCreateBookingSuccess={(result) => saveBookingToDatabase(result, selectedService.name)}
            />
          ) : <p className="cal-booker__hint">Cargando horarios…</p>}
        </div>
      ) : (
        <p className="cal-booker__hint">Selecciona el servicio para ver los horarios disponibles.</p>
      )}
    </div>
  );
}

const rootElement = document.getElementById('cal-booker-root');
if (rootElement) createRoot(rootElement).render(<BookingWidget />);
