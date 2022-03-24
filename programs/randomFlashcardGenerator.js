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
    'A-P': 'antero posterior',
    ARDS: 'acute respiratory destress syndrome',
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
    CaO2: 'total arterial oxygen content',
    'C(a-v)O2': 'arterial venous oxygen content',
    CBC: 'complete blood count',
    CCU: 'coronary care unit',
    CGA: 'Compressed Gas Association',
    CHF: 'congestive heart failure',
    CI: 'cardiac index',
    CL: 'lung compliance',
    'Cl-': 'chloride ion',
    CMV: 'continuous mechanical ventilation',
    CNS: 'central nervous system',
    CO: 'carbon monoxide',
    CO2: 'carbon dioxide',
    COPD: 'chronic obstructive pulmonary disease',
    CPAP: 'continuous positive airway pressure',
    CPR: 'cardiopulmonary resuscitation',
    CPT: 'chest physical therapy',
    CT: 'computed tomography',
    CVO2: 'total oxygen content of mixed venous blood',
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
    FENO: 'fractional concentration of exhaled nitric oxide',
    FET: 'forced expiratory technique',
    'FEV0.5': 'forced expiratory volume in 0.5 seconds',
    FEV1: 'forced expiratory volume in 1 second',
    FEV3: 'forced expiratory volume in 3 seconds',
    FEV6: 'forced expiratory volume in 6 seconds',
    FIO2: 'fractional inspired oxygen concentration',
    Fr: 'French',
    FRC: 'functional residual capacity',
    FVC: 'forced vital capacity',
    GI: 'gastrointestinal',
    GOLD: 'Global Initiative for Chronic Obstructive Lung Disease',
    Hb: 'hemoglobin',
    HBCO: 'carboxyhemoglobin',
    HBO: 'hyperbaric oxygen',
    HbO2: 'oxyhemoglobin',
    HCO3: 'bicarbonate',
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
    'I:E': 'inspiratory:expiratory (ratio)',
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
    'K+': 'potassium ion',
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
    'Na+': 'sodium ion',
    NAEPP: 'National Asthma Education Prevention Program',
    NBRC: 'National Board for Respiratory Care',
    NG: 'nasogastric',
    NIF: 'negative inspiratory force',
    NO: 'nitric oxide',
    NPPV: 'noninvasive positive pressure ventilation',
    NSAID: 'nonsteroidal antiinflammatory drug',
    O2: 'oxygen',
    OD: 'outside diameter',
    'P-A': 'postero anterior',
    'P(A-a)O2': 'alveolar arterial oxygen pressure difference',
    PAC: 'premature atrial contraction',
    PaCO2: 'partial pressure of arterial carbon dioxide',
    PALS: 'pediatric advanced life support',
    PAO2: 'partial pressure of alveolar oxygen',
    PaO2: 'partial pressure of arterial oxygen',
    PAP: 'pulmonary artery pressure',
    PAW: 'mean airway pressure',
    PAWP: 'pulmonary artery wedge pressure',
    PB: 'barometric pressure',
    PCO2: 'partial pressure of carbon dioxide',
    PCV: 'pressure control ventilation',
    PCWP: 'pulmonary capillary wedge pressure',
    PDA: 'patent ductus arteriosus',
    PE: 'pulmonary embolism',
    PEA: 'pulseless electrical activity',
    PEEP: 'positive end expiratory pressure',
    PEF: 'peak expiratory flow',
    PEP: 'positive expiratory pressure',
    PET: 'positron emission tomography',
    PETCO2: 'end tidal carbon dioxide tension',
    PFC: 'persistent fetal circulation',
    PFT: 'pulmonary function test',
    PIF: 'peak inspiratory flow',
    PIP: 'peak inspiratory pressure',
    pK: 'dissociation constant (6.1)',
    PO2: 'partial pressure of oxygen',
    POC: 'point of care',
    Ppb: 'parts per billion',
    PPHN: 'persistent pulmonary hypertension of the newborn',
    ppm: 'parts per billion',
    PROM: 'premature rupture of membranes',
    psi: 'pounds per square inch',
    psig: 'pounds per square inch gauge',
    PSV: 'pressure support ventilation',
    PT: 'prothrombin time',
    PtcPo2: 'transcutaneous PO2',
    PTT: 'partial thromboplastin time',
    PVC: 'premature ventricular contraction',
    PvO2: 'partial pressure of oxygen in mixed venous blood',
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
    SaO2: 'hemoglobin saturation with oxygen, arterial blood',
    SARS: 'sever acute respiratory syndrome',
    SBT: 'spontaneous breathing trial',
    SGA: 'small for gestational age',
    SIDS: 'sudden infant death syndrome',
    SIMV: 'synchronized intermittent mandatory ventilation',
    SMI: 'sustained max inspiration',
    'SMI(device)': 'soft mist inhaler',
    SPAG: 'small particle aerosol generator',
    SpO2: 'pulse oximetry',
    SV: 'stroke volume',
    SvO2: 'hemoglobin saturation with oxygen, mixed',
    SVR: 'systemic vascular resistance',
    TB: 'tuberculosis',
    TDP: 'therapist driven protocol',
    TLC: 'total lung capacity',
    UAC: 'umbilical artery catheter',
    USN: 'ultrasonic nebulizer',
    V̇A: 'alveolar minute volume',
    VAP: 'ventilator associated pneumonia',
    VC: 'vital capacity of volume control (ventilation)',
    VD: 'dead space volume',
    V̇E: 'minute volume',
    VO2: 'oxygen consumption per unit of time',
    'V/Q': 'ventilation perfusion ratio',
    VT: 'tidal volume',
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
    
    for (let key in obj) {
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