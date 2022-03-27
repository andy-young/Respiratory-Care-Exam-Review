// The object is a dictionary of common medical abbreviations.
// The next iteration will be a random flash-card generator.

const abbreviations = {
    ABG: 'arterial blood gas',
    'A/C': 'assist control',
    ACLS: 'advanced cardiac life support',
    ADH: 'antidiuretic hormone',
    AED: 'automated external defibrillator',
    AGA: 'appropiate for gestational age',
    AHI: 'apnea hypopnea index',
    AIDS: 'acquired immunodeficiency syndrome',
    'A-P': 'antero-posterior',
    ARDS: 'acute respiratory distress syndrome',
    atm: 'standard atmosphere',
    AV: 'atroventricular',
    BAL: 'bronchoalveolar lavage',
    BAN: 'breath actuated nebulizer',
    BD: 'base deficit',
    BE: 'base excess',
    'Bi-PAP': 'bilevel positive airway pressure',
    BPD: 'bronchopulmonary dysplasia',
    BSA: 'body surface area',
    BTPS: 'body temperature and pressure saturation',
    BUN: 'blood urea nitrogen',
    Ca: 'calcium',
    'CaO₂': 'total arterial oxygen content',
    'C(a-v)O₂': 'arterial venous oxygen content',
    CBC: 'complete blood count',
    CCU: 'coronary care unit',
    CGA: 'Compressed Gas Association',
    CHF: 'congestive heart failure',
    CI: 'cardiac index',
    CL: 'lung compliance',
    'Cl⁻': 'chloride ion',
    CMV: 'continuous mechanical ventilation',
    CNS: 'central nervous system',
    CO: 'carbon monoxide',
    'CO₂': 'carbon dioxide',
    COPD: 'chronic obstructive pulmonary disease',
    CPAP: 'continuous positive airway pressure',
    CPR: 'cardiopulmonary resuscitation',
    CPT: 'chest physical therapy',
    CT: 'computed tomography',
    'CVO₂': 'total oxygen content of mixed venous blood',
    CVP: 'central venous pressure',
    DIC: 'disseminated intravascular coagulation',
    DISS: 'Diameter Index Safety System',
    DKA: 'diabetic ketoacidosis',
    DL: 'diffusion capacity of the lung',
    DLCO: 'carbon monoxide diffusion capacity',
    DNR: 'do not resuscitate',
    DPG: 'diphosphoglycerate',
    DPI: 'dry powder inhaler',
    EBUS: 'endobronchial ultrasound',
    ECG: 'electrocardiogram',
    ECMO: 'extracorporeal membrane oxygenation',
    EEG: 'electroencephalogram',
    EIA: 'exercise induced asthma',
    ENB: 'electromagnetic navigation bronchoscopy',
    EMS: 'emergency medical service',
    EPAP: 'expiratory positive airway pressure',
    ERV: 'expiratory reserve volume',
    ET: 'endotracheal',
    ETC: 'esophageal tracheal combitube',
    'FEF200-1200': 'forced expiratory flow after first 200 mL',
    'FEF25%-75%': 'forced expiratory flow, midexpiratory phase',
    'FₑNO': 'fractional concentration of exhaled nitric oxide',
    FET: 'forced expiratory technique',
    'FEV0.5': 'forced expiratory volume in 0.5 seconds',
    'FEV₁': 'forced expiratory volume in 1 second',
    'FEV₃': 'forced expiratory volume in 3 seconds',
    'FEV₆': 'forced expiratory volume in 6 seconds',
    'FiO₂': 'fractional inspired oxygen concentration',
    Fr: 'French',
    FRC: 'functional residual capacity',
    FVC: 'forced vital capacity',
    GI: 'gastrointestinal',
    GOLD: 'Global Initiative for Chronic Obstructive Lung Disease',
    Hb: 'hemoglobin',
    HbCO: 'carboxyhemoglobin',
    HBO: 'hyperbaric oxygen',
    'HbO₂': 'oxyhemoglobin',
    'HCO₃⁻': 'bicarbonate',
    Hct: 'hematocrit',
    HEPA: 'high efficiency particulate air (filter)',
    HFCWO: 'high efficiency chest wall oscillation',
    HFO: 'high frequency oscillation',
    HFT: 'high flow therapy',
    HFV: 'high frequency ventilation',
    HHN: 'handheld nebulizer',
    HIV: 'human immunodeficiency virus',
    HMD: 'hyaline membrane disease',
    HME: 'heat moisture exchanger',
    IBW: 'ideal body weight',
    IC: 'inspiratory capacity',
    ICP: 'intracranial pressure',
    ICU: 'intensive care unit',
    ID: 'internal diameter',
    'I:E': 'inspiratory:expiratory ratio',
    INH: 'isoniazid',
    IO: 'intraosseous infusion',
    IPAP: 'inspiratory positive airway pressure',
    IPPB: 'intermittent positive pressure breathing',
    IPV: 'intrapulmonary percussive ventilation',
    IRV: 'inspiratory reserve volume',
    IT: 'implantation tested',
    IV: 'intravenous',
    J: 'joules',
    JVD: 'jugular venous distention',
    'K⁺': 'potassium ion',
    LGA: 'large for gestational age',
    LMA: 'laryngeal mask airway',
    LTB: 'laryngotracheobronchitis',
    LVEDP: 'left ventricular end diastolic pressure',
    LVF: 'left ventricular failure',
    MAP: 'mean airway pressure',
    Mc: 'megacycle',
    mcg: 'microgram',
    MDI: 'metered dose inhaler',
    MEP: 'max expiratory pressure',
    MET: 'medical emergency team',
    MI: 'myocardial infarction',
    MIP: 'max inspiratory pressure',
    MPAP: 'mean pulmonary artery pressure',
    MRI: 'magnetic resonance imaging',
    MSAP: 'mean systemic arterial pressure',
    MVV: 'max voluntary ventilation',
    'Na⁺': 'sodium ion',
    NAEPP: 'National Asthma Education Prevention Program',
    NBRC: 'National Board for Respiratory Care',
    NG: 'nasogastric',
    NIF: 'negative inspiratory force',
    NO: 'nitric oxide',
    NPPV: 'noninvasive positive pressure ventilation',
    NSAID: 'nonsteroidal antiinflammatory drug',
    'O₂': 'oxygen',
    OD: 'outside diameter',
    'P-A': 'postero-anterior',
    'P(A-a)O₂': 'alveolar arterial oxygen pressure difference',
    PAC: 'premature atrial contraction',
    'PaCO₂': 'partial pressure of arterial carbon dioxide',
    PALS: 'pediatric advanced life support',
    'PAO₂': 'partial pressure of alveolar oxygen',
    'PaO₂': 'partial pressure of arterial oxygen',
    PAP: 'pulmonary artery pressure',
    PAW: 'mean airway pressure',
    PAWP: 'pulmonary artery wedge pressure',
    PB: 'barometric pressure',
    'PCO₂': 'partial pressure of carbon dioxide',
    PCV: 'pressure control ventilation',
    PCWP: 'pulmonary capillary wedge pressure',
    PDA: 'patent ductus arteriosus',
    PE: 'pulmonary embolism',
    PEA: 'pulseless electrical activity',
    PEEP: 'positive end expiratory pressure',
    PEF: 'peak expiratory flow',
    PEP: 'positive expiratory pressure',
    PET: 'positron emission tomography',
    'PETCO₂': 'end tidal carbon dioxide tension',
    PFC: 'persistent fetal circulation',
    PFT: 'pulmonary function test',
    PIF: 'peak inspiratory flow',
    PIP: 'peak inspiratory pressure',
    pK: 'dissociation constant (6.1)',
    'PO₂': 'partial pressure of oxygen',
    POC: 'point of care',
    Ppb: 'parts per billion',
    PPHN: 'persistent pulmonary hypertension of the newborn',
    ppm: 'parts per million',
    PROM: 'premature rupture of membranes',
    psi: 'pounds per square inch',
    psig: 'pounds per square inch gauge',
    PSV: 'pressure support ventilation',
    PT: 'prothrombin time',
    'PtcPO₂': 'transcutaneous PO₂',
    PTT: 'partial thromboplastin time',
    PVC: 'premature ventricular contraction',
    'PvO₂': 'partial pressure of oxygen in mixed venous blood',
    PVR: 'pulmonary vascular resistance',
    QS: 'shunted blood',
    QT: 'cardiac output (L/min)',
    RBC: 'red blood cell',
    RCP: 'respiratory care practitioner',
    RDS: 'respiratory distress syndrome',
    ROP: 'retinopathy of prematurity',
    RR: 'respiratory rate',
    RRT: 'rapid response team',
    RSV: 'respiratory syncytial virus',
    RV: 'residual volume',
    SA: 'sinoatrial',
    'SaO₂': 'arterial hemoglobin oxygen saturation',
    SARS: 'sever acute respiratory syndrome',
    SBT: 'spontaneous breathing trial',
    SGA: 'small for gestational age',
    SIDS: 'sudden infant death syndrome',
    SIMV: 'synchronized intermittent mandatory ventilation',
    SMI: 'sustained max inspiration',
    'SMI (device)': 'soft mist inhaler',
    SPAG: 'small particle aerosol generator',
    'SpO₂': 'pulse oximetry',
    SV: 'stroke volume',
    'SvO₂': 'mixed hemoglobin oxygen saturation',
    SVR: 'systemic vascular resistance',
    TB: 'tuberculosis',
    TDP: 'therapist driven protocol',
    TLC: 'total lung capacity',
    UAC: 'umbilical artery catheter',
    USN: 'ultrasonic nebulizer',
    V̇A: 'alveolar minute volume',
    VAP: 'ventilator associated pneumonia',
    VC: 'vital capacity of volume control (ventilation)',
    Vᴰ: 'dead space volume',
    V̇E: 'minute volume',
    'V̇O₂': 'oxygen consumption per unit of time',
    'V/Q': 'ventilation perfusion ratio',
    'Vₜ': 'tidal volume',
    VTG: 'thoracic gas volume',
    WBC: 'white blood cell'
};

function ding() {
  var audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
  return audio.play();
}

function evilLaugh() {
  var audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg');
  return audio.play();
}

function randomProperty(obj) {
    const keys = Object.keys(obj);
    const abbr = keys[ keys.length * Math.random() << 0 ];
    const definition = obj[abbr];
    return { abbr, definition };
};

function abbrTester(obj) {
    let correct = 0;
    let wrong = 0;
    let count = 0;
    let cardCount = Object.keys(obj).length;

    while (cardCount > 0) {
        const card = randomProperty(obj);
        const abbr = card.abbr;
        const definition = card.definition;
        
        console.log(definition); // <============ CHEAT! =============>
        
        const ans = prompt(abbr);
        
        if (ans == 'break') return evilLaugh();

        if (ans == definition) {
            // ding();
            correct++;
            delete obj[abbr];
            cardCount--;
        } else {
            window.alert("WRONG! 😪");
            wrong++;
        }
        console.log(`correct: ${correct} \n wrong: ${wrong} \n remaining: ${cardCount}`);
    }
        
    return console.log('close fxn');
}

abbrTester(abbreviations);