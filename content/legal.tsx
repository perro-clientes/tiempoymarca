import Link from "next/link";
import type { LegalSection } from "@/components/site/legal-page";
import { siteConfig } from "@/lib/site-config";

const email = siteConfig.contact.email;
const Email = () => <a href={`mailto:${email}`}>{email}</a>;

export const termsUpdatedAt = "[FECHA]";
export const privacyUpdatedAt = "[FECHA]";

export const termsIntro =
  "Estos términos regulan el uso de este sitio web y de sus formularios. Al navegarlo o enviarnos una consulta, aceptás estas condiciones.";

export const termsSections: LegalSection[] = [
  {
    id: "alcance",
    title: "Alcance",
    body: (
      <p>
        Estos términos aplican al sitio [DOMINIO] y a la información que nos enviás a través de él. Las condiciones de los
        entrenamientos, planes y cursos se acuerdan directamente con el equipo al momento de inscribirte.
      </p>
    ),
  },
  {
    id: "titular",
    title: "Titular del sitio",
    body: (
      <p>
        El sitio pertenece a Tiempo &amp; Marca, cuyo titular es [RAZÓN SOCIAL O NOMBRE DEL TITULAR], CUIT [CUIT], con
        domicilio en [DOMICILIO LEGAL]. Contacto: <Email />.
      </p>
    ),
  },
  {
    id: "uso",
    title: "Uso del sitio",
    body: (
      <>
        <p>Podés usar el sitio para informarte sobre el equipo y contactarnos. Al usarlo te comprometés a no:</p>
        <ul>
          <li>Enviar datos falsos o de otra persona sin su autorización.</li>
          <li>Enviar contenido ofensivo, publicidad no solicitada o mensajes masivos.</li>
          <li>Intentar acceder sin permiso a partes del sitio o afectar su funcionamiento.</li>
        </ul>
      </>
    ),
  },
  {
    id: "formularios",
    title: "Formularios de contacto",
    body: (
      <ul>
        <li>Los datos que completes tienen que ser verdaderos para que podamos responderte.</li>
        <li>
          Enviar el formulario es una consulta: no implica una inscripción, una reserva confirmada ni una obligación de
          pago.
        </li>
        <li>Te respondemos por email o WhatsApp, según los datos que nos dejes.</li>
        <li>
          El uso de esos datos se rige por nuestra <Link href="/privacidad">Política de privacidad</Link>.
        </li>
      </ul>
    ),
  },
  {
    id: "informacion",
    title: "Información publicada",
    body: (
      <p>
        Los horarios, precios, planes y demás información del sitio son de carácter informativo y pueden cambiar sin
        previo aviso. Las condiciones vigentes te las confirmamos cuando respondemos tu consulta.
      </p>
    ),
  },
  {
    id: "terceros",
    title: "Enlaces a terceros",
    body: (
      <p>
        El sitio tiene enlaces a servicios de terceros como WhatsApp, Instagram y Google Maps. Al usarlos, aplican los
        términos y políticas de privacidad de cada uno; no somos responsables por su contenido ni funcionamiento.
      </p>
    ),
  },
  {
    id: "propiedad-intelectual",
    title: "Propiedad intelectual",
    body: (
      <p>
        La marca Tiempo &amp; Marca, el logo, los textos, fotos y videos del sitio pertenecen a sus titulares. No podés
        reproducirlos ni usarlos con fines comerciales sin autorización escrita.
      </p>
    ),
  },
  {
    id: "responsabilidad",
    title: "Responsabilidad",
    body: (
      <p>
        Hacemos lo posible para que el sitio funcione correctamente y su información esté actualizada, pero no
        garantizamos que esté siempre disponible o libre de errores. No somos responsables por daños derivados de
        interrupciones del sitio o del uso indebido que terceros hagan de él.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "Cambios y jurisdicción",
    body: (
      <p>
        Podemos actualizar estos términos; la versión vigente es la publicada en esta página con su fecha. Se rigen por
        las leyes de la República Argentina y, ante cualquier conflicto, intervendrán los tribunales ordinarios del
        Departamento Judicial de Lomas de Zamora, sin perjuicio de los derechos que te correspondan como consumidor.
      </p>
    ),
  },
];

export const privacyIntro =
  "Esta política explica qué hacemos con los datos que nos dejás en los formularios del sitio, de acuerdo con la Ley 25.326 de Protección de Datos Personales.";

export const privacySections: LegalSection[] = [
  {
    id: "responsable",
    title: "Responsable",
    body: (
      <p>
        El responsable de los datos es [RAZÓN SOCIAL O NOMBRE DEL TITULAR], CUIT [CUIT], con domicilio en [DOMICILIO
        LEGAL]. Para cualquier consulta sobre tus datos escribinos a <Email />.
      </p>
    ),
  },
  {
    id: "datos",
    title: "Qué datos recolectamos",
    body: (
      <>
        <ul>
          <li>
            <strong>Formulario de contacto:</strong> nombre y apellido, email, número de WhatsApp, el servicio que te
            interesa, tu experiencia corriendo y, si querés, tu objetivo.
          </li>
          <li>
            <strong>Datos técnicos de navegación:</strong> información básica como tipo de dispositivo y navegador (ver
            punto 9).
          </li>
        </ul>
        <p>
          Te pedimos que no incluyas en el formulario información sobre tu salud ni otros datos sensibles: si hace falta,
          lo charlamos en persona.
        </p>
      </>
    ),
  },
  {
    id: "finalidad",
    title: "Para qué los usamos",
    body: (
      <>
        <ul>
          <li>Responder tu consulta por email o WhatsApp.</li>
          <li>Coordinar tu clase de prueba o enviarte información del plan o curso que te interesa.</li>
          <li>
            Avisarte cuando haya novedades sobre lo que consultaste (por ejemplo, el lanzamiento del plan autoguiado), si
            así nos lo pediste.
          </li>
        </ul>
        <p>No vendemos ni cedemos tus datos, y no te vamos a enviar publicidad sin tu consentimiento.</p>
      </>
    ),
  },
  {
    id: "consentimiento",
    title: "Consentimiento",
    body: (
      <p>
        Darnos tus datos es voluntario. Al marcar la casilla de aceptación y enviar el formulario, aceptás que los usemos
        para los fines de esta política. Sin los datos de contacto no podemos responderte. Si sos menor de 18 años,
        necesitás la autorización de tu madre, padre o tutor.
      </p>
    ),
  },
  {
    id: "compartimos",
    title: "Con quién los compartimos",
    body: (
      <p>
        Solo con los proveedores que necesitamos para operar el sitio y responderte: alojamiento web, envío de
        formularios y correo electrónico, y nuestro sistema de gestión de contactos. Acceden únicamente a lo necesario
        para prestar su servicio. Algunos pueden almacenar información fuera de la Argentina, con niveles de protección
        adecuados.
      </p>
    ),
  },
  {
    id: "conservacion",
    title: "Cuánto tiempo los guardamos",
    body: (
      <p>
        Guardamos los datos de tu consulta durante [X] meses. Si no te sumás al equipo en ese plazo, los eliminamos.
        Podés pedir que los borremos antes en cualquier momento.
      </p>
    ),
  },
  {
    id: "derechos",
    title: "Tus derechos",
    body: (
      <>
        <p>
          Podés pedirnos acceder a tus datos, corregirlos, actualizarlos o eliminarlos, y retirar tu consentimiento. El
          acceso es gratuito en intervalos no menores a seis meses, salvo interés legítimo. Escribinos a <Email /> y te
          respondemos dentro de los plazos legales.
        </p>
        <p className="rounded-2xl border border-line bg-white p-5 text-sm text-muted-foreground">
          La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley N° 25.326, tiene
          la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos
          por incumplimiento de las normas vigentes en materia de protección de datos personales.
        </p>
      </>
    ),
  },
  {
    id: "seguridad",
    title: "Seguridad",
    body: (
      <p>
        El sitio usa conexión cifrada (HTTPS) y el acceso a las consultas recibidas está limitado al equipo, con usuarios
        individuales y doble factor de autenticación. Si detectamos un incidente que afecte tus datos, te lo vamos a
        informar.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        El sitio usa cookies técnicas necesarias para funcionar y, si las activamos, herramientas de medición anónima de
        visitas [INDICAR HERRAMIENTA, si se usa]. Podés bloquearlas o borrarlas desde la configuración de tu navegador.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "Cambios en esta política",
    tocLabel: "Cambios",
    body: <p>Si actualizamos esta política, vamos a publicar la nueva versión en esta página con su fecha.</p>,
  },
];
