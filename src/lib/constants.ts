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
    "dateModified": "2026-09-18",
    "title": "Exámenes y Tratamiento de la Tiroides",
    "titleEn": "Thyroid Testing & Treatment",
    "shortTitle": "Tiroides",
    "description": "Exámenes y tratamiento de la tiroides en Houston, TX. Pruebas de laboratorio y control en español, con precios accesibles.",
    "descriptionEn": "Thyroid testing and treatment in Houston, TX. Lab tests and follow-up in Spanish, with affordable pricing.",
    "longDescription": "La tiroides regula el metabolismo, y cuando falla los síntomas se confunden con otras cosas: cansancio, cambios de peso, caída de cabello o frío constante. Se estudia con un análisis de sangre que se hace en la clínica, sin cita previa.\n\n## ¿Qué síntomas hacen sospechar?\n\n**Tiroides lenta (hipotiroidismo):** cansancio que no mejora con el descanso, aumento de peso sin cambiar la dieta, piel seca, caída de cabello, estreñimiento, sensación de frío, reglas más abundantes.\n\n**Tiroides acelerada (hipertiroidismo):** pérdida de peso comiendo igual, palpitaciones, temblor en las manos, ansiedad, insomnio, sudoración, reglas más ligeras.\n\nNinguno de estos síntomas es exclusivo de la tiroides. Por eso se confirma con laboratorio antes de tratar.\n\n## ¿Qué mide el perfil tiroideo?\n\n- **TSH:** la hormona que da la orden. Es la primera que se altera y la más sensible\n- **T4 libre:** la hormona que produce la glándula\n- **T3:** se añade cuando se sospecha tiroides acelerada\n- **Anticuerpos:** cuando se busca una causa autoinmune\n\nNo hace falta ayuno para el perfil tiroideo. Si ya toma levotiroxina, tómela después de la extracción ese día.\n\n## ¿Conviene hacerse la prueba sin síntomas?\n\nEl [USPSTF](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/thyroid-dysfunction-screening) concluye que no hay evidencia suficiente para recomendar el cribado de tiroides en adultos sin síntomas. Con síntomas, antecedentes familiares, un bulto en el cuello o durante el embarazo, la situación cambia y sí está indicado.\n\n## ¿Cómo es el seguimiento?\n\nSi el resultado sale alterado, se inicia tratamiento y se repite el análisis a las 6 u 8 semanas para ajustar la dosis. Una vez estable, el control suele ser cada 6 o 12 meses. La dosis no se cambia por cómo se siente, sino por lo que dice el laboratorio.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. El perfil tiroideo puede incluirse en el mismo [análisis de sangre](/services/examenes-sangre) del chequeo general. Si el cansancio viene acompañado de azúcar o colesterol altos, el seguimiento continúa en [condiciones crónicas](/services/condiciones-cronicas).",
    "longDescriptionEn": "The thyroid regulates metabolism, and when it fails the symptoms get mistaken for other things: fatigue, weight changes, hair loss or feeling cold all the time. It is studied with a blood test done at the clinic, walk-in.\n\n## Which symptoms raise suspicion?\n\n**Underactive thyroid (hypothyroidism):** fatigue that rest does not fix, weight gain without diet changes, dry skin, hair loss, constipation, feeling cold, heavier periods.\n\n**Overactive thyroid (hyperthyroidism):** weight loss while eating the same, palpitations, hand tremor, anxiety, insomnia, sweating, lighter periods.\n\nNone of these symptoms belongs to the thyroid alone. That is why it is confirmed with lab work before treating.\n\n## What does a thyroid panel measure?\n\n- **TSH:** the hormone that gives the order. It is the first to shift and the most sensitive\n- **Free T4:** the hormone the gland produces\n- **T3:** added when an overactive thyroid is suspected\n- **Antibodies:** when an autoimmune cause is being looked for\n\nNo fasting is needed for a thyroid panel. If you already take levothyroxine, take it after the blood draw that day.\n\n## Is testing worthwhile without symptoms?\n\nThe [USPSTF](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/thyroid-dysfunction-screening) concludes there is not enough evidence to recommend thyroid screening in adults without symptoms. With symptoms, a family history, a lump in the neck or during pregnancy, the situation changes and testing is warranted.\n\n## What does follow-up look like?\n\nIf the result is abnormal, treatment starts and the test is repeated in 6 to 8 weeks to adjust the dose. Once stable, checks are usually every 6 to 12 months. The dose is not changed by how you feel, but by what the lab says.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. The thyroid panel can be included in the same [blood work](/services/examenes-sangre) as a general check-up. If fatigue comes with high blood sugar or cholesterol, follow-up continues under [chronic conditions](/services/condiciones-cronicas).",
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
    "dateModified": "2026-09-18",
    "title": "Exámenes y Tratamiento de Alergias",
    "titleEn": "Allergy Testing & Treatment",
    "shortTitle": "Alergias",
    "description": "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, con precios accesibles.",
    "descriptionEn": "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, with affordable pricing.",
    "longDescription": "Las alergias respiratorias y de piel se evalúan en consulta a partir de los síntomas, el momento del año en que aparecen y lo que los desencadena. Sin cita previa y en español.\n\n## ¿Qué síntomas se tratan?\n\n- **Respiratorios:** estornudos en serie, nariz que gotea o se tapa, picazón de nariz y ojos, ojos llorosos, tos seca que empeora de noche\n- **De piel:** ronchas que aparecen y desaparecen, picazón, eczema, enrojecimiento tras un contacto\n- **Estacionales:** síntomas que vuelven cada año en la misma época\n\n## ¿Alergia o resfriado?\n\nSe confunden a menudo, pero hay diferencias que orientan:\n\n| Señal | Alergia | Resfriado |\n| --- | --- | --- |\n| Fiebre | No | A veces |\n| Picazón de ojos y nariz | Muy típica | Poco frecuente |\n| Duración | Semanas o meses | De 7 a 10 días |\n| Moco | Claro y líquido | Se espesa con los días |\n| Aparición | Al exponerse | Progresiva |\n\n## ¿Qué se hace en la consulta?\n\nSe revisa el patrón de síntomas, la exposición en casa y en el trabajo, los antecedentes familiares y lo que ya ha probado. A partir de ahí se plantea el tratamiento: antihistamínicos, corticoide nasal, medidas de control ambiental. Si los síntomas son persistentes o graves, o si se sospecha alergia alimentaria o a picaduras, se recomienda valoración con alergología y se entrega el reporte para llevarlo.\n\n## Houston y el polen\n\nEn esta zona el calendario alérgico es largo: el cedro en invierno, los árboles en primavera, los pastos al final de la primavera y la ambrosía a finales de verano. A eso se suman los ácaros y el moho, que no tienen temporada. Anotar cuándo empeoran los síntomas ayuda más al diagnóstico que cualquier prueba aislada.\n\n## ¿Cuándo no hay que esperar?\n\nDificultad para respirar, sensación de cierre en la garganta, hinchazón de labios o lengua, o ronchas que aparecen de golpe por todo el cuerpo: eso es una reacción grave, llame al 911.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. Si la tos y la congestión vienen con fiebre, conviene descartar antes una infección en [enfermedades respiratorias](/services/enfermedades-respiratorias).",
    "longDescriptionEn": "Respiratory and skin allergies are assessed in the visit based on symptoms, the time of year they appear and what sets them off. Walk-in and in Spanish.\n\n## Which symptoms are treated?\n\n- **Respiratory:** bursts of sneezing, runny or blocked nose, itchy nose and eyes, watery eyes, dry cough that is worse at night\n- **Skin:** hives that come and go, itching, eczema, redness after contact\n- **Seasonal:** symptoms that return at the same time each year\n\n## Allergy or a cold?\n\nThey are often confused, but some signs point one way:\n\n| Sign | Allergy | Cold |\n| --- | --- | --- |\n| Fever | No | Sometimes |\n| Itchy eyes and nose | Very typical | Uncommon |\n| Duration | Weeks or months | 7 to 10 days |\n| Mucus | Clear and runny | Thickens over days |\n| Onset | On exposure | Gradual |\n\n## What happens at the visit?\n\nThe pattern of symptoms is reviewed, along with exposure at home and at work, family history and what you have already tried. From there a plan is set: antihistamines, nasal steroid, environmental control measures. If symptoms are persistent or severe, or if food or sting allergy is suspected, an allergy specialist assessment is recommended and you are given the report to take along.\n\n## Houston and pollen\n\nThe allergy calendar here is long: cedar in winter, trees in spring, grasses in late spring and ragweed in late summer. On top of that, dust mites and mold have no season at all. Noting when symptoms worsen helps the diagnosis more than any isolated test.\n\n## When not to wait\n\nDifficulty breathing, a closing feeling in the throat, swelling of the lips or tongue, or hives appearing suddenly all over the body: that is a severe reaction, call 911.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. If cough and congestion come with fever, it is worth ruling out an infection first under [respiratory illness](/services/enfermedades-respiratorias).",
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
    "dateModified": "2026-09-18",
    "title": "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    "titleEn": "Flu & COVID Testing and Respiratory Illness Care",
    "shortTitle": "Respiratorias",
    "description": "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    "descriptionEn": "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    "longDescription": "Las pruebas rápidas de influenza y COVID se hacen en la clínica y el resultado se lee en la misma consulta. Sin cita previa, de lunes a domingo.\n\n## ¿Qué se hace en la visita?\n\n- Prueba rápida de influenza y de COVID-19 con muestra nasal\n- Revisión de garganta, oídos y pulmones\n- Medición de oxígeno y temperatura\n- Prueba rápida de [estreptococo](/services/prueba-strep) si el dolor de garganta es el síntoma principal\n- Tratamiento indicado en la misma consulta\n\n## ¿Gripe, COVID o resfriado?\n\nLos síntomas se solapan tanto que distinguirlos a ojo no es fiable. La gripe suele empezar de golpe, con fiebre alta y dolor de cuerpo; el resfriado avanza poco a poco y rara vez da fiebre alta; la COVID puede parecerse a cualquiera de los dos. Por eso se usa la prueba: el tratamiento cambia según el resultado.\n\n## Por qué conviene ir pronto\n\nLos antivirales contra la influenza funcionan mejor cuando se empiezan **dentro de las primeras 48 horas** desde que aparecen los síntomas, según los [CDC](https://www.cdc.gov/flu/). Pasado ese plazo siguen teniendo indicación en algunos casos, pero el beneficio es menor. Si tiene fiebre y dolor de cuerpo, no espere a ver si mejora solo.\n\n## ¿Qué otras cosas se tratan?\n\nBronquitis, tos persistente, faringitis, sinusitis y reagudizaciones de asma. No toda infección respiratoria necesita antibiótico: la mayoría son virales y el antibiótico no ayuda. La consulta sirve justamente para distinguir cuál es cuál.\n\n## ¿Cuándo hay que ir a urgencias?\n\n- Dificultad para respirar o falta de aire en reposo\n- Dolor en el pecho o presión que no cede\n- Labios o cara azulados\n- Confusión o dificultad para despertarse\n- Fiebre alta que no baja con medicación en un niño pequeño\n\n## Prevención\n\nLa vacuna contra la influenza de cada temporada se aplica en el servicio de [vacunas](/services/vacunas), sin cita. Reduce el riesgo de cuadro grave, especialmente en mayores de 65 años, embarazadas y personas con diabetes o asma.",
    "longDescriptionEn": "Rapid flu and COVID tests are done at the clinic and the result is read in the same visit. Walk-in, Monday through Sunday.\n\n## What happens at the visit?\n\n- Rapid influenza and COVID-19 testing with a nasal sample\n- Examination of throat, ears and lungs\n- Oxygen and temperature measurement\n- Rapid [strep](/services/prueba-strep) test if sore throat is the main symptom\n- Treatment set out in the same visit\n\n## Flu, COVID or a cold?\n\nThe symptoms overlap so much that telling them apart by eye is not reliable. Flu tends to start suddenly, with high fever and body aches; a cold builds gradually and rarely brings high fever; COVID can resemble either. That is why testing is used: treatment changes with the result.\n\n## Why coming early matters\n\nInfluenza antivirals work best when started **within the first 48 hours** of symptoms appearing, according to the [CDC](https://www.cdc.gov/flu/). After that window they still have a role in some cases, but the benefit is smaller. If you have fever and body aches, do not wait to see if it passes.\n\n## What else is treated?\n\nBronchitis, persistent cough, pharyngitis, sinusitis and asthma flare-ups. Not every respiratory infection needs an antibiotic: most are viral and an antibiotic does not help. The visit is precisely for telling which is which.\n\n## When to go to the emergency room\n\n- Difficulty breathing or shortness of breath at rest\n- Chest pain or pressure that does not ease\n- Bluish lips or face\n- Confusion or difficulty waking up\n- High fever in a small child that does not come down with medication\n\n## Prevention\n\nEach season's flu vaccine is given under [vaccines](/services/vacunas), walk-in. It lowers the risk of severe illness, especially in people over 65, pregnant women and those with diabetes or asthma.",
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
      "Resultado en la misma consulta",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid flu and COVID testing",
      "Result in the same visit",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 4
  },
  {
    "id": "examen-fisico-escolar",
    "slug": "examen-fisico-escolar",
    "dateModified": "2026-09-18",
    "title": "Chequeos Físicos Escolares y Deportivos",
    "titleEn": "School & Sports Physical Exams",
    "shortTitle": "Examen Físico",
    "description": "Chequeos físicos escolares y deportivos en Houston, TX. Rápidos, en español y con precios accesibles.",
    "descriptionEn": "School and sports physical exams in Houston, TX. Fast, in Spanish, with affordable pricing.",
    "longDescription": "El examen físico escolar y deportivo se hace sin cita previa, con el formulario del distrito o de la liga llenado y firmado en la visita.\n\n## ¿Qué incluye?\n\n- Historial médico y antecedentes familiares\n- Peso, talla, presión arterial y pulso\n- Vista y oído\n- Corazón y pulmones\n- Abdomen, columna, articulaciones y flexibilidad\n- Revisión de vacunas al día\n- Formulario escolar o deportivo llenado y firmado\n\n## ¿Qué hay que llevar?\n\n- **El formulario del distrito o de la liga**, si ya se lo dieron\n- Carné de vacunación\n- Lista de medicamentos, incluidos los inhaladores\n- Lentes, si los usa\n- Si tiene asma, alergias o alguna condición del corazón, los informes de su médico\n\nSin el formulario correcto hay que volver: cada distrito y cada liga tienen el suyo. En Texas, los formularios para deportes escolares son los de la UIL.\n\n## ¿Qué se busca en un físico deportivo?\n\nSobre todo condiciones del corazón que puedan dar problemas con el esfuerzo. Por eso se pregunta por desmayos durante el ejercicio, dolor en el pecho al correr, falta de aire desproporcionada o antecedentes de muerte súbita en la familia. Si algo de eso aparece, se deriva a cardiología antes de firmar.\n\nTambién se revisan lesiones previas mal curadas, que son la causa más frecuente de que se repitan.\n\n## ¿Cuándo conviene hacerlo?\n\nAntes de que empiece la temporada, no la semana anterior al primer partido. Si aparece algo que necesita valoración adicional, hay margen para resolverlo sin perder el inicio de la temporada.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. Si además faltan vacunas, se aplican en la misma visita en el servicio de [vacunas](/services/vacunas).",
    "longDescriptionEn": "The school and sports physical is done walk-in, with the district or league form filled out and signed during the visit.\n\n## What does it include?\n\n- Medical history and family background\n- Weight, height, blood pressure and pulse\n- Vision and hearing\n- Heart and lungs\n- Abdomen, spine, joints and flexibility\n- Review of vaccines being up to date\n- School or sports form completed and signed\n\n## What to bring\n\n- **The district or league form**, if it has already been given to you\n- Vaccination card\n- Medication list, inhalers included\n- Glasses, if worn\n- If there is asthma, allergies or any heart condition, the doctor's reports\n\nWithout the right form you have to come back: every district and league has its own. In Texas, school sports use the UIL forms.\n\n## What is a sports physical looking for?\n\nAbove all, heart conditions that could cause trouble with exertion. That is why the questions cover fainting during exercise, chest pain when running, shortness of breath out of proportion to the effort, or a family history of sudden death. If any of that comes up, a cardiology referral happens before signing.\n\nPrevious injuries that never healed properly are also reviewed, since they are the most common reason injuries repeat.\n\n## When should it be done?\n\nBefore the season starts, not the week before the first game. If something turns up that needs further assessment, there is room to resolve it without missing the start of the season.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. If vaccines are also missing, they are given in the same visit under [vaccines](/services/vacunas).",
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
    "dateModified": "2026-09-18",
    "title": "Examen y Diagnóstico de Embarazo",
    "titleEn": "Pregnancy Testing & Confirmation",
    "shortTitle": "Prueba de Embarazo",
    "description": "Examen y diagnóstico de embarazo en Houston, TX. Pruebas confiables y orientación en español, con precios accesibles.",
    "descriptionEn": "Pregnancy testing and confirmation in Houston, TX. Reliable tests and guidance in Spanish, with affordable pricing.",
    "longDescription": "La prueba de embarazo se hace en la clínica, sin cita previa, y el resultado se le da y se le explica en la misma consulta.\n\n## ¿Cómo funciona la prueba?\n\nDetecta la hormona hCG, que aparece tras la implantación. Se puede hacer en orina o en sangre. La de sangre detecta niveles más bajos y sirve antes; la de orina es más rápida y basta en la mayoría de los casos.\n\n## ¿Cuándo es fiable?\n\nA partir del primer día de retraso de la regla, la prueba de orina es fiable en la mayoría de las mujeres. Antes de esa fecha puede salir negativa aunque haya embarazo, porque la hormona todavía está baja. Si el retraso continúa y la prueba dio negativa, conviene repetirla en unos días o hacer la de sangre.\n\nLa primera orina de la mañana es la más concentrada, y por eso la más fiable para la prueba de orina.\n\n## ¿Y si sale positiva?\n\nEn la misma visita se confirma, se calcula el tiempo de gestación a partir de la fecha de la última regla y se explican los siguientes pasos: qué exámenes tocan, qué vitaminas empezar y qué señales vigilar. Si hace falta ver el saco gestacional o precisar las semanas, se hace un [ultrasonido](/services/ultrasonido).\n\n## ¿Y si sale negativa pero no baja la regla?\n\nUn retraso puede deberse a muchas cosas además del embarazo: estrés, cambios de peso, tiroides, síndrome de ovario poliquístico o el propio método anticonceptivo. Si se repite, la consulta de [ginecología](/services/ginecologia) busca la causa, y a veces se incluye el perfil de [tiroides](/services/tiroides).\n\n## Señales que no pueden esperar\n\nCon una prueba positiva, acuda a urgencias si aparece dolor abdominal intenso de un solo lado, sangrado abundante, mareo o desmayo. Puede tratarse de un embarazo ectópico, que es una urgencia.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche, con atención en español y sin necesidad de seguro médico.",
    "longDescriptionEn": "The pregnancy test is done at the clinic, walk-in, and the result is given and explained in the same visit.\n\n## How does the test work?\n\nIt detects the hormone hCG, which appears after implantation. It can be done in urine or blood. The blood test detects lower levels and works earlier; the urine test is faster and is enough in most cases.\n\n## When is it reliable?\n\nFrom the first day of a missed period, the urine test is reliable for most women. Before that it can come back negative even when there is a pregnancy, because the hormone is still low. If the period does not arrive and the test was negative, it is worth repeating in a few days or doing the blood test.\n\nThe first urine of the morning is the most concentrated, and therefore the most reliable for a urine test.\n\n## What if it is positive?\n\nIn the same visit it is confirmed, gestational age is calculated from the date of your last period, and the next steps are explained: which tests are due, which vitamins to start and which signs to watch for. If the gestational sac needs to be seen or the weeks pinned down, an [ultrasound](/services/ultrasonido) is done.\n\n## What if it is negative but the period still has not come?\n\nA missed period can have many causes besides pregnancy: stress, weight changes, thyroid, polycystic ovary syndrome or the birth control method itself. If it repeats, a [gynecology](/services/ginecologia) visit looks for the cause, and sometimes a [thyroid](/services/tiroides) panel is included.\n\n## Signs that cannot wait\n\nWith a positive test, go to the emergency room if severe one-sided abdominal pain, heavy bleeding, dizziness or fainting appear. It could be an ectopic pregnancy, which is an emergency.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM, with care in Spanish and no insurance needed.",
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
    "dateModified": "2026-09-18",
    "title": "Tratamientos Anticonceptivos",
    "titleEn": "Contraceptive Methods",
    "shortTitle": "Anticonceptivos",
    "description": "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    "descriptionEn": "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana La Caridad se orienta sobre los métodos anticonceptivos y se inician **pastillas e inyección**. Para otros métodos, la consulta sirve para resolver dudas y saber qué pedir y dónde.\n\n## ¿Qué se hace en la consulta?\n\n- Revisión del historial médico, la presión y los antecedentes familiares\n- [Prueba de embarazo](/services/prueba-embarazo) antes de iniciar el método\n- Elección del método según su situación, no según una lista genérica\n- Inicio de pastillas o inyección, con la pauta explicada\n- Seguimiento para revisar tolerancia y efectos\n\n## ¿Qué método conviene?\n\nLa pregunta no es cuál es el mejor, sino cuál encaja con su vida:\n\n- **Pastilla:** control diario, se interrumpe cuando usted decide, pero depende de tomarla a la misma hora\n- **Inyección:** cada tres meses, deja menos margen al olvido; el retorno de la fertilidad puede tardar más tras suspenderla\n- **Implante y DIU:** de larga duración y sin mantenimiento diario. Aquí no se colocan, pero sí se orienta sobre ellos y se puede [retirar un implante](/services/extraccion-implantes) ya colocado\n- **Preservativo:** el único que además protege de infecciones de transmisión sexual\n\nNingún método hormonal protege de las [infecciones de transmisión sexual](/services/enfermedades-transmision-sexual). Si hay riesgo, se combina.\n\n## Antes de empezar, conviene decir\n\n- Si fuma y su edad, porque cambia la indicación de los métodos con estrógeno\n- Si tiene migraña con aura\n- Si ha tenido coágulos, presión alta o problemas del hígado\n- Si está amamantando\n- Qué otros medicamentos toma, incluidos los naturales\n\n## ¿Y los efectos secundarios?\n\nLos primeros meses suele haber ajuste: sangrado irregular, sensibilidad en el pecho o cambios de ánimo. Si a los tres meses sigue igual o empeora, no lo aguante: se puede cambiar de método.\n\nAcuda de inmediato ante dolor intenso en el pecho o la pierna, falta de aire, dolor de cabeza muy fuerte o pérdida de visión.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche.",
    "longDescriptionEn": "At Clínica Hispana La Caridad you get guidance on birth control methods, and **pills and the injection** are started here. For other methods, the visit is for answering questions and knowing what to ask for and where.\n\n## What happens at the visit?\n\n- Review of medical history, blood pressure and family background\n- [Pregnancy test](/services/prueba-embarazo) before starting a method\n- Choosing the method that fits your situation, not a generic list\n- Starting pills or the injection, with the schedule explained\n- Follow-up to review tolerance and side effects\n\n## Which method suits you?\n\nThe question is not which is best, but which fits your life:\n\n- **Pill:** daily control, stopped whenever you decide, but it depends on taking it at the same time\n- **Injection:** every three months, leaving less room for forgetting; fertility may take longer to return after stopping\n- **Implant and IUD:** long-acting and with no daily upkeep. They are not placed here, but guidance is given and an already-placed [implant can be removed](/services/extraccion-implantes)\n- **Condom:** the only one that also protects against sexually transmitted infections\n\nNo hormonal method protects against [sexually transmitted infections](/services/enfermedades-transmision-sexual). Where there is risk, they are combined.\n\n## Before starting, it helps to mention\n\n- If you smoke, and your age, because it changes which estrogen methods are advisable\n- If you get migraine with aura\n- If you have had clots, high blood pressure or liver problems\n- If you are breastfeeding\n- Which other medication you take, natural remedies included\n\n## What about side effects?\n\nThe first months usually involve adjustment: irregular bleeding, breast tenderness or mood changes. If at three months it is the same or worse, do not put up with it: the method can be changed.\n\nSeek care immediately for severe chest or leg pain, shortness of breath, a very severe headache or loss of vision.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM.",
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
    "dateModified": "2026-09-18",
    "title": "Extracción de Implantes Subdérmicos",
    "titleEn": "Subdermal Implant Removal",
    "shortTitle": "Implantes",
    "description": "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Con precios accesibles.",
    "descriptionEn": "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. With affordable pricing.",
    "longDescription": "La extracción del implante anticonceptivo se hace en la clínica, con anestesia local y en una sola visita, sin cita previa.\n\n## ¿Cuándo se retira?\n\n- Al cumplirse la duración del implante\n- Si desea buscar un embarazo\n- Si los efectos secundarios no mejoran con el tiempo\n- Si quiere cambiar a otro método\n- Si el implante se ha desplazado o se palpa distinto\n\n## ¿Cómo es el procedimiento?\n\nSe localiza el implante bajo la piel del brazo, se anestesia la zona con una inyección pequeña y se retira a través de una incisión de pocos milímetros. Dura unos minutos. Sentirá presión, no dolor. Se cierra con un punto o con adhesivo y se cubre con un vendaje compresivo.\n\n## Antes de venir\n\n- Traiga la tarjeta del implante si la conserva: indica el tipo y la fecha de colocación\n- Diga si alguna vez le costó localizarlo o si se lo colocaron profundo\n- Avise si toma anticoagulantes\n\n## Después de la extracción\n\n- Mantenga el vendaje 24 horas y la zona seca dos días\n- Es normal un moretón en el brazo durante una o dos semanas\n- Evite cargar peso con ese brazo los primeros días\n- La fertilidad vuelve rápido tras la retirada: si no desea embarazo, conviene iniciar otro método de inmediato\n\nEn la consulta de [anticonceptivos](/services/anticonceptivos) se revisa qué método continuar. Aquí se inician pastillas e inyección; para colocar un implante nuevo o un DIU se le orienta sobre dónde acudir.\n\n## Cuándo volver\n\nSi aparece enrojecimiento que se extiende, pus, fiebre, o si el dolor aumenta en lugar de ceder.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. El costo se le dice antes de empezar.",
    "longDescriptionEn": "Removal of a contraceptive implant is done at the clinic, under local anesthesia and in a single visit, walk-in.\n\n## When is it removed?\n\n- When the implant reaches the end of its lifespan\n- If you want to try for a pregnancy\n- If side effects do not improve over time\n- If you want to switch to another method\n- If the implant has moved or feels different\n\n## What is the procedure like?\n\nThe implant is located under the skin of the arm, the area is numbed with a small injection and it is removed through an incision a few millimeters long. It takes a few minutes. You will feel pressure, not pain. It is closed with a stitch or adhesive and covered with a pressure bandage.\n\n## Before coming\n\n- Bring the implant card if you kept it: it shows the type and insertion date\n- Say if it was ever hard to locate or was inserted deep\n- Mention if you take blood thinners\n\n## After removal\n\n- Keep the bandage on for 24 hours and the area dry for two days\n- A bruise on the arm for a week or two is normal\n- Avoid lifting with that arm for the first few days\n- Fertility returns quickly after removal: if you do not want a pregnancy, starting another method right away is advisable\n\nA [birth control](/services/anticonceptivos) visit reviews which method to continue with. Pills and the injection are started here; for a new implant or an IUD you are pointed to where to go.\n\n## When to come back\n\nIf spreading redness, pus or fever appear, or if pain increases instead of easing.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. The cost is given before starting.",
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
    "dateModified": "2026-09-18",
    "title": "Examen de Orina y Tratamiento de Infecciones Urinarias",
    "titleEn": "Urinalysis & Urinary Infection Treatment",
    "shortTitle": "Infecciones Urinarias",
    "description": "Examen de orina y tratamiento de infecciones urinarias en Houston, TX, en la misma consulta. En español, con precios accesibles.",
    "descriptionEn": "Urinalysis and urinary infection treatment in Houston, TX, same day. In Spanish, with affordable pricing.",
    "longDescription": "Las infecciones urinarias se diagnostican con un examen de orina que se hace en la propia clínica, y el tratamiento se indica en la misma consulta. Sin cita previa y en español.\n\n## ¿Cuáles son los síntomas?\n\n- Ardor o dolor al orinar\n- Ganas frecuentes de orinar, aunque salga poco\n- Orina turbia, con mal olor o con sangre\n- Molestia o presión en la parte baja del abdomen\n- En personas mayores, a veces el único signo es confusión o decaimiento\n\n## ¿Cómo se diagnostica?\n\nCon una muestra de orina que se analiza en la clínica: se busca sangre, nitritos, leucocitos y proteína. Si el cuadro se repite o no responde al tratamiento, se envía un cultivo al laboratorio para identificar la bacteria y saber qué antibiótico funciona.\n\n## ¿Cuándo es una urgencia?\n\nUna infección de vejiga es molesta, pero se resuelve. **Lo que no puede esperar es cuando la infección sube al riñón.** Acuda a urgencias si aparece:\n\n- Fiebre con escalofríos\n- Dolor en el costado o en la espalda baja\n- Náuseas o vómitos\n- Sangre abundante en la orina\n\n## ¿Cómo prevenirlas?\n\nSegún el [NIDDK](https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-infection-uti-in-adults), lo que más ayuda es beber suficiente agua, no aguantar las ganas de orinar, orinar después de tener relaciones y limpiarse de adelante hacia atrás. En mujeres con infecciones repetidas conviene revisar también otros factores en la consulta de [ginecología](/services/ginecologia).\n\n## ¿Cómo prepararse para el examen de orina?\n\n- Si puede, no orine en la hora previa a la visita\n- Se recoge la muestra a media micción, tras limpiar la zona\n- Avise si está tomando antibiótico: altera el resultado\n- Si está menstruando, dígalo, porque la sangre puede confundir la lectura\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. El examen de orina se hace en la clínica y el equipo médico le explica el resultado y el plan en español. Si los episodios se repiten varias veces al año, conviene estudiar la causa en lugar de tratar cada episodio por separado.",
    "longDescriptionEn": "Urinary tract infections are diagnosed with a urine test done at the clinic itself, and treatment is set out in the same visit. Walk-in and in Spanish.\n\n## What are the symptoms?\n\n- Burning or pain when urinating\n- Frequent urge to urinate, even when little comes out\n- Cloudy urine, with a bad smell or with blood\n- Discomfort or pressure in the lower abdomen\n- In older adults, sometimes the only sign is confusion or low energy\n\n## How is it diagnosed?\n\nWith a urine sample analyzed at the clinic: it looks for blood, nitrites, leukocytes and protein. If the problem recurs or does not respond to treatment, a culture is sent to the lab to identify the bacteria and find which antibiotic works.\n\n## When is it an emergency?\n\nA bladder infection is uncomfortable, but it resolves. **What cannot wait is an infection that reaches the kidney.** Go to the emergency room if you have:\n\n- Fever with chills\n- Pain in the flank or lower back\n- Nausea or vomiting\n- Heavy blood in the urine\n\n## How to prevent them\n\nAccording to the [NIDDK](https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-infection-uti-in-adults), what helps most is drinking enough water, not holding in urine, urinating after sex and wiping front to back. In women with repeated infections it is worth reviewing other factors in a [gynecology](/services/ginecologia) visit too.\n\n## How to prepare for the urine test\n\n- If you can, do not urinate in the hour before your visit\n- The sample is collected mid-stream, after cleaning the area\n- Say if you are taking an antibiotic: it changes the result\n- If you are on your period, mention it, because blood can confuse the reading\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. The urine test is done at the clinic and the medical team explains the result and the plan. If episodes repeat several times a year, it is worth investigating the cause rather than treating each episode separately.",
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
      "Tratamiento en la misma consulta",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Treatment in the same visit",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 12
  },
  {
    "id": "examen-heces",
    "slug": "examen-heces",
    "dateModified": "2026-09-18",
    "title": "Exámenes de Heces Fecales",
    "titleEn": "Stool Tests",
    "shortTitle": "Examen de Heces",
    "description": "Exámenes de heces fecales en Houston, TX. Detección de parásitos e infecciones, en español, con precios accesibles.",
    "descriptionEn": "Stool tests in Houston, TX. Detection of parasites and infections, in Spanish, with affordable pricing.",
    "longDescription": "El examen de heces busca infecciones, parásitos y sangre oculta. Se indica en consulta y la muestra se recoge en casa siguiendo unas instrucciones sencillas.\n\n## ¿Cuándo se pide?\n\n- Diarrea que dura más de unos días\n- Diarrea tras un viaje o tras consumir agua o alimentos sospechosos\n- Dolor abdominal persistente con cambios en la evacuación\n- Sangre visible en las heces o heces muy oscuras\n- Pérdida de peso sin explicación\n- Parásitos como parte de un chequeo, sobre todo en niños\n\n## ¿Qué se analiza?\n\n- **Coproparasitoscópico:** huevos y parásitos\n- **Coprocultivo:** bacterias que causan diarrea\n- **Sangre oculta:** sangrado que no se ve a simple vista\n- **Examen general:** grasa, moco, restos sin digerir\n\n## ¿Cómo se recoge la muestra?\n\n- Use el frasco estéril que se le entrega, no envases de casa\n- La muestra no debe mezclarse con orina ni con agua del inodoro\n- Basta una porción del tamaño de una nuez, o unos mililitros si es líquida\n- Llévela a la clínica lo antes posible; si tarda, manténgala refrigerada\n- Si le pidieron varias muestras, recójalas en días distintos: los parásitos no se eliminan todos los días\n\nAvise si está tomando antibiótico, antiácidos o antidiarreicos: alteran el resultado.\n\n## ¿Cuándo no esperar al resultado?\n\nDiarrea con sangre abundante, fiebre alta, vómitos que impiden beber, o signos de deshidratación como boca seca, orinar muy poco o mareo al levantarse. Ahí lo que corresponde es acudir de inmediato, y a veces reponer líquidos con [suero intravenoso](/services/sueros-vitaminados).\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche.",
    "longDescriptionEn": "A stool test looks for infections, parasites and hidden blood. It is ordered at the visit and the sample is collected at home following simple instructions.\n\n## When is it ordered?\n\n- Diarrhea lasting more than a few days\n- Diarrhea after travel or after suspect food or water\n- Persistent abdominal pain with changes in bowel habits\n- Visible blood in the stool, or very dark stool\n- Unexplained weight loss\n- Parasites as part of a check-up, especially in children\n\n## What is analyzed?\n\n- **Ova and parasites:** eggs and parasites\n- **Stool culture:** bacteria that cause diarrhea\n- **Occult blood:** bleeding not visible to the eye\n- **General exam:** fat, mucus, undigested remains\n\n## How is the sample collected?\n\n- Use the sterile container you are given, not a household jar\n- The sample must not mix with urine or toilet water\n- A portion the size of a walnut is enough, or a few milliliters if liquid\n- Bring it to the clinic as soon as possible; if it takes longer, keep it refrigerated\n- If several samples were requested, collect them on different days: parasites are not shed every day\n\nMention if you are taking antibiotics, antacids or antidiarrheals: they change the result.\n\n## When not to wait for the result\n\nDiarrhea with heavy bleeding, high fever, vomiting that prevents drinking, or signs of dehydration such as a dry mouth, passing very little urine or dizziness on standing. That calls for immediate care, and sometimes fluid replacement with an [IV drip](/services/sueros-vitaminados).\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM.",
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
    "dateModified": "2026-09-18",
    "title": "Prueba de Estreptococo (Strep Test)",
    "titleEn": "Strep Test",
    "shortTitle": "Prueba de Strep",
    "description": "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Strep test in Houston, TX. Fast result and treatment in Spanish, with affordable pricing.",
    "longDescription": "El dolor de garganta casi siempre es viral, pero cuando lo causa el estreptococo sí necesita antibiótico. La prueba rápida se hace en la clínica con un hisopado de garganta y el resultado se lee en la misma consulta.\n\n## ¿Cuándo conviene hacerla?\n\n- Dolor de garganta intenso y de aparición brusca\n- Fiebre\n- Ganglios del cuello inflamados y dolorosos\n- Placas blancas en las amígdalas\n- **Ausencia de tos:** cuanto menos catarro hay, más probable es el estreptococo\n\nSi hay tos, moco abundante, ronquera o conjuntivitis, lo más probable es un virus, y el antibiótico no ayuda.\n\n## ¿Cómo es la prueba?\n\nSe pasa un hisopo por la parte de atrás de la garganta. Molesta unos segundos y puede dar arcada, pero no duele. Si la prueba rápida sale negativa y la sospecha es alta, se puede enviar un cultivo al laboratorio para confirmarlo.\n\n## ¿Por qué importa tratarlo?\n\nEl estreptococo no tratado puede complicarse con abscesos, y en algunos casos con fiebre reumática, que afecta al corazón. Es la razón por la que este cuadro concreto sí justifica antibiótico, mientras que la mayoría de dolores de garganta no.\n\n## ¿Cuándo ir a urgencias?\n\nDificultad para tragar saliva, dificultad para respirar, imposibilidad de abrir la boca, voz apagada o hinchazón importante del cuello.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. Si además hay fiebre y malestar general, en la misma visita se pueden hacer las pruebas de [influenza y COVID](/services/enfermedades-respiratorias).",
    "longDescriptionEn": "A sore throat is almost always viral, but when strep causes it, an antibiotic is needed. The rapid test is done at the clinic with a throat swab and the result is read in the same visit.\n\n## When is it worth doing?\n\n- Severe, sudden-onset sore throat\n- Fever\n- Swollen, tender neck glands\n- White patches on the tonsils\n- **No cough:** the less cold-like it is, the more likely strep becomes\n\nIf there is a cough, heavy mucus, hoarseness or pink eye, a virus is far more likely, and antibiotics do not help.\n\n## What is the test like?\n\nA swab is passed across the back of the throat. It is uncomfortable for a few seconds and can trigger a gag, but it does not hurt. If the rapid test is negative and suspicion is high, a culture can be sent to the lab to confirm.\n\n## Why does treating it matter?\n\nUntreated strep can lead to abscesses, and in some cases to rheumatic fever, which affects the heart. That is why this particular illness does justify antibiotics, while most sore throats do not.\n\n## When to go to the emergency room\n\nDifficulty swallowing saliva, difficulty breathing, inability to open the mouth, a muffled voice or significant neck swelling.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. If there is also fever and general malaise, [flu and COVID](/services/enfermedades-respiratorias) testing can be done in the same visit.",
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
    "dateModified": "2026-09-18",
    "title": "Examen de Tuberculosis (TB)",
    "titleEn": "Tuberculosis (TB) Test",
    "shortTitle": "Tuberculosis",
    "description": "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, con precios accesibles.",
    "descriptionEn": "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, with affordable pricing.",
    "longDescription": "La prueba de tuberculosis detecta si ha habido contacto con la bacteria. Hay dos formas de hacerla y la que corresponde depende de para qué la necesite.\n\n## PPD o análisis de sangre: cuál toca\n\n- **PPD (prueba cutánea):** se inyecta una pequeña cantidad bajo la piel del antebrazo y hay que volver a las 48 o 72 horas para que se lea. Es la habitual para trabajo, escuela o guardería\n- **IGRA (análisis de sangre):** una sola visita, sin necesidad de volver. **Es la que se usa para el examen médico de inmigración**, y no se altera si recibió la vacuna BCG\n\nSi le pusieron la BCG en su país de origen, dígalo: el PPD puede salir positivo por esa razón, y entonces el análisis de sangre aclara la duda.\n\n## ¿Para qué se pide?\n\n- Requisito de empleo, sobre todo en salud, educación y cuidado de personas\n- Inscripción escolar o de guardería\n- [Examen médico de inmigración I-693](/services/examenes-inmigracion)\n- Contacto con una persona con tuberculosis\n- Síntomas: tos de más de tres semanas, fiebre, sudoración nocturna, pérdida de peso\n\n## Si la prueba sale positiva\n\nPositivo significa contacto con la bacteria, **no necesariamente enfermedad activa**. La mayoría de las personas con prueba positiva tienen infección latente: no contagian y no tienen síntomas. Para distinguirlo hace falta una radiografía de tórax y una valoración. Se le indica el siguiente paso y se le entrega el reporte.\n\n## Con el PPD, tenga en cuenta\n\n- Hay que volver a las 48-72 horas, sin excepción: si no se lee en ese plazo, se repite\n- No se rasque ni se cubra la zona con vendas\n- Un poco de enrojecimiento es normal; lo que se mide es el endurecimiento, no el color\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche.",
    "longDescriptionEn": "A tuberculosis test detects whether there has been contact with the bacteria. There are two ways to do it, and which one applies depends on what you need it for.\n\n## PPD or blood test: which applies\n\n- **PPD (skin test):** a small amount is injected under the skin of the forearm and you must return in 48 to 72 hours to have it read. It is the usual one for work, school or daycare\n- **IGRA (blood test):** a single visit, with no need to return. **It is the one used for the immigration medical exam**, and it is not affected by the BCG vaccine\n\nIf you received BCG in your home country, say so: the PPD can come back positive for that reason, and the blood test clears up the doubt.\n\n## What is it requested for?\n\n- Employment requirements, especially in healthcare, education and caregiving\n- School or daycare enrollment\n- [Immigration medical exam I-693](/services/examenes-inmigracion)\n- Contact with someone who has tuberculosis\n- Symptoms: cough lasting more than three weeks, fever, night sweats, weight loss\n\n## If the test is positive\n\nPositive means contact with the bacteria, **not necessarily active disease**. Most people with a positive test have a latent infection: they are not contagious and have no symptoms. Telling them apart requires a chest X-ray and an assessment. You are told the next step and given the report.\n\n## With the PPD, keep in mind\n\n- You must return in 48 to 72 hours, without exception: if it is not read in that window, it is repeated\n- Do not scratch the area or cover it with bandages\n- Some redness is normal; what is measured is the firmness, not the color\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM.",
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
    "dateModified": "2026-09-18",
    "title": "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    "titleEn": "Sexually Transmitted Disease (STD) Testing",
    "shortTitle": "STD",
    "description": "Pruebas de ETS/STD confidenciales en Houston, TX. Resultados y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Confidential STD testing in Houston, TX. Results and treatment in Spanish, with affordable pricing.",
    "longDescription": "Las pruebas de infecciones de transmisión sexual se hacen sin cita previa y de forma confidencial. No hace falta tener síntomas para hacérselas: muchas no dan ninguno.\n\n## ¿Qué se puede analizar?\n\n- VIH\n- Sífilis\n- Clamidia y gonorrea\n- Hepatitis B y C\n- Herpes, cuando hay lesiones\n\n## ¿Por qué hacerse la prueba sin síntomas?\n\nPorque la mayoría de estas infecciones son silenciosas durante meses. La clamidia y la gonorrea, sin tratar, pueden afectar a la fertilidad; la sífilis avanza por etapas y puede pasar desapercibida durante años. Hacerse la prueba es la única manera de saberlo.\n\n## El periodo ventana\n\nUna prueba hecha demasiado pronto puede salir negativa aunque haya infección. Cada infección tiene su propio plazo de detección, así que si la exposición de riesgo fue reciente, dígalo en la consulta: eso determina cuándo tiene sentido hacer la prueba y si conviene repetirla más adelante.\n\n## ¿Cuándo conviene hacerse un chequeo?\n\n- Pareja nueva o varias parejas\n- Relación sin preservativo con alguien de quien no conoce el estado\n- Síntomas: flujo distinto, ardor al orinar, llagas, verrugas, picazón\n- Si su pareja recibió un diagnóstico\n- Durante el embarazo, como parte del control\n\n## ¿Y si sale positiva?\n\nSe le explica el resultado, se indica el tratamiento y, cuando corresponde, se plantea cómo avisar a las parejas para que también se traten. Muchas de estas infecciones se curan por completo con antibiótico, y las que no, se controlan.\n\nNingún método anticonceptivo hormonal protege de estas infecciones: para eso está el preservativo. En la consulta de [anticonceptivos](/services/anticonceptivos) se puede revisar la combinación que le convenga.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. En [promociones](/promociones) está el diagnóstico completo de ETS por $249.",
    "longDescriptionEn": "Sexually transmitted infection testing is done walk-in and confidentially. You do not need symptoms to get tested: many of these infections cause none.\n\n## What can be tested?\n\n- HIV\n- Syphilis\n- Chlamydia and gonorrhea\n- Hepatitis B and C\n- Herpes, when there are lesions\n\n## Why test without symptoms?\n\nBecause most of these infections stay silent for months. Untreated chlamydia and gonorrhea can affect fertility; syphilis progresses in stages and can go unnoticed for years. Testing is the only way to know.\n\n## The window period\n\nA test done too early can come back negative even when there is an infection. Each infection has its own detection window, so if the risk exposure was recent, say so at the visit: that determines when testing makes sense and whether it should be repeated later.\n\n## When is a check-up worthwhile?\n\n- A new partner or several partners\n- Sex without a condom with someone whose status you do not know\n- Symptoms: unusual discharge, burning when urinating, sores, warts, itching\n- If your partner received a diagnosis\n- During pregnancy, as part of prenatal care\n\n## What if it is positive?\n\nThe result is explained, treatment is set out and, where appropriate, how to notify partners so they can be treated too. Many of these infections are fully cured with antibiotics, and those that are not can be controlled.\n\nNo hormonal birth control method protects against these infections: condoms do. A [birth control](/services/anticonceptivos) visit can review the combination that suits you.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. [Promotions](/promociones) include full STD screening for $249.",
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
    "dateModified": "2026-09-18",
    "title": "Exámenes de Alcohol y Drogas",
    "titleEn": "Alcohol & Drug Testing",
    "shortTitle": "Alcohol y Drogas",
    "description": "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, con precios accesibles.",
    "descriptionEn": "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    "longDescription": "Los exámenes de alcohol y drogas se hacen en la clínica para requisitos de empleo, trámites y control médico, con atención en español y sin cita previa.\n\n## ¿Para qué se piden?\n\n- Requisitos de contratación en empresas\n- Seguimiento médico de un tratamiento\n- Trámites personales o legales que requieren un resultado\n- Control a petición del propio paciente\n\n## ¿Qué conviene preguntar antes de venir?\n\n**Pregunte a quien le pide el examen qué tipo necesita exactamente.** No todos los exámenes sirven para todo: algunos trámites exigen un formato concreto, un laboratorio determinado o un procedimiento con cadena de custodia. Traer esa información por escrito evita repetir el examen y pagarlo dos veces.\n\nSi el examen es parte de un programa regulado, como los del transporte, confirme antes con su empleador cuál es el procedimiento aceptado en su caso.\n\n## ¿Qué hay que llevar?\n\n- Identificación con foto\n- El formulario o la carta de quien solicita el examen, si existe\n- La lista de medicamentos que toma, incluidos los recetados: varios pueden influir en el resultado\n\n## Sobre el resultado\n\nUn resultado preliminar positivo suele requerir confirmación en laboratorio antes de darse por definitivo. Se le entrega el reporte para que pueda presentarlo donde se lo piden.\n\n## Si el consumo es el problema\n\nSi lo que le preocupa es su propio consumo o el de un familiar, la consulta también sirve para eso: se revisa la situación, se valoran los efectos en la salud y se orienta sobre dónde buscar tratamiento especializado.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. Si necesita además el examen físico para licencia comercial, se hace en [examen DOT](/services/examen-dot).",
    "longDescriptionEn": "Alcohol and drug testing is done at the clinic for employment requirements, paperwork and medical monitoring, with care in Spanish and walk-in.\n\n## What is it requested for?\n\n- Hiring requirements at companies\n- Medical follow-up during treatment\n- Personal or legal paperwork that requires a result\n- Testing at the patient's own request\n\n## What to ask before coming\n\n**Ask whoever is requesting the test exactly which type you need.** Not every test serves every purpose: some processes require a specific format, a designated laboratory or a chain-of-custody procedure. Bringing that information in writing avoids repeating the test and paying twice.\n\nIf the test is part of a regulated program, such as transportation programs, confirm with your employer beforehand which procedure applies in your case.\n\n## What to bring\n\n- Photo ID\n- The form or letter from whoever requested the test, if there is one\n- Your medication list, prescriptions included: several can influence the result\n\n## About the result\n\nA preliminary positive usually requires laboratory confirmation before being considered final. You are given the report so you can present it where it is required.\n\n## If consumption is the concern\n\nIf what worries you is your own use or a family member's, the visit is for that too: the situation is reviewed, health effects are assessed and you get guidance on where to find specialized treatment.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. If you also need the commercial license physical, that is done under [DOT exam](/services/examen-dot).",
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
    "dateModified": "2026-09-18",
    "title": "Electrocardiograma (EKG)",
    "titleEn": "Electrocardiogram (EKG)",
    "shortTitle": "Electrocardiograma",
    "description": "Electrocardiograma EKG en Houston, TX, rápido y sin dolor. Resultados y atención en español, con precios accesibles.",
    "descriptionEn": "Electrocardiogram EKG in Houston, TX, fast and painless. Results and care in Spanish, with affordable pricing.",
    "longDescription": "El electrocardiograma (EKG) registra la actividad eléctrica del corazón. Se hace en la clínica, dura unos minutos, no duele y no requiere preparación especial.\n\n## ¿Cuándo se hace?\n\n- Palpitaciones o sensación de que el corazón se salta un latido\n- Dolor o presión en el pecho\n- Mareo o desmayo\n- Falta de aire con el esfuerzo\n- Como parte del chequeo cuando hay presión alta, diabetes o colesterol alto\n- Antes de una cirugía menor o de iniciar ciertos tratamientos\n\n## ¿Cómo es la prueba?\n\nSe colocan unos electrodos adhesivos en el pecho, los brazos y las piernas, conectados al aparato. Hay que estar tumbado y quieto unos segundos mientras se registra. No se transmite corriente: el aparato solo escucha. Todo el procedimiento lleva unos 10 minutos.\n\n- Lleve ropa fácil de abrir por delante\n- Evite crema o loción en el pecho ese día: los electrodos se despegan\n- Si tiene mucho vello en el pecho, puede ser necesario rasurar pequeñas zonas\n\n## ¿Qué muestra y qué no?\n\nEl EKG muestra el ritmo, la frecuencia y signos de problemas en la conducción o de daño previo. Es una foto del momento: si los síntomas aparecen y desaparecen, un EKG normal no los descarta, y puede hacer falta un registro más largo o una prueba de esfuerzo. En ese caso se le indica y se le entrega el trazo para llevarlo al especialista.\n\n## Cuándo no esperar\n\n**Dolor en el pecho que no cede, se extiende al brazo o a la mandíbula, con sudor frío, náuseas o falta de aire: llame al 911.** No conduzca usted mismo ni espere a una consulta.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. Si el EKG forma parte del control de presión o diabetes, el seguimiento continúa en [condiciones crónicas](/services/condiciones-cronicas).",
    "longDescriptionEn": "An electrocardiogram (EKG) records the heart's electrical activity. It is done at the clinic, takes a few minutes, does not hurt and needs no special preparation.\n\n## When is it done?\n\n- Palpitations or a feeling that the heart skips a beat\n- Chest pain or pressure\n- Dizziness or fainting\n- Shortness of breath on exertion\n- As part of a check-up when there is high blood pressure, diabetes or high cholesterol\n- Before minor surgery or starting certain treatments\n\n## What is the test like?\n\nAdhesive electrodes are placed on the chest, arms and legs, connected to the machine. You lie still for a few seconds while it records. No current is delivered: the machine only listens. The whole procedure takes about 10 minutes.\n\n- Wear clothing that opens easily at the front\n- Avoid cream or lotion on the chest that day: the electrodes come loose\n- With a lot of chest hair, small areas may need shaving\n\n## What does it show, and what does it not?\n\nThe EKG shows rhythm, rate and signs of conduction problems or previous damage. It is a snapshot: if symptoms come and go, a normal EKG does not rule them out, and a longer recording or a stress test may be needed. In that case you are told and given the tracing to take to a specialist.\n\n## When not to wait\n\n**Chest pain that does not ease, spreads to the arm or jaw, with cold sweat, nausea or shortness of breath: call 911.** Do not drive yourself and do not wait for an appointment.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. If the EKG is part of blood pressure or diabetes monitoring, follow-up continues under [chronic conditions](/services/condiciones-cronicas).",
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
    "dateModified": "2026-09-18",
    "title": "Ultrasonido y Ecografía",
    "titleEn": "Ultrasound & Sonography",
    "shortTitle": "Ultrasonido",
    "description": "Ultrasonido y ecografía en Houston, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles.",
    "descriptionEn": "Ultrasound and sonography in Houston, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing.",
    "longDescription": "El ultrasonido usa ondas de sonido para ver los órganos por dentro. No emite radiación, no duele y se hace en la misma clínica, sin cita previa.\n\n## ¿Qué tipos de ultrasonido se hacen?\n\n- **Pélvico:** útero, ovarios y vejiga. Se usa ante dolor, sangrado irregular o sospecha de miomas o quistes\n- **Abdominal:** hígado, vesícula, riñones, páncreas y bazo\n- **De embarazo:** confirmación, edad gestacional y seguimiento\n- **Renal y de vías urinarias:** ante infecciones repetidas o sospecha de piedras\n\n## ¿Cómo me preparo?\n\nLa preparación cambia según el estudio, y equivocarse obliga a repetirlo:\n\n| Estudio | Preparación |\n| --- | --- |\n| Pélvico | Vejiga llena: beba 3 o 4 vasos de agua una hora antes y no orine |\n| Abdominal | Ayuno de 6 a 8 horas, solo agua |\n| De embarazo | Vejiga llena en el primer trimestre; después no hace falta |\n| Renal | Beber agua, sin necesidad de ayuno |\n\nPregunte al reservar qué estudio le van a hacer, porque de ahí depende si desayuna o si bebe agua.\n\n## ¿Cómo es el estudio?\n\nSe aplica un gel sobre la piel y se desliza el transductor por la zona. Dura entre 15 y 30 minutos según lo que se estudie. No duele, aunque con la vejiga llena puede resultar incómodo. Puede volver a su rutina en cuanto termina.\n\n## ¿Qué ve y qué no ve un ultrasonido?\n\nVe bien los órganos sólidos y los llenos de líquido: útero, ovarios, hígado, vesícula, riñones. No atraviesa bien el aire ni el hueso, así que no sirve para estudiar pulmón ni intestino con gas. Cuando hace falta otra técnica, el equipo médico de la clínica se lo indica y le entrega el reporte para llevarlo.\n\n## ¿Cuándo se pide con urgencia?\n\nDolor abdominal intenso y repentino, dolor en el costado con fiebre, o sangrado abundante durante el embarazo. En esos casos no espere: acuda a urgencias.\n\n## Sin cita y sin seguro\n\nSe atiende de lunes a domingo de 9 de la mañana a 9 de la noche. El ultrasonido pélvico se hace en la misma visita de [ginecología](/services/ginecologia) cuando la consulta lo requiere. En [promociones](/promociones) está el chequeo completo de la mujer con ultrasonido por $179.",
    "longDescriptionEn": "Ultrasound uses sound waves to see organs from the inside. It gives off no radiation, does not hurt and is done at the clinic itself, walk-in.\n\n## Which types of ultrasound are available?\n\n- **Pelvic:** uterus, ovaries and bladder. Used for pain, irregular bleeding or suspected fibroids or cysts\n- **Abdominal:** liver, gallbladder, kidneys, pancreas and spleen\n- **Pregnancy:** confirmation, gestational age and follow-up\n- **Kidney and urinary tract:** for repeated infections or suspected stones\n\n## How do I prepare?\n\nPreparation changes with the study, and getting it wrong means repeating it:\n\n| Study | Preparation |\n| --- | --- |\n| Pelvic | Full bladder: drink 3 or 4 glasses of water an hour before and do not urinate |\n| Abdominal | Fast 6 to 8 hours, water only |\n| Pregnancy | Full bladder in the first trimester; not needed later |\n| Kidney | Drink water, no fasting needed |\n\nAsk which study you are having when you book, because that decides whether you eat breakfast or drink water.\n\n## What is the study like?\n\nGel is applied to the skin and the transducer is moved across the area. It takes 15 to 30 minutes depending on what is being studied. It does not hurt, although a full bladder can be uncomfortable. You can return to your routine as soon as it ends.\n\n## What can and cannot an ultrasound see?\n\nIt sees solid and fluid-filled organs well: uterus, ovaries, liver, gallbladder, kidneys. It does not travel well through air or bone, so it is not used to study the lungs or gas-filled bowel. When another technique is needed, the clinic's medical team tells you and hands you the report to take with you.\n\n## When is it urgent?\n\nSudden severe abdominal pain, flank pain with fever, or heavy bleeding during pregnancy. In those cases do not wait: go to the emergency room.\n\n## Walk-in and no insurance\n\nWalk-ins are seen Monday through Sunday, 9 AM to 9 PM. The pelvic ultrasound is done in the same [gynecology](/services/ginecologia) visit when the consultation calls for it. [Promotions](/promociones) include the complete women's check-up with ultrasound for $179.",
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
    "dateModified": "2026-09-18",
    "title": "Vacunas contra la Influenza y Toxoide Tetánico",
    "titleEn": "Flu and Tetanus (Tdap) Vaccines",
    "shortTitle": "Vacunas",
    "description": "Vacunas de flu y toxoide tetánico en Houston, TX. Aplicación por personal médico en español, con precios accesibles.",
    "descriptionEn": "Flu and tetanus vaccines in Houston, TX. Administered by medical staff in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana La Caridad se aplican la vacuna contra la influenza y el toxoide tetánico, sin cita previa y con atención en español.\n\n## ¿Qué vacunas se aplican?\n\n- **Influenza (flu):** cada temporada, a partir de los 6 meses de edad\n- **Toxoide tetánico (Td/Tdap):** refuerzo cada 10 años, o antes si hay una herida sucia o profunda\n\nSi necesita otras vacunas, el equipo médico de la clínica le indica dónde ponérselas. Para el trámite de residencia, las vacunas que exige USCIS se aplican dentro del [examen médico de inmigración](/services/examenes-inmigracion).\n\n## ¿Cuándo toca la de la influenza?\n\nLo ideal es ponerla entre septiembre y octubre, antes de que suba la circulación del virus, aunque sigue siendo útil más adelante en la temporada. El [calendario de vacunación para adultos de los CDC](https://www.cdc.gov/vaccines/schedules/hcp/imz/adult.html) marca las recomendaciones por edad y condición.\n\nInteresa especialmente si tiene 65 años o más, diabetes, asma, enfermedad del corazón o del riñón, si está embarazada o si convive con un bebé menor de 6 meses.\n\n## ¿Cuándo toca el tétanos?\n\nEl refuerzo se pone cada 10 años. Se adelanta si se hace una herida profunda, sucia, con tierra u óxido, y el último refuerzo fue hace más de 5 años. Si no recuerda cuándo fue el último, dígalo: es más seguro reforzar que quedarse corto.\n\n## ¿Qué llevar?\n\n- El carné de vacunación, si lo tiene, aunque sea de otro país\n- La lista de medicamentos\n- Si tuvo una reacción a una vacuna antes, el detalle de qué pasó\n\n## ¿Qué esperar después?\n\nDolor en el brazo, un poco de enrojecimiento y a veces cansancio o febrícula durante uno o dos días. Es la respuesta normal del sistema inmune. Avise antes si tiene fiebre ese día, si está tomando tratamiento que baje las defensas, o si ha tenido una reacción alérgica grave a una vacuna: en esos casos se valora primero.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. Pregunte el costo de cada vacuna antes de aplicarla. Si viene por el chequeo general, puede aprovechar la visita: en [promociones](/promociones) está el chequeo general completo por $99.",
    "longDescriptionEn": "At Clínica Hispana La Caridad the flu vaccine and the tetanus toxoid are given, walk-in and with care in Spanish.\n\n## Which vaccines are available?\n\n- **Influenza (flu):** every season, from 6 months of age\n- **Tetanus toxoid (Td/Tdap):** a booster every 10 years, or sooner with a dirty or deep wound\n\nIf you need other vaccines, the clinic's medical team will tell you where to get them. For the residency process, the vaccines USCIS requires are given as part of the [immigration medical exam](/services/examenes-inmigracion).\n\n## When is the flu shot due?\n\nIdeally between September and October, before the virus starts circulating heavily, although it is still useful later in the season. The [CDC adult immunization schedule](https://www.cdc.gov/vaccines/schedules/hcp/imz/adult.html) sets out the recommendations by age and condition.\n\nIt matters especially if you are 65 or older, or have diabetes, asthma, heart or kidney disease, if you are pregnant, or if you live with a baby under 6 months.\n\n## When is the tetanus booster due?\n\nThe booster is given every 10 years. It is brought forward for a deep or dirty wound, with soil or rust, when the last booster was more than 5 years ago. If you do not remember when the last one was, say so: boosting is safer than falling short.\n\n## What to bring\n\n- Your vaccination card, if you have one, even from another country\n- Your medication list\n- If you have reacted to a vaccine before, the details of what happened\n\n## What to expect afterwards\n\nA sore arm, some redness and sometimes tiredness or a slight fever for a day or two. That is the normal immune response. Say beforehand if you have a fever that day, if you are on treatment that lowers your defenses, or if you have had a severe allergic reaction to a vaccine: those cases are assessed first.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. Ask the cost of each vaccine before it is given. If you are coming for a general check-up, you can use the same visit: [promotions](/promociones) include the complete general check-up for $99.",
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
    "dateModified": "2026-09-18",
    "title": "Sueros Vitaminados (Terapia IV)",
    "titleEn": "Vitamin IV Therapy",
    "shortTitle": "Sueros Vitaminados",
    "description": "Sueros vitaminados (terapia IV) en Houston, TX. Hidratación y vitaminas en español, con precios accesibles.",
    "descriptionEn": "Vitamin IV therapy in Houston, TX. Hydration and vitamins in Spanish, with affordable pricing.",
    "longDescription": "Los sueros vitaminados son hidratación intravenosa con vitaminas y minerales, aplicada por personal médico en la clínica. Se usan sobre todo cuando cuesta reponer líquidos por la boca.\n\n## ¿En qué consiste?\n\nSe coloca una vía en el brazo y el suero pasa lentamente, con el paciente sentado. La sesión dura entre 30 y 60 minutos. Antes se revisa la presión, el pulso y el motivo de la consulta, porque no todos los cuadros se resuelven con hidratación.\n\n## ¿En qué situaciones se usa?\n\n- Deshidratación tras vómitos o diarrea\n- Dificultad para beber líquidos después de una infección\n- Cansancio asociado a una deficiencia confirmada en [análisis de sangre](/services/examenes-sangre)\n- Reposición de líquidos con calor extremo o tras esfuerzo intenso\n\n## Qué no hace un suero vitaminado\n\nConviene decirlo claro: **no sustituye al tratamiento de una enfermedad ni cura una infección**. Si hay fiebre alta, dolor intenso, dificultad para respirar o deshidratación grave, lo que corresponde es una valoración médica, y a veces urgencias. El suero acompaña a un diagnóstico, no lo reemplaza.\n\nTampoco hace falta una deficiencia para hidratarse, pero si el cansancio es el síntoma principal, tiene más sentido buscar la causa con un análisis que repetir sueros.\n\n## ¿Es seguro?\n\nLo aplica personal médico y se vigila durante la sesión. Los efectos más habituales son molestia en el sitio de punción y un pequeño moretón. Avise antes si tiene enfermedad del corazón o del riñón, si está embarazada, o si ha tenido reacciones a alguna vitamina o medicamento: en esos casos la indicación cambia.\n\n## ¿Cómo prepararse?\n\n- Coma algo antes, aunque sea ligero\n- Lleve la lista de medicamentos y suplementos\n- Use ropa con manga que se pueda subir con facilidad\n- Si le cuesta que le encuentren la vena, beba agua antes\n\n## Sin cita y en español\n\nSe atiende de lunes a domingo de 9 de la mañana a 9 de la noche, sin cita previa y sin seguro médico. Pregunte el costo antes de empezar. En [promociones](/promociones) está el general de sangre con vitamina B12 por $99. Esta [guía sobre la vitamina B12](/blog/vitamina-b12-beneficios-inyecciones-houston) explica cuándo tiene sentido medirla.",
    "longDescriptionEn": "Vitamin IV drips are intravenous hydration with vitamins and minerals, given by medical staff at the clinic. They are used mainly when replacing fluids by mouth is difficult.\n\n## What does it involve?\n\nA line is placed in the arm and the fluid runs slowly while you sit. The session lasts 30 to 60 minutes. Before starting, blood pressure, pulse and the reason for the visit are checked, because not every problem is solved with hydration.\n\n## When is it used?\n\n- Dehydration after vomiting or diarrhea\n- Difficulty drinking fluids after an infection\n- Fatigue linked to a deficiency confirmed in [blood work](/services/examenes-sangre)\n- Fluid replacement in extreme heat or after heavy exertion\n\n## What a vitamin drip does not do\n\nIt is worth saying plainly: **it does not replace treatment for an illness and it does not cure an infection.** With a high fever, severe pain, difficulty breathing or severe dehydration, what is needed is a medical assessment, and sometimes the emergency room. The drip supports a diagnosis, it does not replace one.\n\nYou do not need a deficiency in order to rehydrate, but if fatigue is the main symptom, finding the cause with blood work makes more sense than repeating drips.\n\n## Is it safe?\n\nIt is given by medical staff and monitored during the session. The most common effects are discomfort at the puncture site and a small bruise. Say beforehand if you have heart or kidney disease, if you are pregnant, or if you have reacted to a vitamin or medication before: in those cases the plan changes.\n\n## How to prepare\n\n- Eat something beforehand, even if it is light\n- Bring your medication and supplement list\n- Wear sleeves that roll up easily\n- If your veins are hard to find, drink water before coming\n\n## Walk-in and in Spanish\n\nWalk-ins are seen Monday through Sunday, 9 AM to 9 PM, with no insurance needed. Ask the cost before starting. [Promotions](/promociones) include the general blood panel with vitamin B12 for $99. This [guide to vitamin B12](/blog/vitamina-b12-beneficios-inyecciones-houston) explains when it makes sense to measure it.",
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
    "dateModified": "2026-09-18",
    "title": "Suturas de Heridas",
    "titleEn": "Wound Suturing",
    "shortTitle": "Suturas",
    "description": "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    "descriptionEn": "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    "longDescription": "Las heridas que necesitan puntos se atienden sin cita previa. Cuanto antes se cierren, mejor cicatrizan y menor es el riesgo de infección.\n\n## ¿Qué heridas necesitan puntos?\n\n- Cortes con bordes separados que no se juntan solos\n- Heridas más profundas que la piel, en las que se ve grasa\n- Cortes en zonas de movimiento, como manos, dedos o articulaciones\n- Sangrado que no para tras diez minutos de presión firme\n- Heridas en la cara, donde el resultado estético importa\n\n## La ventana de tiempo\n\nLa mayoría de las heridas se cierran mejor dentro de las primeras horas. Pasado ese margen, el riesgo de infección sube y a veces conviene dejarla abierta y curarla por segunda intención. Por eso, si la herida es de las de arriba, no espere a mañana.\n\n## ¿Qué se hace en la consulta?\n\nSe limpia la herida a fondo, se anestesia la zona y se cierra con puntos, grapas o adhesivo según el tipo y la localización. Se revisa si está al día con el [toxoide tetánico](/services/vacunas) y se explica cómo cuidarla en casa.\n\n## Cuidados después\n\n- Mantenga la zona limpia y seca las primeras 24 a 48 horas\n- No moje los puntos en piscina ni bañera hasta que se retiren\n- Vuelva si aparece enrojecimiento que se extiende, calor, pus, fiebre o dolor creciente\n- Los puntos se retiran a los pocos días en la cara, y más tarde en manos y articulaciones: se le indica la fecha\n\n## Cuándo ir a urgencias\n\nSangrado que no cede con presión, herida por arma o por mordedura profunda, pérdida de sensibilidad o de movimiento, o si la herida se hizo con un objeto clavado que sigue dentro.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. El costo se le dice antes de empezar.",
    "longDescriptionEn": "Wounds that need stitches are seen walk-in. The sooner they are closed, the better they heal and the lower the risk of infection.\n\n## Which wounds need stitches?\n\n- Cuts with separated edges that do not come together on their own\n- Wounds deeper than the skin, where fat is visible\n- Cuts over moving areas, such as hands, fingers or joints\n- Bleeding that does not stop after ten minutes of firm pressure\n- Wounds on the face, where the cosmetic result matters\n\n## The time window\n\nMost wounds close best within the first few hours. Beyond that, infection risk rises and sometimes it is better to leave the wound open and let it heal from within. So if your wound is one of the above, do not wait until tomorrow.\n\n## What happens at the visit?\n\nThe wound is cleaned thoroughly, the area is numbed and it is closed with stitches, staples or adhesive depending on the type and location. Your [tetanus](/services/vacunas) status is checked and home care is explained.\n\n## Aftercare\n\n- Keep the area clean and dry for the first 24 to 48 hours\n- Do not soak the stitches in a pool or bath until they are removed\n- Come back if spreading redness, warmth, pus, fever or increasing pain appear\n- Stitches come out within a few days on the face, and later on hands and joints: you are given the date\n\n## When to go to the emergency room\n\nBleeding that does not stop with pressure, a wound from a weapon or a deep bite, loss of sensation or movement, or a wound with an object still embedded in it.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. The cost is given before starting.",
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
    "dateModified": "2026-09-18",
    "title": "Cura y Curación de Heridas",
    "titleEn": "Wound Care",
    "shortTitle": "Curación de Heridas",
    "description": "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, con precios accesibles.",
    "descriptionEn": "Wound care in Houston, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    "longDescription": "La curación de heridas cubre el seguimiento de lesiones que no cierran solas: quemaduras leves, raspones extensos, úlceras y heridas que llevan días sin mejorar.\n\n## ¿Qué se atiende?\n\n- Heridas que llevan más de una semana sin cerrar\n- Úlceras en pies y piernas, frecuentes con diabetes o mala circulación\n- Quemaduras leves y de poca extensión\n- Raspones amplios con suciedad incrustada\n- Heridas con signos de infección\n- Retirada de puntos de una sutura previa\n\n## ¿Qué se hace en cada curación?\n\nSe limpia la herida, se retira el tejido no viable cuando hace falta, se valora el aspecto y se elige el apósito adecuado. No todas las heridas van igual: unas necesitan mantenerse húmedas y otras secas. Se programa la siguiente cura y se explica cómo cuidarla entre visitas.\n\n## Heridas en el pie cuando hay diabetes\n\nMerecen atención aparte. La neuropatía hace que duelan poco, así que se detectan tarde, y la circulación reducida retrasa la cicatrización. **Una herida en el pie de una persona con diabetes se revisa siempre, aunque parezca pequeña.** El control del azúcar es parte del tratamiento, y se sigue en [condiciones crónicas](/services/condiciones-cronicas).\n\n## Señales de alarma\n\n- Enrojecimiento que se extiende alrededor de la herida\n- Calor, hinchazón o pus\n- Mal olor\n- Fiebre o escalofríos\n- Dolor que aumenta en vez de disminuir\n- Zona que se oscurece o se pone negra\n\n## Qué llevar\n\nLa lista de medicamentos, el detalle de cómo se produjo la herida y, si ya la ha curado en otro sitio, lo que le han estado aplicando.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. El costo se le dice antes de empezar.",
    "longDescriptionEn": "Wound care covers follow-up for injuries that do not close on their own: minor burns, large grazes, ulcers and wounds that have not improved in days.\n\n## What is treated?\n\n- Wounds that have not closed in over a week\n- Ulcers on feet and legs, common with diabetes or poor circulation\n- Minor, small burns\n- Large grazes with embedded dirt\n- Wounds with signs of infection\n- Removal of stitches from a previous repair\n\n## What happens at each visit?\n\nThe wound is cleaned, non-viable tissue is removed when needed, its appearance is assessed and the right dressing is chosen. Not all wounds are alike: some need to stay moist and others dry. The next visit is scheduled and home care between visits is explained.\n\n## Foot wounds when there is diabetes\n\nThese deserve separate attention. Neuropathy means they hurt little, so they are found late, and reduced circulation slows healing. **A foot wound in a person with diabetes is always checked, even if it looks small.** Blood sugar control is part of the treatment, and it is followed under [chronic conditions](/services/condiciones-cronicas).\n\n## Warning signs\n\n- Redness spreading around the wound\n- Warmth, swelling or pus\n- Bad smell\n- Fever or chills\n- Pain that increases instead of easing\n- An area turning dark or black\n\n## What to bring\n\nYour medication list, the details of how the wound happened and, if it has been treated elsewhere, what has been applied to it.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. The cost is given before starting.",
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
    "dateModified": "2026-09-18",
    "title": "Cirugías Menores",
    "titleEn": "Minor Surgery",
    "shortTitle": "Cirugías Menores",
    "description": "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    "descriptionEn": "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    "longDescription": "Los procedimientos menores se hacen en la clínica con anestesia local, sin cita previa y en una sola visita.\n\n## ¿Qué procedimientos se hacen?\n\n- Extirpación de lunares, verrugas y lesiones pequeñas de piel\n- Quistes sebáceos y lipomas superficiales\n- Extracción de cuerpos extraños bajo la piel\n- [Drenaje de abscesos](/services/drenaje-abscesos)\n- [Uñas encarnadas](/services/unas-encarnadas)\n- [Sutura de heridas](/services/suturas-heridas)\n\n## ¿Cómo es el procedimiento?\n\nSe limpia la zona, se anestesia con una inyección local y se realiza la intervención. Sentirá presión pero no dolor. Según el caso, se cierra con puntos y se cubre. La mayoría de estos procedimientos llevan entre 15 y 40 minutos, y puede irse caminando.\n\n## Antes de venir\n\n- Avise si toma anticoagulantes o aspirina a diario\n- Diga si es alérgico a la lidocaína o a algún antiséptico\n- Si la lesión le ha cambiado de tamaño, color o forma, menciónelo: eso orienta la decisión\n- Lleve ropa cómoda que deje accesible la zona\n\n## Sobre los lunares\n\nUn lunar que cambia de tamaño, de color, que tiene bordes irregulares, que pica o que sangra **se valora antes de retirarlo**, y la muestra se envía a análisis cuando corresponde. No se retiran lesiones sospechosas solo por motivos estéticos sin estudiarlas.\n\n## Cuidados después\n\nMantener la zona limpia y seca, evitar el sol directo sobre la cicatriz durante las primeras semanas y volver si aparece enrojecimiento que se extiende, pus o fiebre. Se le indica cuándo retirar los puntos.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. El costo se le dice antes de empezar.",
    "longDescriptionEn": "Minor procedures are done at the clinic under local anesthesia, walk-in and in a single visit.\n\n## Which procedures are done?\n\n- Removal of moles, warts and small skin lesions\n- Sebaceous cysts and superficial lipomas\n- Removal of foreign bodies under the skin\n- [Abscess drainage](/services/drenaje-abscesos)\n- [Ingrown toenails](/services/unas-encarnadas)\n- [Wound suturing](/services/suturas-heridas)\n\n## What is the procedure like?\n\nThe area is cleaned, numbed with a local injection and the procedure is performed. You will feel pressure but not pain. Depending on the case, it is closed with stitches and covered. Most of these take 15 to 40 minutes, and you walk out afterwards.\n\n## Before coming\n\n- Say if you take blood thinners or daily aspirin\n- Mention any allergy to lidocaine or antiseptics\n- If the lesion has changed in size, color or shape, say so: that guides the decision\n- Wear comfortable clothing that leaves the area accessible\n\n## About moles\n\nA mole that changes size or color, has irregular edges, itches or bleeds **is assessed before removal**, and the sample is sent for analysis where appropriate. Suspicious lesions are not removed for cosmetic reasons alone without being studied.\n\n## Aftercare\n\nKeep the area clean and dry, avoid direct sun on the scar for the first weeks, and come back if spreading redness, pus or fever appear. You are told when the stitches come out.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. The cost is given before starting.",
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
    "dateModified": "2026-09-18",
    "title": "Drenaje de Abscesos",
    "titleEn": "Abscess Drainage",
    "shortTitle": "Drenaje de Abscesos",
    "description": "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    "descriptionEn": "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    "longDescription": "Un absceso es una acumulación de pus bajo la piel. No se resuelve solo con antibiótico: hay que drenarlo. Se hace en la clínica, con anestesia local y sin cita previa.\n\n## ¿Cómo se reconoce?\n\n- Bulto enrojecido, caliente y doloroso al tacto\n- Se siente blando o con líquido dentro al presionar\n- Crece en pocos días\n- A veces aparece un punto amarillento en el centro\n- Puede haber fiebre si la infección avanza\n\n## ¿Por qué no basta el antibiótico?\n\nEl antibiótico no atraviesa bien la cápsula de pus. Mientras el absceso no se abre y se vacía, el dolor sigue y la infección puede extenderse. El drenaje es el tratamiento; el antibiótico, cuando hace falta, es el complemento.\n\n## ¿Cómo es el drenaje?\n\nSe anestesia la zona, se hace una incisión pequeña y se vacía el contenido. A veces se deja una gasa o un drenaje unos días para que siga saliendo. **El alivio del dolor suele ser inmediato**, y por eso muchos pacientes se arrepienten de haber esperado.\n\n## Cuidados después\n\n- Cambie el apósito como se le indique\n- Mantenga la zona limpia y seca\n- Los baños de agua tibia ayudan cuando el absceso está en una zona que lo permite\n- Vuelva a revisión en los días indicados\n- No lo apriete ni intente vaciarlo en casa: extiende la infección\n\n## No lo intente usted\n\nReventar un absceso en casa empuja la infección hacia dentro y puede dejar cicatriz. **Acuda de inmediato** si el bulto está en la cara cerca de los ojos o la nariz, si tiene fiebre alta, si el enrojecimiento se extiende con rapidez, o si tiene diabetes o defensas bajas.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. El costo se le dice antes de empezar.",
    "longDescriptionEn": "An abscess is a collection of pus under the skin. Antibiotics alone do not resolve it: it has to be drained. This is done at the clinic, under local anesthesia and walk-in.\n\n## How is it recognized?\n\n- A red, warm lump that is painful to touch\n- It feels soft or fluid-filled when pressed\n- It grows over a few days\n- Sometimes a yellowish point appears in the center\n- There may be fever if the infection advances\n\n## Why are antibiotics not enough?\n\nAntibiotics do not penetrate the pus capsule well. Until the abscess is opened and emptied, the pain continues and the infection can spread. Drainage is the treatment; antibiotics, when needed, are the complement.\n\n## What is drainage like?\n\nThe area is numbed, a small incision is made and the contents are emptied. Sometimes gauze or a drain is left in place for a few days so it keeps draining. **Pain relief is usually immediate**, which is why many patients regret having waited.\n\n## Aftercare\n\n- Change the dressing as instructed\n- Keep the area clean and dry\n- Warm water soaks help when the abscess is somewhere that allows it\n- Come back for review on the days indicated\n- Do not squeeze it or try to empty it at home: that spreads the infection\n\n## Do not try it yourself\n\nBursting an abscess at home pushes the infection inward and can leave a scar. **Seek care immediately** if the lump is on the face near the eyes or nose, if you have a high fever, if redness is spreading quickly, or if you have diabetes or a weakened immune system.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. The cost is given before starting.",
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
    "dateModified": "2026-09-18",
    "title": "Extracción de Uñas Encarnadas",
    "titleEn": "Ingrown Toenail Removal",
    "shortTitle": "Uñas Encarnadas",
    "description": "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    "descriptionEn": "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    "longDescription": "La uña encarnada se produce cuando el borde de la uña se clava en la piel. Duele, se infecta con facilidad y rara vez se arregla sola. Se trata en la clínica con anestesia local, sin cita previa.\n\n## ¿Cómo empieza?\n\n- Dolor en el borde del dedo, casi siempre el dedo gordo del pie\n- Enrojecimiento e hinchazón alrededor de la uña\n- Molestia al ponerse el zapato o al caminar\n- Si se infecta: pus, calor y dolor pulsátil\n\n## ¿Por qué aparece?\n\nCortar la uña demasiado corta o redondeando las esquinas, zapatos estrechos o puntiagudos, golpes repetidos al correr, sudoración abundante, o simplemente una forma de uña que tiende a curvarse.\n\n## ¿Cómo se trata?\n\nSe anestesia el dedo y se retira la porción de uña que se está clavando. El procedimiento lleva pocos minutos y el alivio es inmediato. Cuando el problema se repite muchas veces en el mismo dedo, se puede tratar la matriz de esa porción para que no vuelva a crecer hacia dentro.\n\n## Cuidados después\n\n- Mantenga el pie limpio y seco\n- Use calzado amplio unos días, sin presión sobre el dedo\n- Baños de agua tibia si se le indican\n- Vuelva si aparece pus, enrojecimiento que se extiende o fiebre\n\n## Cómo evitar que vuelva\n\nCorte la uña recta, sin redondear las esquinas, y no la deje demasiado corta. Use calzado con espacio suficiente para los dedos. Si hace deporte, revise que el zapato no le quede justo de largo.\n\n**Si tiene diabetes o mala circulación, no se trate el dedo en casa.** Cualquier herida en el pie necesita valoración: se revisa en [curación de heridas](/services/curacion-heridas).\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. El costo se le dice antes de empezar.",
    "longDescriptionEn": "An ingrown toenail happens when the edge of the nail digs into the skin. It hurts, it gets infected easily and it rarely sorts itself out. It is treated at the clinic under local anesthesia, walk-in.\n\n## How does it start?\n\n- Pain at the edge of the toe, almost always the big toe\n- Redness and swelling around the nail\n- Discomfort when putting on a shoe or walking\n- If it gets infected: pus, warmth and throbbing pain\n\n## Why does it happen?\n\nCutting the nail too short or rounding the corners, narrow or pointed shoes, repeated impact from running, heavy sweating, or simply a nail shape that tends to curve.\n\n## How is it treated?\n\nThe toe is numbed and the section of nail digging in is removed. The procedure takes a few minutes and the relief is immediate. When the problem keeps recurring on the same toe, the nail matrix for that section can be treated so it does not grow inward again.\n\n## Aftercare\n\n- Keep the foot clean and dry\n- Wear roomy shoes for a few days, with no pressure on the toe\n- Warm water soaks if instructed\n- Come back if pus, spreading redness or fever appear\n\n## How to stop it coming back\n\nCut the nail straight across, without rounding the corners, and do not leave it too short. Wear shoes with enough room for your toes. If you play sports, check that the shoe is not tight in length.\n\n**If you have diabetes or poor circulation, do not treat the toe at home.** Any foot wound needs assessment: it is reviewed under [wound care](/services/curacion-heridas).\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. The cost is given before starting.",
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
    "dateModified": "2026-09-18",
    "title": "Farmacia",
    "titleEn": "Pharmacy",
    "shortTitle": "Farmacia",
    "description": "Entrega de los medicamentos indicados en tu consulta y productos de venta libre, dentro de la clínica y en español.",
    "descriptionEn": "The medication indicated at your visit plus over-the-counter products, inside the clinic and in Spanish.",
    "longDescription": "En Clínica Hispana La Caridad se entregan los medicamentos indicados en la propia consulta y productos de venta libre, para que no tenga que hacer un segundo viaje después de la visita.\n\n## ¿Cómo funciona?\n\nCuando el tratamiento se indica durante la consulta, se le entrega ahí mismo lo que necesita empezar, con las instrucciones explicadas en español: cuánto, cada cuánto, durante cuántos días y con o sin comida.\n\n## ¿Qué se entrega?\n\n- Los medicamentos indicados en su consulta de ese día\n- Productos de venta libre: analgésicos, antihistamínicos, antiácidos, sueros de rehidratación oral\n- Material de curación: gasas, vendas, antisépticos\n\nSi su tratamiento requiere un medicamento que no se maneja aquí, se le entrega la receta para que la surta donde prefiera.\n\n## Pregunte siempre estas cuatro cosas\n\nSalir de la consulta con el medicamento no sirve de nada si no queda claro cómo tomarlo:\n\n1. ¿Para qué es exactamente y qué debo notar?\n2. ¿Cuántos días lo tomo, y qué hago si se me olvida una toma?\n3. ¿Puedo tomarlo con lo que ya tomo?\n4. ¿Qué efecto me obliga a suspenderlo y volver?\n\n## Traiga su lista\n\nLleve siempre la lista de lo que toma, incluidos suplementos y remedios naturales. Muchas interacciones vienen justo de ahí, de lo que el paciente no considera \"medicina\" y por eso no menciona.\n\n## Sobre los antibióticos\n\nTermine el tratamiento completo aunque se sienta mejor a los dos días, y no guarde sobras para la próxima vez. Un antibiótico que sobró de otra ocasión casi nunca es el correcto para el cuadro nuevo.\n\n## Sin cita y sin seguro\n\nDe lunes a domingo, de 9 de la mañana a 9 de la noche. Pregunte el costo antes de la consulta.",
    "longDescriptionEn": "At Clínica Hispana La Caridad the medication indicated during your visit is handed to you there, along with over-the-counter products, so you do not have to make a second trip after the appointment.\n\n## How does it work?\n\nWhen treatment is set out during the visit, you are given what you need to start right there, with the instructions explained: how much, how often, for how many days and with or without food.\n\n## What is provided?\n\n- The medication indicated at your visit that day\n- Over-the-counter products: pain relievers, antihistamines, antacids, oral rehydration solutions\n- Wound care supplies: gauze, bandages, antiseptics\n\nIf your treatment needs a medication not handled here, you are given the prescription to fill wherever you prefer.\n\n## Always ask these four things\n\nLeaving with the medication is no use if how to take it is unclear:\n\n1. What exactly is it for, and what should I notice?\n2. How many days do I take it, and what do I do if I miss a dose?\n3. Can I take it with what I already take?\n4. What effect means I should stop and come back?\n\n## Bring your list\n\nAlways bring a list of what you take, supplements and natural remedies included. Many interactions come from exactly there, from what patients do not think of as \"medicine\" and so do not mention.\n\n## About antibiotics\n\nFinish the full course even if you feel better after two days, and do not keep leftovers for next time. An antibiotic left over from another occasion is almost never the right one for a new problem.\n\n## Walk-in and no insurance\n\nMonday through Sunday, 9 AM to 9 PM. Ask the cost before your visit.",
    "icon": "Syringe",
    "image": "/images/services/farmacia.webp",
    "category": "tratamientos",
    "keywords": [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "medicamentos en la clinica houston"
    ],
    "keywordsEn": [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "medication at the clinic houston"
    ],
    "features": [
      "Medicamentos de tu consulta al terminar",
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
      "Chequeo general por $179 menos de lo habitual: $99 en lugar de $250. Cubre el examen general de sangre, la prueba A1C de azúcar promedio, el examen general de orina y la consulta médica sin costo. Sin cita previa y en español.",
    blurbEn:
      "A general check-up for $179 less than usual: $99 instead of $250. It covers general blood work, the A1C average-sugar test, a general urine test and the medical visit at no cost. Walk-in and in Spanish.",
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
      "Revisión completa de salud femenina por $179, frente a los $300 que costaría por separado. Incluye ultrasonido pélvico, Papanicolaou, examen de orina y la consulta médica sin costo. Sin cita previa y con todo explicado en español.",
    blurbEn:
      "A complete women's health review for $179, against the $300 it would cost separately. It includes a pelvic ultrasound, Pap smear, urine test and the medical visit at no cost. Walk-in, with everything explained in Spanish.",
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

