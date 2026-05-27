import { useState, useEffect, useRef } from 'react';

// ─────────────────────────────────────────────
// DATOS — HOTSPOTS POR CANAL
// ─────────────────────────────────────────────

const EMAIL_HOTSPOTS = [
  {
    id: 'email_remitente',
    titulo: '🔴 Remitente Falso',
    explicacion:
      'Netflix usa siempre "@netflix.com". Este correo viene de "@netflix-seguridad-62.com", un dominio inventado por estafadores. Cualquiera puede registrar uno parecido por menos de 10 €. Un solo carácter de diferencia lo cambia todo.',
  },
  {
    id: 'email_urgencia',
    titulo: '🟠 Trampa Psicológica',
    explicacion:
      '"24 horas o perderás tu cuenta" crea PÁNICO artificial. Los estafadores quieren que actúes sin pensar. Las empresas legítimas NUNCA te presionan así. Si sientes urgencia, PARA, respira y llama a la empresa por su número oficial.',
  },
  {
    id: 'email_enlace',
    titulo: '🔴 Enlace Trampa',
    explicacion:
      'El enlace real de Netflix es "netflix.com". Un enlace acortado "bit.ly/…" oculta la dirección real. Si hicieras clic, llegarías a una web falsa idéntica a Netflix que robaría tu contraseña y los datos de tu tarjeta.',
  },
];

const SMS_HOTSPOTS = [
  {
    id: 'sms_numero',
    titulo: '🔴 Número Remitente Sospechoso',
    explicacion:
      'Los bancos españoles NUNCA te contactan desde un número de móvil de 9 dígitos. Usan identificadores alfanuméricos oficiales como "BBVA" o "CaixaBank". Un número de teléfono normal como remitente de tu banco es siempre una estafa.',
  },
  {
    id: 'sms_enlace',
    titulo: '🔴 Los Bancos No Envían Links',
    explicacion:
      'Ningún banco legítimo te enviará jamás un enlace por SMS para que entres a tu cuenta. Si recibes uno, bórralo. Para cualquier gestión bancaria, escribe tú mismo la dirección en el navegador o abre la app oficial que tienes instalada.',
  },
];

const WA_HOTSPOTS = [
  {
    id: 'wa_urgencia',
    titulo: '🟠 Bloqueo Emocional del Atacante',
    explicacion:
      'La palabra "URGENTE" combinada con suplantar a un hijo/a bloquea tu capacidad de razonar. El estafador cuenta con que el amor y el miedo te harán actuar sin verificar. Reconocer este patrón es tu primera línea de defensa.',
  },
  {
    id: 'wa_verificacion',
    titulo: '✅ El Protocolo de Verificación',
    explicacion:
      'Antes de mover ni un euro: (1) Llama al número de siempre de ese familiar. (2) Si no contesta, hazle una pregunta que solo él/ella pueda responder (nombre de vuestra mascota, etc.). (3) Nunca hagas transferencias sin verificación directa. Siempre.',
  },
];

const HOTSPOT_IDS_BY_TAB = {
  email: EMAIL_HOTSPOTS.map((h) => h.id),
  sms: SMS_HOTSPOTS.map((h) => h.id),
  whatsapp: WA_HOTSPOTS.map((h) => h.id),
};

// ─────────────────────────────────────────────
// DATOS — CASOS (6)
// ─────────────────────────────────────────────

const CASOS = [
  {
    id: 1,
    tipoMedio: 'SMS',
    emoji: '📱',
    remitente: '+34 622 xxxxxx — Correos España',
    mensaje:
      'Su paquete #ES892341 está retenido en aduana por impago de tasas. Abone 1,99 € antes del viernes para recibirlo: correos-pagos-es.net/liberar',
    esFraude: true,
    explicacion:
      '🚨 ES UN FRAUDE. Correos nunca cobra por SMS con enlaces externos. El dominio "correos-pagos-es.net" NO es oficial. El cobro de 1,99 € es el anzuelo para capturar los datos reales de tu tarjeta.',
  },
  {
    id: 2,
    tipoMedio: 'Email',
    emoji: '📧',
    remitente: 'noreply@endesa.es',
    asunto: 'Tu factura de abril está disponible',
    mensaje:
      'Hola, cliente. Tu factura de abril por importe de 74,30 € ya está disponible. Puedes consultarla en tu área de cliente en www.endesa.es. No es necesario que hagas nada más.',
    esFraude: false,
    explicacion:
      '✅ ES SEGURO. Dominio oficial (@endesa.es), sin urgencia, no pide contraseñas ni pagos por otro canal, y dirige al portal que ya conoces. Este es el comportamiento de una empresa legítima.',
  },
  {
    id: 3,
    tipoMedio: 'WhatsApp',
    emoji: '💬',
    remitente: 'Número desconocido (+34 611 xxx xxx)',
    mensaje:
      '"Mamá/Papá, soy yo. Se me ha roto el móvil y uso el de una amiga. Necesito que me hagas una transferencia URGENTE de 250 €, te lo devuelvo esta noche. El IBAN es ES76 2100 0418 4012 3456 7891."',
    esFraude: true,
    explicacion:
      '🚨 ES UN FRAUDE. Es la estafa del "hijo en apuros", una de las más extendidas en España. Los estafadores cuentan con que el amor te hará actuar sin verificar. Llama siempre al número de siempre de tu familiar antes de mover un euro.',
  },
  {
    id: 4,
    tipoMedio: 'SMS',
    emoji: '📱',
    remitente: 'AGENCIA TRIBUTARIA (número desconocido)',
    mensaje:
      'La Agencia Tributaria le informa: tiene pendiente un reembolso de 347,85 €. Para recibirlo, acceda a: hacienda-devoluciones-es.com/reembolso antes de 48 horas o perderá el derecho.',
    esFraude: true,
    explicacion:
      '🚨 ES UN FRAUDE. La Agencia Tributaria NUNCA comunica devoluciones por SMS. Las comunicaciones oficiales llegan por carta postal o por la Sede Electrónica (agenciatributaria.gob.es). El dominio "hacienda-devoluciones-es.com" es completamente falso.',
  },
  {
    id: 5,
    tipoMedio: 'Email',
    emoji: '📧',
    remitente: 'citas@policia.es',
    asunto: 'Confirmación de cita DNI — 15 de junio, 10:30 h',
    mensaje:
      'Su cita para la renovación del DNI ha sido confirmada para el día 15 de junio a las 10:30 h en la Comisaría de la Calle Mayor, 1. Recuerde traer su DNI actual y una fotografía reciente. Para cancelar o modificar, acceda a citapreviadnie.es',
    esFraude: false,
    explicacion:
      '✅ ES SEGURO. Remitente con dominio institucional oficial (@policia.es), confirma una gestión solicitada previamente, no pide datos bancarios ni contraseñas, y dirige a un portal oficial conocido.',
  },
  {
    id: 6,
    tipoMedio: 'WhatsApp',
    emoji: '💬',
    remitente: 'WhatsApp Support (número desconocido)',
    mensaje:
      '"Hola, somos el equipo de soporte de WhatsApp. Hemos detectado actividad inusual en su cuenta. Para protegerla, necesitamos que nos facilite el código de 6 dígitos que acaba de recibir por SMS en los próximos 10 minutos."',
    esFraude: true,
    explicacion:
      '🚨 ES UN FRAUDE. Este es el método de secuestro de cuentas más común en España. Ese código SMS es tu clave de acceso a WhatsApp. Si lo das, el estafador tomará el control de tu cuenta y la usará para estafar a todos tus contactos. WhatsApp NUNCA pedirá ese código.',
  },
];

// ─────────────────────────────────────────────
// DATOS — PREGUNTAS (6)
// ─────────────────────────────────────────────

const PREGUNTAS = [
  {
    id: 1,
    pregunta: '¿Cuál es la señal más clara de que un email puede ser falso?',
    opciones: [
      'Que tenga muchas imágenes y colores llamativos',
      'Que el dominio del remitente no coincida exactamente con el de la empresa real',
      'Que haya llegado a la carpeta de spam',
      'Que esté escrito completamente en mayúsculas',
    ],
    correcta: 1,
  },
  {
    id: 2,
    pregunta:
      '¿Qué debes hacer si recibes un mensaje urgente pidiendo dinero, supuestamente de un familiar?',
    opciones: [
      'Hacer la transferencia cuanto antes para ayudarle',
      'Responder al mensaje pidiendo más información',
      'Llamar directamente al número de siempre de ese familiar para verificar si es verdad',
      'Pedirle que te envíe una foto como prueba por el mismo mensaje',
    ],
    correcta: 2,
  },
  {
    id: 3,
    pregunta: '¿Cuál de estos enlaces es el MÁS sospechoso?',
    opciones: [
      'www.correos.es/seguimiento-paquete',
      'www.amazon.es/cuenta/pedidos',
      'http://bit.ly/correos-paquete-urgente-pago',
      'app.bbva.es/login',
    ],
    correcta: 2,
  },
  {
    id: 4,
    pregunta:
      'Recibes un SMS de tu banco con un enlace para "verificar tu cuenta". ¿Qué haces?',
    opciones: [
      'Hacer clic en el enlace si el texto del SMS parece oficial',
      'Ignorar el enlace y acceder desde la app oficial del banco o escribiendo tú mismo la dirección web',
      'Responder al SMS para confirmar si es real',
      'Llamar al número desde el que te llega el SMS',
    ],
    correcta: 1,
  },
  {
    id: 5,
    pregunta:
      'Un WhatsApp desde un número desconocido dice ser tu hijo/a y pide dinero urgente. ¿Cuál es el PRIMER paso correcto?',
    opciones: [
      'Hacer la transferencia de inmediato y verificarlo después',
      'Pedirle más información o fotos por el mismo WhatsApp',
      'Llamar al número de siempre de tu hijo/a para comprobar si realmente es él/ella',
      'Escribirle de vuelta pidiendo su número de cuenta',
    ],
    correcta: 2,
  },
  {
    id: 6,
    pregunta:
      'El "soporte de WhatsApp" te pide el código de 6 dígitos que acabas de recibir por SMS. ¿Qué significa esto?',
    opciones: [
      'Es una verificación de seguridad legítima de WhatsApp',
      'Es un intento de secuestrar tu cuenta para estafar a tus contactos haciéndose pasar por ti',
      'Es un error del sistema; debes reinstalar la aplicación',
      'Debes llamar a tu compañía telefónica',
    ],
    correcta: 1,
  },
];

// ─────────────────────────────────────────────
// DATOS — MANDAMIENTOS
// ─────────────────────────────────────────────

const MANDAMIENTOS = [
  {
    n: '1',
    titulo: 'Desconfía siempre del remitente',
    texto:
      'Comprueba que el dominio del correo sea exactamente el de la empresa real (@netflix.com, @endesa.es). Un solo carácter de diferencia lo cambia todo. Ningún banco o empresa legítima te pedirá contraseñas ni datos bancarios por email, SMS o WhatsApp.',
  },
  {
    n: '2',
    titulo: 'La urgencia es siempre una trampa',
    texto:
      'Si un mensaje te dice que tienes "pocas horas" o perderás algo, PARA. Las empresas serias no te presionan así. Tómate 5 minutos, o llama a la empresa por el número oficial que tú ya conoces — nunca por el que aparezca en el mensaje sospechoso.',
  },
  {
    n: '3',
    titulo: 'Verifica siempre por otra vía',
    texto:
      'Si recibes algo sospechoso de un familiar, banco o institución, contacta por el número o web que tú ya tienes guardado. Nunca uses los datos de contacto del mensaje sospechoso. Para los bancos, usa siempre la app oficial o escribe tú mismo la dirección web.',
  },
];

// ─────────────────────────────────────────────
// UMBRAL DE APROBADO: ≥4 de 6 (~67%, aprox. 70%)
// ─────────────────────────────────────────────

const PASS_THRESHOLD = 4;

// ─────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────

export default function ClaseCiberseguridad() {
  const [step, setStep] = useState(1);

  // Timer
  const [timeLeft, setTimeLeft] = useState(1200);
  const intervalRef = useRef(null);

  const startTimer = (seconds = 1200) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeLeft(seconds);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { clearInterval(intervalRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const ss = (s % 60).toString().padStart(2, '0');
    return `${m}:${ss}`;
  };

  // Pantalla 1
  const [activeTab, setActiveTab] = useState('email');
  const [clickedHotspots, setClickedHotspots] = useState(new Set());
  const [activeHotspot, setActiveHotspot] = useState(null);

  const emailDone = HOTSPOT_IDS_BY_TAB.email.every((id) => clickedHotspots.has(id));
  const smsDone   = HOTSPOT_IDS_BY_TAB.sms.every((id) => clickedHotspots.has(id));
  const waDone    = HOTSPOT_IDS_BY_TAB.whatsapp.every((id) => clickedHotspots.has(id));
  const allTabsDone = emailDone && smsDone && waDone;

  const handleHotspot = (id) => {
    setClickedHotspots((prev) => new Set([...prev, id]));
    setActiveHotspot((prev) => (prev === id ? null : id));
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActiveHotspot(null);
  };

  // Pantalla 2
  const [casoIdx, setCasoIdx] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [casosCompletados, setCasosCompletados] = useState(0);

  const handleRespuestaCaso = (marcadoFraude) => {
    setFeedback(marcadoFraude === CASOS[casoIdx].esFraude ? 'correcto' : 'incorrecto');
  };

  const handleSiguienteCaso = () => {
    const isLast = casoIdx >= CASOS.length - 1;
    setCasosCompletados((p) => p + 1);
    if (isLast) { setStep(3); }
    else { setCasoIdx((p) => p + 1); setFeedback(null); }
  };

  // Pantalla 3
  const [respuestas, setRespuestas] = useState({});
  const todasRespondidas = Object.keys(respuestas).length === PREGUNTAS.length;

  // Pantalla 4
  const [notaFinal, setNotaFinal] = useState(null);

  const handleEnviarExamen = () => {
    const aciertos = PREGUNTAS.reduce(
      (acc, p, i) => acc + (respuestas[i] === p.correcta ? 1 : 0), 0
    );
    setNotaFinal(aciertos);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setActiveTab('email');
    setClickedHotspots(new Set());
    setActiveHotspot(null);
    setCasoIdx(0);
    setFeedback(null);
    setCasosCompletados(0);
    setRespuestas({});
    setNotaFinal(null);
    startTimer();
  };

  const timerColor =
    timeLeft < 120 ? 'bg-red-100 text-red-700'
    : timeLeft < 300 ? 'bg-amber-100 text-amber-700'
    : 'bg-indigo-50 text-indigo-700';

  const STEPS_LABELS = ['Teoría', 'Práctica', 'Examen', 'Resultado'];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER GLOBAL */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden="true">🛡️</span>
            <div>
              <p className="font-bold text-gray-900 text-base leading-tight">Ciberseguridad Doméstica</p>
              <p className="text-sm text-gray-500">Módulo {step} de 4</p>
            </div>
          </div>

          <div className="flex items-center gap-1" aria-label="Progreso de la actividad">
            {STEPS_LABELS.map((label, i) => {
              const n = i + 1;
              return (
                <div key={n} className="flex items-center gap-1">
                  <div
                    title={label}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                      n < step ? 'bg-green-500 border-green-500 text-white'
                      : n === step ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'bg-white border-gray-300 text-gray-400'
                    }`}
                  >
                    {n < step ? '✓' : n}
                  </div>
                  {n < 4 && <div className={`w-5 h-0.5 ${n < step ? 'bg-green-400' : 'bg-gray-200'}`} />}
                </div>
              );
            })}
          </div>

          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-xl tabular-nums ${timerColor}`}
            aria-label={`Tiempo restante: ${formatTime(timeLeft)}`}
          >
            <span aria-hidden="true">⏱</span>
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {step === 1 && (
          <Screen1
            activeTab={activeTab}
            onTabChange={handleTabChange}
            clickedHotspots={clickedHotspots}
            activeHotspot={activeHotspot}
            onHotspot={handleHotspot}
            emailDone={emailDone}
            smsDone={smsDone}
            waDone={waDone}
            allTabsDone={allTabsDone}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <Screen2
            casoIdx={casoIdx}
            feedback={feedback}
            casosCompletados={casosCompletados}
            onRespuesta={handleRespuestaCaso}
            onSiguiente={handleSiguienteCaso}
          />
        )}
        {step === 3 && (
          <Screen3
            respuestas={respuestas}
            setRespuestas={setRespuestas}
            todasRespondidas={todasRespondidas}
            onEnviar={handleEnviarExamen}
          />
        )}
        {step === 4 && notaFinal !== null && (
          <Screen4
            notaFinal={notaFinal}
            respuestas={respuestas}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PANTALLA 1 — wrapper con pestañas
// ─────────────────────────────────────────────

function Screen1({ activeTab, onTabChange, clickedHotspots, activeHotspot, onHotspot,
                   emailDone, smsDone, waDone, allTabsDone, onNext }) {
  const TABS = [
    { id: 'email',    label: '📧 Email',    done: emailDone },
    { id: 'sms',      label: '📱 SMS',      done: smsDone },
    { id: 'whatsapp', label: '💬 WhatsApp', done: waDone },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Módulo 1: Las 3 Vías de Ataque</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Los estafadores atacan por tres canales. Pulsa cada botón{' '}
          <span className="font-semibold text-amber-600">⚠️</span> para descubrir las trampas ocultas de cada ejemplo.
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex gap-2 mb-6 bg-gray-100 rounded-2xl p-1.5">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-sm font-bold transition-all ${
              activeTab === tab.id ? 'bg-white text-indigo-700 shadow' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab.label}
            {tab.done && <span className="text-green-500 text-base">✓</span>}
          </button>
        ))}
      </div>

      {activeTab === 'email'    && <EmailTab    clickedHotspots={clickedHotspots} activeHotspot={activeHotspot} onHotspot={onHotspot} />}
      {activeTab === 'sms'      && <SMSTab      clickedHotspots={clickedHotspots} activeHotspot={activeHotspot} onHotspot={onHotspot} />}
      {activeTab === 'whatsapp' && <WhatsAppTab clickedHotspots={clickedHotspots} activeHotspot={activeHotspot} onHotspot={onHotspot} />}

      {/* Badges de progreso global */}
      <div className="flex gap-3 flex-wrap mt-6 mb-5">
        {TABS.map((tab) => (
          <span
            key={tab.id}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
              tab.done ? 'bg-green-50 border-green-400 text-green-700' : 'bg-gray-100 border-gray-300 text-gray-500'
            }`}
          >
            {tab.done ? '✅' : '⭕'} {tab.label} explorado
          </span>
        ))}
      </div>

      {!allTabsDone && (
        <p className="text-base text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-5">
          👆 Explora los botones <strong>⚠️</strong> de los 3 canales para desbloquear los ejercicios.
        </p>
      )}

      <button
        onClick={onNext}
        disabled={!allTabsDone}
        className={`w-full py-4 rounded-2xl text-lg font-bold transition-all ${
          allTabsDone
            ? 'bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white shadow-lg'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {allTabsDone ? '✅ Ir a los Ejercicios Prácticos →' : '🔒 Completa los 3 canales para continuar'}
      </button>
    </div>
  );
}

// ─── Pestaña Email ───────────────────────────

function EmailTab({ clickedHotspots, activeHotspot, onHotspot }) {
  return (
    <div className="bg-white rounded-2xl shadow border border-gray-200 overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-gray-400 text-sm select-none">Bandeja de entrada</span>
      </div>

      <div className="bg-gray-50 border-b border-gray-200 p-5 space-y-4">
        {/* De */}
        <div>
          <div className="flex items-start gap-3 flex-wrap">
            <span className="text-sm font-semibold text-gray-500 mt-1 w-14 shrink-0">De:</span>
            <div className="flex-1 flex items-start gap-3 flex-wrap">
              <span className="font-mono text-sm text-red-700 bg-red-50 border border-red-200 px-2 py-1 rounded break-all">
                soporte-pagos@netflix-seguridad-62.com
              </span>
              <HotspotBtn id="email_remitente" clicked={clickedHotspots.has('email_remitente')} active={activeHotspot === 'email_remitente'} onClick={onHotspot} />
            </div>
          </div>
          {activeHotspot === 'email_remitente' && <Tooltip hotspot={EMAIL_HOTSPOTS[0]} />}
        </div>
        {/* Asunto */}
        <div className="flex items-start gap-3">
          <span className="text-sm font-semibold text-gray-500 mt-0.5 w-14 shrink-0">Asunto:</span>
          <span className="font-bold text-gray-900 text-base">⚠️ URGENTE: Tu cuenta Netflix será cancelada en 24 horas</span>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div className="flex justify-center">
          <div className="bg-red-600 text-white font-black text-3xl px-8 py-2 rounded tracking-widest select-none">NETFLIX</div>
        </div>
        <p className="text-gray-800 text-base">Estimado cliente,</p>
        <p className="text-gray-800 text-base">
          Hemos detectado un problema con tu método de pago. Tu suscripción ha sido <strong>suspendida temporalmente</strong>.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3 flex-wrap">
            <p className="text-red-800 font-bold text-base flex-1">
              🚨 Tienes 24 horas para actualizar tu información de pago o perderás tu cuenta definitivamente.
            </p>
            <HotspotBtn id="email_urgencia" clicked={clickedHotspots.has('email_urgencia')} active={activeHotspot === 'email_urgencia'} onClick={onHotspot} />
          </div>
          {activeHotspot === 'email_urgencia' && <div className="mt-3"><Tooltip hotspot={EMAIL_HOTSPOTS[1]} /></div>}
        </div>

        <p className="text-gray-800 text-base">Haz clic en el botón de abajo para verificar tu cuenta:</p>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg select-none opacity-80 text-base" aria-hidden="true">
            Actualizar datos de pago
          </div>
          <HotspotBtn id="email_enlace" clicked={clickedHotspots.has('email_enlace')} active={activeHotspot === 'email_enlace'} onClick={onHotspot} />
        </div>
        {activeHotspot === 'email_enlace' && (
          <Tooltip hotspot={EMAIL_HOTSPOTS[2]}>
            <p className="mt-2 font-mono text-sm bg-red-100 text-red-700 px-3 py-1.5 rounded inline-block break-all">
              ⚠️ URL real oculta: http://bit.ly/robar-datos-netflix-62
            </p>
          </Tooltip>
        )}

        <p className="text-gray-400 text-sm">Servicio de atención al cliente Netflix · No respondas a este correo</p>
      </div>
    </div>
  );
}

// ─── Pestaña SMS ─────────────────────────────

function SMSTab({ clickedHotspots, activeHotspot, onHotspot }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full max-w-xs">
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800">
          {/* Status bar */}
          <div className="bg-gray-900 px-5 py-2 flex justify-between items-center">
            <span className="text-white text-xs font-medium">9:47</span>
            <span className="text-white text-xs">▲ 📶 🔋</span>
          </div>
          {/* Thread header */}
          <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
            <div className="w-9 h-9 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold text-sm shrink-0">B</div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-gray-900 text-sm">Tu Banco</p>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-xs text-gray-500">+34 655 123 456</p>
                <HotspotBtn id="sms_numero" clicked={clickedHotspots.has('sms_numero')} active={activeHotspot === 'sms_numero'} onClick={onHotspot} small />
              </div>
            </div>
          </div>
          {/* Message */}
          <div className="bg-gray-100 px-4 py-5">
            <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm p-4">
              <p className="text-gray-800 text-sm leading-relaxed">
                BANCO ALERTA: Su cuenta ha sido bloqueada por actividad sospechosa. Verifique su identidad en las próximas 2 horas para evitar el cierre definitivo:
              </p>
              <div className="mt-2 flex items-start gap-2 flex-wrap">
                <span className="text-blue-600 text-sm underline break-all flex-1">
                  https://banco-seguro-alerta.com/verificar
                </span>
                <HotspotBtn id="sms_enlace" clicked={clickedHotspots.has('sms_enlace')} active={activeHotspot === 'sms_enlace'} onClick={onHotspot} small />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Entregado · 9:45</p>
          </div>
          {/* Input bar */}
          <div className="bg-gray-100 border-t border-gray-200 px-4 py-3 flex items-center gap-2">
            <div className="flex-1 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-400">Mensaje...</div>
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm shrink-0">▲</div>
          </div>
        </div>
      </div>
      {/* Tooltips fuera del teléfono */}
      {activeHotspot === 'sms_numero' && <div className="w-full"><Tooltip hotspot={SMS_HOTSPOTS[0]} /></div>}
      {activeHotspot === 'sms_enlace' && <div className="w-full"><Tooltip hotspot={SMS_HOTSPOTS[1]} /></div>}
    </div>
  );
}

// ─── Pestaña WhatsApp ────────────────────────

function WhatsAppTab({ clickedHotspots, activeHotspot, onHotspot }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full max-w-xs">
        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
          {/* WA header */}
          <div className="bg-green-700 px-4 py-3 flex items-center gap-3">
            <span className="text-white text-xl">‹</span>
            <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center text-green-900 font-bold shrink-0">👤</div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm">+34 612 987 654</p>
              <p className="text-green-200 text-xs">en línea</p>
            </div>
            <span className="text-white">⋮</span>
          </div>
          {/* Chat */}
          <div className="bg-stone-100 px-4 py-4 space-y-3">
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm p-3 max-w-xs">
                <p className="text-gray-800 text-sm leading-relaxed">
                  Mamá/Papá, soy yo 😰 Me he quedado sin móvil y escribo desde el de una amiga
                </p>
                <p className="text-xs text-gray-400 mt-1 text-right">9:52 ✓✓</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm p-3 max-w-xs">
                <p className="text-gray-800 text-sm leading-relaxed">
                  Necesito que me hagas una transferencia de 300 € AHORA MISMO, es URGENTE. El IBAN es ES76 2100 0418 4012... Te lo explico luego 😰
                </p>
                <p className="text-xs text-gray-400 mt-1 text-right">9:53 ✓✓</p>
              </div>
            </div>
            {/* Prompts de análisis */}
            <div className="border-t border-gray-300 pt-3 space-y-2">
              <p className="text-xs text-center text-gray-500 font-semibold uppercase tracking-wide">Analiza este mensaje:</p>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-gray-600 flex-1">¿Por qué la urgencia es peligrosa?</span>
                <HotspotBtn id="wa_urgencia" clicked={clickedHotspots.has('wa_urgencia')} active={activeHotspot === 'wa_urgencia'} onClick={onHotspot} small />
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-gray-600 flex-1">¿Cómo debo verificarlo?</span>
                <HotspotBtn id="wa_verificacion" clicked={clickedHotspots.has('wa_verificacion')} active={activeHotspot === 'wa_verificacion'} onClick={onHotspot} small />
              </div>
            </div>
          </div>
          {/* WA input bar */}
          <div className="bg-gray-50 border-t border-gray-200 px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-400">Mensaje</div>
            <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white text-sm shrink-0">🎤</div>
          </div>
        </div>
      </div>
      {/* Tooltips fuera del teléfono */}
      {activeHotspot === 'wa_urgencia'     && <div className="w-full"><Tooltip hotspot={WA_HOTSPOTS[0]} /></div>}
      {activeHotspot === 'wa_verificacion' && <div className="w-full"><Tooltip hotspot={WA_HOTSPOTS[1]} /></div>}
    </div>
  );
}

// ─────────────────────────────────────────────
// PANTALLA 2 — Laboratorio de Pruebas
// ─────────────────────────────────────────────

function Screen2({ casoIdx, feedback, casosCompletados, onRespuesta, onSiguiente }) {
  const caso = CASOS[casoIdx];
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Módulo 2: El Laboratorio de Pruebas</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          6 situaciones reales mezcladas — fraudes y mensajes legítimos. Analiza cada una y decide.
        </p>
      </div>

      <div className="flex gap-2 mb-2">
        {CASOS.map((c, i) => (
          <div key={c.id} className={`flex-1 h-2.5 rounded-full transition-all ${
            i < casosCompletados ? 'bg-green-500' : i === casoIdx ? 'bg-indigo-500' : 'bg-gray-200'
          }`} />
        ))}
      </div>
      <p className="text-sm text-gray-500 mb-6">Caso {casoIdx + 1} de {CASOS.length}</p>

      <div className="bg-white rounded-2xl shadow border border-gray-200 overflow-hidden mb-6">
        <div className="bg-gray-800 px-5 py-4 flex items-center gap-3">
          <span className="text-3xl" aria-hidden="true">{caso.emoji}</span>
          <div>
            <p className="text-white font-bold text-base">{caso.tipoMedio}</p>
            <p className="text-gray-300 text-sm">{caso.remitente}</p>
            {caso.asunto && <p className="text-gray-400 text-xs mt-0.5">Asunto: {caso.asunto}</p>}
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-800 text-lg leading-relaxed">{caso.mensaje}</p>
        </div>
      </div>

      {feedback === null && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button onClick={() => onRespuesta(true)} className="py-5 rounded-2xl border-2 border-red-300 bg-red-50 hover:bg-red-100 active:scale-95 text-red-700 font-bold text-lg transition-all">
            🔴 Es un Fraude
          </button>
          <button onClick={() => onRespuesta(false)} className="py-5 rounded-2xl border-2 border-green-300 bg-green-50 hover:bg-green-100 active:scale-95 text-green-700 font-bold text-lg transition-all">
            🟢 Es Seguro
          </button>
        </div>
      )}

      {feedback !== null && (
        <>
          <div
            className={`p-5 rounded-2xl border-2 mb-6 ${feedback === 'correcto' ? 'bg-green-50 border-green-400' : 'bg-orange-50 border-orange-400'}`}
            role="alert"
          >
            <p className={`font-bold text-xl mb-3 ${feedback === 'correcto' ? 'text-green-700' : 'text-orange-700'}`}>
              {feedback === 'correcto' ? '✅ ¡Correcto! Muy bien identificado.' : '❌ No era lo esperado. ¡Tranquilo/a, aprender de los errores es lo más valioso!'}
            </p>
            <p className={`text-base leading-relaxed ${feedback === 'correcto' ? 'text-green-800' : 'text-orange-800'}`}>
              {caso.explicacion}
            </p>
          </div>
          <button onClick={onSiguiente} className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-lg transition-all shadow-lg">
            {casoIdx < CASOS.length - 1 ? 'Siguiente Caso →' : 'Ir al Examen →'}
          </button>
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// PANTALLA 3 — Examen de Certificación
// ─────────────────────────────────────────────

function Screen3({ respuestas, setRespuestas, todasRespondidas, onEnviar }) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Módulo 3: Examen de Certificación</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {PREGUNTAS.length} preguntas para demostrar lo que has aprendido. Tómate el tiempo que necesites.
        </p>
      </div>

      <div className="space-y-8">
        {PREGUNTAS.map((p, qi) => (
          <div key={p.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <p className="text-lg font-bold text-gray-900 mb-6 leading-snug">
              <span className="text-indigo-600 mr-1">{qi + 1}.</span> {p.pregunta}
            </p>
            <div className="space-y-4">
              {p.opciones.map((opcion, oi) => {
                const selected = respuestas[qi] === oi;
                return (
                  <label
                    key={oi}
                    className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selected ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`pregunta-${qi}`}
                      value={oi}
                      checked={selected}
                      onChange={() => setRespuestas((prev) => ({ ...prev, [qi]: oi }))}
                      className="mt-0.5 w-5 h-5 shrink-0 accent-indigo-600"
                    />
                    <span className="text-base text-gray-800 leading-relaxed">{opcion}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {!todasRespondidas && (
          <p className="text-center text-sm text-gray-500 mb-3">
            Respuestas marcadas: {Object.keys(respuestas).length} / {PREGUNTAS.length}
          </p>
        )}
        <button
          onClick={onEnviar}
          disabled={!todasRespondidas}
          className={`w-full py-4 rounded-2xl text-lg font-bold transition-all ${
            todasRespondidas
              ? 'bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white shadow-lg'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {todasRespondidas
            ? '📝 Enviar Examen y Ver Nota →'
            : `Responde todas las preguntas (${Object.keys(respuestas).length}/${PREGUNTAS.length})`}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PANTALLA 4 — Resultados y Cierre
// ─────────────────────────────────────────────

function Screen4({ notaFinal, respuestas, onReset }) {
  const aprobado   = notaFinal >= PASS_THRESHOLD;
  const porcentaje = Math.round((notaFinal / PREGUNTAS.length) * 100);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Módulo 4: Resultados</h1>
      </div>

      {/* Banner */}
      <div
        className={`rounded-2xl p-8 mb-8 text-center border-4 ${aprobado ? 'bg-green-50 border-green-400' : 'bg-orange-50 border-orange-400'}`}
        role="region"
        aria-label="Resultado del examen"
      >
        <div className="text-6xl mb-4" aria-hidden="true">{aprobado ? '🏆' : '💪'}</div>
        <p className={`text-3xl font-black mb-1 tracking-wide ${aprobado ? 'text-green-700' : 'text-orange-700'}`}>
          {aprobado ? 'APROBADO' : 'CASI LO TIENES'}
        </p>
        <p className={`text-xl font-semibold mb-5 ${aprobado ? 'text-green-600' : 'text-orange-600'}`}>
          {aprobado ? 'Experto/a en Ciberseguridad Doméstica' : 'Repasa las pistas clave y lo conseguirás'}
        </p>
        <p className="text-5xl font-black text-gray-800 mb-1">{notaFinal} / {PREGUNTAS.length}</p>
        <p className={`text-lg font-semibold mb-4 ${aprobado ? 'text-green-600' : 'text-orange-600'}`}>
          {porcentaje}% de aciertos &nbsp;·&nbsp; Umbral de aprobado: {PASS_THRESHOLD}/{PREGUNTAS.length}
        </p>
        <p className={`text-base leading-relaxed ${aprobado ? 'text-green-700' : 'text-orange-700'}`}>
          {notaFinal === PREGUNTAS.length
            ? '¡Perfecto! Has respondido correctamente todas las preguntas. Eres un ejemplo a seguir.'
            : aprobado
            ? 'Has superado el umbral de aprobado. Tienes los conocimientos esenciales para protegerte online.'
            : `Para aprobar necesitas al menos ${PASS_THRESHOLD} de ${PREGUNTAS.length} aciertos. ¡Vuelve a repasar los módulos!`}
        </p>
      </div>

      {/* Revisión del examen */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-5">📋 Revisión del Examen</h2>
        <div className="space-y-4">
          {PREGUNTAS.map((p, qi) => {
            const ua = respuestas[qi];
            const ok = ua === p.correcta;
            return (
              <div key={p.id} className={`p-4 rounded-xl border-2 ${ok ? 'border-green-300 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                <p className="font-semibold text-gray-900 text-base mb-2">{ok ? '✅' : '❌'} {p.pregunta}</p>
                {!ok && (
                  <p className="text-sm text-red-700 mb-1">
                    Tu respuesta: <span className="font-semibold">{p.opciones[ua]}</span>
                  </p>
                )}
                <p className="text-sm font-semibold text-green-700">
                  Respuesta correcta: {p.opciones[p.correcta]}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Los 3 Mandamientos */}
      <div className="bg-indigo-50 rounded-2xl border-2 border-indigo-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-indigo-900 mb-6 text-center">📜 Los 3 Mandamientos Anti-Estafa</h2>
        <div className="space-y-4">
          {MANDAMIENTOS.map((m) => (
            <div key={m.n} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-indigo-100 shadow-sm">
              <div className="w-11 h-11 rounded-full bg-indigo-600 text-white font-black text-xl flex items-center justify-center shrink-0">
                {m.n}
              </div>
              <div>
                <p className="font-bold text-indigo-900 text-base mb-1">{m.titulo}</p>
                <p className="text-gray-700 text-base leading-relaxed">{m.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full py-4 rounded-2xl border-2 border-indigo-300 text-indigo-700 font-bold text-lg hover:bg-indigo-50 active:scale-95 transition-all"
      >
        🔄 Reiniciar Actividad desde el principio
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// MICRO-COMPONENTES
// ─────────────────────────────────────────────

function HotspotBtn({ id, clicked, active, onClick, small = false }) {
  let text;
  if (!clicked)     text = '⚠️ Pulsa aquí';
  else if (active)  text = '⚠️ Ver de nuevo';
  else              text = '✅ Visto';

  return (
    <button
      onClick={() => onClick(id)}
      aria-pressed={active}
      className={`rounded-full font-bold border-2 transition-all whitespace-nowrap ${
        small ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'
      } ${
        clicked
          ? 'bg-amber-500 text-white border-amber-500'
          : 'bg-amber-50 text-amber-700 border-amber-400 animate-pulse hover:bg-amber-100'
      }`}
    >
      {text}
    </button>
  );
}

function Tooltip({ hotspot, children }) {
  return (
    <div role="note" className="mt-3 p-4 bg-amber-50 border border-amber-300 rounded-xl text-base text-amber-900 shadow-sm">
      <p className="font-bold text-base mb-1">{hotspot.titulo}</p>
      <p className="leading-relaxed">{hotspot.explicacion}</p>
      {children}
    </div>
  );
}
