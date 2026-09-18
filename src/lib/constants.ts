import type { Service, Promotion, ContactInfo, SiteConfig, SocialLinks, FAQItem } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Clínica Hispana La Caridad",
  shortName: "Clínica La Caridad",
  tagline: "Atención médica profesional 100% en español",
  description: "Clínica médica hispana en Houston, TX. Atención profesional en español, sin cita previa y sin necesidad de seguro médico. Medicina general, exámenes de inmigración, laboratorio y más.",
  baseUrl: "https://www.chlacaridad.com",
  locale: "es-MX",
  logoUrl: "/images/logo.webp",
};

export const CONTACT_INFO: ContactInfo = {
  address: "5705 Fondren Rd STE 101",
  city: "Houston",
  state: "TX",
  zip: "77036",
  phone: "+18329258135",
  phoneFormatted: "+1 (832) 925-8135",
  // WhatsApp usa el mismo número de la clínica, en E.164 sin "+" (formato wa.me).
  // Solo para enlaces wa.me — nunca mostrarlo como texto en los botones de
  // WhatsApp, para que el swap.js de CallRail no lo reescriba.
  whatsapp: "18329258135",
  email: "clinicalacaridad2016@gmail.com",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 9:00 AM - 9:00 PM",
  googleMapsUrl:
    "https://www.google.com/maps/place/Clinica+La+Caridad/@29.7187891,-95.5195062,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c3151e03b997:0xd06d7e301078edf9!8m2!3d29.7187891!4d-95.5195062!16s%2Fg%2F11wp4j3qbh",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Clinica+La+Caridad,+5705+Fondren+Rd+STE+101,+Houston,+TX+77036&t=m&z=17&ie=UTF8&iwloc=&output=embed",
  googleReviewUrl:
    "https://www.google.com/maps/place/Clinica+La+Caridad/@29.7187891,-95.5195062,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c3151e03b997:0xd06d7e301078edf9!8m2!3d29.7187891!4d-95.5195062!16s%2Fg%2F11wp4j3qbh",
  placeId: "0x8640c3151e03b997:0xd06d7e301078edf9",
  coordinates: {
    lat: 29.7187891,
    lng: -95.5195062,
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/clinicalacaridadhoustontx",
  instagram: "https://www.instagram.com/clinicalacaridadhouston",
  twitter: "https://twitter.com/ClinicLaCaridad",
};

// Respaldo si la API de Places no responde. Los valores reales vienen en vivo
// de getGooglePlaceData(); esto solo evita publicar cifras muy desfasadas.
// Última comprobación contra Places: 2026-09-17.
export const GOOGLE_REVIEWS_DATA = {
  totalReviews: 455,
  averageRating: 5.0,
  placeId: CONTACT_INFO.placeId,
};

export const SERVICES: Service[] = [
  {
    "id": "condiciones-cronicas",
    "slug": "condiciones-cronicas",
    "dateModified": "2026-09-18",
    "title": "Control de Diabetes, Hipertensión y Colesterol",
    "titleEn": "Diabetes, Hypertension & Cholesterol Care",
    "shortTitle": "Crónicas",
    "description": "Control de diabetes, hipertensión y dislipidemias en Houston, TX. Laboratorio y seguimiento en español, con precios accesibles.",
    "descriptionEn": "Diabetes, hypertension and dyslipidemia management in Houston, TX. Lab work and follow-up in Spanish, with affordable pricing.",
    "longDescription": "La diabetes, la presión alta y el colesterol elevado no avisan: se controlan con seguimiento, no con visitas sueltas. En Clínica Hispana La Caridad el equipo médico de la clínica arma un plan, lo revisa con laboratorio y lo ajusta en cada visita, todo en español y sin cita previa.\n\n## ¿Qué incluye el control de una condición crónica?\n\nEvaluación inicial, [análisis de sangre](/services/examenes-sangre), medición de presión y revisión de los medicamentos que ya toma. A partir de ahí se fija una meta concreta y una fecha de control. Si hay cansancio, caída de cabello o cambios de peso, se añade la revisión de [tiroides](/services/tiroides).\n\n- Hemoglobina glicosilada (A1C) y glucosa\n- Presión arterial en cada visita\n- Colesterol total, LDL, HDL y triglicéridos\n- Función renal y hepática\n- Ajuste de medicamentos según la evolución\n\n## ¿Cuáles son las metas?\n\n- **A1C:** por debajo de 7 % para la mayoría de adultos con diabetes, según la [American Diabetes Association](https://diabetes.org/about-diabetes/a1c). La meta se individualiza en personas mayores o con otras enfermedades.\n- **Presión arterial:** normal por debajo de 120/80. A partir de 130/80 se considera hipertensión según la [American Heart Association](https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings).\n- **Colesterol LDL:** la meta depende del riesgo cardiovascular global, no solo del número. El [USPSTF](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/statin-use-in-adults-preventive-medication) marca cuándo conviene tratamiento con estatinas.\n\nEl número por sí solo no decide: se lee junto con la edad, el peso, el tabaquismo y los antecedentes familiares.\n\n## ¿Cada cuánto hay que volver?\n\nCon la condición estable y en meta, cada 3 a 6 meses. Si se acaba de empezar un medicamento o los valores están fuera de meta, el control es más cercano, a veces cada 4 a 6 semanas. La fecha se le da en la misma visita.\n\n## ¿Qué conviene llevar?\n\n- La lista de medicamentos con su dosis, incluidos suplementos\n- Resultados de laboratorio anteriores, para comparar\n- Si mide la presión o el azúcar en casa, el registro de las últimas semanas\n- La duda concreta que quiere resolver, escrita para no olvidarla\n\n## ¿Cuándo no hay que esperar al control?\n\nDolor en el pecho, dificultad para respirar, visión borrosa repentina, debilidad en un lado del cuerpo o dificultad para hablar: eso es emergencia, llame al 911. Sin llegar a eso, tampoco conviene esperar si el azúcar está muy alto o muy bajo de forma repetida, si aparece una herida en el pie que no cierra o si la presión se mantiene por encima de 180/120.\n\n## Sin seguro médico\n\nSe atiende de lunes a domingo de 9 de la mañana a 9 de la noche, sin cita y sin seguro. Si no tiene cobertura, esta [guía de atención sin seguro en Houston](/blog/atencion-medica-sin-seguro-houston) explica las opciones. En [promociones](/promociones) está el chequeo general completo por $99, que incluye examen de sangre, A1C, orina y consulta.",
    "longDescriptionEn": "Diabetes, high blood pressure and high cholesterol give no warning: they are controlled with follow-up, not with isolated visits. At Clínica Hispana La Caridad the clinic's medical team builds a plan, checks it with lab work and adjusts it at each visit, walk-in and with no appointment.\n\n## What does managing a chronic condition include?\n\nInitial evaluation, [blood work](/services/examenes-sangre), blood pressure measurement and a review of the medication you already take. From there a concrete target and a follow-up date are set. If there is fatigue, hair loss or weight change, [thyroid](/services/tiroides) testing is added.\n\n- Glycated hemoglobin (A1C) and glucose\n- Blood pressure at every visit\n- Total cholesterol, LDL, HDL and triglycerides\n- Kidney and liver function\n- Medication adjustment as things progress\n\n## What are the targets?\n\n- **A1C:** under 7% for most adults with diabetes, according to the [American Diabetes Association](https://diabetes.org/about-diabetes/a1c). The target is individualized in older adults or people with other conditions.\n- **Blood pressure:** normal is under 120/80. From 130/80 it is considered hypertension according to the [American Heart Association](https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings).\n- **LDL cholesterol:** the target depends on overall cardiovascular risk, not the number alone. The [USPSTF](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/statin-use-in-adults-preventive-medication) sets out when statin treatment is worthwhile.\n\nA number on its own does not decide: it is read alongside age, weight, smoking and family history.\n\n## How often should you come back?\n\nWith the condition stable and on target, every 3 to 6 months. If a medication has just been started or values are off target, follow-up is closer, sometimes every 4 to 6 weeks. You are given the date at the visit itself.\n\n## What to bring\n\n- Your medication list with doses, supplements included\n- Previous lab results, so they can be compared\n- If you measure blood pressure or sugar at home, the log from recent weeks\n- The specific question you want answered, written down so it is not forgotten\n\n## When not to wait for the next check-up\n\nChest pain, difficulty breathing, sudden blurred vision, weakness on one side of the body or trouble speaking: that is an emergency, call 911. Short of that, do not wait either if blood sugar is repeatedly very high or very low, if a foot wound will not close, or if blood pressure stays above 180/120.\n\n## Without insurance\n\nWalk-ins are seen Monday through Sunday, 9 AM to 9 PM, with no insurance needed. If you have no coverage, this [guide to care without insurance in Houston](/blog/atencion-medica-sin-seguro-houston) covers the options. [Promotions](/promociones) include the complete general check-up for $99, with blood work, A1C, urine test and the visit.",
    "icon": "Activity",
    "image": "/images/services/condiciones-cronicas.webp",
    "category": "medicina-general",
    "keywords": [
      "control de diabetes houston",
      "doctor diabetes español houston",
      "control de presion alta houston",
      "colesterol alto tratamiento houston"
    ],
    "keywordsEn": [
      "diabetes management houston",
      "high blood pressure doctor houston",
      "cholesterol management houston",
      "chronic disease clinic houston"
    ],
    "features": [
      "Diagnóstico y monitoreo de laboratorio",
      "Control de glucosa, presión y colesterol",
      "Ajuste de medicamentos",
      "Plan de alimentación y hábitos"
    ],
    "featuresEn": [
      "Diagnosis and lab monitoring",
      "Glucose, blood pressure and cholesterol control",
      "Medication adjustment",
      "Nutrition and lifestyle plan"
    ],
    "highlighted": true,
    "order": 1
  },
  {
    "id": "tiroides",
    "slug": "tiroides",
    "title": "Exámenes y Tratamiento de la Tiroides",
    "titleEn": "Thyroid Testing & Treatment",
    "shortTitle": "Tiroides",
    "description": "Exámenes y tratamiento de la tiroides en Houston, TX. Pruebas de laboratorio y control en español, con precios accesibles.",
    "descriptionEn": "Thyroid testing and treatment in Houston, TX. Lab tests and follow-up in Spanish, with affordable pricing.",
    "longDescription": "La tiroides regula tu energía, tu peso y tu ánimo. Cuando funciona de más o de menos aparecen síntomas que afectan tu día a día. En Clínica Hispana La Caridad evaluamos tu tiroides con análisis de laboratorio y te damos el tratamiento adecuado.\n\n**¿Qué incluye?**\n- Evaluación de síntomas\n- Pruebas de función tiroidea (TSH, T3, T4)\n- Diagnóstico de hipotiroidismo o hipertiroidismo\n- Inicio y ajuste del tratamiento\n- Seguimiento periódico\n\n**Síntomas frecuentes**\nCansancio, cambios de peso sin explicación, caída del cabello, frío o calor excesivo, nerviosismo o tristeza. Si los notas, una prueba sencilla puede dar la respuesta.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "The thyroid regulates your energy, weight and mood. When it works too much or too little, symptoms appear that affect your daily life. At Clínica Hispana La Caridad we evaluate your thyroid with lab work and provide the right treatment.\n\n**What's included?**\n- Symptom evaluation\n- Thyroid function tests (TSH, T3, T4)\n- Diagnosis of hypothyroidism or hyperthyroidism\n- Treatment start and adjustment\n- Periodic follow-up\n\n**Common symptoms**\nFatigue, unexplained weight changes, hair loss, feeling too cold or too hot, nervousness or sadness. If you notice them, a simple test can give the answer.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/tiroides.webp",
    "category": "medicina-general",
    "keywords": [
      "tiroides houston",
      "examen de tiroides houston",
      "hipotiroidismo tratamiento houston",
      "doctor tiroides español houston"
    ],
    "keywordsEn": [
      "thyroid testing houston",
      "thyroid doctor houston",
      "hypothyroidism treatment houston",
      "thyroid clinic houston"
    ],
    "features": [
      "Pruebas de función tiroidea (TSH, T3, T4)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Tratamiento y ajuste de medicamentos",
      "Seguimiento en español"
    ],
    "featuresEn": [
      "Thyroid function tests (TSH, T3, T4)",
      "Diagnosis of hypo- and hyperthyroidism",
      "Treatment and medication adjustment",
      "Follow-up in Spanish"
    ],
    "highlighted": false,
    "order": 2
  },
  {
    "id": "alergias",
    "slug": "alergias",
    "title": "Exámenes y Tratamiento de Alergias",
    "titleEn": "Allergy Testing & Treatment",
    "shortTitle": "Alergias",
    "description": "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, con precios accesibles.",
    "descriptionEn": "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, with affordable pricing.",
    "longDescription": "Las alergias pueden afectar tu respiración, tu piel y tu descanso. En Clínica Hispana La Caridad identificamos qué las provoca y te ayudamos a controlarlas para que recuperes tu bienestar.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y posibles desencadenantes\n- Tratamiento de alergias estacionales y respiratorias\n- Manejo de rinitis, estornudos y congestión\n- Atención de alergias en la piel (ronchas, comezón)\n- Recomendaciones para evitar las crisis\n\n**Cuándo consultar**\nEstornudos frecuentes, ojos llorosos, comezón, ronchas o congestión que no mejora son señales de alergia. Un tratamiento adecuado marca la diferencia.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Allergies can affect your breathing, your skin and your rest. At Clínica Hispana La Caridad we identify what triggers them and help you control them so you feel well again.\n\n**What's included?**\n- Evaluation of symptoms and possible triggers\n- Treatment of seasonal and respiratory allergies\n- Management of rhinitis, sneezing and congestion\n- Care for skin allergies (hives, itching)\n- Recommendations to avoid flare-ups\n\n**When to seek care**\nFrequent sneezing, watery eyes, itching, hives or congestion that won't improve are signs of allergy. The right treatment makes the difference.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Wind",
    "image": "/images/services/alergias.webp",
    "category": "medicina-general",
    "keywords": [
      "alergias houston",
      "tratamiento de alergias houston",
      "doctor de alergias español houston",
      "examen de alergias houston"
    ],
    "keywordsEn": [
      "allergy treatment houston",
      "allergy testing houston",
      "allergy doctor houston",
      "allergy clinic houston"
    ],
    "features": [
      "Evaluación de síntomas y desencadenantes",
      "Tratamiento de alergias respiratorias y de piel",
      "Manejo de rinitis y congestión",
      "Atención en español"
    ],
    "featuresEn": [
      "Evaluation of symptoms and triggers",
      "Treatment of respiratory and skin allergies",
      "Management of rhinitis and congestion",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 3
  },
  {
    "id": "enfermedades-respiratorias",
    "slug": "enfermedades-respiratorias",
    "title": "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    "titleEn": "Flu & COVID Testing and Respiratory Illness Care",
    "shortTitle": "Respiratorias",
    "description": "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    "descriptionEn": "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    "longDescription": "Cuando empiezan la fiebre, la tos o el malestar, saber si es flu o COVID ayuda a tratarte a tiempo. En Clínica Hispana La Caridad hacemos pruebas rápidas y te damos tratamiento el mismo día, sin cita.\n\n**¿Qué incluye?**\n- Prueba rápida de influenza (flu)\n- Prueba de COVID-19\n- Evaluación de síntomas respiratorios\n- Tratamiento de gripe, tos, bronquitis e infecciones de garganta\n- Indicaciones de recuperación y cuidado\n\n**No dejes que avance**\nSi la fiebre es alta, la tos no mejora o cuesta respirar, es mejor evaluarte. Un diagnóstico oportuno acorta la enfermedad y evita complicaciones.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "When fever, cough or discomfort begin, knowing whether it's flu or COVID helps treat you in time. At Clínica Hispana La Caridad we run rapid tests and provide same-day treatment, no appointment needed.\n\n**What's included?**\n- Rapid influenza (flu) test\n- COVID-19 test\n- Respiratory symptom evaluation\n- Treatment of flu, cough, bronchitis and throat infections\n- Recovery and care instructions\n\n**Don't let it progress**\nIf the fever is high, the cough won't improve or breathing is hard, it's best to get evaluated. Timely diagnosis shortens the illness and prevents complications.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Wind",
    "image": "/images/services/enfermedades-respiratorias.webp",
    "category": "medicina-general",
    "keywords": [
      "prueba de covid houston",
      "prueba de flu houston",
      "tratamiento gripe houston",
      "enfermedades respiratorias houston"
    ],
    "keywordsEn": [
      "covid test houston",
      "flu test houston",
      "flu treatment houston",
      "respiratory illness houston"
    ],
    "features": [
      "Prueba rápida de flu y COVID",
      "Diagnóstico el mismo día",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid flu and COVID testing",
      "Same-day diagnosis",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 4
  },
  {
    "id": "examen-fisico-escolar",
    "slug": "examen-fisico-escolar",
    "title": "Chequeos Físicos Escolares y Deportivos",
    "titleEn": "School & Sports Physical Exams",
    "shortTitle": "Examen Físico",
    "description": "Chequeos físicos escolares y deportivos en Houston, TX. Rápidos, en español y con precios accesibles.",
    "descriptionEn": "School and sports physical exams in Houston, TX. Fast, in Spanish, with affordable pricing.",
    "longDescription": "Antes de inscribirse en la escuela o practicar un deporte, los niños y jóvenes necesitan un chequeo físico. En Clínica Hispana La Caridad lo hacemos de forma rápida y completa, con todos los formularios listos.\n\n**¿Qué incluye?**\n- Examen físico general\n- Revisión de signos vitales (peso, talla, presión)\n- Evaluación de visión y audición\n- Llenado de los formularios requeridos\n- Recomendaciones de salud\n\n**Para la escuela y el deporte**\nCumple los requisitos de inscripción escolar y la evaluación para practicar deportes con seguridad. Trae el formulario de tu escuela o equipo y lo completamos.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Before enrolling in school or playing a sport, children and teens need a physical exam. At Clínica Hispana La Caridad we do it quickly and thoroughly, with all the forms ready.\n\n**What's included?**\n- General physical exam\n- Vital-signs check (weight, height, blood pressure)\n- Vision and hearing screening\n- Completion of required forms\n- Health recommendations\n\n**For school and sports**\nMeet school enrollment requirements and the evaluation to play sports safely. Bring your school or team form and we'll complete it.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Clipboard",
    "image": "/images/services/examen-fisico-escolar.webp",
    "category": "examenes",
    "keywords": [
      "examen fisico escolar houston",
      "physical para la escuela houston",
      "examen deportivo houston",
      "chequeo escolar houston"
    ],
    "keywordsEn": [
      "school physical houston",
      "sports physical houston",
      "school physical exam houston",
      "kids physical houston"
    ],
    "features": [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Formularios escolares y deportivos llenados",
      "Atención en español"
    ],
    "featuresEn": [
      "Complete physical exam",
      "Vital-signs check",
      "School and sports forms completed",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 5
  },
  {
    "id": "ginecologia",
    "slug": "ginecologia",
    "dateModified": "2026-09-18",
    "title": "Atención Ginecológica: Papanicolaou y Cultivos",
    "titleEn": "Gynecology Care: Pap Smear & Cultures",
    "shortTitle": "Ginecología",
    "description": "Atención ginecológica en Houston, TX: papanicolaou, cultivos vaginales y tratamiento de infecciones. En español, con precios accesibles.",
    "descriptionEn": "Gynecology care in Houston, TX: Pap smear, vaginal cultures and infection treatment. In Spanish, with affordable pricing.",
    "longDescription": "La atención ginecológica de Clínica Hispana La Caridad se da sin cita previa, los siete días de la semana, y todo se explica en español. El equipo médico de la clínica atiende tanto el control de rutina como molestias que llevan tiempo sin revisarse.\n\n## ¿Qué incluye una consulta ginecológica?\n\nHistoria clínica, examen pélvico, Papanicolaou cuando corresponde por edad y cultivo vaginal si hay síntomas de infección. Si hace falta ver el útero o los ovarios, el [ultrasonido pélvico](/services/ultrasonido) se hace en la misma visita.\n\n- Papanicolaou y prueba de VPH\n- Cultivo vaginal y tratamiento de infecciones\n- Ultrasonido pélvico\n- [Prueba de embarazo](/services/prueba-embarazo)\n- Orientación e inicio de [métodos anticonceptivos](/services/anticonceptivos)\n\n## ¿Cada cuánto debo hacerme el Papanicolaou?\n\nDepende de la edad. Las recomendaciones del [USPSTF](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening) son citología cada 3 años entre los 21 y los 29 años. De los 30 a los 65 el intervalo puede ampliarse a 5 años cuando se combina con la prueba de VPH. Si tuviste un resultado alterado antes, el intervalo es más corto y el equipo médico de la clínica te lo indica.\n\n## ¿Necesito cita previa o seguro médico?\n\nNinguna de las dos cosas. Se atiende sin cita de lunes a domingo, de 9 de la mañana a 9 de la noche. Si prefieres un paquete cerrado, en [promociones](/promociones) están el chequeo completo de la mujer con ultrasonido por $179, el chequeo de mujer por $79 y la revisión de salud íntima femenina por $69.\n\n## ¿Cómo me preparo para la visita?\n\n- Evita duchas vaginales, óvulos y relaciones sexuales durante las 48 horas previas al Papanicolaou\n- Si puedes, no acudas durante la menstruación\n- Lleva la fecha de tu última regla y el nombre de los medicamentos que tomas\n- Si tuviste resultados anormales antes, lleva el reporte\n\n## ¿Qué pasa después con los resultados?\n\nTe avisamos en cuanto llegan y se te explican en español, junto con el plan a seguir. Si un resultado obliga a repetir una prueba o a derivarte con un especialista, el equipo médico de la clínica te indica el siguiente paso y te entrega el reporte para que puedas llevarlo.\n\n## ¿Cuándo conviene no esperar?\n\nSangrado fuera de la regla, dolor pélvico que no cede, flujo con mal olor, ardor al orinar o cualquier sangrado después de la menopausia. Si el ardor al orinar es el síntoma principal, la consulta puede orientarse a [infecciones urinarias](/services/infecciones-urinarias).",
    "longDescriptionEn": "Gynecology care at Clínica Hispana La Caridad is walk-in, seven days a week, and everything is explained in Spanish or English. The clinic's medical team handles both routine check-ups and symptoms that have gone unchecked for a while.\n\n## What does a gynecology visit include?\n\nMedical history, pelvic exam, a Pap smear when it is due by age, and a vaginal culture if there are signs of infection. If the uterus or ovaries need to be seen, the [pelvic ultrasound](/services/ultrasonido) is done in the same visit.\n\n- Pap smear and HPV testing\n- Vaginal culture and treatment of infections\n- Pelvic ultrasound\n- [Pregnancy test](/services/prueba-embarazo)\n- Guidance on and start of [birth control methods](/services/anticonceptivos)\n\n## How often should I have a Pap smear?\n\nIt depends on your age. The [USPSTF](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening) recommends cytology every 3 years between ages 21 and 29. From 30 to 65 the interval can extend to 5 years when combined with HPV testing. If you have had an abnormal result before, the interval is shorter and the clinic's medical team will tell you.\n\n## Do I need an appointment or insurance?\n\nNeither. Walk-ins are seen Monday through Sunday, 9 AM to 9 PM. If you prefer a set package, [promotions](/promociones) include the complete women's check-up with ultrasound for $179, the women's check-up for $79 and the women's intimate health review for $69.\n\n## How do I prepare for the visit?\n\n- Avoid douching, vaginal suppositories and sex for 48 hours before the Pap smear\n- If possible, do not come during your period\n- Bring the date of your last period and the names of any medication you take\n- If you have had abnormal results before, bring the report\n\n## What happens with the results?\n\nWe let you know as soon as they arrive and explain them to you, along with the plan. If a result means repeating a test or seeing a specialist, the clinic's medical team tells you the next step and gives you the report to take with you.\n\n## When should you not wait?\n\nBleeding outside your period, pelvic pain that does not ease, discharge with a bad smell, burning when urinating, or any bleeding after menopause. If burning when urinating is the main symptom, the visit may focus on [urinary tract infections](/services/infecciones-urinarias).",
    "icon": "Heart",
    "image": "/images/services/ginecologia.webp",
    "category": "salud-mujer",
    "keywords": [
      "ginecologia en houston",
      "ginecologo houston español",
      "ginecologos cerca de mi que hablen español",
      "ginecologa que hable español houston",
      "papanicolaou houston",
      "examen de papanicolau cerca de mi",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston"
    ],
    "keywordsEn": [
      "gynecology houston",
      "gynecologist houston spanish",
      "spanish speaking gynecologist near me",
      "hispanic obgyn houston",
      "pap smear houston",
      "vaginal culture houston",
      "vaginal infection treatment houston"
    ],
    "features": [
      "Papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Atención privada en español"
    ],
    "featuresEn": [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Private care in Spanish"
    ],
    "highlighted": true,
    "order": 6
  },
  {
    "id": "prueba-embarazo",
    "slug": "prueba-embarazo",
    "title": "Examen y Diagnóstico de Embarazo",
    "titleEn": "Pregnancy Testing & Confirmation",
    "shortTitle": "Prueba de Embarazo",
    "description": "Examen y diagnóstico de embarazo en Houston, TX. Pruebas confiables y orientación en español, con precios accesibles.",
    "descriptionEn": "Pregnancy testing and confirmation in Houston, TX. Reliable tests and guidance in Spanish, with affordable pricing.",
    "longDescription": "Si crees que podrías estar embarazada, una prueba confiable te da tranquilidad y claridad. En Clínica Hispana La Caridad realizamos pruebas de embarazo y te orientamos sobre lo que sigue, en español y sin juicios.\n\n**¿Qué incluye?**\n- Prueba de embarazo (orina o sangre)\n- Confirmación médica del resultado\n- Orientación sobre tus siguientes pasos\n- Información sobre control prenatal y referencias\n\n**Con confianza y respeto**\nTe explicamos el resultado con claridad y te acompañamos en la decisión que tomes, siempre con respeto y privacidad.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "If you think you might be pregnant, a reliable test gives you peace of mind and clarity. At Clínica Hispana La Caridad we perform pregnancy tests and guide you on what comes next, in Spanish and without judgment.\n\n**What's included?**\n- Pregnancy test (urine or blood)\n- Medical confirmation of the result\n- Guidance on your next steps\n- Information on prenatal care and referrals\n\n**With trust and respect**\nWe explain the result clearly and support you in whatever decision you make, always with respect and privacy.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Heart",
    "image": "/images/services/prueba-embarazo.webp",
    "category": "salud-mujer",
    "keywords": [
      "prueba de embarazo houston",
      "examen de embarazo houston",
      "confirmar embarazo houston",
      "test de embarazo español houston"
    ],
    "keywordsEn": [
      "pregnancy test houston",
      "pregnancy confirmation houston",
      "confirm pregnancy houston",
      "pregnancy testing houston"
    ],
    "features": [
      "Prueba de embarazo confiable",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español"
    ],
    "featuresEn": [
      "Reliable pregnancy test",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 7
  },
  {
    "id": "anticonceptivos",
    "slug": "anticonceptivos",
    "title": "Tratamientos Anticonceptivos",
    "titleEn": "Contraceptive Methods",
    "shortTitle": "Anticonceptivos",
    "description": "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    "descriptionEn": "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    "longDescription": "Decidir cuándo y cómo formar tu familia es tu derecho. En Clínica Hispana La Caridad te damos información clara y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti.\n\n**¿Qué incluye?**\n- Consulta de orientación personalizada\n- Información sobre los distintos métodos\n- Pastillas anticonceptivas e inyección\n- Inicio y seguimiento del método elegido\n- Resolución de dudas y efectos secundarios\n\n**Una decisión informada**\nCada cuerpo y cada vida es distinta. Te ayudamos a comparar opciones según tu salud, tus planes y tu comodidad para que tomes la mejor decisión.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Deciding when and how to build your family is your right. At Clínica Hispana La Caridad we give you clear, judgment-free information so you can choose the contraceptive method that best fits you.\n\n**What's included?**\n- Personalized guidance visit\n- Information about the different methods\n- Birth control pills and injection\n- Starting and following up on the chosen method\n- Answers to questions and side effects\n\n**An informed decision**\nEvery body and every life is different. We help you compare options based on your health, your plans and your comfort so you make the best decision.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/anticonceptivos.webp",
    "category": "salud-mujer",
    "keywords": [
      "anticonceptivos houston",
      "metodos anticonceptivos houston",
      "inyeccion anticonceptiva houston",
      "pastillas anticonceptivas houston"
    ],
    "keywordsEn": [
      "birth control houston",
      "contraception clinic houston",
      "birth control shot houston",
      "birth control pills houston"
    ],
    "features": [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español"
    ],
    "featuresEn": [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 8
  },
  {
    "id": "extraccion-implantes",
    "slug": "extraccion-implantes",
    "title": "Extracción de Implantes Subdérmicos",
    "titleEn": "Subdermal Implant Removal",
    "shortTitle": "Implantes",
    "description": "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Con precios accesibles.",
    "descriptionEn": "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. With affordable pricing.",
    "longDescription": "Si llegó el momento de retirar tu implante subdérmico —porque caducó o porque deseas cambiar de método— en Clínica Hispana La Caridad lo hacemos de forma segura, rápida y con cuidado.\n\n**¿Qué incluye?**\n- Evaluación y localización del implante\n- Extracción ambulatoria con anestesia local\n- Indicaciones claras de cuidado posterior\n- Orientación sobre tus próximos pasos de planificación\n\n**Un procedimiento sencillo**\nEl retiro suele tomar pocos minutos y se realiza con una pequeña incisión. Te explicamos cada paso en español para que estés tranquila.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "If it's time to remove your subdermal implant —because it expired or you want to switch methods— at Clínica Hispana La Caridad we do it safely, quickly and with care.\n\n**What's included?**\n- Evaluation and location of the implant\n- Outpatient removal with local anesthesia\n- Clear after-care instructions\n- Guidance on your next family-planning steps\n\n**A simple procedure**\nRemoval usually takes only a few minutes through a small incision. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/extraccion-implantes.webp",
    "category": "salud-mujer",
    "keywords": [
      "extraccion de implante subdermico houston",
      "quitar implante del brazo houston",
      "retiro de implante anticonceptivo houston",
      "remover implante houston"
    ],
    "keywordsEn": [
      "subdermal implant removal houston",
      "arm implant removal houston",
      "contraceptive implant removal houston",
      "birth control implant removal houston"
    ],
    "features": [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 9
  },
  {
    "id": "salud-hombre",
    "slug": "salud-hombre",
    "dateModified": "2026-09-18",
    "title": "Salud del Hombre en Houston: Próstata, PSA y Hormonas",
    "titleEn": "Men's Health in Houston: Prostate, PSA & Hormones",
    "shortTitle": "Salud del Hombre",
    "description": "Evaluación de próstata (PSA), perfil hormonal y síntomas urinarios en español en Houston. Sin cita previa, sin seguro médico y con precios accesibles.",
    "descriptionEn": "Prostate (PSA), hormone panel and urinary symptom evaluation in Spanish in Houston. Walk-in, no insurance needed, affordable pricing.",
    "longDescription": "La consulta de salud del hombre de Clínica Hispana La Caridad se da sin cita previa y en español. El equipo médico de la clínica revisa próstata, síntomas urinarios, niveles hormonales y los factores que más pesan a partir de los 40: presión, azúcar y colesterol.\n\n## ¿Qué se revisa en una consulta de salud del hombre?\n\nHistoria clínica, exploración física y los análisis que correspondan según la edad y los síntomas: antígeno prostático (PSA), perfil hormonal, [exámenes de sangre](/services/examenes-sangre) generales y examen de orina. Si hay riesgo de infección de transmisión sexual, se puede añadir el [panel de ETS](/services/enfermedades-transmision-sexual).\n\n- Evaluación de próstata y PSA\n- Perfil hormonal completo\n- Síntomas urinarios: chorro débil, urgencia, levantarse de noche\n- Control de presión, azúcar y colesterol\n- Pruebas de infecciones de transmisión sexual\n\n## ¿A qué edad conviene revisarse la próstata?\n\nEl [USPSTF](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening) sitúa la decisión sobre el PSA entre los 55 y los 69 años, y recomienda hablarlo antes de hacerlo, porque tiene ventajas y desventajas. A partir de los 70 ya no se recomienda como cribado de rutina. Con antecedentes familiares o síntomas, la conversación se adelanta.\n\n## ¿Qué síntomas urinarios no conviene dejar pasar?\n\nChorro débil o entrecortado, levantarse varias veces por la noche a orinar, sensación de no vaciar del todo, urgencia repentina o ardor. También la sangre en la orina o en el semen, que se revisa cuanto antes.\n\n## ¿Necesito cita o seguro?\n\nNo. Se atiende de lunes a domingo, de 9 de la mañana a 9 de la noche, sin cita y sin seguro médico. En [promociones](/promociones) están el examen completo para hombres por $89, el perfil hormonal por $200 y el diagnóstico completo de ETS por $249.\n\n## ¿Cómo me preparo?\n\n- Para el perfil hormonal conviene la muestra por la mañana, cuando los niveles son más altos\n- Si te van a pedir glucosa o colesterol, pregunta si necesitas ayuno\n- Lleva la lista de medicamentos que tomas, incluidos los suplementos\n- Si te has hecho un PSA antes, lleva el resultado para comparar\n\n## ¿Y los resultados?\n\nSe te explican en español, con el plan a seguir. Si algo sale alterado, el equipo médico de la clínica indica el siguiente paso y entrega el reporte para llevarlo a un especialista si hace falta.",
    "longDescriptionEn": "Men's health visits at Clínica Hispana La Caridad are walk-in and in Spanish or English. The clinic's medical team reviews the prostate, urinary symptoms, hormone levels and the factors that matter most after 40: blood pressure, blood sugar and cholesterol.\n\n## What is checked in a men's health visit?\n\nMedical history, physical exam and whichever tests fit your age and symptoms: prostate-specific antigen (PSA), hormone panel, general [blood work](/services/examenes-sangre) and urine testing. If there is a risk of a sexually transmitted infection, the [STD panel](/services/enfermedades-transmision-sexual) can be added.\n\n- Prostate evaluation and PSA\n- Full hormone panel\n- Urinary symptoms: weak stream, urgency, getting up at night\n- Blood pressure, blood sugar and cholesterol\n- Sexually transmitted infection testing\n\n## At what age should the prostate be checked?\n\nThe [USPSTF](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening) places the PSA decision between ages 55 and 69, and recommends discussing it first, because it has both benefits and drawbacks. After 70 it is no longer recommended as routine screening. With a family history or symptoms, that conversation happens earlier.\n\n## Which urinary symptoms should not be ignored?\n\nA weak or interrupted stream, getting up several times at night to urinate, the feeling of not emptying completely, sudden urgency or burning. Also blood in the urine or semen, which is looked at right away.\n\n## Do I need an appointment or insurance?\n\nNo. Walk-ins are seen Monday through Sunday, 9 AM to 9 PM, with no insurance required. [Promotions](/promociones) include the complete men's exam for $89, the hormone panel for $200 and the full STD screening for $249.\n\n## How do I prepare?\n\n- For the hormone panel, a morning sample is better, when levels are highest\n- If glucose or cholesterol are ordered, ask whether you need to fast\n- Bring the list of medication you take, supplements included\n- If you have had a PSA before, bring the result so it can be compared\n\n## What about the results?\n\nThey are explained to you along with the plan. If something comes back abnormal, the clinic's medical team tells you the next step and hands you the report to take to a specialist if needed.",
    "icon": "Activity",
    "image": "/images/services/salud-hombre.webp",
    "category": "medicina-general",
    "keywords": [
          "examen de prostata houston espanol",
          "prueba psa houston",
          "perfil hormonal houston",
          "salud del hombre houston",
          "chequeo hombres houston español",
          "sintomas urinarios houston"
    ],
    "keywordsEn": [
          "prostate exam houston spanish",
          "psa test houston",
          "hormone panel houston",
          "mens health houston",
          "male checkup houston spanish",
          "urinary symptoms houston"
    ],
    "features": [
      "Antígeno prostático (PSA)",
      "Perfil hormonal",
      "Chequeo general del hombre",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Prostate antigen (PSA)",
      "Hormone panel",
      "General men's checkup",
      "Results explained in Spanish"
    ],
    "highlighted": true,
    "order": 10
  },
  {
    "id": "examenes-sangre",
    "slug": "examenes-sangre",
    "dateModified": "2026-09-18",
    "title": "Análisis y Exámenes de Sangre | Laboratorio",
    "titleEn": "Blood Tests | Lab",
    "shortTitle": "Análisis de Sangre",
    "description": "Análisis de sangre en Houston, TX: biometría, química, glucosa, colesterol y más. Resultados en español, con precios accesibles.",
    "descriptionEn": "Blood tests in Houston, TX: CBC, chemistry, glucose, cholesterol and more. Results in Spanish, with affordable pricing.",
    "longDescription": "Los análisis de sangre se toman en la propia clínica, sin cita previa, y el resultado se le explica en español junto con lo que significa cada valor. No hace falta orden médica previa ni seguro.\n\n## ¿Qué análisis se hacen?\n\n| Análisis | Para qué sirve | ¿Ayuno? |\n| --- | --- | --- |\n| Biometría hemática | Anemia, infección, plaquetas | No |\n| Glucosa en ayunas | Detección y control de diabetes | Sí, 8 horas |\n| Hemoglobina glicosilada (A1C) | Promedio de azúcar de los últimos 3 meses | No |\n| Perfil de lípidos | Colesterol total, LDL, HDL, triglicéridos | Normalmente sí |\n| Perfil metabólico | Función renal, hepática y electrolitos | Según el panel |\n| Perfil tiroideo | TSH y hormonas tiroideas | No |\n| Perfil hormonal | Niveles hormonales | Mejor por la mañana |\n\n## ¿Cuándo hay que ayunar y cuánto?\n\nPara la glucosa en ayunas, 8 horas sin comer, solo agua. Para el perfil de lípidos suele pedirse lo mismo, aunque algunos laboratorios ya lo aceptan sin ayuno. La A1C no requiere ayuno, que es la ventaja de usarla como control de la diabetes. Pregunte al reservar qué panel le van a hacer, porque de ahí depende si desayuna o no.\n\n## ¿Cómo prepararse?\n\n- Beba agua antes de la extracción: la vena se encuentra mejor hidratado\n- Evite el ejercicio intenso el día anterior, que altera algunos valores\n- Lleve la lista de medicamentos y suplementos: varios afectan al resultado\n- Si se marea con las agujas, dígalo antes, no después\n\n## ¿Qué significan los valores más comunes?\n\nSegún la [American Diabetes Association](https://diabetes.org/about-diabetes/a1c), una A1C por debajo de 5,7 % se considera normal, entre 5,7 y 6,4 % indica prediabetes y 6,5 % o más es criterio de diabetes. Para el colesterol, el número aislado dice poco: se interpreta junto con la edad, la presión, el tabaquismo y los antecedentes, tal como plantea el [USPSTF](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/statin-use-in-adults-preventive-medication).\n\nUn valor fuera de rango no es un diagnóstico. Es un dato que hay que repetir o completar, y el equipo médico de la clínica le indica cuál es el siguiente paso.\n\n## ¿Y los resultados?\n\nSe le avisa en cuanto llegan y se le explican en español, con el plan a seguir. Se le entrega el reporte impreso para que pueda llevarlo a otro médico o guardarlo para comparar en el próximo control.\n\nSi el análisis es parte del seguimiento de una condición crónica, la revisión continúa en [control de diabetes, hipertensión y colesterol](/services/condiciones-cronicas). En [promociones](/promociones) están el chequeo general completo por $99 y el general de sangre con vitamina B12 por $99.",
    "longDescriptionEn": "Blood work is drawn at the clinic itself, walk-in, and the result is explained to you along with what each value means. No prior doctor's order and no insurance are needed.\n\n## Which tests are available?\n\n| Test | What it is for | Fasting? |\n| --- | --- | --- |\n| Complete blood count | Anemia, infection, platelets | No |\n| Fasting glucose | Detecting and managing diabetes | Yes, 8 hours |\n| Glycated hemoglobin (A1C) | Average blood sugar over 3 months | No |\n| Lipid panel | Total cholesterol, LDL, HDL, triglycerides | Usually yes |\n| Metabolic panel | Kidney and liver function, electrolytes | Depends on the panel |\n| Thyroid panel | TSH and thyroid hormones | No |\n| Hormone panel | Hormone levels | Better in the morning |\n\n## When do you need to fast, and for how long?\n\nFor fasting glucose, 8 hours without food, water only. The lipid panel usually asks for the same, although some labs now accept it without fasting. A1C requires no fasting, which is its advantage for diabetes monitoring. Ask which panel you are having when you book, because that is what decides whether you eat breakfast.\n\n## How to prepare\n\n- Drink water before the draw: the vein is easier to find when you are hydrated\n- Avoid hard exercise the day before, which shifts some values\n- Bring your medication and supplement list: several affect results\n- If needles make you faint, say so beforehand, not afterwards\n\n## What do the common values mean?\n\nAccording to the [American Diabetes Association](https://diabetes.org/about-diabetes/a1c), an A1C below 5.7% is considered normal, 5.7 to 6.4% indicates prediabetes and 6.5% or above meets the criteria for diabetes. For cholesterol, the number alone says little: it is read together with age, blood pressure, smoking and family history, as the [USPSTF](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/statin-use-in-adults-preventive-medication) sets out.\n\nA value outside the range is not a diagnosis. It is a data point to repeat or complete, and the clinic's medical team tells you the next step.\n\n## What about the results?\n\nYou are notified as soon as they arrive and they are explained to you, along with the plan. You get a printed report to take to another doctor or to keep for comparison at your next check.\n\nIf the test is part of following a chronic condition, care continues at [diabetes, blood pressure and cholesterol management](/services/condiciones-cronicas). [Promotions](/promociones) include the complete general check-up for $99 and the general blood panel with vitamin B12 for $99.",
    "icon": "Flask",
    "image": "/images/services/examenes-sangre.webp",
    "category": "laboratorio",
    "keywords": [
      "examenes de sangre houston",
      "analisis de sangre houston",
      "laboratorio houston",
      "laboratorio cerca de mi houston"
    ],
    "keywordsEn": [
      "blood test houston",
      "blood work houston",
      "lab near me houston",
      "clinical lab houston"
    ],
    "features": [
      "Biometría y química sanguínea",
      "Glucosa, colesterol y triglicéridos",
      "Pruebas de tiroides, hígado y riñón",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "CBC and blood chemistry",
      "Glucose, cholesterol and triglycerides",
      "Thyroid, liver and kidney tests",
      "Results explained in Spanish"
    ],
    "highlighted": true,
    "order": 11
  },
  {
    "id": "infecciones-urinarias",
    "slug": "infecciones-urinarias",
    "title": "Examen de Orina y Tratamiento de Infecciones Urinarias",
    "titleEn": "Urinalysis & Urinary Infection Treatment",
    "shortTitle": "Infecciones Urinarias",
    "description": "Examen de orina y tratamiento de infecciones urinarias en Houston, TX, el mismo día. En español, con precios accesibles.",
    "descriptionEn": "Urinalysis and urinary infection treatment in Houston, TX, same day. In Spanish, with affordable pricing.",
    "longDescription": "El examen de orina ayuda a detectar infecciones urinarias y otras condiciones. En Clínica Hispana La Caridad te hacemos la prueba y, si hay infección, empezamos el tratamiento el mismo día.\n\n**¿Qué incluye?**\n- Examen general de orina (urianálisis)\n- Evaluación de síntomas\n- Diagnóstico de infección urinaria\n- Tratamiento adecuado el mismo día\n- Indicaciones para evitar que regrese\n\n**Síntomas frecuentes**\nArdor al orinar, ganas constantes de ir al baño, orina turbia o con mal olor y dolor en la parte baja del abdomen. No esperes: una infección sin tratar puede llegar a los riñones.\n\n**Tratamiento de infecciones urinarias en una clínica hispana cerca de ti**\nSomos una clínica hispana cerca de ti en Houston: te hacemos el examen de orina y, si hay infección, sales con tu tratamiento el mismo día, sin cita previa y en español.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "A urine test helps detect urinary infections and other conditions. At Clínica Hispana La Caridad we run the test and, if there's an infection, we start treatment the same day.\n\n**What's included?**\n- General urinalysis\n- Symptom evaluation\n- Diagnosis of urinary infection\n- Appropriate same-day treatment\n- Tips to prevent it from coming back\n\n**Common symptoms**\nBurning when urinating, a constant urge to go, cloudy or foul-smelling urine and lower-abdomen pain. Don't wait: an untreated infection can reach the kidneys.\n\n**UTI treatment at a Hispanic clinic near you**\nWe are a Hispanic clinic near you in Houston: we run your urine test and, if there is an infection, you leave with treatment the same day, no appointment needed and in Spanish.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/infecciones-urinarias.webp",
    "category": "tratamientos",
    "keywords": [
      "examen de orina houston",
      "infeccion urinaria houston",
      "tratamiento infeccion urinaria houston",
      "doctor infeccion de orina houston"
    ],
    "keywordsEn": [
      "urinalysis houston",
      "urinary tract infection houston",
      "uti treatment houston",
      "uti doctor houston"
    ],
    "features": [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 12
  },
  {
    "id": "examen-heces",
    "slug": "examen-heces",
    "title": "Exámenes de Heces Fecales",
    "titleEn": "Stool Tests",
    "shortTitle": "Examen de Heces",
    "description": "Exámenes de heces fecales en Houston, TX. Detección de parásitos e infecciones, en español, con precios accesibles.",
    "descriptionEn": "Stool tests in Houston, TX. Detection of parasites and infections, in Spanish, with affordable pricing.",
    "longDescription": "Los problemas digestivos a veces tienen una causa que solo un análisis de heces puede revelar. En Clínica Hispana La Caridad realizamos exámenes de heces fecales para encontrar el origen y darte el tratamiento correcto.\n\n**¿Qué incluye?**\n- Análisis general de heces fecales\n- Detección de parásitos\n- Identificación de infecciones intestinales\n- Evaluación de sangre oculta cuando se requiere\n- Resultados explicados en español\n\n**Cuándo es útil**\nDiarrea persistente, dolor abdominal, gases, cambios en las evacuaciones o pérdida de peso sin explicación. El examen ayuda a un diagnóstico preciso.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Digestive problems sometimes have a cause that only a stool test can reveal. At Clínica Hispana La Caridad we perform stool tests to find the source and give you the right treatment.\n\n**What's included?**\n- General stool analysis\n- Parasite detection\n- Identification of intestinal infections\n- Occult-blood evaluation when needed\n- Results explained in Spanish\n\n**When it helps**\nPersistent diarrhea, abdominal pain, gas, changes in bowel movements or unexplained weight loss. The test helps with an accurate diagnosis.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "TestTube",
    "image": "/images/services/examen-heces.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de heces houston",
      "analisis de heces fecales houston",
      "examen de parasitos houston",
      "laboratorio heces houston"
    ],
    "keywordsEn": [
      "stool test houston",
      "stool analysis houston",
      "parasite test houston",
      "stool lab houston"
    ],
    "features": [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish"
    ],
    "highlighted": false,
    "order": 13
  },
  {
    "id": "prueba-strep",
    "slug": "prueba-strep",
    "title": "Prueba de Estreptococo (Strep Test)",
    "titleEn": "Strep Test",
    "shortTitle": "Prueba de Strep",
    "description": "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Strep test in Houston, TX. Fast result and treatment in Spanish, with affordable pricing.",
    "longDescription": "No todo dolor de garganta es igual: la faringitis por estreptococo necesita tratamiento específico. En Clínica Hispana La Caridad hacemos la prueba rápida de strep y te damos el resultado y el tratamiento el mismo día.\n\n**¿Qué incluye?**\n- Prueba rápida de estreptococo (hisopado de garganta)\n- Resultado en pocos minutos\n- Evaluación del dolor de garganta\n- Tratamiento adecuado si el resultado es positivo\n- Indicaciones de recuperación\n\n**Cuándo hacerla**\nDolor de garganta fuerte, fiebre, dificultad para tragar o placas blancas en las amígdalas, sobre todo en niños. La prueba evita tratamientos innecesarios.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Not every sore throat is the same: strep throat needs specific treatment. At Clínica Hispana La Caridad we run the rapid strep test and give you the result and treatment the same day.\n\n**What's included?**\n- Rapid strep test (throat swab)\n- Result in minutes\n- Sore-throat evaluation\n- Appropriate treatment if the result is positive\n- Recovery instructions\n\n**When to get it**\nSevere sore throat, fever, trouble swallowing or white patches on the tonsils, especially in children. The test avoids unnecessary treatments.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "TestTube",
    "image": "/images/services/prueba-strep.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba de estreptococo houston",
      "strep test houston",
      "prueba de garganta houston",
      "dolor de garganta doctor houston"
    ],
    "keywordsEn": [
      "strep test houston",
      "rapid strep test houston",
      "sore throat test houston",
      "strep throat doctor houston"
    ],
    "features": [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 14
  },
  {
    "id": "prueba-tuberculosis",
    "slug": "prueba-tuberculosis",
    "title": "Examen de Tuberculosis (TB)",
    "titleEn": "Tuberculosis (TB) Test",
    "shortTitle": "Tuberculosis",
    "description": "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, con precios accesibles.",
    "descriptionEn": "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, with affordable pricing.",
    "longDescription": "Muchos trabajos y escuelas piden una prueba de tuberculosis al día. En Clínica Hispana La Caridad la aplicamos y leemos el resultado, con todo explicado en español.\n\n**¿Qué incluye?**\n- Prueba cutánea de tuberculosis (PPD)\n- Cita de lectura del resultado (48–72 horas después)\n- Documentación del resultado para tu trámite\n- Orientación si el resultado requiere seguimiento\n\n**Para qué la piden**\nEmpleos de salud, escuelas, trámites y voluntariado suelen requerir una prueba de TB vigente. Te ayudamos a cumplir el requisito sin complicaciones.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and schools require an up-to-date tuberculosis test. At Clínica Hispana La Caridad we administer it and read the result, with everything explained in Spanish.\n\n**What's included?**\n- Tuberculosis skin test (PPD)\n- Result-reading appointment (48–72 hours later)\n- Documentation of the result for your paperwork\n- Guidance if the result needs follow-up\n\n**Why it's required**\nHealthcare jobs, schools, paperwork and volunteering often require a current TB test. We help you meet the requirement without hassle.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "ShieldCheck",
    "image": "/images/services/prueba-tuberculosis.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de tuberculosis houston",
      "prueba ppd houston",
      "prueba de tb houston",
      "tb test español houston"
    ],
    "keywordsEn": [
      "tuberculosis test houston",
      "ppd test houston",
      "tb test houston",
      "tb skin test houston"
    ],
    "features": [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español"
    ],
    "featuresEn": [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 15
  },
  {
    "id": "enfermedades-transmision-sexual",
    "slug": "enfermedades-transmision-sexual",
    "title": "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    "titleEn": "Sexually Transmitted Disease (STD) Testing",
    "shortTitle": "STD",
    "description": "Pruebas de ETS/STD confidenciales en Houston, TX. Resultados y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Confidential STD testing in Houston, TX. Results and treatment in Spanish, with affordable pricing.",
    "longDescription": "Cuidar tu salud sexual es un acto de responsabilidad. En Clínica Hispana La Caridad ofrecemos pruebas de enfermedades de transmisión sexual de forma confidencial y respetuosa, con tratamiento cuando es necesario.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y factores de riesgo\n- Pruebas de las infecciones más comunes\n- Análisis de laboratorio\n- Tratamiento y orientación si el resultado es positivo\n- Total confidencialidad\n\n**Cuándo hacerte la prueba**\nSi tuviste contacto de riesgo, tienes síntomas o simplemente quieres estar tranquilo, hacerte la prueba es la mejor decisión. La detección temprana facilita el tratamiento.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Taking care of your sexual health is an act of responsibility. At Clínica Hispana La Caridad we offer confidential, respectful testing for sexually transmitted diseases, with treatment when needed.\n\n**What's included?**\n- Symptom and risk-factor assessment\n- Testing for the most common infections\n- Laboratory analysis\n- Treatment and guidance if the result is positive\n- Complete confidentiality\n\n**When to get tested**\nIf you had a risky encounter, have symptoms or simply want peace of mind, getting tested is the best decision. Early detection makes treatment easier.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "ShieldCheck",
    "image": "/images/services/enfermedades-transmision-sexual.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba std houston",
      "examen de transmision sexual houston",
      "prueba ets confidencial houston",
      "clinica std español houston"
    ],
    "keywordsEn": [
      "std testing houston",
      "std test near me houston",
      "confidential std clinic houston",
      "sti testing houston"
    ],
    "features": [
      "Pruebas confidenciales y sin juicios",
      "Evaluación de síntomas y riesgo",
      "Tratamiento disponible",
      "Atención en español"
    ],
    "featuresEn": [
      "Confidential, judgment-free testing",
      "Symptom and risk assessment",
      "Treatment available",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 16
  },
  {
    "id": "examen-alcohol-drogas",
    "slug": "examen-alcohol-drogas",
    "title": "Exámenes de Alcohol y Drogas",
    "titleEn": "Alcohol & Drug Testing",
    "shortTitle": "Alcohol y Drogas",
    "description": "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, con precios accesibles.",
    "descriptionEn": "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    "longDescription": "Muchos empleos y trámites requieren una prueba de alcohol y drogas. En Clínica Hispana La Caridad la realizamos de forma rápida y te entregamos la documentación que necesitas.\n\n**¿Qué incluye?**\n- Prueba de detección de drogas\n- Prueba de alcohol\n- Proceso ágil y discreto\n- Documentación del resultado para tu empleador o trámite\n\n**Para trabajo y trámites**\nAtendemos solicitudes de empleo, requisitos laborales y trámites personales. Te explicamos el proceso en español para que llegues tranquilo.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and processes require an alcohol and drug test. At Clínica Hispana La Caridad we perform it quickly and give you the documentation you need.\n\n**What's included?**\n- Drug screening test\n- Alcohol test\n- Quick, discreet process\n- Result documentation for your employer or paperwork\n\n**For work and paperwork**\nWe handle job applications, workplace requirements and personal paperwork. We explain the process in Spanish so you arrive with peace of mind.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Flask",
    "image": "/images/services/examen-alcohol-drogas.webp",
    "category": "examenes",
    "keywords": [
      "examen de drogas houston",
      "prueba de alcohol y drogas houston",
      "drug test houston español",
      "examen de drogas para trabajo houston"
    ],
    "keywordsEn": [
      "drug test houston",
      "alcohol and drug test houston",
      "employment drug test houston",
      "drug screening houston"
    ],
    "features": [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado"
    ],
    "featuresEn": [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation"
    ],
    "highlighted": false,
    "order": 17
  },
  {
    "id": "electrocardiograma",
    "slug": "electrocardiograma",
    "title": "Electrocardiograma (EKG)",
    "titleEn": "Electrocardiogram (EKG)",
    "shortTitle": "Electrocardiograma",
    "description": "Electrocardiograma EKG en Houston, TX, rápido y sin dolor. Resultados y atención en español, con precios accesibles.",
    "descriptionEn": "Electrocardiogram EKG in Houston, TX, fast and painless. Results and care in Spanish, with affordable pricing.",
    "longDescription": "El electrocardiograma (EKG) registra la actividad eléctrica de tu corazón en pocos minutos y sin ninguna molestia. En Clínica Hispana La Caridad lo realizamos como parte de chequeos y exámenes médicos.\n\n**¿Qué incluye?**\n- Estudio del ritmo y la actividad del corazón\n- Interpretación por personal médico\n- Útil para exámenes de trabajo, deporte o cirugía\n- Resultados explicados en español\n\n**Cuándo se recomienda**\nSi tienes palpitaciones, presión alta, dolor en el pecho o necesitas un examen médico completo, el EKG aporta información valiosa sobre tu corazón.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "The electrocardiogram (EKG) records your heart's electrical activity in just a few minutes with no discomfort. At Clínica Hispana La Caridad we perform it as part of checkups and medical exams.\n\n**What's included?**\n- Study of your heart's rhythm and activity\n- Interpretation by medical staff\n- Useful for work, sports or surgery exams\n- Results explained in Spanish\n\n**When it's recommended**\nIf you have palpitations, high blood pressure, chest discomfort or need a complete medical exam, the EKG provides valuable information about your heart.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Heartbeat",
    "image": "/images/services/electrocardiograma.webp",
    "category": "laboratorio",
    "keywords": [
      "electrocardiograma houston",
      "ekg houston español",
      "examen del corazon houston",
      "ecg houston"
    ],
    "keywordsEn": [
      "electrocardiogram houston",
      "ekg houston",
      "heart test houston",
      "ecg houston spanish"
    ],
    "features": [
      "Estudio rápido y sin dolor",
      "Evaluación del ritmo cardiaco",
      "Útil para exámenes médicos",
      "Resultados en español"
    ],
    "featuresEn": [
      "Fast and painless test",
      "Heart-rhythm evaluation",
      "Useful for medical exams",
      "Results in Spanish"
    ],
    "highlighted": false,
    "order": 18
  },
  {
    "id": "ultrasonido",
    "slug": "ultrasonido",
    "title": "Ultrasonido y Ecografía",
    "titleEn": "Ultrasound & Sonography",
    "shortTitle": "Ultrasonido",
    "description": "Ultrasonido y ecografía en Houston, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles.",
    "descriptionEn": "Ultrasound and sonography in Houston, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing.",
    "longDescription": "El ultrasonido es una herramienta segura y sin dolor que nos permite ver el interior de tu cuerpo para diagnosticar con precisión. En Clínica Hispana La Caridad contamos con equipo moderno y personal que te explica todo en español.\n\n**¿Qué incluye?**\n- Ultrasonido abdominal (hígado, vesícula, riñones)\n- Ultrasonido pélvico\n- Ultrasonido de embarazo (control y seguimiento)\n- Evaluación de tiroides y tejidos blandos\n\n**Sin radiación y sin dolor**\nA diferencia de los rayos X, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo. El estudio es rápido y no requiere preparación complicada.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Ultrasound is a safe, painless tool that lets us see inside your body for an accurate diagnosis. At Clínica Hispana La Caridad we have modern equipment and staff who explain everything in Spanish.\n\n**What's included?**\n- Abdominal ultrasound (liver, gallbladder, kidneys)\n- Pelvic ultrasound\n- Pregnancy ultrasound (monitoring and follow-up)\n- Thyroid and soft-tissue evaluation\n\n**No radiation, no pain**\nUnlike X-rays, ultrasound uses no radiation, so it's safe even during pregnancy. The study is quick and requires little preparation.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Monitor",
    "image": "/images/services/ultrasonido.webp",
    "category": "laboratorio",
    "keywords": [
      "ultrasonido houston",
      "ecografia houston español",
      "ultrasonido de embarazo houston",
      "sonograma houston"
    ],
    "keywordsEn": [
      "ultrasound houston",
      "sonogram houston",
      "pregnancy ultrasound houston",
      "abdominal ultrasound houston"
    ],
    "features": [
      "Ultrasonido abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Equipo moderno",
      "Atención en español"
    ],
    "featuresEn": [
      "Abdominal and pelvic ultrasound",
      "Pregnancy ultrasound",
      "Modern equipment",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 19
  },
  {
    "id": "examen-dot",
    "slug": "examen-dot",
    "dateModified": "2026-09-18",
    "title": "Examen Físico DOT - Licencia CDL",
    "titleEn": "DOT Physical Exam - CDL License",
    "shortTitle": "Examen DOT",
    "description": "Examen físico DOT en Houston, TX para licencia CDL, certificado y atención en español. Con precios accesibles.",
    "descriptionEn": "DOT physical exam in Houston, TX for CDL license, same-day certificate, in Spanish. With affordable pricing.",
    "longDescription": "El examen físico DOT es el requisito médico para conducir un vehículo comercial con licencia CDL. En Clínica Hispana La Caridad se hace sin cita previa y en español, de lunes a domingo.\n\n## ¿Qué se revisa en el examen DOT?\n\n- Historial médico y medicamentos que toma\n- Presión arterial y frecuencia cardiaca\n- Vista, oído y reflejos\n- Corazón, pulmones, abdomen, columna y extremidades\n- Examen de orina\n- Revisión de condiciones que pueden afectar a la conducción\n\n## ¿Qué pide la norma?\n\nSegún los [requisitos médicos de FMCSA](https://www.fmcsa.dot.gov/regulations/medical/driver-medical-requirements):\n\n| Requisito | Qué se exige |\n| --- | --- |\n| Vista | 20/40 o mejor en cada ojo, con o sin lentes, y campo visual de al menos 70° |\n| Oído | Percibir un susurro a 5 pies, o cumplir el criterio en audiometría |\n| Presión arterial | Por debajo de 140/90 para la certificación completa |\n| Duración | Hasta 24 meses; 1 año si la presión está entre 140/90 y 179/109 |\n| Diabetes con insulina | Formulario MCSA-5870 completado por el médico que trata la diabetes |\n\n**El examen de orina del DOT no es una prueba de drogas.** Mide azúcar, proteína y sangre. Las pruebas de drogas del DOT son un trámite aparte, con su propia cadena de custodia.\n\n## ¿Qué debo llevar?\n\n- Licencia de conducir\n- **Lentes o audífonos**, si los usa: la prueba se hace con ellos puestos\n- Lista de medicamentos con dosis\n- Si tiene diabetes, presión alta o problemas del corazón, los informes de su médico y los valores recientes\n- Si usa CPAP para la apnea del sueño, el reporte de uso\n\n## Cómo llegar mejor preparado\n\n- Evite la cafeína y el ejercicio intenso justo antes: suben la presión\n- Si toma medicación para la presión, tómela como siempre ese día\n- Duerma bien la noche anterior\n- Si la presión le sube solo en la consulta, dígalo: se puede repetir la medición\n\n## ¿Necesito cita o seguro?\n\nNo hace falta ninguna. Se atiende de lunes a domingo de 9 de la mañana a 9 de la noche y el costo se le dice antes de empezar. Esta [guía del examen DOT para camioneros](/blog/examen-dot-cdl-camioneros-houston) explica el proceso con más detalle.\n\nSi en el examen aparece presión alta o azúcar elevado, conviene tratarlo antes de la siguiente certificación: eso se sigue en [control de diabetes, hipertensión y colesterol](/services/condiciones-cronicas).",
    "longDescriptionEn": "The DOT physical is the medical requirement for driving a commercial vehicle with a CDL. At Clínica Hispana La Caridad it is done walk-in and in Spanish, Monday through Sunday.\n\n## What is checked in the DOT exam?\n\n- Medical history and current medication\n- Blood pressure and heart rate\n- Vision, hearing and reflexes\n- Heart, lungs, abdomen, spine and limbs\n- Urine test\n- Review of conditions that can affect driving\n\n## What does the rule require?\n\nAccording to the [FMCSA medical requirements](https://www.fmcsa.dot.gov/regulations/medical/driver-medical-requirements):\n\n| Requirement | What is required |\n| --- | --- |\n| Vision | 20/40 or better in each eye, with or without lenses, and at least a 70° field of vision |\n| Hearing | Perceiving a whisper at 5 feet, or meeting the audiometry criterion |\n| Blood pressure | Below 140/90 for full certification |\n| Duration | Up to 24 months; 1 year if blood pressure is between 140/90 and 179/109 |\n| Insulin-treated diabetes | Form MCSA-5870 completed by the physician treating the diabetes |\n\n**The DOT urine test is not a drug test.** It measures sugar, protein and blood. DOT drug testing is a separate process with its own chain of custody.\n\n## What should I bring?\n\n- Driver's license\n- **Glasses or hearing aids**, if you use them: the test is done wearing them\n- A medication list with doses\n- If you have diabetes, high blood pressure or heart problems, your doctor's reports and recent values\n- If you use CPAP for sleep apnea, the compliance report\n\n## How to arrive better prepared\n\n- Avoid caffeine and hard exercise right before: they raise blood pressure\n- If you take blood pressure medication, take it as usual that day\n- Sleep well the night before\n- If your pressure only rises at the clinic, say so: the reading can be repeated\n\n## Do I need an appointment or insurance?\n\nNeither. Walk-ins are seen Monday through Sunday, 9 AM to 9 PM, and the cost is given before starting. This [guide to the DOT exam for truck drivers](/blog/examen-dot-cdl-camioneros-houston) explains the process in more detail.\n\nIf the exam finds high blood pressure or high blood sugar, it is worth treating before the next certification: that is followed under [diabetes, blood pressure and cholesterol management](/services/condiciones-cronicas).",
    "icon": "Truck",
    "image": "/images/services/examen-dot.webp",
    "category": "examenes",
    "keywords": [
      "examen dot houston",
      "examen fisico dot houston español",
      "examen cdl houston",
      "dot physical houston español"
    ],
    "keywordsEn": [
      "dot physical houston",
      "dot exam houston",
      "cdl physical houston",
      "dot medical exam houston"
    ],
    "features": [
      "Certificado DOT al terminar el examen",
      "Para licencia CDL",
      "Proceso rápido",
      "Atención en español"
    ],
    "featuresEn": [
      "DOT certificate at the end of the exam",
      "For CDL license",
      "Fast process",
      "Care in Spanish"
    ],
    "highlighted": true,
    "order": 20
  },
  {
    "id": "examenes-inmigracion",
    "slug": "examenes-inmigracion",
    "dateModified": "2026-09-18",
    "title": "Examen Médico de Inmigración I-693",
    "titleEn": "Immigration Medical Exam I-693",
    "shortTitle": "Inmigración",
    "description": "Examen médico de inmigración I-693 en Houston, TX con médico autorizado por USCIS. Vacunas y formulario sellado.",
    "descriptionEn": "I-693 immigration medical exam in Houston, TX with a USCIS-authorized physician. Vaccines and sealed form.",
    "longDescription": "El examen médico de inmigración (formulario I-693) es parte del trámite de ajuste de estatus. En Clínica Hispana La Caridad se hace sin cita previa, en español, y se entrega el formulario dentro del sobre sellado que pide USCIS.\n\n## ¿Qué incluye el examen I-693?\n\n- Revisión del historial médico y de vacunación\n- Examen físico completo\n- Prueba de tuberculosis: para inmigración se usa el análisis de sangre IGRA\n- Análisis de sangre para sífilis y gonorrea según la edad\n- Aplicación de las vacunas que falten\n- Formulario I-693 completado y sellado\n\n## ¿Qué debo llevar?\n\n- Identificación con foto y pasaporte\n- **El registro de vacunas**, si lo tiene, aunque sea del país de origen\n- Lista de medicamentos que toma\n- Informes médicos de cualquier condición crónica\n- Si le hicieron una prueba de tuberculosis antes, el resultado\n\nLlevar el carné de vacunas es lo que más tiempo y dinero ahorra: sin él, hay que repetir dosis que quizá ya tiene puestas.\n\n## Sobre el sobre sellado\n\nEl formulario se entrega en un sobre cerrado y firmado. **No lo abra.** Si el sobre llega abierto a USCIS, el examen se considera inválido y hay que repetirlo. Guárdelo tal cual hasta presentarlo.\n\n## Reglas que conviene verificar antes de ir\n\nLas reglas de USCIS cambian, así que conviene comprobarlas en la [página oficial del formulario I-693](https://www.uscis.gov/i-693) antes de la cita. Dos puntos que han cambiado en los últimos años: la vacuna contra la COVID-19 dejó de ser requisito, y USCIS pide presentar el I-693 junto con el formulario I-485 en lugar de por separado.\n\nPuede comprobar la designación de cualquier consultorio en el [buscador oficial de USCIS](https://www.uscis.gov/tools/find-a-doctor).\n\n## ¿Cuánto tarda?\n\nEl examen se hace en una visita. Las vacunas que requieren varias dosis y los análisis de laboratorio pueden necesitar una segunda cita, y el sobre se entrega cuando todo el expediente está completo. Se le indica la fecha en la primera visita.\n\n## ¿Necesito cita o seguro?\n\nNo hace falta ninguna de las dos cosas. Se atiende de lunes a domingo de 9 de la mañana a 9 de la noche. Pregunte el costo del examen y el de las vacunas por separado antes de empezar.\n\nSi necesita ponerse al día con las vacunas al margen del trámite, se aplican en el servicio de [vacunas](/services/vacunas). Esta [guía del examen médico de inmigración](/blog/guia-examen-medico-inmigracion-i693-houston) explica el proceso paso a paso.",
    "longDescriptionEn": "The immigration medical exam (Form I-693) is part of the adjustment of status process. At Clínica Hispana La Caridad it is done walk-in, in Spanish, and the form is handed over inside the sealed envelope USCIS requires.\n\n## What does the I-693 exam include?\n\n- Review of medical and vaccination history\n- Complete physical exam\n- Tuberculosis testing: for immigration the IGRA blood test is used\n- Blood testing for syphilis and gonorrhea depending on age\n- Administration of any missing vaccines\n- Form I-693 completed and sealed\n\n## What should I bring?\n\n- Photo ID and passport\n- **Your vaccination record**, if you have it, even from your home country\n- A list of the medication you take\n- Medical reports for any chronic condition\n- If you have had a tuberculosis test before, the result\n\nBringing the vaccination card is what saves the most time and money: without it, doses you may already have had must be repeated.\n\n## About the sealed envelope\n\nThe form is handed over in a closed, signed envelope. **Do not open it.** If the envelope reaches USCIS opened, the exam is considered invalid and has to be repeated. Keep it exactly as given until you file it.\n\n## Rules worth checking before you go\n\nUSCIS rules change, so it is worth checking them on the [official I-693 form page](https://www.uscis.gov/i-693) before your visit. Two points have changed in recent years: the COVID-19 vaccine is no longer a requirement, and USCIS asks for the I-693 to be filed together with Form I-485 rather than separately.\n\nYou can check any office's designation in the [official USCIS search tool](https://www.uscis.gov/tools/find-a-doctor).\n\n## How long does it take?\n\nThe exam is done in one visit. Vaccines requiring several doses and lab work may need a second appointment, and the envelope is handed over once the whole file is complete. You are told the date at the first visit.\n\n## Do I need an appointment or insurance?\n\nNeither. Walk-ins are seen Monday through Sunday, 9 AM to 9 PM. Ask for the cost of the exam and of the vaccines separately before starting.\n\nIf you need to catch up on vaccines outside the process, they are given under [vaccines](/services/vacunas). This [guide to the immigration medical exam](/blog/guia-examen-medico-inmigracion-i693-houston) walks through the process step by step.",
    "icon": "Clipboard",
    "image": "/images/services/examenes-inmigracion.webp",
    "category": "examenes",
    "keywords": [
      "examen de inmigracion houston",
      "examen medico i-693 houston",
      "civil surgeon houston español",
      "medico autorizado uscis houston"
    ],
    "keywordsEn": [
      "immigration medical exam houston",
      "i-693 exam houston",
      "civil surgeon houston",
      "uscis authorized doctor houston"
    ],
    "features": [
      "Médico autorizado (civil surgeon)",
      "Formulario I-693 sellado",
      "Vacunas requeridas disponibles",
      "Proceso explicado en español"
    ],
    "featuresEn": [
      "Authorized civil surgeon",
      "Sealed Form I-693",
      "Required vaccines available",
      "Process explained in Spanish"
    ],
    "highlighted": false,
    "order": 21
  },
  {
    "id": "vacunas",
    "slug": "vacunas",
    "title": "Vacunas contra la Influenza y Toxoide Tetánico",
    "titleEn": "Flu and Tetanus (Tdap) Vaccines",
    "shortTitle": "Vacunas",
    "description": "Vacunas de flu y toxoide tetánico en Houston, TX. Aplicación por personal médico en español, con precios accesibles.",
    "descriptionEn": "Flu and tetanus vaccines in Houston, TX. Administered by medical staff in Spanish, with affordable pricing.",
    "longDescription": "Las vacunas son una de las formas más sencillas de cuidar tu salud. En Clínica Hispana La Caridad aplicamos la vacuna contra la influenza y el toxoide tetánico de forma segura y rápida.\n\n**¿Qué incluye?**\n- Vacuna anual contra la influenza (flu)\n- Toxoide tetánico (refuerzo del tétanos)\n- Aplicación por personal médico\n- Orientación sobre cuándo aplicar refuerzos\n- Atención en español\n\n**Por qué vacunarte**\nLa vacuna de la flu reduce el riesgo de enfermarte de gravedad en temporada de gripe, y el toxoide tetánico te protege ante cortes y heridas. Pregúntanos cuál te conviene.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Vaccines are one of the simplest ways to protect your health. At Clínica Hispana La Caridad we administer the influenza vaccine and tetanus toxoid safely and quickly.\n\n**What's included?**\n- Annual influenza (flu) vaccine\n- Tetanus toxoid (tetanus booster)\n- Administered by medical staff\n- Guidance on when boosters are due\n- Care in Spanish\n\n**Why get vaccinated**\nThe flu vaccine lowers your risk of getting seriously ill during flu season, and the tetanus toxoid protects you from cuts and wounds. Ask us which one you need.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/vacunas.webp",
    "category": "tratamientos",
    "keywords": [
      "vacuna de la flu houston",
      "vacuna contra la influenza houston",
      "toxoide tetanico houston",
      "vacuna del tetano houston"
    ],
    "keywordsEn": [
      "flu shot houston",
      "flu vaccine houston",
      "tetanus shot houston",
      "tdap vaccine houston"
    ],
    "features": [
      "Vacuna contra la influenza (flu)",
      "Toxoide tetánico",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Influenza (flu) vaccine",
      "Tetanus toxoid",
      "Administered by medical staff",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 22
  },
  {
    "id": "sueros-vitaminados",
    "slug": "sueros-vitaminados",
    "title": "Sueros Vitaminados (Terapia IV)",
    "titleEn": "Vitamin IV Therapy",
    "shortTitle": "Sueros Vitaminados",
    "description": "Sueros vitaminados (terapia IV) en Houston, TX. Hidratación y vitaminas en español, con precios accesibles.",
    "descriptionEn": "Vitamin IV therapy in Houston, TX. Hydration and vitamins in Spanish, with affordable pricing.",
    "longDescription": "Los sueros vitaminados aportan hidratación, vitaminas y minerales directamente a tu organismo. En Clínica Hispana La Caridad los aplicamos con personal médico y en un ambiente cómodo y seguro.\n\n**¿Qué incluye?**\n- Evaluación breve para elegir el suero adecuado\n- Hidratación intravenosa\n- Vitaminas y minerales\n- Aplicación y monitoreo por personal médico\n- Atención en español\n\n**Cuándo pueden ayudar**\nDespués de un periodo de cansancio, deshidratación o malestar, un suero vitaminado puede ayudarte a recuperar energía. Te orientamos sobre si es adecuado para ti.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Vitamin IV drips deliver hydration, vitamins and minerals directly into your body. At Clínica Hispana La Caridad we administer them with medical staff in a comfortable, safe setting.\n\n**What's included?**\n- A brief evaluation to choose the right drip\n- Intravenous hydration\n- Vitamins and minerals\n- Administration and monitoring by medical staff\n- Care in Spanish\n\n**When they can help**\nAfter a period of fatigue, dehydration or feeling unwell, a vitamin drip can help you recover energy. We advise you on whether it's right for you.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/sueros-vitaminados.webp",
    "category": "tratamientos",
    "keywords": [
      "sueros vitaminados houston",
      "terapia iv houston",
      "suero de vitaminas houston",
      "hidratacion intravenosa houston"
    ],
    "keywordsEn": [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv hydration houston",
      "vitamin drip houston"
    ],
    "features": [
      "Hidratación intravenosa",
      "Vitaminas y minerales",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Intravenous hydration",
      "Vitamins and minerals",
      "Administered by medical staff",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 23
  },
  {
    "id": "suturas-heridas",
    "slug": "suturas-heridas",
    "title": "Suturas de Heridas",
    "titleEn": "Wound Suturing",
    "shortTitle": "Suturas",
    "description": "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    "descriptionEn": "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    "longDescription": "Una herida que no cierra bien puede infectarse o dejar cicatriz. En Clínica Hispana La Caridad cerramos cortes y heridas con suturas de forma segura, sin cita y con atención en español.\n\n**¿Qué incluye?**\n- Evaluación y limpieza de la herida\n- Cierre con suturas (puntos)\n- Aplicación de anestesia local\n- Indicaciones de cuidado y signos de alarma\n- Retiro de puntos cuando corresponde\n\n**Cuándo acudir**\nCortes profundos, heridas que sangran o no cierran solas, o que tienen bordes abiertos. Atender pronto reduce el riesgo de infección y mejora la cicatrización.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "A wound that doesn't close well can get infected or leave a scar. At Clínica Hispana La Caridad we close cuts and wounds with sutures safely, no appointment needed and with care in Spanish.\n\n**What's included?**\n- Wound evaluation and cleaning\n- Closure with sutures (stitches)\n- Local anesthesia\n- Care instructions and warning signs\n- Suture removal when appropriate\n\n**When to come in**\nDeep cuts, wounds that bleed or won't close on their own, or that have open edges. Treating them promptly reduces the risk of infection and improves healing.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Scissors",
    "image": "/images/services/suturas-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "suturas houston",
      "puntos para herida houston",
      "cerrar herida houston",
      "doctor para cortadas houston"
    ],
    "keywordsEn": [
      "wound suturing houston",
      "stitches houston",
      "laceration repair houston",
      "cut treatment houston"
    ],
    "features": [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 24
  },
  {
    "id": "curacion-heridas",
    "slug": "curacion-heridas",
    "title": "Cura y Curación de Heridas",
    "titleEn": "Wound Care",
    "shortTitle": "Curación de Heridas",
    "description": "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, con precios accesibles.",
    "descriptionEn": "Wound care in Houston, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    "longDescription": "Una buena curación evita infecciones y ayuda a que la herida sane más rápido. En Clínica Hispana La Caridad limpiamos, curamos y vendamos tus heridas, y te seguimos hasta que cicatricen.\n\n**¿Qué incluye?**\n- Limpieza y desinfección de la herida\n- Aplicación de apósitos y vendajes\n- Cambio periódico de vendajes\n- Vigilancia de signos de infección\n- Indicaciones de cuidado en casa\n\n**Para todo tipo de heridas**\nHeridas postoperatorias, úlceras, quemaduras leves o heridas que tardan en sanar. Te ayudamos con curaciones regulares para una mejor recuperación.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Good wound care prevents infections and helps the wound heal faster. At Clínica Hispana La Caridad we clean, treat and dress your wounds, and follow you until they heal.\n\n**What's included?**\n- Wound cleaning and disinfection\n- Application of dressings and bandages\n- Periodic dressing changes\n- Monitoring for signs of infection\n- Home-care instructions\n\n**For all kinds of wounds**\nPost-surgical wounds, ulcers, minor burns or wounds that are slow to heal. We help with regular dressing changes for a better recovery.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/curacion-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "curacion de heridas houston",
      "cura de heridas houston",
      "cambio de vendaje houston",
      "limpieza de herida houston"
    ],
    "keywordsEn": [
      "wound care houston",
      "wound dressing houston",
      "dressing change houston",
      "wound cleaning houston"
    ],
    "features": [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español"
    ],
    "featuresEn": [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 25
  },
  {
    "id": "cirugias-menores",
    "slug": "cirugias-menores",
    "title": "Cirugías Menores",
    "titleEn": "Minor Surgery",
    "shortTitle": "Cirugías Menores",
    "description": "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    "descriptionEn": "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    "longDescription": "Muchos problemas de piel y tejidos blandos se resuelven con un procedimiento sencillo. En Clínica Hispana La Caridad realizamos cirugías menores ambulatorias con anestesia local, en un mismo día.\n\n**¿Qué incluye?**\n- Evaluación del lunar, quiste o lesión\n- Procedimiento ambulatorio con anestesia local\n- Extracción de lunares, quistes y lipomas\n- Indicaciones claras de cuidado posterior\n- Retiro de puntos cuando corresponde\n\n**Rápido y seguro**\nLa mayoría de estos procedimientos toman poco tiempo y no requieren hospitalización. Te explicamos cada paso en español para que estés tranquilo.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "Many skin and soft-tissue problems are solved with a simple procedure. At Clínica Hispana La Caridad we perform minor outpatient surgery with local anesthesia, in a single day.\n\n**What's included?**\n- Evaluation of the mole, cyst or lesion\n- Outpatient procedure with local anesthesia\n- Removal of moles, cysts and lipomas\n- Clear after-care instructions\n- Suture removal when appropriate\n\n**Fast and safe**\nMost of these procedures take little time and don't require hospitalization. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Stethoscope",
    "image": "/images/services/cirugias-menores.webp",
    "category": "tratamientos",
    "keywords": [
      "cirugia menor houston",
      "quitar lunar houston",
      "extraccion de quiste houston",
      "cirugia ambulatoria houston"
    ],
    "keywordsEn": [
      "minor surgery houston",
      "mole removal houston",
      "cyst removal houston",
      "lipoma removal houston"
    ],
    "features": [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 26
  },
  {
    "id": "drenaje-abscesos",
    "slug": "drenaje-abscesos",
    "title": "Drenaje de Abscesos",
    "titleEn": "Abscess Drainage",
    "shortTitle": "Drenaje de Abscesos",
    "description": "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    "descriptionEn": "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    "longDescription": "Un absceso es una acumulación de pus que causa dolor e hinchazón y necesita drenarse. En Clínica Hispana La Caridad lo tratamos de forma segura para aliviar la molestia y prevenir que la infección avance.\n\n**¿Qué incluye?**\n- Evaluación del absceso o infección de piel\n- Drenaje con anestesia local\n- Limpieza y desinfección de la zona\n- Tratamiento de la infección cuando se requiere\n- Indicaciones de cuidado y seguimiento\n\n**No lo dejes pasar**\nUn bulto rojo, caliente y doloroso, a veces con fiebre, necesita atención. Drenarlo a tiempo evita complicaciones y alivia el dolor rápidamente.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "An abscess is a buildup of pus that causes pain and swelling and needs to be drained. At Clínica Hispana La Caridad we treat it safely to relieve the discomfort and prevent the infection from spreading.\n\n**What's included?**\n- Evaluation of the abscess or skin infection\n- Drainage with local anesthesia\n- Cleaning and disinfection of the area\n- Treatment of the infection when needed\n- Care and follow-up instructions\n\n**Don't let it go**\nA red, warm, painful lump, sometimes with fever, needs attention. Draining it in time prevents complications and relieves pain quickly.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/drenaje-abscesos.webp",
    "category": "tratamientos",
    "keywords": [
      "drenaje de absceso houston",
      "drenar absceso houston",
      "infeccion de piel houston",
      "tratamiento de absceso houston"
    ],
    "keywordsEn": [
      "abscess drainage houston",
      "drain abscess houston",
      "skin infection houston",
      "boil treatment houston"
    ],
    "features": [
      "Drenaje del absceso",
      "Limpieza y desinfección",
      "Anestesia local",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Abscess drainage",
      "Cleaning and disinfection",
      "Local anesthesia",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 27
  },
  {
    "id": "unas-encarnadas",
    "slug": "unas-encarnadas",
    "title": "Extracción de Uñas Encarnadas",
    "titleEn": "Ingrown Toenail Removal",
    "shortTitle": "Uñas Encarnadas",
    "description": "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    "descriptionEn": "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    "longDescription": "Una uña encarnada puede doler mucho e infectarse si no se trata. En Clínica Hispana La Caridad la atendemos con un procedimiento sencillo y anestesia local para aliviarte el mismo día.\n\n**¿Qué incluye?**\n- Evaluación de la uña y el dedo\n- Procedimiento con anestesia local\n- Extracción de la porción encarnada de la uña\n- Tratamiento de la infección si la hay\n- Indicaciones de cuidado para evitar que regrese\n\n**Cuándo acudir**\nDolor, enrojecimiento, hinchazón o pus alrededor de la uña, sobre todo del dedo gordo del pie. Atenderla pronto evita una infección mayor.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "An ingrown toenail can hurt a lot and get infected if untreated. At Clínica Hispana La Caridad we treat it with a simple procedure and local anesthesia to relieve you the same day.\n\n**What's included?**\n- Evaluation of the nail and toe\n- Procedure with local anesthesia\n- Removal of the ingrown portion of the nail\n- Treatment of the infection if present\n- Care instructions to prevent recurrence\n\n**When to come in**\nPain, redness, swelling or pus around the nail, especially the big toe. Treating it promptly prevents a larger infection.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Bone",
    "image": "/images/services/unas-encarnadas.webp",
    "category": "tratamientos",
    "keywords": [
      "uña encarnada houston",
      "extraccion de uña encarnada houston",
      "tratamiento uña encarnada houston",
      "doctor para uña encarnada houston"
    ],
    "keywordsEn": [
      "ingrown toenail houston",
      "ingrown toenail removal houston",
      "ingrown nail treatment houston",
      "toenail doctor houston"
    ],
    "features": [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 28
  },
  {
    "id": "farmacia",
    "slug": "farmacia",
    "title": "Farmacia",
    "titleEn": "Pharmacy",
    "shortTitle": "Farmacia",
    "description": "Farmacia en Houston, TX dentro de la clínica. Surtimos tu receta al terminar la consulta, atención en español.",
    "descriptionEn": "Pharmacy in Houston, TX inside the clinic. We fill your prescription right after your visit, service in Spanish.",
    "longDescription": "Al terminar tu consulta en Clínica Hispana La Caridad puedes recoger tus medicamentos en nuestra propia farmacia, sin tener que ir a otro lugar. Es la comodidad de resolver todo en una sola visita, con atención en español.\n\n**¿Qué incluye?**\n- Surtido de tu receta justo al terminar la consulta\n- Medicamentos de marca y genéricos\n- Medicamentos de venta libre (OTC) para gripe, dolor, alergias y más\n- Asesoría del personal sobre cómo tomar tus medicamentos\n- Resurtido de recetas\n\n**¿Por qué usar nuestra farmacia?**\nTe ahorras una segunda parada: el médico te atiende, te receta y recoges tu medicamento en el mismo lugar. Te explicamos en español la dosis, los horarios y los cuidados.\n\n**¿Por qué elegir Clínica Hispana La Caridad?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5705 Fondren Rd STE 101, Houston, TX 77036, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland y comunidades cercanas.",
    "longDescriptionEn": "After your visit at Clínica Hispana La Caridad you can pick up your medications at our own pharmacy, without going anywhere else. It's the convenience of getting everything done in a single visit, with service in Spanish.\n\n**What's included?**\n- Your prescription filled right after your visit\n- Brand-name and generic medications\n- Over-the-counter (OTC) medications for colds, pain, allergies and more\n- Staff guidance on how to take your medications\n- Prescription refills\n\n**Why use our pharmacy?**\nYou skip the second stop: the doctor sees you, writes your prescription, and you pick up your medication in the same place. We explain the dosage, schedule and precautions in Spanish.\n\n**Why choose Clínica Hispana La Caridad?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5705 Fondren Rd STE 101, Houston, TX 77036, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Sharpstown, Gulfton, Bellaire, Westchase, Alief, Spring Branch, Meyerland and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/farmacia.webp",
    "category": "tratamientos",
    "keywords": [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "surtir receta houston"
    ],
    "keywordsEn": [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "fill prescription houston"
    ],
    "features": [
      "Surtido de tu receta al instante",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Asesoría sobre tus medicamentos en español"
    ],
    "featuresEn": [
      "Prescriptions filled on the spot",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medications",
      "Guidance about your medications in Spanish"
    ],
    "highlighted": false,
    "order": 29
  }
];

// Promociones — la imagen del flyer (public/images/promotions/<slug>.webp) es la
// fuente del precio; el texto lo replica como dato. Blurbs redactados de forma
// factual (sin claims médicos) por la política de salud de Google Ads.
export const PROMOTIONS: Promotion[] = [
  {
    slug: "chequeo-general-completo",
    title: "Chequeo General Completo",
    titleEn: "Complete General Check-Up",
    price: "$99",
    blurb:
      "Chequeo general completo por $99 (valor regular $250) que incluye examen general de sangre, prueba A1C (hemoglobina glicosilada), examen general de orina y consulta médica gratis. Sin cita previa y con atención en español.",
    blurbEn:
      "Complete general check-up for $99 (regular value $250) including a general blood panel, A1C (glycated hemoglobin) test, general urine test and a free medical consultation. Walk-ins welcome, with care in Spanish.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "General blood panel",
      "A1C (glycated hemoglobin) test",
      "General urine test",
      "Free medical consultation",
    ],
    alt: "Flyer de promoción Chequeo General Completo por $99 con consulta gratis en Clínica Hispana La Caridad, Houston",
    altEn:
      "Complete General Check-Up promotion flyer for $99 with free consultation at Clínica Hispana La Caridad, Houston",
  },
  {
    slug: "chequeo-mujer-ultrasonido",
    title: "Chequeo Completo de la Mujer",
    titleEn: "Complete Women's Check-Up",
    price: "$179",
    blurb:
      "¿Hace cuánto no revisas tu salud femenina? Chequeo completo de la mujer por $179 (valor regular $300) que incluye ultrasonido pélvico, Papanicolaou, examen de orina y consulta médica gratis. Sin cita previa y con atención en español.",
    blurbEn:
      "How long since your last women's health check? Complete women's check-up for $179 (regular value $300) including pelvic ultrasound, Pap smear, urine test and a free medical consultation. Walk-ins welcome, with care in Spanish.",
    includes: [
      "Ultrasonido pélvico",
      "Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
    alt: "Flyer de promoción Chequeo Completo de la Mujer por $179 con ultrasonido pélvico, Papanicolaou, examen de orina y consulta gratis en Clínica Hispana La Caridad, Houston",
    altEn:
      "Complete Women's Check-Up promotion flyer for $179 with pelvic ultrasound, Pap smear, urine test and free consultation at Clínica Hispana La Caridad, Houston",
  },
  {
    slug: "examen-completo-hombres",
    title: "Examen Completo para Hombres",
    titleEn: "Complete Men's Exam",
    price: "$89",
    blurb:
      "Paquete de chequeo para hombres que incluye examen de orina, examen de próstata y medición de testosterona. Una forma sencilla de revisar tu salud, sin cita previa y con atención en español.",
    blurbEn:
      "Men's check-up package including a urine test, prostate exam and testosterone measurement. A simple way to review your health — walk-ins welcome, with care in Spanish.",
    includes: [
      "Examen de orina",
      "Examen de próstata",
      "Medición de testosterona",
    ],
    includesEn: ["Urine test", "Prostate exam", "Testosterone measurement"],
    alt: "Flyer de promoción Examen Completo para Hombres por $89 en Clínica Hispana La Caridad, Houston",
    altEn:
      "Complete Men's Exam promotion flyer for $89 at Clínica Hispana La Caridad, Houston",
  },
  {
    slug: "chequeo-mujer",
    title: "Chequeo Completo de Mujer",
    titleEn: "Complete Women's Check-Up",
    price: "$79",
    blurb:
      "Chequeo de salud para la mujer que incluye examen de Papanicolaou, consulta ginecológica y orden para mamografía. Atención en español y precios accesibles.",
    blurbEn:
      "Women's health check-up including a Pap smear, gynecological consultation and a mammogram order. Care in Spanish with affordable pricing.",
    includes: [
      "Examen de Papanicolaou",
      "Consulta ginecológica",
      "Orden de mamografía",
    ],
    includesEn: [
      "Pap smear",
      "Gynecological consultation",
      "Mammogram order",
    ],
    alt: "Flyer de promoción Chequeo Completo de Mujer por $79 en Clínica Hispana La Caridad, Houston",
    altEn:
      "Complete Women's Check-Up promotion flyer for $79 at Clínica Hispana La Caridad, Houston",
  },
  {
    slug: "salud-intima-femenina",
    title: "Salud Íntima Femenina",
    titleEn: "Women's Intimate Health",
    price: "$69",
    blurb:
      "Evaluación de salud íntima femenina con consulta médica, cultivo íntimo y examen de orina. Atención confidencial con personal femenino y resultados rápidos.",
    blurbEn:
      "Women's intimate health evaluation with a medical consultation, intimate culture test and urine test. Confidential care with female staff and fast results.",
    includes: [
      "Consulta médica",
      "Cultivo íntimo",
      "Examen de orina incluido",
      "Atención confidencial con personal femenino",
    ],
    includesEn: [
      "Medical consultation",
      "Intimate culture test",
      "Urine test included",
      "Confidential care with female staff",
    ],
    alt: "Flyer de promoción Salud Íntima Femenina por $69 en Clínica Hispana La Caridad, Houston",
    altEn:
      "Women's Intimate Health promotion flyer for $69 at Clínica Hispana La Caridad, Houston",
  },
  {
    slug: "general-sangre-b12",
    title: "General de Sangre + Vitamina B12",
    titleEn: "Blood Panel + Vitamin B12",
    price: "$99",
    blurb:
      "Examen general de sangre acompañado de una inyección de vitamina B12. Una opción práctica para revisar tu salud general, con atención en español.",
    blurbEn:
      "General blood panel paired with a vitamin B12 injection. A practical option to review your general health, with care in Spanish.",
    includes: [
      "Examen general de sangre",
      "Inyección de vitamina B12",
    ],
    includesEn: ["General blood panel", "Vitamin B12 injection"],
    alt: "Flyer de promoción General de Sangre más Vitamina B12 por $99 en Clínica Hispana La Caridad, Houston",
    altEn:
      "Blood Panel plus Vitamin B12 promotion flyer for $99 at Clínica Hispana La Caridad, Houston",
  },
  {
    slug: "perfil-hormonal-hombres",
    title: "Perfil Hormonal para Hombres",
    titleEn: "Men's Hormone Panel",
    price: "$200",
    blurb:
      "Perfil hormonal masculino para evaluar tus niveles hormonales. Útil para revisar aspectos como energía, estado de ánimo, sueño y composición corporal. Resultados precisos y atención profesional.",
    blurbEn:
      "Male hormone panel to evaluate your hormone levels. Useful for reviewing aspects such as energy, mood, sleep and body composition. Accurate results and professional care.",
    includes: [
      "Evaluación de niveles hormonales",
      "Orientación sobre energía y estado de ánimo",
      "Resultados precisos",
      "Atención profesional",
    ],
    includesEn: [
      "Hormone level evaluation",
      "Guidance on energy and mood",
      "Accurate results",
      "Professional care",
    ],
    alt: "Flyer de promoción Perfil Hormonal para Hombres por $200 en Clínica Hispana La Caridad, Houston",
    altEn:
      "Men's Hormone Panel promotion flyer for $200 at Clínica Hispana La Caridad, Houston",
  },
  {
    slug: "perfil-hormonal-mujeres",
    title: "Perfil Hormonal para Mujeres",
    titleEn: "Women's Hormone Panel",
    price: "$250",
    blurb:
      "Perfil hormonal femenino para evaluar tus niveles hormonales. Útil para revisar aspectos relacionados con el ciclo menstrual, la fertilidad y la menopausia. Resultados precisos y atención profesional.",
    blurbEn:
      "Female hormone panel to evaluate your hormone levels. Useful for reviewing aspects related to the menstrual cycle, fertility and menopause. Accurate results and professional care.",
    includes: [
      "Evaluación de niveles hormonales",
      "Orientación sobre ciclo menstrual y fertilidad",
      "Resultados precisos",
      "Atención profesional",
    ],
    includesEn: [
      "Hormone level evaluation",
      "Guidance on menstrual cycle and fertility",
      "Accurate results",
      "Professional care",
    ],
    alt: "Flyer de promoción Perfil Hormonal para Mujeres por $250 en Clínica Hispana La Caridad, Houston",
    altEn:
      "Women's Hormone Panel promotion flyer for $250 at Clínica Hispana La Caridad, Houston",
  },
  {
    slug: "diagnostico-ets",
    title: "Diagnóstico Completo de ETS",
    titleEn: "Complete STD Testing",
    price: "$249",
    blurb:
      "Panel de diagnóstico para enfermedades de transmisión sexual que incluye pruebas de RPR, VIH, herpes, clamidia y gonorrea. Atención confidencial y en español.",
    blurbEn:
      "Diagnostic panel for sexually transmitted diseases including RPR, HIV, herpes, chlamydia and gonorrhea testing. Confidential care, in Spanish.",
    includes: [
      "Prueba de RPR (sífilis)",
      "Prueba de VIH",
      "Prueba de herpes",
      "Prueba de clamidia",
      "Prueba de gonorrea",
    ],
    includesEn: [
      "RPR (syphilis) test",
      "HIV test",
      "Herpes test",
      "Chlamydia test",
      "Gonorrhea test",
    ],
    alt: "Flyer de promoción Diagnóstico Completo de ETS por $249 en Clínica Hispana La Caridad, Houston",
    altEn:
      "Complete STD Testing promotion flyer for $249 at Clínica Hispana La Caridad, Houston",
  },
  {
    slug: "examen-dot",
    title: "Examen DOT",
    titleEn: "DOT Physical Exam",
    price: null,
    blurb:
      "Examen físico DOT para conductores comerciales, con proceso rápido y certificación oficial. Atención en español para que cumplas con los requisitos sin complicaciones.",
    blurbEn:
      "DOT physical exam for commercial drivers, with a fast process and official certification. Care in Spanish so you can meet the requirements without hassle.",
    includes: [
      "Examen físico rápido",
      "Certificación oficial DOT",
      "Atención en español",
    ],
    includesEn: [
      "Fast physical exam",
      "Official DOT certification",
      "Care in Spanish",
    ],
    alt: "Flyer de promoción Examen DOT para conductores en Clínica Hispana La Caridad, Houston",
    altEn:
      "DOT Physical Exam promotion flyer for drivers at Clínica Hispana La Caridad, Houston",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "cita-previa",
    question: "faq.q1",
    answer: "faq.a1",
  },
  {
    id: "sin-seguro",
    question: "faq.q2",
    answer: "faq.a2",
  },
  {
    id: "espanol",
    question: "faq.q3",
    answer: "faq.a3",
  },
  {
    id: "horarios",
    question: "faq.q4",
    answer: "faq.a4",
  },
  {
    id: "formas-pago",
    question: "faq.q5",
    answer: "faq.a5",
  },
  {
    id: "planes-pago",
    question: "faq.q6",
    answer: "faq.a6",
  },
  {
    id: "ubicacion-houston",
    question: "faq.q7",
    answer: "faq.a7",
  },
  {
    id: "examen-inmigracion",
    question: "faq.q8",
    answer: "faq.a8",
  },
  {
    id: "tiempo-espera",
    question: "faq.q9",
    answer: "faq.a9",
  },
  {
    id: "estacionamiento",
    question: "faq.q10",
    answer: "faq.a10",
  },
  {
    id: "clinica-cerca-de-mi",
    question: "faq.q11",
    answer: "faq.a11",
  },
  {
    id: "medico-primario",
    question: "faq.q12",
    answer: "faq.a12",
  },
];

export const NAV_ITEMS = [
  { label: "nav.services", href: "/services" },
  { label: "nav.greenCard", href: "/#green-card" },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/#contact" },
];

